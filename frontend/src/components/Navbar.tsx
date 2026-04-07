import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import './Navbar.css'

export default function Navbar() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <svg className="logo-vbk" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#080f1e"/>
            <circle cx="24" cy="24" r="22.5" stroke="#D4FF00" strokeWidth="1"/>
            <text x="24" y="21" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="900" fontSize="16" fill="#D4FF00" letterSpacing="-0.5">V</text>
            <text x="24" y="33" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" fontSize="7" fill="#ffffff" letterSpacing="1.4">VIRTUAL BK</text>
          </svg>
          <span className="logo-text">Virtual<strong>Bike</strong></span>
        </Link>

        <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/tienda" onClick={() => setMenuOpen(false)}>Tienda</NavLink>
          <NavLink to="/equipo" onClick={() => setMenuOpen(false)}>Equipo</NavLink>
          <NavLink to="/carreras" onClick={() => setMenuOpen(false)}>Carreras</NavLink>
          <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
        </nav>

        <div className="navbar-actions">
          <button className="cart-btn" onClick={openCart} aria-label="Abrir carrito">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <span className={`hamburger${menuOpen ? ' active' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
