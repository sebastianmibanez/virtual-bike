import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { adminLogin, adminMe } from '../services/api'

interface Admin { id: number; email: string }

interface AuthContextValue {
  admin: Admin | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('veloshop_admin_token')
    if (!token) { setLoading(false); return }
    adminMe()
      .then((res) => setAdmin(res.data.admin))
      .catch(() => localStorage.removeItem('veloshop_admin_token'))
      .finally(() => setLoading(false))
  }, [])

  const login = async (email: string, password: string) => {
    const res = await adminLogin(email, password)
    localStorage.setItem('veloshop_admin_token', res.data.token)
    setAdmin(res.data.admin)
  }

  const logout = () => {
    localStorage.removeItem('veloshop_admin_token')
    setAdmin(null)
  }

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
