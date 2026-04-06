import re
from flask import Blueprint, request, jsonify
from datetime import datetime, timezone

from app_db import get_db, db_execute
from blueprints.auth import jwt_required

products_bp = Blueprint('products', __name__)

PER_PAGE = 12


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[áàäâ]', 'a', text)
    text = re.sub(r'[éèëê]', 'e', text)
    text = re.sub(r'[íìïî]', 'i', text)
    text = re.sub(r'[óòöô]', 'o', text)
    text = re.sub(r'[úùüû]', 'u', text)
    text = re.sub(r'[ñ]', 'n', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')


def row_to_dict(row):
    if row is None:
        return None
    if hasattr(row, 'keys'):
        return dict(row)
    return dict(row)


# ── Public: Categories ─────────────────────────────────────────

@products_bp.route('/api/categories')
def list_categories():
    with get_db() as conn:
        rows = db_execute(conn, 'SELECT * FROM categories ORDER BY name').fetchall()
    return jsonify({'ok': True, 'categories': [row_to_dict(r) for r in rows]})


# ── Public: Products ───────────────────────────────────────────

@products_bp.route('/api/products')
def list_products():
    category = request.args.get('category', '').strip()
    search = request.args.get('search', '').strip()
    try:
        page = max(1, int(request.args.get('page', 1)))
    except ValueError:
        page = 1

    conditions = ['p.active = 1']
    params = []

    if category:
        conditions.append('c.slug = %s')
        params.append(category)
    if search:
        conditions.append('(p.name LIKE %s OR p.description LIKE %s)')
        params.extend([f'%{search}%', f'%{search}%'])

    where = 'WHERE ' + ' AND '.join(conditions)

    with get_db() as conn:
        total_row = db_execute(conn,
            f'SELECT COUNT(*) as cnt FROM products p JOIN categories c ON p.category_id = c.id {where}',
            params).fetchone()
        total = (total_row['cnt'] if isinstance(total_row, dict) else total_row[0])
        pages = max(1, (total + PER_PAGE - 1) // PER_PAGE)
        offset = (page - 1) * PER_PAGE

        rows = db_execute(conn, f'''
            SELECT p.*, c.name AS category_name, c.slug AS category_slug
            FROM products p
            JOIN categories c ON p.category_id = c.id
            {where}
            ORDER BY p.created_at DESC
            LIMIT %s OFFSET %s
        ''', params + [PER_PAGE, offset]).fetchall()

    return jsonify({
        'ok': True,
        'products': [row_to_dict(r) for r in rows],
        'total': total,
        'pages': pages,
        'page': page,
    })


@products_bp.route('/api/products/<int:product_id>')
def get_product(product_id):
    with get_db() as conn:
        row = db_execute(conn, '''
            SELECT p.*, c.name AS category_name, c.slug AS category_slug
            FROM products p JOIN categories c ON p.category_id = c.id
            WHERE p.id = %s AND p.active = 1
        ''', (product_id,)).fetchone()
    if not row:
        return jsonify({'ok': False, 'error': 'Producto no encontrado'}), 404
    return jsonify({'ok': True, 'product': row_to_dict(row)})


# ── Admin: Categories ─────────────────────────────────────────

@products_bp.route('/api/admin/categories', methods=['POST'])
@jwt_required
def create_category():
    data = request.get_json(silent=True) or {}
    name = str(data.get('name', '')).strip()
    if not name:
        return jsonify({'ok': False, 'error': 'Nombre requerido'}), 400
    slug = slugify(name)
    desc = str(data.get('description', '')).strip()
    with get_db() as conn:
        cur = db_execute(conn,
            'INSERT INTO categories (name, slug, description) VALUES (%s, %s, %s)',
            (name, slug, desc))
        cat_id = cur.lastrowid
    return jsonify({'ok': True, 'id': cat_id}), 201


@products_bp.route('/api/admin/categories/<int:cat_id>', methods=['DELETE'])
@jwt_required
def delete_category(cat_id):
    with get_db() as conn:
        used = db_execute(conn,
            'SELECT COUNT(*) as c FROM products WHERE category_id = %s AND active = 1',
            (cat_id,)).fetchone()
        count = used['c'] if isinstance(used, dict) else used[0]
        if count > 0:
            return jsonify({'ok': False, 'error': 'Categoría en uso por productos activos'}), 409
        db_execute(conn, 'DELETE FROM categories WHERE id = %s', (cat_id,))
    return jsonify({'ok': True})


# ── Admin: Products ────────────────────────────────────────────

@products_bp.route('/api/admin/products')
@jwt_required
def admin_list_products():
    with get_db() as conn:
        rows = db_execute(conn, '''
            SELECT p.*, c.name AS category_name
            FROM products p JOIN categories c ON p.category_id = c.id
            ORDER BY p.created_at DESC
        ''').fetchall()
    return jsonify({'ok': True, 'products': [row_to_dict(r) for r in rows]})


@products_bp.route('/api/admin/products', methods=['POST'])
@jwt_required
def create_product():
    data = request.get_json(silent=True) or {}
    name = str(data.get('name', '')).strip()
    if not name:
        return jsonify({'ok': False, 'error': 'Nombre requerido'}), 400
    try:
        price = int(data['price'])
        category_id = int(data['category_id'])
        stock = int(data.get('stock', 0))
    except (KeyError, ValueError, TypeError):
        return jsonify({'ok': False, 'error': 'price, category_id y stock deben ser números'}), 400

    slug = slugify(name)
    desc = str(data.get('description', '')).strip()
    image_url = str(data.get('image_url', '')).strip()
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')

    with get_db() as conn:
        # ensure slug uniqueness
        existing = db_execute(conn, 'SELECT id FROM products WHERE slug = %s', (slug,)).fetchone()
        if existing:
            slug = f'{slug}-{int(datetime.now(timezone.utc).timestamp())}'
        cur = db_execute(conn, '''
            INSERT INTO products (name, slug, description, price, stock, category_id, image_url, active, created_at, updated_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s, 1, %s, %s)
        ''', (name, slug, desc, price, stock, category_id, image_url, now, now))
        product_id = cur.lastrowid
    return jsonify({'ok': True, 'id': product_id}), 201


@products_bp.route('/api/admin/products/<int:product_id>', methods=['PUT'])
@jwt_required
def update_product(product_id):
    data = request.get_json(silent=True) or {}
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    fields = []
    params = []
    if 'name' in data:
        fields.append('name = %s'); params.append(str(data['name']).strip())
    if 'description' in data:
        fields.append('description = %s'); params.append(str(data['description']).strip())
    if 'price' in data:
        fields.append('price = %s'); params.append(int(data['price']))
    if 'stock' in data:
        fields.append('stock = %s'); params.append(int(data['stock']))
    if 'category_id' in data:
        fields.append('category_id = %s'); params.append(int(data['category_id']))
    if 'image_url' in data:
        fields.append('image_url = %s'); params.append(str(data['image_url']).strip())
    if 'active' in data:
        fields.append('active = %s'); params.append(1 if data['active'] else 0)
    if not fields:
        return jsonify({'ok': False, 'error': 'Nada que actualizar'}), 400
    fields.append('updated_at = %s'); params.append(now)
    params.append(product_id)
    with get_db() as conn:
        db_execute(conn, f'UPDATE products SET {", ".join(fields)} WHERE id = %s', params)
    return jsonify({'ok': True})


@products_bp.route('/api/admin/products/<int:product_id>', methods=['DELETE'])
@jwt_required
def delete_product(product_id):
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        db_execute(conn, 'UPDATE products SET active = 0, updated_at = %s WHERE id = %s', (now, product_id))
    return jsonify({'ok': True})
