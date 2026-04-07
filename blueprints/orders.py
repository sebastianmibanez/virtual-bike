import os
import json
import hmac
import hashlib
import logging
from datetime import datetime, timezone
from flask import Blueprint, request, jsonify
from app_db import get_db, db_execute
from blueprints.auth import jwt_required

orders_bp = Blueprint('orders', __name__)
logger = logging.getLogger(__name__)

MP_ACCESS_TOKEN = os.getenv('MP_ACCESS_TOKEN', '')
MP_WEBHOOK_SECRET = os.getenv('MP_WEBHOOK_SECRET', '')
APP_BASE_URL = os.getenv('APP_BASE_URL', 'http://localhost:5000')
USE_SANDBOX = os.getenv('USE_SANDBOX', 'true').lower() == 'true'


def row_to_dict(row):
    if row is None:
        return None
    return dict(row)


@orders_bp.route('/api/checkout/create-preference', methods=['POST'])
def create_preference():
    if not MP_ACCESS_TOKEN:
        return jsonify({'ok': False, 'error': 'Pagos no configurados aún'}), 503

    data = request.get_json(silent=True) or {}
    items_req = data.get('items', [])
    customer = data.get('customer', {})

    customer_name = str(customer.get('name', '')).strip()[:100]
    customer_email = str(customer.get('email', '')).strip()[:254]
    customer_phone = str(customer.get('phone', '')).strip()[:20]

    if not items_req or not customer_name or not customer_email:
        return jsonify({'ok': False, 'error': 'items, customer.name y customer.email son requeridos'}), 400

    validated_items = []
    total = 0

    with get_db() as conn:
        for item in items_req:
            try:
                product_id = int(item['product_id'])
                quantity = max(1, int(item.get('quantity', 1)))
            except (KeyError, ValueError, TypeError):
                return jsonify({'ok': False, 'error': 'Formato de items inválido'}), 400

            row = db_execute(conn,
                'SELECT id, name, price, stock, active FROM products WHERE id = %s',
                (product_id,)).fetchone()
            if not row or not row['active']:
                return jsonify({'ok': False, 'error': f'Producto {product_id} no disponible'}), 400
            if row['stock'] < quantity:
                return jsonify({'ok': False, 'error': f'Stock insuficiente para {row["name"]}'}), 400

            validated_items.append({
                'product_id': product_id,
                'name': row['name'],
                'price': row['price'],
                'quantity': quantity,
            })
            total += row['price'] * quantity

    # Build MercadoPago preference
    try:
        import mercadopago
        sdk = mercadopago.SDK(MP_ACCESS_TOKEN)

        mp_items = [{
            'id': str(item['product_id']),
            'title': item['name'],
            'quantity': item['quantity'],
            'unit_price': item['price'],
            'currency_id': 'CLP',
        } for item in validated_items]

        preference_data = {
            'items': mp_items,
            'payer': {'name': customer_name, 'email': customer_email},
            'back_urls': {
                'success': f'{APP_BASE_URL}/checkout/success',
                'failure': f'{APP_BASE_URL}/checkout/failure',
                'pending': f'{APP_BASE_URL}/checkout/pending',
            },
            'auto_return': 'approved',
            'notification_url': f'{APP_BASE_URL}/api/checkout/webhook',
            'statement_descriptor': 'VeloShop',
        }

        result = sdk.preference().create(preference_data)
        preference = result['response']

        if 'id' not in preference:
            logger.error(f'MP error: {preference}')
            return jsonify({'ok': False, 'error': 'Error al crear preferencia de pago'}), 502

        mp_preference_id = preference['id']
        redirect_url = preference.get('sandbox_init_point' if USE_SANDBOX else 'init_point', '')

    except Exception as e:
        logger.error(f'MercadoPago error: {e}')
        return jsonify({'ok': False, 'error': 'Error al conectar con MercadoPago'}), 502

    # Save order
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        cur = db_execute(conn, '''
            INSERT INTO orders (mp_preference_id, status, customer_name, customer_email,
                                customer_phone, total, items_json, created_at, updated_at)
            VALUES (%s, 'pending', %s, %s, %s, %s, %s, %s, %s)
        ''', (mp_preference_id, customer_name, customer_email, customer_phone,
              total, json.dumps(validated_items), now, now))

        # Set external_reference to order ID — update preference
        order_id = cur.lastrowid

    return jsonify({
        'ok': True,
        'preference_id': mp_preference_id,
        'redirect_url': redirect_url,
        'order_id': order_id,
    })


