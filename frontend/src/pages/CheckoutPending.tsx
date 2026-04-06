import { Link } from 'react-router-dom'
import './Checkout.css'

export default function CheckoutPending() {
  return (
    <div className="checkout-result pending">
      <div className="result-card">
        <div className="result-icon">⏳</div>
        <h1>Pago en proceso</h1>
        <p>Tu pago está siendo procesado. Te notificaremos por email cuando se confirme.</p>
        <div className="result-actions">
          <Link to="/tienda" className="btn btn-primary">Seguir comprando</Link>
          <Link to="/" className="btn btn-outline">Ir al inicio</Link>
        </div>
      </div>
    </div>
  )
}
