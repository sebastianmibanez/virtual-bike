export default function Footer() {
  return (
    <footer className="py-14 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Virtual BK" className="w-10 h-10 rounded-full" />
          <div>
            <div
              className="text-white text-xl uppercase"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            >
              Virtual-Bike.cl
            </div>
            <div className="text-gray-600 text-xs">Clásica CVBK 2026 · 21 de Mayo</div>
          </div>
        </div>

        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/virtual_bike_cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#f5e400] transition-colors text-sm uppercase tracking-widest"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Instagram
          </a>
          <a
            href="https://virtual-bike.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#f5e400] transition-colors text-sm uppercase tracking-widest"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Sitio web
          </a>
          <a
            href="mailto:contacto@virtual-bike.cl"
            className="text-gray-500 hover:text-[#f5e400] transition-colors text-sm uppercase tracking-widest"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Contacto
          </a>
        </div>

        <p
          className="text-gray-700 text-xs"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 600 }}
        >
          © {new Date().getFullYear()} Virtual-Bike.cl
        </p>
      </div>
    </footer>
  )
}