@orders_bp.route('/api/checkout/webhook', methods=['POST'])
def mp_webhook():
    # Verify HMAC signature — required when secret is configured
    if MP_WEBHOOK_SECRET:
        sig_header = request.headers.get('X-Signature', '')
        ts = ''
        received_hash = ''
        for part in sig_header.split(','):
            part = part.strip()
            if part.startswith('ts='):
                ts = part[3:]
            elif part.startswith('v1='):
                received_hash = part[3:]

        if not received_hash:
            logger.warning('Webhook received without X-Signature — rejected')
            return jsonify({'ok': False}), 401

        data_id = request.args.get('data.id', '') or (request.get_json(silent=True) or {}).get('data', {}).get('id', '')
        manifest = f'id:{data_id};request-id:{request.headers.get("X-Request-Id","")};ts:{ts};'
        expected = hmac.new(MP_WEBHOOK_SECRET.encode(), manifest.encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(expected, received_hash):
            logger.warning(f'Webhook HMAC mismatch — possible fraud attempt from {request.remote_addr}')
            return jsonify({'ok': False}), 401
    else:
        logger.warning('MP_WEBHOOK_SECRET not configured — skipping signature check (INSECURE)')

    payload = request.get_json(silent=True) or {}
    topic = payload.get('type') or request.args.get('topic', '')
    if topic not in ('payment', 'merchant_order'):
        return jsonify({'ok': True})

    payment_id = (payload.get('data') or {}).get('id') or request.args.get('id')
    if not payment_id:
        return jsonify({'ok': True})

    try:
        import mercadopago
        sdk = mercadopago.SDK(MP_ACCESS_TOKEN)
        payment_info = sdk.payment().get(payment_id)
        payment = payment_info['response']
        status = payment.get('status', '')
        preference_id = payment.get('preference_id', '')
        mp_payment_id = str(payment.get('id', ''))
    except Exception as e:
        logger.error(f'Webhook payment fetch error: {e}')
        return jsonify({'ok': True})

    if not preference_id:
        return jsonify({'ok': True})

    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        order = db_execute(conn,
            'SELECT id, status, items_json FROM orders WHERE mp_preference_id = %s',
            (preference_id,)).fetchone()
        if not order:
            return jsonify({'ok': True})

        order = row_to_dict(order)
        if order['status'] == 'approved':
            return jsonify({'ok': True})  # idempotent

        new_status = {
            'approved': 'approved',
            'rejected': 'rejected',
            'cancelled': 'cancelled',
        }.get(status, 'pending')

        db_execute(conn, '''
            UPDATE orders SET status = %s, mp_payment_id = %s, updated_at = %s
            WHERE id = %s
        ''', (new_status, mp_payment_id, now, order['id']))

        if new_status == 'approved':
            items = json.loads(order['items_json'])
            for item in items:
                db_execute(conn, '''
                    UPDATE products SET stock = MAX(0, stock - %s), updated_at = %s
                    WHERE id = %s
                ''', (item['quantity'], now, item['product_id']))

    return jsonify({'ok': True})


@orders_bp.route('/api/orders/<preference_id>/status')
def order_status(preference_id):
    with get_db() as conn:
        row = db_execute(conn,
            'SELECT id, status FROM orders WHERE mp_preference_id = %s',
            (preference_id,)).fetchone()
    if not row:
        return jsonify({'ok': False, 'error': 'Orden no encontrada'}), 404
    return jsonify({'ok': True, 'status': row['status'], 'order_id': row['id']})


# ── Admin ─────────────────────────────────────────────────────

@orders_bp.route('/api/admin/orders')
@jwt_required
def admin_list_orders():
    try:
        page = max(1, int(request.args.get('page', 1)))
    except ValueError:
        page = 1
    per_page = 20
    offset = (page - 1) * per_page
    status_filter = request.args.get('status', '')

    conditions = []
    params = []
    if status_filter:
        conditions.append('status = %s')
        params.append(status_filter)

    where = ('WHERE ' + ' AND '.join(conditions)) if conditions else ''

    with get_db() as conn:
        total_row = db_execute(conn, f'SELECT COUNT(*) as c FROM orders {where}', params).fetchone()
        total = total_row['c'] if isinstance(total_row, dict) else total_row[0]
        rows = db_execute(conn,
            f'SELECT * FROM orders {where} ORDER BY created_at DESC LIMIT %s OFFSET %s',
            params + [per_page, offset]).fetchall()

    return jsonify({'ok': True, 'orders': [row_to_dict(r) for r in rows], 'total': total})


@orders_bp.route('/api/admin/orders/<int:order_id>/status', methods=['PUT'])
@jwt_required
def update_order_status(order_id):
    data = request.get_json(silent=True) or {}
    status = data.get('status', '')
    if status not in ('pending', 'approved', 'rejected', 'cancelled'):
        return jsonify({'ok': False, 'error': 'Estado inválido'}), 400
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        db_execute(conn, 'UPDATE orders SET status = %s, updated_at = %s WHERE id = %s',
                   (status, now, order_id))
    return jsonify({'ok': True})
