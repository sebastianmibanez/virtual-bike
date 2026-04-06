from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import logging

# ── App setup ─────────────────────────────────────────────────
app = Flask(__name__, static_folder='frontend/dist', static_url_path='')

CORS(app, resources={r"/api/*": {"origins": [
    "http://localhost:5173",
    "http://localhost:3000",
    os.getenv('APP_BASE_URL', ''),
]}}, supports_credentials=True)

app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024
app.secret_key = os.getenv('SECRET_KEY', os.urandom(32))
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

# ── Database ───────────────────────────────────────────────────
from app_db import init_db, seed_admin, seed_demo_data

# ── Blueprints ─────────────────────────────────────────────────
from blueprints.auth import auth_bp
from blueprints.products import products_bp
from blueprints.orders import orders_bp
from blueprints.team import team_bp
from blueprints.contact import contact_bp

app.register_blueprint(auth_bp)
app.register_blueprint(products_bp)
app.register_blueprint(orders_bp)
app.register_blueprint(team_bp)
app.register_blueprint(contact_bp)


# ── Security headers ──────────────────────────────────────────
@app.after_request
def set_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://sdk.mercadopago.com; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' https://fonts.gstatic.com; "
        "img-src 'self' data: https: blob:; "
        "connect-src 'self' https://api.mercadopago.com; "
        "frame-src https://www.mercadopago.cl https://www.mercadopago.com;"
    )
    return response


# ── Health check ──────────────────────────────────────────────
@app.route('/api/health')
def health():
    try:
        from app_db import get_db, db_execute
        with get_db() as conn:
            db_execute(conn, 'SELECT 1')
        return jsonify({'ok': True, 'status': 'healthy'})
    except Exception as e:
        logger.error(f'Health check failed: {e}')
        return jsonify({'ok': False, 'status': 'unhealthy'}), 500


# ── SPA catch-all (serve React in production) ─────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_spa(path):
    dist = os.path.join(app.root_path, 'frontend', 'dist')
    if path and os.path.exists(os.path.join(dist, path)):
        return send_from_directory(dist, path)
    index = os.path.join(dist, 'index.html')
    if os.path.exists(index):
        return send_from_directory(dist, 'index.html')
    return jsonify({'ok': False, 'error': 'Frontend not built yet'}), 404


# ── Init on startup ───────────────────────────────────────────
with app.app_context():
    init_db()
    seed_admin()
    if os.getenv('FLASK_DEBUG', 'false').lower() == 'true':
        seed_demo_data()


if __name__ == '__main__':
    app.run(debug=os.getenv('FLASK_DEBUG', 'false').lower() == 'true', port=5000)
