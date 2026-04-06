import { Link } from 'react-router-dom'
import './Checkout.css'

export default function CheckoutFailure() {
  return (
    <div className="checkout-result failure">
      <div className="result-card">
        <div className="result-icon">❌</div>
        <h1>Pago rechazado</h1>
        <p>El pago no pudo procesarse. Puedes intentarlo nuevamente con otro medio de pago.</p>
        <div className="result-actions">
          <Link to="/tienda" className="btn btn-primary">Volver a la tienda</Link>
          <Link to="/contacto" className="btn btn-outline">Contactar soporte</Link>
        </div>
      </div>
    </div>
  )
}
