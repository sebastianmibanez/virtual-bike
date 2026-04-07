"""Shared database utilities — SQLite locally, PostgreSQL in production."""
import os
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone

DATABASE_URL = os.getenv('DATABASE_URL')

if DATABASE_URL:
    import psycopg2
    import psycopg2.extras

    @contextmanager
    def get_db():
        conn = psycopg2.connect(DATABASE_URL, cursor_factory=psycopg2.extras.RealDictCursor)
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    def db_execute(conn, query, params=None):
        cur = conn.cursor()
        cur.execute(query, params or ())
        return cur

else:
    DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'database', 'veloshop.db')

    @contextmanager
    def get_db():
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        conn.execute('PRAGMA journal_mode=WAL')
        conn.execute('PRAGMA foreign_keys = ON')
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    def db_execute(conn, query, params=None):
        """Accepts %s-style placeholders, converts to ? for SQLite."""
        query = query.replace('%s', '?')
        cur = conn.cursor()
        cur.execute(query, params or ())
        return cur


def init_db():
    with get_db() as conn:
        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL UNIQUE,
                slug TEXT NOT NULL UNIQUE,
                description TEXT DEFAULT ''
            )
        ''')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                slug TEXT NOT NULL UNIQUE,
                description TEXT DEFAULT '',
                price INTEGER NOT NULL,
                stock INTEGER NOT NULL DEFAULT 0,
                category_id INTEGER NOT NULL REFERENCES categories(id),
                image_url TEXT DEFAULT '',
                active INTEGER NOT NULL DEFAULT 1,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        ''')
        db_execute(conn, 'CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id)')
        db_execute(conn, 'CREATE INDEX IF NOT EXISTS idx_products_active ON products(active)')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                mp_preference_id TEXT NOT NULL UNIQUE,
                mp_payment_id TEXT DEFAULT '',
                status TEXT NOT NULL DEFAULT 'pending',
                customer_name TEXT NOT NULL,
                customer_email TEXT NOT NULL,
                customer_phone TEXT DEFAULT '',
                total INTEGER NOT NULL,
                items_json TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        ''')
        db_execute(conn, 'CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status)')
        db_execute(conn, 'CREATE INDEX IF NOT EXISTS idx_orders_mp_pref ON orders(mp_preference_id)')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS team_members (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                role TEXT NOT NULL,
                bio TEXT DEFAULT '',
                photo_url TEXT DEFAULT '',
                instagram_url TEXT DEFAULT '',
                sort_order INTEGER NOT NULL DEFAULT 0,
                active INTEGER NOT NULL DEFAULT 1
            )
        ''')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS race_results (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                race_name TEXT NOT NULL,
                date TEXT NOT NULL,
                location TEXT DEFAULT '',
                rider_name TEXT NOT NULL,
                position INTEGER NOT NULL,
                category TEXT DEFAULT '',
                notes TEXT DEFAULT ''
            )
        ''')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS sponsors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                logo_url TEXT NOT NULL,
                website_url TEXT DEFAULT '',
                tier TEXT NOT NULL DEFAULT 'silver',
                sort_order INTEGER NOT NULL DEFAULT 0
            )
        ''')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS contact_msgs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT DEFAULT '',
                subject TEXT DEFAULT '',
                message TEXT NOT NULL,
                ip TEXT DEFAULT '',
                created_at TEXT NOT NULL,
                read INTEGER NOT NULL DEFAULT 0
            )
        ''')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS admin_users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
        ''')

        db_execute(conn, '''
            CREATE TABLE IF NOT EXISTS page_visits (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                ip TEXT NOT NULL DEFAULT '',
                user_agent TEXT NOT NULL DEFAULT '',
                path TEXT NOT NULL DEFAULT '/',
                referrer TEXT NOT NULL DEFAULT '',
                session_id TEXT NOT NULL DEFAULT '',
                visited_at TEXT NOT NULL
            )
        ''')
        db_execute(conn, 'CREATE INDEX IF NOT EXISTS idx_visits_at ON page_visits(visited_at)')
        db_execute(conn, 'CREATE INDEX IF NOT EXISTS idx_visits_session ON page_visits(session_id)')


def seed_admin():
    """Create default admin from env vars if no admins exist."""
    from werkzeug.security import generate_password_hash
    email = os.getenv('ADMIN_EMAIL', 'admin@veloshop.cl')
    password = os.getenv('ADMIN_PASSWORD', 'Admin1234!')
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        existing = db_execute(conn, 'SELECT id FROM admin_users LIMIT 1').fetchone()
        if not existing:
            hashed = generate_password_hash(password)
            db_execute(conn,
                'INSERT INTO admin_users (email, password_hash, created_at) VALUES (%s, %s, %s)',
                (email, hashed, now))


