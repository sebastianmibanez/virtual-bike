import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

// Attach JWT for admin routes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('veloshop_admin_token')
  if (token && config.url?.startsWith('/admin')) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auto-logout on 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && err.config?.url?.startsWith('/admin')) {
      localStorage.removeItem('veloshop_admin_token')
      window.location.href = '/admin/login'
    }
    return Promise.reject(err)
  }
)

// ── Products ──────────────────────────────────────────────────
export const getProducts = (params?: Record<string, string | number>) =>
  api.get('/products', { params })

export const getProduct = (id: number) => api.get(`/products/${id}`)

export const getCategories = () => api.get('/categories')

// ── Team ──────────────────────────────────────────────────────
export const getTeamMembers = () => api.get('/team/members')
export const getTeamResults = () => api.get('/team/results')
export const getTeamSponsors = () => api.get('/team/sponsors')

// ── Contact ───────────────────────────────────────────────────
export const submitContact = (data: object) => api.post('/contact', data)

// ── Checkout ──────────────────────────────────────────────────
export const createPreference = (data: object) => api.post('/checkout/create-preference', data)
export const getOrderStatus = (preferenceId: string) =>
  api.get(`/orders/${preferenceId}/status`)

// ── Admin Auth ────────────────────────────────────────────────
export const adminLogin = (email: string, password: string) =>
  api.post('/admin/login', { email, password })

export const adminMe = () => api.get('/admin/me')

// ── Admin Products ────────────────────────────────────────────
export const adminGetProducts = () => api.get('/admin/products')
export const adminCreateProduct = (data: object) => api.post('/admin/products', data)
export const adminUpdateProduct = (id: number, data: object) => api.put(`/admin/products/${id}`, data)
export const adminDeleteProduct = (id: number) => api.delete(`/admin/products/${id}`)
export const adminCreateCategory = (data: object) => api.post('/admin/categories', data)
export const adminDeleteCategory = (id: number) => api.delete(`/admin/categories/${id}`)

// ── Admin Orders ──────────────────────────────────────────────
export const adminGetOrders = (params?: object) => api.get('/admin/orders', { params })
export const adminUpdateOrderStatus = (id: number, status: string) =>
  api.put(`/admin/orders/${id}/status`, { status })

// ── Admin Contact ─────────────────────────────────────────────
export const adminGetContact = (params?: object) => api.get('/admin/contact', { params })
export const adminMarkRead = (id: number) => api.put(`/admin/contact/${id}/read`, {})

export default api
