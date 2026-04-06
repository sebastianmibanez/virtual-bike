import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useCart } from '../../contexts/CartContext'
import { createPreference } from '../../services/api'
import { formatCLP } from '../../utils/format'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, itemCount, total, removeItem, updateQuantity, clearCart, isOpen, closeCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email) { setError('Nombre y email son requeridos'); return }
    setLoading(true)
    try {
      const res = await createPreference({
        items: items.map((i) => ({ product_id: i.product_id, quantity: i.quantity })),
        customer: form,
      })
      clearCart()
      closeCart()
      window.location.href = res.data.redirect_url
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al procesar el pago')
    } finally {
      setLoading(false)
    }
  }

  const drawer = (
    <>
      {isOpen && <div className="cart-overlay" onClick={closeCart} />}
      <div className={`cart-drawer${isOpen ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>Tu carrito {itemCount > 0 && <span className="badge badge-red">{itemCount}</span>}</h2>
          <button className="btn btn-ghost" onClick={closeCart}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.product_id} className="cart-item">
                  <img
                    src={item.image_url || 'https://placehold.co/80x80?text=VS'}
                    alt={item.name}
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{formatCLP(item.price)}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="btn btn-ghost remove-btn" onClick={() => removeItem(item.product_id)}>✕</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>{formatCLP(total)}</strong>
              </div>

              {!showCheckout ? (
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setShowCheckout(true)}>
                  Continuar con el pago
                </button>
              ) : (
                <form onSubmit={handleCheckout} className="checkout-form">
                  <div className="form-group">
                    <label>Nombre completo *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                  {error && <p className="form-error">{error}</p>}
                  <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
                    {loading ? 'Procesando...' : '💳 Pagar con MercadoPago'}
                  </button>
                  <button type="button" className="btn btn-ghost" style={{ width: '100%' }} onClick={() => setShowCheckout(false)}>
                    Volver
                  </button>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )

  return createPortal(drawer, document.body)
}
