import { useState } from 'react'

const tramos = [
  {
    id: 'general-60',
    grupo: 'General',
    badge: 'Mayor a 60',
    subtitulo: 'Cuando el grupo supera los 60 inscritos',
    destacado: true,
    puestos: [
      { lugar: 1, premio: 100000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 80000, extra: 'Medallón' },
      { lugar: 3, premio: 70000, extra: 'Medallón' },
      { lugar: 4, premio: 60000, extra: 'Medallón' },
      { lugar: 5, premio: 50000, extra: 'Medallón' },
      { lugar: 6, premio: 40000, extra: 'Medallón' },
      { lugar: 7, premio: 40000, extra: 'Medallón' },
    ],
  },
  {
    id: 'general-59',
    grupo: 'General',
    badge: 'Menor a 59',
    subtitulo: 'Entre 40 y 59 inscritos en el grupo',
    puestos: [
      { lugar: 1, premio: 80000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 70000, extra: 'Medallón' },
      { lugar: 3, premio: 60000, extra: 'Medallón' },
      { lugar: 4, premio: 50000, extra: 'Medallón' },
      { lugar: 5, premio: 40000, extra: 'Medallón' },
    ],
  },
  {
    id: 'general-39',
    grupo: 'General',
    badge: 'Menor a 39',
    subtitulo: 'Entre 20 y 39 inscritos en el grupo',
    puestos: [
      { lugar: 1, premio: 60000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 50000, extra: 'Medallón' },
      { lugar: 3, premio: 40000, extra: 'Medallón' },
      { lugar: 4, premio: 40000, extra: 'Medallón' },
      { lugar: 5, premio: 40000, extra: 'Medallón' },
    ],
  },
  {
    id: 'general-19',
    grupo: 'General',
    badge: 'Menor a 19',
    subtitulo: 'Hasta 19 inscritos en el grupo',
    puestos: [
      { lugar: 1, premio: 40000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 30000, extra: 'Medallón' },
      { lugar: 3, premio: 20000, extra: 'Medallón' },
      { lugar: 4, premio: 20000, extra: 'Medallón' },
      { lugar: 5, premio: 20000, extra: 'Medallón' },
    ],
  },
  {
    id: 'damas-5',
    grupo: 'Damas',
    badge: 'Mayor a 5',
    subtitulo: 'Categoría Damas con 5+ participantes',
    puestos: [
      { lugar: 1, premio: 40000, extra: 'Medallón + Tricota + Trofeo' },
      { lugar: 2, premio: 30000, extra: 'Medallón' },
      { lugar: 3, premio: 20000, extra: 'Medallón' },
      { lugar: 4, premio: 10000, extra: 'Medallón' },
      { lugar: 5, premio: 10000, extra: 'Medallón' },
    ],
    extraNote: 'Trofeo + Tricota de Campeona a la 1ª en cruzar la meta',
  },
  {
    id: 'damas-3',
    grupo: 'Damas',
    badge: 'Menor a 3',
    subtitulo: 'Categoría Damas con menos de 3 participantes',
    puestos: [
      { lugar: 1, premio: 20000, extra: 'Medallón' },
      { lugar: 2, premio: 10000, extra: 'Medallón' },
      { lugar: 3, premio: 10000, extra: 'Medallón' },
    ],
  },
]

function formatCLP(n) {
  return '$' + n.toLocaleString('es-CL')
}

