import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'

import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './components/admin/AdminLayout'

import Home from './pages/Home'
import Tienda from './pages/Tienda'
import ProductDetail from './pages/ProductDetail'
import Equipo from './pages/Equipo'
import Carreras from './pages/Carreras'
import Contacto from './pages/Contacto'
import CheckoutSuccess from './pages/CheckoutSuccess'
import CheckoutFailure from './pages/CheckoutFailure'
import CheckoutPending from './pages/CheckoutPending'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProducts from './pages/admin/AdminProducts'
import AdminOrders from './pages/admin/AdminOrders'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Public site */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="tienda" element={<Tienda />} />
              <Route path="tienda/:productId" element={<ProductDetail />} />
              <Route path="equipo" element={<Equipo />} />
              <Route path="carreras" element={<Carreras />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="checkout/success" element={<CheckoutSuccess />} />
              <Route path="checkout/failure" element={<CheckoutFailure />} />
              <Route path="checkout/pending" element={<CheckoutPending />} />
            </Route>

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}
