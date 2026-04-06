import re
from collections import defaultdict
from datetime import datetime, timezone
import time
from flask import Blueprint, request, jsonify
from app_db import get_db, db_execute
from blueprints.auth import jwt_required

contact_bp = Blueprint('contact', __name__)

EMAIL_REGEX = re.compile(r'^[^\s@]+@[^\s@]+\.[^\s@]+$')
_rate_store: dict = defaultdict(list)
RATE_LIMIT = 5
RATE_WINDOW = 3600


def _check_rate(ip: str) -> bool:
    now = time.time()
    _rate_store[ip] = [t for t in _rate_store[ip] if now - t < RATE_WINDOW]
    if len(_rate_store[ip]) >= RATE_LIMIT:
        return False
    _rate_store[ip].append(now)
    return True


@contact_bp.route('/api/contact', methods=['POST'])
def submit_contact():
    ip = request.headers.get('X-Forwarded-For', request.remote_addr or '').split(',')[0].strip()
    if not _check_rate(ip):
        return jsonify({'ok': False, 'error': 'Demasiados mensajes. Intenta más tarde.'}), 429

    data = request.get_json(silent=True) or {}
    name = str(data.get('name', '')).strip()[:100]
    email = str(data.get('email', '')).strip()[:254].lower()
    phone = str(data.get('phone', '')).strip()[:20]
    subject = str(data.get('subject', '')).strip()[:200]
    message = str(data.get('message', '')).strip()[:2000]

    if not name or not email or not message:
        return jsonify({'ok': False, 'error': 'Nombre, email y mensaje son requeridos'}), 400
    if not EMAIL_REGEX.match(email):
        return jsonify({'ok': False, 'error': 'Email inválido'}), 400

    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        db_execute(conn, '''
            INSERT INTO contact_msgs (name, email, phone, subject, message, ip, created_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        ''', (name, email, phone, subject, message, ip, now))

    return jsonify({'ok': True, 'message': '¡Mensaje enviado! Te contactaremos pronto.'})


@contact_bp.route('/api/admin/contact')
@jwt_required
def admin_list_contact():
    try:
        page = max(1, int(request.args.get('page', 1)))
    except ValueError:
        page = 1
    per_page = 20
    offset = (page - 1) * per_page

    with get_db() as conn:
        total_row = db_execute(conn, 'SELECT COUNT(*) as c FROM contact_msgs').fetchone()
        total = total_row['c'] if isinstance(total_row, dict) else total_row[0]
        rows = db_execute(conn,
            'SELECT * FROM contact_msgs ORDER BY created_at DESC LIMIT %s OFFSET %s',
            (per_page, offset)).fetchall()

    return jsonify({'ok': True, 'messages': [dict(r) for r in rows], 'total': total})


@contact_bp.route('/api/admin/contact/<int:msg_id>/read', methods=['PUT'])
@jwt_required
def mark_read(msg_id):
    with get_db() as conn:
        db_execute(conn, 'UPDATE contact_msgs SET read = 1 WHERE id = %s', (msg_id,))
    return jsonify({'ok': True})
