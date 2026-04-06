import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px', verticalAlign: 'middle'}}>
              <circle cx="19" cy="19" r="19" fill="#080f1e"/>
              <circle cx="19" cy="19" r="18" stroke="#D4FF00" strokeWidth="0.8"/>
              <text x="19" y="17" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="900" fontSize="13" fill="#D4FF00" letterSpacing="-0.5">V</text>
              <text x="19" y="27" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" fontSize="6" fill="#ffffff" letterSpacing="1.2">VIRTUAL BK</text>
            </svg>
            Virtual<strong>Bike</strong>
          </div>
          <p>Equipo y tienda de ciclismo de alto rendimiento. Ropa técnica diseñada por ciclistas, para ciclistas.</p>
        </div>
        <div className="footer-col">
          <h4>Tienda</h4>
          <Link to="/tienda">Todos los productos</Link>
          <Link to="/tienda?category=ropa">Ropa</Link>
          <Link to="/tienda?category=repuestos">Repuestos</Link>
          <Link to="/tienda?category=accesorios">Accesorios</Link>
        </div>
        <div className="footer-col">
          <h4>Equipo</h4>
          <Link to="/equipo">Nuestro equipo</Link>
          <Link to="/equipo#resultados">Resultados</Link>
          <Link to="/equipo#sponsors">Sponsors</Link>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <Link to="/contacto">Escríbenos</Link>
          <a href="mailto:hola@virtual-bike.cl">hola@virtual-bike.cl</a>
          <span>Santiago, Chile</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Virtual Bike. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
