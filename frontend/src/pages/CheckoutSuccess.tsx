import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getOrderStatus } from '../services/api'
import './Checkout.css'

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams()
  const preferenceId = searchParams.get('preference_id') || ''
  const [status, setStatus] = useState<string>('approved')

  useEffect(() => {
    if (!preferenceId) return
    let attempts = 0
    const poll = setInterval(async () => {
      try {
        const res = await getOrderStatus(preferenceId)
        setStatus(res.data.status)
        if (res.data.status !== 'pending' || ++attempts >= 8) clearInterval(poll)
      } catch {
        clearInterval(poll)
      }
    }, 2000)
    return () => clearInterval(poll)
  }, [preferenceId])

  return (
    <div className="checkout-result success">
      <div className="result-card">
        <div className="result-icon">✅</div>
        <h1>¡Pago exitoso!</h1>
        <p>Tu pedido ha sido confirmado. Te enviaremos un email con los detalles.</p>
        {status === 'pending' && <p className="status-note">Confirmando pago...</p>}
        <div className="result-actions">
          <Link to="/tienda" className="btn btn-primary">Seguir comprando</Link>
          <Link to="/" className="btn btn-outline">Ir al inicio</Link>
        </div>
      </div>
    </div>
  )
}
