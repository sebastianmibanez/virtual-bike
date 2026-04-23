const sponsors = [
  { nombre: 'Shimano', emoji: '⚙️' },
  { nombre: 'Fundax', emoji: '🏅' },
  { nombre: 'Vittoria', emoji: '🚲' },
  { nombre: 'Fotazza', emoji: '📷' },
  { nombre: 'Mutual de Seguridad', emoji: '🛡️' },
  { nombre: 'Team Virtual', emoji: '⚡' },
]

export default function Patrocinadores() {
  return (
    <section className="py-20 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-gray-600 text-xs uppercase tracking-[0.3em] mb-10"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          Auspiciadores &amp; Colaboradores
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {sponsors.map((s) => (
            <div
              key={s.nombre}
              className="flex items-center gap-2 bg-[#111] border border-white/5 rounded-xl px-6 py-4 text-gray-400 hover:text-white hover:border-white/10 transition-all"
            >
              <span className="text-xl">{s.emoji}</span>
              <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                {s.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
