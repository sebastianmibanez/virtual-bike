import clasica3 from '../assets/clasica3.jpg'

const horarios = [
  { hora: '08:00', label: 'Acreditación', categorias: ['Todas las categorías'], destacado: false },
  { hora: '09:00', label: 'Primera largada', categorias: ['Debutantes (sin edad)', 'Master C (50+ años)'], destacado: true },
  { hora: '09:20', label: 'Damas', categorias: ['Menor 23 · Mayor 24 · Mayor 35'], destacado: true },
  { hora: '11:30', label: 'Competidores', categorias: ['Todo Competidor', 'Sub/23'], destacado: true },
  { hora: '11:40', label: 'Master A y B', categorias: ['Master A (30-39)', 'Master B (40-49)'], destacado: true },
]

const datos = [
  { icon: '📍', label: 'Circuito', value: 'Alto Noviciado, Lampa' },
  { icon: '🔁', label: 'Vueltas', value: '3 giros al circuito' },
  { icon: '⚡', label: 'Metas volantes', value: '3 por grupo' },
  { icon: '🎯', label: 'Sistema', value: 'Foto finish oficial' },
]

export default function DiaCarrera() {
  return (
    <section id="dia-carrera" className="relative overflow-hidden py-20 md:py-28">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-20">
        <img src={clasica3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            21 de Mayo · 2026
          </p>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            El día de <span className="text-[#f5e400]">carrera</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Una jornada completa de competencia, premios y buen ambiente en Alto Noviciado
          </p>
        </div>

        {/* Info rápida — 4 datos clave */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {datos.map((d) => (
            <div key={d.label} className="border border-white/10 bg-black/40 backdrop-blur-sm p-5 text-center">
              <div className="text-2xl mb-2">{d.icon}</div>
              <div
                className="text-white text-base md:text-lg uppercase leading-tight"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
              >
                {d.value}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{d.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline horarios */}
        <div className="mb-12">
          <div className="flex items-baseline justify-between mb-6">
            <h3
              className="text-2xl md:text-3xl text-white uppercase"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            >
              Horarios <span className="text-[#f5e400]">por categoría</span>
            </h3>
            <span className="text-white/30 text-[10px] uppercase tracking-widest hidden md:block">
              Revisa tu largada
            </span>
          </div>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-[58px] md:left-[82px] top-3 bottom-3 w-px bg-white/10" />

            <div className="space-y-3">
              {horarios.map((h, i) => (
                <div key={i} className="relative flex items-stretch">
                  {/* Hora */}
                  <div className="w-[52px] md:w-[72px] flex-shrink-0 flex items-center">
                    <span
                      className={`text-xl md:text-3xl leading-none ${h.destacado ? 'text-[#f5e400]' : 'text-white/50'}`}
                      style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                    >
                      {h.hora}
                    </span>
                  </div>

                  {/* Punto */}
                  <div className="flex-shrink-0 flex items-center justify-center w-[12px] md:w-[20px] relative z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        h.destacado
                          ? 'bg-[#f5e400] border-[#f5e400]'
                          : 'bg-black border-white/30'
                      }`}
                    />
                  </div>

                  {/* Contenido */}
                  <div
                    className={`flex-1 ml-4 border p-4 transition-all ${
                      h.destacado
                        ? 'border-[#f5e400]/30 bg-[#f5e400]/5 hover:border-[#f5e400]/60'
                        : 'border-white/10 bg-black/40 hover:border-white/20'
                    }`}
                  >
                    <div
                      className="text-white text-lg md:text-xl uppercase leading-tight mb-1"
                      style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                    >
                      {h.label}
                    </div>
                    <div className="text-white/60 text-xs md:text-sm">
                      {h.categorias.join(' · ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-[#f5e400] text-[10px] uppercase tracking-[0.3em] mb-2"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
            >
              ¿Dudas antes de inscribirte?
            </p>
            <p className="text-white/70 text-base md:text-lg">
              Escríbenos directo y te ayudamos con lo que necesites
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/56999542821"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black px-5 py-3 text-sm uppercase hover:bg-white transition-all"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, letterSpacing: '0.06em' }}
            >
              WhatsApp +56 9 9954 2821
            </a>
            <a
              href="#inscripcion"
              className="border border-[#f5e400] text-[#f5e400] px-5 py-3 text-sm uppercase hover:bg-[#f5e400] hover:text-black transition-all"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, letterSpacing: '0.06em' }}
            >
              Inscribirme ahora →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
