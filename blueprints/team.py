from flask import Blueprint, request, jsonify
from app_db import get_db, db_execute
from blueprints.auth import jwt_required

team_bp = Blueprint('team', __name__)


def row_to_dict(row):
    if row is None:
        return None
    return dict(row)


# ── Public ─────────────────────────────────────────────────────

@team_bp.route('/api/team/members')
def list_members():
    with get_db() as conn:
        rows = db_execute(conn,
            'SELECT * FROM team_members WHERE active = 1 ORDER BY sort_order').fetchall()
    return jsonify({'ok': True, 'members': [row_to_dict(r) for r in rows]})


@team_bp.route('/api/team/results')
def list_results():
    with get_db() as conn:
        rows = db_execute(conn,
            'SELECT * FROM race_results ORDER BY date DESC').fetchall()
    return jsonify({'ok': True, 'results': [row_to_dict(r) for r in rows]})


@team_bp.route('/api/team/sponsors')
def list_sponsors():
    with get_db() as conn:
        rows = db_execute(conn,
            "SELECT * FROM sponsors ORDER BY CASE tier WHEN 'gold' THEN 0 WHEN 'silver' THEN 1 ELSE 2 END, sort_order"
        ).fetchall()
    return jsonify({'ok': True, 'sponsors': [row_to_dict(r) for r in rows]})


# ── Admin: Members ─────────────────────────────────────────────

@team_bp.route('/api/admin/team/members', methods=['POST'])
@jwt_required
def create_member():
    data = request.get_json(silent=True) or {}
    name = str(data.get('name', '')).strip()
    role = str(data.get('role', '')).strip()
    if not name or not role:
        return jsonify({'ok': False, 'error': 'name y role requeridos'}), 400
    with get_db() as conn:
        cur = db_execute(conn, '''
            INSERT INTO team_members (name, role, bio, photo_url, instagram_url, sort_order, active)
            VALUES (%s, %s, %s, %s, %s, %s, 1)
        ''', (name, role,
              str(data.get('bio', '')).strip(),
              str(data.get('photo_url', '')).strip(),
              str(data.get('instagram_url', '')).strip(),
              int(data.get('sort_order', 0))))
    return jsonify({'ok': True, 'id': cur.lastrowid}), 201


@team_bp.route('/api/admin/team/members/<int:member_id>', methods=['PUT'])
@jwt_required
def update_member(member_id):
    data = request.get_json(silent=True) or {}
    fields, params = [], []
    for col in ('name', 'role', 'bio', 'photo_url', 'instagram_url'):
        if col in data:
            fields.append(f'{col} = %s'); params.append(str(data[col]).strip())
    if 'sort_order' in data:
        fields.append('sort_order = %s'); params.append(int(data['sort_order']))
    if 'active' in data:
        fields.append('active = %s'); params.append(1 if data['active'] else 0)
    if not fields:
        return jsonify({'ok': False, 'error': 'Nada que actualizar'}), 400
    params.append(member_id)
    with get_db() as conn:
        db_execute(conn, f'UPDATE team_members SET {", ".join(fields)} WHERE id = %s', params)
    return jsonify({'ok': True})


@team_bp.route('/api/admin/team/members/<int:member_id>', methods=['DELETE'])
@jwt_required
def delete_member(member_id):
    with get_db() as conn:
        db_execute(conn, 'DELETE FROM team_members WHERE id = %s', (member_id,))
    return jsonify({'ok': True})


# ── Admin: Results ─────────────────────────────────────────────

@team_bp.route('/api/admin/team/results', methods=['POST'])
@jwt_required
def create_result():
    data = request.get_json(silent=True) or {}
    required = ('race_name', 'date', 'rider_name', 'position')
    if not all(data.get(k) for k in required):
        return jsonify({'ok': False, 'error': 'race_name, date, rider_name, position requeridos'}), 400
    with get_db() as conn:
        cur = db_execute(conn, '''
            INSERT INTO race_results (race_name, date, location, rider_name, position, category, notes)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        ''', (data['race_name'], data['date'],
              str(data.get('location', '')),
              data['rider_name'], int(data['position']),
              str(data.get('category', '')),
              str(data.get('notes', ''))))
    return jsonify({'ok': True, 'id': cur.lastrowid}), 201


@team_bp.route('/api/admin/team/results/<int:result_id>', methods=['DELETE'])
@jwt_required
def delete_result(result_id):
    with get_db() as conn:
        db_execute(conn, 'DELETE FROM race_results WHERE id = %s', (result_id,))
    return jsonify({'ok': True})


# ── Admin: Sponsors ────────────────────────────────────────────

@team_bp.route('/api/admin/team/sponsors', methods=['POST'])
@jwt_required
def create_sponsor():
    data = request.get_json(silent=True) or {}
    name = str(data.get('name', '')).strip()
    logo_url = str(data.get('logo_url', '')).strip()
    if not name or not logo_url:
        return jsonify({'ok': False, 'error': 'name y logo_url requeridos'}), 400
    tier = data.get('tier', 'silver')
    if tier not in ('gold', 'silver', 'bronze'):
        tier = 'silver'
    with get_db() as conn:
        cur = db_execute(conn, '''
            INSERT INTO sponsors (name, logo_url, website_url, tier, sort_order)
            VALUES (%s, %s, %s, %s, %s)
        ''', (name, logo_url, str(data.get('website_url', '')), tier, int(data.get('sort_order', 0))))
    return jsonify({'ok': True, 'id': cur.lastrowid}), 201


@team_bp.route('/api/admin/team/sponsors/<int:sponsor_id>', methods=['DELETE'])
@jwt_required
def delete_sponsor(sponsor_id):
    with get_db() as conn:
        db_execute(conn, 'DELETE FROM sponsors WHERE id = %s', (sponsor_id,))
    return jsonify({'ok': True})
