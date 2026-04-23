# ── Stage 1: build React ──────────────────────────────────────────
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# ── Stage 2: Flask sirve todo ─────────────────────────────────────
FROM python:3.12-slim
WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . ./
COPY --from=frontend-build /app/frontend/dist /app/frontend/dist

ENV PYTHONUNBUFFERED=1

EXPOSE 5000

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000", "--workers", "2"]
