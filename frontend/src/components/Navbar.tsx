import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

const LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/tienda', label: 'Tienda', end: false },
  { to: '/equipo', label: 'Equipo', end: false },
  { to: '/carreras', label: 'Carreras', end: false },
  { to: '/contacto', label: 'Contacto', end: false },
]

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-200 ${
        scrolled ? 'bg-vbk-dark shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <svg className="flex-shrink-0" width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#080f1e"/>
            <circle cx="24" cy="24" r="22.5" stroke="#D4FF00" strokeWidth="1"/>
            <text x="24" y="21" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="900" fontSize="16" fill="#D4FF00" letterSpacing="-0.5">V</text>
            <text x="24" y="33" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" fontSize="7" fill="#ffffff" letterSpacing="1.4">VIRTUAL BK</text>
          </svg>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
            Virtual<strong className="text-vbk-accent">Bike</strong>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 ml-10">
          {LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Cart */}
          <button
            className="relative text-white/70 hover:text-vbk-accent transition-colors p-1"
            onClick={openCart}
            aria-label="Abrir carrito"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-vbk-blue text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white p-1 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-vbk-dark border-b border-white/10 px-6 py-4 flex flex-col gap-1 md:hidden shadow-xl">
          {LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  isActive ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