def seed_demo_data():
    """Seed demo categories, products and team data for development."""
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    with get_db() as conn:
        cat_count = db_execute(conn, 'SELECT COUNT(*) as c FROM categories').fetchone()
        if (cat_count['c'] if isinstance(cat_count, dict) else cat_count[0]) > 0:
            return

        categories = [
            ('Ropa', 'ropa', 'Camisetas, shorts, maillots y más'),
            ('Repuestos', 'repuestos', 'Componentes y piezas de bicicleta'),
            ('Accesorios', 'accesorios', 'Cascos, guantes, gafas y complementos'),
        ]
        cat_ids = {}
        for name, slug, desc in categories:
            cur = db_execute(conn,
                'INSERT INTO categories (name, slug, description) VALUES (%s, %s, %s)',
                (name, slug, desc))
            cat_ids[slug] = cur.lastrowid

        products = [
            ('Maillot VeloShop Pro', 'maillot-veloshop-pro',
             'Maillot de competición con tejido técnico transpirable. Corte aerodinámico.',
             49990, 20, cat_ids['ropa'],
             'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600'),
            ('Shorts Aero Race', 'shorts-aero-race',
             'Shorts con badana de gel premium. Ideal para largas distancias.',
             39990, 15, cat_ids['ropa'],
             'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'),
            ('Casco Veloce R1', 'casco-veloce-r1',
             'Casco ultraligero con ventilación optimizada. Certificación CE EN1078.',
             89990, 8, cat_ids['accesorios'],
             'https://images.unsplash.com/photo-1558618047-f3e7cef4e87b?w=600'),
            ('Zapatillas SPD-SL Pro', 'zapatillas-spd-sl-pro',
             'Zapatillas de carbono con suela rígida y cierre BOA. Compatible SPD-SL.',
             129990, 10, cat_ids['accesorios'],
             'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600'),
            ('Cassette 11-34 SRAM', 'cassette-11-34-sram',
             'Cassette de 11 velocidades SRAM, compatible con grupos Force y Rival.',
             45990, 12, cat_ids['repuestos'],
             'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'),
            ('Cadena KMC X11', 'cadena-kmc-x11',
             'Cadena de 11 velocidades con tratamiento anticorrosión.',
             18990, 25, cat_ids['repuestos'],
             'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600'),
            ('Guantes Aero Grip', 'guantes-aero-grip',
             'Guantes de lycra con palma acolchada y cierre velcro.',
             15990, 30, cat_ids['accesorios'],
             'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600'),
            ('Frenos Shimano 105', 'frenos-shimano-105',
             'Set de frenos Shimano 105 R7000. Par delantero + trasero.',
             59990, 7, cat_ids['repuestos'],
             'https://images.unsplash.com/photo-1558618047-f3e7cef4e87b?w=600'),
        ]
        for p in products:
            db_execute(conn, '''
                INSERT INTO products (name, slug, description, price, stock, category_id, image_url, active, created_at, updated_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, 1, %s, %s)
            ''', (*p, now, now))

        team_members = [
            ('Carlos Mendoza', 'Director Técnico',
             'Ex ciclista profesional con 15 años de experiencia en el circuito nacional e internacional.',
             'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', '', 0),
            ('Sofía Vásquez', 'Corredora Ruta',
             'Campeona regional sub-23. Especialista en montaña y contrarreloj.',
             'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=400', '@sofiavbike', 1),
            ('Matías Rojas', 'Corredor Ruta',
             'Corredor versátil con múltiples podios en el circuito nacional.',
             'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', '@matiasrojas', 2),
            ('Valentina Cruz', 'Corredora MTB',
             'Especialista en XCO. Representante nacional en Copa del Mundo 2023.',
             'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', '@valentinacruz', 3),
        ]
        for name, role, bio, photo, insta, order in team_members:
            db_execute(conn, '''
                INSERT INTO team_members (name, role, bio, photo_url, instagram_url, sort_order, active)
                VALUES (%s, %s, %s, %s, %s, %s, 1)
            ''', (name, role, bio, photo, insta, order))

        race_results = [
            ('Vuelta Ciclista a Chile', '2024-10-15', 'Santiago', 'Sofía Vásquez', 1, 'Femenino Elite', 'Primera etapa de montaña'),
            ('Tour de Atacama', '2024-09-08', 'Copiapó', 'Matías Rojas', 3, 'Masculino Elite', ''),
            ('Gran Fondo Litoral', '2024-08-20', 'Valparaíso', 'Valentina Cruz', 1, 'MTB XCO', ''),
            ('Clásica de Primavera', '2024-11-03', 'Concepción', 'Sofía Vásquez', 2, 'Femenino Elite', ''),
        ]
        for r in race_results:
            db_execute(conn, '''
                INSERT INTO race_results (race_name, date, location, rider_name, position, category, notes)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            ''', r)

        sponsors = [
            ('Shimano', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Shimano_logo.svg/320px-Shimano_logo.svg.png', 'https://www.shimano.com', 'gold', 0),
            ('SRAM', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/SRAM_logo.svg/320px-SRAM_logo.svg.png', 'https://www.sram.com', 'gold', 1),
            ('Continental', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Continental_AG_logo.svg/320px-Continental_AG_logo.svg.png', 'https://www.continental-tires.com', 'silver', 0),
            ('Garmin', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Garmin_logo.svg/320px-Garmin_logo.svg.png', 'https://www.garmin.com', 'silver', 1),
        ]
        for s in sponsors:
            db_execute(conn, '''
                INSERT INTO sponsors (name, logo_url, website_url, tier, sort_order)
                VALUES (%s, %s, %s, %s, %s)
            ''', s)
