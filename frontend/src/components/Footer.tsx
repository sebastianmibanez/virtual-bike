import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vbk-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#080f1e"/>
                <circle cx="24" cy="24" r="22.5" stroke="#D4FF00" strokeWidth="1"/>
                <text x="24" y="21" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="900" fontSize="16" fill="#D4FF00" letterSpacing="-0.5">V</text>
                <text x="24" y="33" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" fontSize="7" fill="#ffffff" letterSpacing="1.4">VIRTUAL BK</text>
              </svg>
              <span className="text-white font-bold text-sm tracking-tight">
                Virtual<strong className="text-vbk-accent">Bike</strong>
              </span>
            </Link>
            <p className="text-white/25 text-sm leading-relaxed">
              Equipo y tienda de ciclismo de alto rendimiento. Ropa técnica diseñada por ciclistas, para ciclistas.
            </p>
          </div>

          {/* Tienda */}
          <div>
            <p className="text-white/50 font-bold text-[10px] tracking-widest uppercase mb-5">Tienda</p>
            <ul className="space-y-3">
              <li><Link to="/tienda" className="text-white/30 hover:text-white text-sm transition-colors">Todos los productos</Link></li>
              <li><Link to="/tienda?category=ropa" className="text-white/30 hover:text-white text-sm transition-colors">Ropa</Link></li>
              <li><Link to="/tienda?category=repuestos" className="text-white/30 hover:text-white text-sm transition-colors">Repuestos</Link></li>
              <li><Link to="/tienda?category=accesorios" className="text-white/30 hover:text-white text-sm transition-colors">Accesorios</Link></li>
            </ul>
          </div>

          {/* Equipo */}
          <div>
            <p className="text-white/50 font-bold text-[10px] tracking-widest uppercase mb-5">Equipo</p>
            <ul className="space-y-3">
              <li><Link to="/equipo" className="text-white/30 hover:text-white text-sm transition-colors">Nuestro equipo</Link></li>
              <li><Link to="/carreras" className="text-white/30 hover:text-white text-sm transition-colors">Carreras</Link></li>
              <li><Link to="/equipo#resultados" className="text-white/30 hover:text-white text-sm transition-colors">Resultados</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-white/50 font-bold text-[10px] tracking-widest uppercase mb-5">Contacto</p>
            <ul className="space-y-3">
              <li><Link to="/contacto" className="text-white/30 hover:text-white text-sm transition-colors">Escríbenos</Link></li>
              <li><a href="mailto:hola@virtual-bike.cl" className="text-white/30 hover:text-white text-sm transition-colors">hola@virtual-bike.cl</a></li>
              <li><span className="text-white/20 text-sm">Santiago, Chile</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/20 text-xs">
          <span>© {new Date().getFullYear()} Virtual Bike · Santiago, Chile</span>
          <span>Hecho con orgullo en Chile</span>
        </div>
      </div>
    </footer>
  )
}
