import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute() {
  const { admin, loading } = useAuth()
  if (loading) return <div className="loading-page"><div className="spinner" /></div>
  if (!admin) return <Navigate to="/admin/login" replace />
  return <Outlet />
}