function TramoCard({ tramo, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(tramo.id)}
      className={`text-left border p-4 transition-all ${
        selected
          ? 'border-[#f5e400] bg-[#f5e400]/10'
          : 'border-white/10 bg-black/40 hover:border-white/30'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className={`text-[10px] uppercase tracking-widest ${selected ? 'text-[#f5e400]' : 'text-white/40'}`}
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          {tramo.grupo}
        </span>
        {tramo.destacado && (
          <span className="bg-[#f5e400] text-black text-[9px] px-2 py-0.5 uppercase tracking-wider" style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}>
            Top
          </span>
        )}
      </div>
      <div
        className="text-white text-xl uppercase leading-tight mb-1"
        style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
      >
        {tramo.badge}
      </div>
      <div
        className={`text-2xl leading-none ${selected ? 'text-[#f5e400]' : 'text-white/70'}`}
        style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
      >
        {formatCLP(tramo.puestos[0].premio)}
      </div>
      <div className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">al 1° lugar</div>
    </button>
  )
}

export default function PremiosDinero() {
  const [selectedId, setSelectedId] = useState('general-60')
  const tramo = tramos.find((t) => t.id === selectedId)

  return (
    <section id="premios-dinero" className="relative py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="mb-12">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Premios en dinero · Clásica 2026
          </p>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none mb-4"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Compite por <span className="text-[#f5e400]">más de $2 millones</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl">
            Los premios escalan según cuántos se inscriban en cada grupo. Mientras más competidores en tu categoría,
            más dinero reparte el podio. Además, hay premios en dinero en las <span className="text-white">3 metas volantes de cada grupo</span>.
          </p>
        </div>

        {/* Selector de tramos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {tramos.map((t) => (
            <TramoCard
              key={t.id}
              tramo={t}
              selected={selectedId === t.id}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        {/* Detalle tramo seleccionado */}
        <div className="border border-[#f5e400]/30 bg-[#f5e400]/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 pb-5 border-b border-white/10 gap-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-[#f5e400] text-xs uppercase tracking-[0.3em]"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
                >
                  {tramo.grupo}
                </span>
                <span className="text-white/30 text-[10px]">·</span>
                <span
                  className="text-white text-sm uppercase"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.1em' }}
                >
                  {tramo.badge} participantes
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl text-white uppercase leading-tight"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                {tramo.subtitulo}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-white/40 text-[10px] uppercase tracking-widest">Total podio</div>
              <div
                className="text-3xl md:text-4xl text-[#f5e400] leading-none"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                {formatCLP(tramo.puestos.reduce((sum, p) => sum + p.premio, 0))}
              </div>
            </div>
          </div>

          {/* Puestos */}
          <div className="space-y-2">
            {tramo.puestos.map((p) => (
              <div
                key={p.lugar}
                className={`flex items-center justify-between gap-4 p-3 md:p-4 ${
                  p.lugar === 1 ? 'bg-[#f5e400] text-black' : 'bg-black/40 text-white'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-5 min-w-0">
                  <div
                    className={`text-3xl md:text-4xl leading-none flex-shrink-0 ${p.lugar === 1 ? 'text-black' : 'text-white/40'}`}
                    style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                  >
                    {p.lugar}°
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-xl md:text-2xl uppercase leading-none ${p.lugar === 1 ? 'text-black' : 'text-white'}`}
                      style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                    >
                      {formatCLP(p.premio)}
                    </div>
                    <div className={`text-[11px] md:text-xs mt-1 truncate ${p.lugar === 1 ? 'text-black/70' : 'text-white/50'}`}>
                      {p.extra}
                    </div>
                  </div>
                </div>
                {p.lugar === 1 && (
                  <span
                    className="bg-black text-[#f5e400] text-[10px] px-2.5 py-1 uppercase tracking-widest flex-shrink-0"
                    style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                  >
                    Champion
                  </span>
                )}
              </div>
            ))}
          </div>

          {tramo.extraNote && (
            <p className="text-white/60 text-xs mt-5 italic">⭐ {tramo.extraNote}</p>
          )}
        </div>

        {/* Nota metas volantes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-white/10 bg-black/40 p-5">
            <div className="text-[#f5e400] text-2xl mb-2">💰</div>
            <div
              className="text-white text-lg uppercase mb-1"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
            >
              3 metas volantes
            </div>
            <div className="text-white/50 text-xs">
              $10.000 + premios Virtual en cada meta, por grupo
            </div>
          </div>
          <div className="border border-white/10 bg-black/40 p-5">
            <div className="text-[#f5e400] text-2xl mb-2">🎁</div>
            <div
              className="text-white text-lg uppercase mb-1"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
            >
              Sorteos
            </div>
            <div className="text-white/50 text-xs">
              Bici Mini CIC, ropa Virtual, Vittoria, Fundax
            </div>
          </div>
          <div className="border border-white/10 bg-black/40 p-5">
            <div className="text-[#f5e400] text-2xl mb-2">🏅</div>
            <div
              className="text-white text-lg uppercase mb-1"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
            >
              Medallón finisher
            </div>
            <div className="text-white/50 text-xs">
              Para los 200 primeros inscritos de la Clásica
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
