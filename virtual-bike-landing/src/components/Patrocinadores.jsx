const BASE = import.meta.env.BASE_URL

const logos = [
  { nombre: 'Shimano', src: `${BASE}sponsors/shimano.jpg` },
  { nombre: 'CIC', src: `${BASE}sponsors/cic.jpg` },
  { nombre: 'Vittoria', src: `${BASE}sponsors/vittoria.jpg` },
  { nombre: 'Mutual de Seguridad', src: `${BASE}sponsors/mutual.jpg` },
  { nombre: 'DronExp', src: `${BASE}sponsors/dronexp.jpg` },
  { nombre: 'C.A.V.A', src: `${BASE}sponsors/cava.jpg` },
]

const textOnly = [
  { nombre: 'Propaint' },
  { nombre: 'Bump Lab' },
]

export default function Patrocinadores() {
  return (
    <section id="auspiciadores" className="py-20 px-6 md:px-12 border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          Auspiciadores & Colaboradores
        </p>
        <h2
          className="text-center text-3xl md:text-4xl text-white uppercase mb-12"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
        >
          Las marcas que nos acompañan
        </h2>

        {/* Logos reales */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-6">
          {logos.map((s) => (
            <div
              key={s.nombre}
              className="group bg-white border border-white/5 aspect-[3/2] flex items-center justify-center p-4 hover:border-[#f5e400]/40 transition-all overflow-hidden"
              title={s.nombre}
            >
              <img
                src={s.src}
                alt={s.nombre}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Placeholders texto (mientras consiguen logos) */}
        {textOnly.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
            {textOnly.map((s) => (
              <div
                key={s.nombre}
                className="bg-[#111] border border-white/10 aspect-[3/2] flex items-center justify-center hover:border-[#f5e400]/40 transition-all"
              >
                <span
                  className="text-white/80 uppercase text-lg md:text-xl tracking-wider"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                >
                  {s.nombre}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
