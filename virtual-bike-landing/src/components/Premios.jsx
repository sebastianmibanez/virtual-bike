import { useState } from 'react'
import clasica1 from '../assets/clasica1.jpg'
import clasica2 from '../assets/clasica2.jpg'
import clasica3 from '../assets/clasica3.jpg'
import clasica4 from '../assets/clasica4.jpg'
import clasica5 from '../assets/clasica5.jpg'
import clasica6 from '../assets/clasica6.jpg'

const secciones = [
  {
    tag: 'Premiación',
    titulo: 'Cada categoría\ntiene su campeón',
    body: 'El ganador de cada categoría se lleva la Tricota de Champion de Virtual Bike. Los cinco primeros del podio reciben su medallón, y cada participante que cruce la meta se va con su medallón finisher.',
    stats: [
      { value: 'Tricota', label: 'Al 1° de cada categoría' },
      { value: 'Top 5', label: 'Medallones de podio' },
      { value: 'Todos', label: 'Medallón finisher' },
    ],
    img: clasica1,
    color: '#f5e400',
  },
  {
    tag: 'En carrera',
    titulo: 'La carrera viva\ndesde el inicio',
    body: 'Tres metas volantes por grupo mantienen la adrenalina hasta el final. En cada una hay premios en dinero y sorpresas de Virtual. Los resultados son oficiales gracias al sistema de foto finish.',
    stats: [
      { value: '3', label: 'Metas volantes por grupo' },
      { value: 'Dinero', label: 'En cada meta' },
      { value: 'Foto finish', label: 'Resultado oficial' },
    ],
    img: clasica2,
    color: '#f5e400',
  },
  {
    tag: 'Sorteos',
    titulo: 'Premios que valen\nla pena pedalear',
    body: 'Al terminar la carrera sorteamos entre todos los participantes una bicicleta Mini CIC, un conjunto Virtual a elección, un porta bolso de ruedas Double y productos de Fundax y Vittoria.',
    stats: [
      { value: '1', label: 'Bicicleta Mini CIC' },
      { value: 'Vittoria', label: 'Productos premium' },
      { value: 'Fundax', label: 'Regalos de marca' },
    ],
    img: clasica3,
    color: '#f5e400',
  },
  {
    tag: 'Cobertura',
    titulo: 'Tu carrera\ndocumentada',
    body: 'Fotos y videos profesionales sin costo adicional para todos los participantes. Cobertura audiovisual completa del evento para que revivas cada momento de la Clásica.',
    stats: [
      { value: 'Gratis', label: 'Fotos y videos' },
      { value: 'Full', label: 'Cobertura audiovisual' },
    ],
    img: clasica4,
    color: '#f5e400',
  },
  {
    tag: 'Ambiente',
    titulo: 'El evento que\nquieres vivir',
    body: 'Locutor en vivo y DJ para que el ambiente esté encendido desde la largada hasta el podio. Vasos oficiales CVBK / Virtual para que la experiencia sea completa.',
    stats: [
      { value: 'DJ', label: 'En vivo' },
      { value: 'Locutor', label: 'Toda la carrera' },
    ],
    img: clasica5,
    color: '#f5e400',
  },
  {
    tag: 'Tercer tiempo',
    titulo: 'El mejor cierre\npara una carrera exigente',
    body: 'Después del esfuerzo, todo el campo de llegada se queda a celebrar. Frutas, agua, pan y pastelitos para reponer energías en un ambiente pensado para compartir.',
    stats: [
      { value: 'Frutas', label: 'Y agua para todos' },
      { value: 'Pan', label: 'Y pastelitos' },
    ],
    img: clasica6,
    color: '#f5e400',
  },
]

function Seccion({ tag, titulo, body, stats, img, color, reverse }) {
  const [flipped, setFlipped] = useState(false)
  const bg = reverse ? '#0f0f0f' : '#080808'

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Imagen — estática */}
      <div className="relative w-full md:w-1/2 h-[260px] md:h-auto md:min-h-[360px] overflow-hidden">
        <img src={img} alt={tag} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Texto — flip */}
      <div
        className="w-full md:w-1/2 cursor-pointer overflow-hidden flex flex-col"
        style={{ perspective: '1000px', backgroundColor: bg }}
        onClick={() => setFlipped(f => !f)}
      >
        <div
          className="flex-1 relative min-h-[300px]"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Cara delantera */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-10 md:px-16 lg:px-24"
            style={{ backfaceVisibility: 'hidden', backgroundColor: bg }}
          >
            <span
              className="text-xs uppercase tracking-[0.3em] mb-6 block"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, color }}
            >
              — {tag}
            </span>
            <h3
              className="text-4xl md:text-5xl text-white uppercase leading-[1.05] whitespace-pre-line mb-6"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            >
              {titulo}
            </h3>
            <span className="text-white/25 text-[10px] uppercase tracking-[0.2em]">
              Toca para ver detalle →
            </span>
          </div>

          {/* Cara trasera — absoluta, se superpone */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-10 md:px-16 lg:px-24"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', backgroundColor: bg }}
          >
            <span
              className="text-xs uppercase tracking-[0.3em] mb-5 block"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, color }}
            >
              ← {tag}
            </span>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-7 max-w-xs">
              {body}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {stats.map((s, i) => (
                <div key={i} className="pl-6 border-l-2 text-left" style={{ borderColor: color }}>
                  <div
                    className="text-lg text-white leading-none"
                    style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Premios() {
  return (
    <section id="premios" className="pt-28">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-10 md:px-24 lg:px-32 pb-16">
        <p
          className="text-[#f5e400] text-sm uppercase tracking-[0.3em] mb-3"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          Este año viene con todo
        </p>
        <h2
          className="text-4xl md:text-5xl text-white uppercase"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
        >
          Premios &amp; <span className="text-[#f5e400]">Beneficios</span>
        </h2>
      </div>

      {/* Secciones alternadas */}
      {secciones.map((s, i) => (
        <Seccion key={i} {...s} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
