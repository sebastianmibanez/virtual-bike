from flask import Blueprint, request, jsonify, g
from functools import wraps
from werkzeug.security import check_password_hash
from datetime import datetime, timezone, timedelta
import os
import jwt
import logging

from app_db import get_db, db_execute

logger = logging.getLogger(__name__)
auth_bp = Blueprint('auth', __name__)

SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-change-in-prod')
JWT_EXPIRY_HOURS = 8


# ── JWT helpers ────────────────────────────────────────────────

def make_token(admin_id: int) -> str:
    payload = {
        'sub': admin_id,
        'rol': 'admin',
        'iat': datetime.now(timezone.utc),
        'exp': datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRY_HOURS),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')


def decode_token(token: str) -> dict:
    return jwt.decode(token, SECRET_KEY, algorithms=['HS256'])


def jwt_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization', '')
        if not auth_header.startswith('Bearer '):
            return jsonify({'ok': False, 'error': 'Token requerido'}), 401
        try:
            payload = decode_token(auth_header[7:])
            g.admin = payload
        except jwt.ExpiredSignatureError:
            return jsonify({'ok': False, 'error': 'Sesión expirada'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'ok': False, 'error': 'Token inválido'}), 401
        return f(*args, **kwargs)
    return decorated


# ── Routes ─────────────────────────────────────────────────────

@auth_bp.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json(silent=True) or {}
    email = str(data.get('email', '')).strip().lower()
    password = str(data.get('password', ''))

    if not email or not password:
        return jsonify({'ok': False, 'error': 'Email y contraseña requeridos'}), 400

    with get_db() as conn:
        row = db_execute(conn,
            'SELECT id, email, password_hash FROM admin_users WHERE email = %s',
            (email,)).fetchone()

    if not row or not check_password_hash(row['password_hash'], password):
        return jsonify({'ok': False, 'error': 'Credenciales incorrectas'}), 401

    token = make_token(row['id'])
    return jsonify({'ok': True, 'token': token, 'admin': {'id': row['id'], 'email': row['email']}})


@auth_bp.route('/api/admin/me')
@jwt_required
def admin_me():
    admin_id = g.admin['sub']
    with get_db() as conn:
        row = db_execute(conn,
            'SELECT id, email FROM admin_users WHERE id = %s', (admin_id,)).fetchone()
    if not row:
        return jsonify({'ok': False, 'error': 'Admin no encontrado'}), 404
    return jsonify({'ok': True, 'admin': {'id': row['id'], 'email': row['email']}})
