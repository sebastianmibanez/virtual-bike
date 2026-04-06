import { useEffect, useState } from 'react'
import { adminGetOrders, adminUpdateOrderStatus } from '../../services/api'
import type { Order } from '../../types'
import { formatCLP, formatDate } from '../../utils/format'
import './Admin.css'

const STATUS_LABELS: Record<string, string> = {
  pending: 'Pendiente', approved: 'Aprobado', rejected: 'Rechazado', cancelled: 'Cancelado',
}
const STATUS_BADGES: Record<string, string> = {
  pending: 'badge-orange', approved: 'badge-green', rejected: 'badge-red', cancelled: 'badge-gray',
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [total, setTotal] = useState(0)
  const [statusFilter, setStatusFilter] = useState('')
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    adminGetOrders(statusFilter ? { status: statusFilter } : {})
      .then((r) => { setOrders(r.data.orders); setTotal(r.data.total) })
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [statusFilter])

  const updateStatus = async (id: number, status: string) => {
    await adminUpdateOrderStatus(id, status)
    load()
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Órdenes ({total})</h1>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
          <option value="">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="approved">Aprobado</option>
          <option value="rejected">Rechazado</option>
          <option value="cancelled">Cancelado</option>
        </select>
      </div>

      {loading ? (
        <div className="loading-page"><div className="spinner" /></div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>#</th><th>Cliente</th><th>Email</th><th>Total</th><th>Estado</th><th>Fecha</th><th>Acciones</th></tr></thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>#{o.id}</td>
                  <td>{o.customer_name}</td>
                  <td>{o.customer_email}</td>
                  <td>{formatCLP(o.total)}</td>
                  <td><span className={`badge ${STATUS_BADGES[o.status]}`}>{STATUS_LABELS[o.status]}</span></td>
                  <td>{formatDate(o.created_at)}</td>
                  <td>
                    {o.status === 'pending' && (
                      <div className="row-actions">
                        <button className="btn btn-ghost btn-sm" onClick={() => updateStatus(o.id, 'approved')}>✓ Aprobar</button>
                        <button className="btn btn-ghost btn-sm danger" onClick={() => updateStatus(o.id, 'cancelled')}>✗ Cancelar</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
