import logging
from collections import defaultdict
from datetime import datetime, timezone, timedelta
import time
from flask import Blueprint, request, jsonify

from app_db import get_db, db_execute
from blueprints.auth import jwt_required

tracking_bp = Blueprint('tracking', __name__)
logger = logging.getLogger(__name__)

# Simple in-memory rate limit: max 60 track calls per minute per IP
_track_rate: dict = defaultdict(list)
TRACK_LIMIT = 60
TRACK_WINDOW = 60


def _check_track_rate(ip: str) -> bool:
    now = time.time()
    _track_rate[ip] = [t for t in _track_rate[ip] if now - t < TRACK_WINDOW]
    if len(_track_rate[ip]) >= TRACK_LIMIT:
        return False
    _track_rate[ip].append(now)
    return True


@tracking_bp.route('/api/track', methods=['POST'])
def track_visit():
    ip = request.headers.get('X-Forwarded-For', request.remote_addr or '').split(',')[0].strip()

    if not _check_track_rate(ip):
        return jsonify({'ok': True})  # Silently ignore flood

    data = request.get_json(silent=True) or {}
    path = str(data.get('path', '/')).strip()[:500]
    referrer = str(data.get('referrer', '')).strip()[:500]
    session_id = str(data.get('session_id', '')).strip()[:64]
    user_agent = request.headers.get('User-Agent', '')[:500]

    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
    try:
        with get_db() as conn:
            db_execute(conn, '''
                INSERT INTO page_visits (ip, user_agent, path, referrer, session_id, visited_at)
                VALUES (%s, %s, %s, %s, %s, %s)
            ''', (ip, user_agent, path, referrer, session_id, now))
    except Exception as e:
        logger.error(f'Track insert error: {e}')

    return jsonify({'ok': True})


# ── Admin analytics ───────────────────────────────────────────

@tracking_bp.route('/api/admin/analytics')
@jwt_required
def get_analytics():
    cutoff_30 = (datetime.now(timezone.utc) - timedelta(days=30)).strftime('%Y-%m-%d %H:%M:%S')
    cutoff_7  = (datetime.now(timezone.utc) - timedelta(days=7)).strftime('%Y-%m-%d %H:%M:%S')

    with get_db() as conn:
        # Totals
        r30 = db_execute(conn,
            'SELECT COUNT(*) as c FROM page_visits WHERE visited_at >= %s', (cutoff_30,)).fetchone()
        r7 = db_execute(conn,
            'SELECT COUNT(*) as c FROM page_visits WHERE visited_at >= %s', (cutoff_7,)).fetchone()

        # Unique sessions (≈ unique visitors)
        u30 = db_execute(conn,
            'SELECT COUNT(DISTINCT session_id) as c FROM page_visits WHERE visited_at >= %s',
            (cutoff_30,)).fetchone()
        u7 = db_execute(conn,
            'SELECT COUNT(DISTINCT session_id) as c FROM page_visits WHERE visited_at >= %s',
            (cutoff_7,)).fetchone()

        # Top pages (last 30 days)
        top_pages = db_execute(conn, '''
            SELECT path, COUNT(*) as visits
            FROM page_visits WHERE visited_at >= %s
            GROUP BY path ORDER BY visits DESC LIMIT 10
        ''', (cutoff_30,)).fetchall()

        # Daily chart (last 30 days)
        daily = db_execute(conn, '''
            SELECT
                substr(visited_at, 1, 10) as day,
                COUNT(*) as visits,
                COUNT(DISTINCT session_id) as sessions
            FROM page_visits WHERE visited_at >= %s
            GROUP BY substr(visited_at, 1, 10)
            ORDER BY day
        ''', (cutoff_30,)).fetchall()

        # Recent visits (last 100)
        recent = db_execute(conn, '''
            SELECT ip, path, user_agent, referrer, session_id, visited_at
            FROM page_visits ORDER BY visited_at DESC LIMIT 100
        ''').fetchall()

        # Top IPs (last 30 days)
        top_ips = db_execute(conn, '''
            SELECT ip, COUNT(*) as visits, COUNT(DISTINCT session_id) as sessions
            FROM page_visits WHERE visited_at >= %s
            GROUP BY ip ORDER BY visits DESC LIMIT 20
        ''', (cutoff_30,)).fetchall()

    def _int(row, key):
        if row is None:
            return 0
        return row[key] if isinstance(row, dict) else row[0]

    return jsonify({
        'ok': True,
        'summary': {
            'visits_30d': _int(r30, 'c'),
            'visits_7d':  _int(r7,  'c'),
            'unique_30d': _int(u30, 'c'),
            'unique_7d':  _int(u7,  'c'),
        },
        'top_pages': [dict(r) for r in top_pages],
        'daily':     [dict(r) for r in daily],
        'recent':    [dict(r) for r in recent],
        'top_ips':   [dict(r) for r in top_ips],
    })
