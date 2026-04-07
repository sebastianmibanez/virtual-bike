from flask import Blueprint, request, jsonify, g
from functools import wraps
from werkzeug.security import check_password_hash
from datetime import datetime, timezone, timedelta
from collections import defaultdict
import os
import time
import jwt
import logging

from app_db import get_db, db_execute

logger = logging.getLogger(__name__)
auth_bp = Blueprint('auth', __name__)

SECRET_KEY = os.getenv('SECRET_KEY', '')
if not SECRET_KEY:
    import secrets
    SECRET_KEY = secrets.token_hex(32)
    logger.warning('SECRET_KEY not set — generated ephemeral key. Sessions will reset on restart.')

JWT_EXPIRY_HOURS = 4

# Brute-force protection: 5 failed attempts per IP per 15 minutes
_login_attempts: dict = defaultdict(list)
LOGIN_RATE_LIMIT = 5
LOGIN_RATE_WINDOW = 900  # 15 min


def _check_login_rate(ip: str) -> bool:
    now = time.time()
    _login_attempts[ip] = [t for t in _login_attempts[ip] if now - t < LOGIN_RATE_WINDOW]
    if len(_login_attempts[ip]) >= LOGIN_RATE_LIMIT:
        return False
    _login_attempts[ip].append(now)
    return True


def _clear_login_attempts(ip: str) -> None:
    _login_attempts.pop(ip, None)


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
    ip = request.headers.get('X-Forwarded-For', request.remote_addr or '').split(',')[0].strip()

    if not _check_login_rate(ip):
        logger.warning(f'Login rate limit exceeded for IP {ip}')
        return jsonify({'ok': False, 'error': 'Demasiados intentos. Espera 15 minutos.'}), 429

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
        logger.warning(f'Failed login attempt for "{email}" from {ip}')
        return jsonify({'ok': False, 'error': 'Credenciales incorrectas'}), 401

    _clear_login_attempts(ip)
    logger.info(f'Admin login successful: "{email}" from {ip}')
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
