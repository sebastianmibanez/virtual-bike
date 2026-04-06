import { useEffect, useState } from 'react'
import { adminGetProducts, adminGetOrders, adminGetContact } from '../../services/api'
import './Admin.css'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, pendingOrders: 0, unreadMessages: 0 })

  useEffect(() => {
    Promise.all([
      adminGetProducts(),
      adminGetOrders({ status: 'pending' }),
      adminGetContact(),
    ]).then(([p, o, c]) => {
      setStats({
        products: p.data.products.length,
        pendingOrders: o.data.total,
        unreadMessages: c.data.messages.filter((m: any) => !m.read).length,
      })
    }).catch(() => {})
  }, [])

  return (
    <div>
      <h1 className="admin-page-title">Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-value">{stats.products}</div>
          <div className="stat-label">Productos</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🧾</div>
          <div className="stat-value">{stats.pendingOrders}</div>
          <div className="stat-label">Órdenes pendientes</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✉️</div>
          <div className="stat-value">{stats.unreadMessages}</div>
          <div className="stat-label">Mensajes sin leer</div>
        </div>
      </div>
      <div className="dashboard-links">
        <a href="/admin/products" className="btn btn-secondary">Gestionar productos →</a>
        <a href="/admin/orders" className="btn btn-outline">Ver órdenes →</a>
      </div>
    </div>
  )
}
