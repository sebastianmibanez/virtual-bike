import { useState, useEffect } from 'react'
import eventoImg from '../assets/clasica2.jpg'

const API_URL = 'https://virtual-bike.cl/wp-json/cvbk/v1/inscribir'

const categorias = [
  'Debutantes sin edad',
  'Master C mayor 50 y más años',
  'Damas',
  'Menor 23 años',
  'Mayor 24 años',
  'Mayor 35 años Master',
  'Todo competidor y Sub/23',
  'Master A 30/39 años',
  'Master B 40/49 años',
]

const beneficios = [
  { icon: '🏅', title: 'Medallón finisher', sub: 'Los 200 primeros inscritos' },
  { icon: '📸', title: 'Fotos y videos', sub: 'Cobertura completa, sin costo' },
  { icon: '💰', title: '3 metas volantes', sub: 'Premios en dinero por grupo' },
  { icon: '🍽️', title: 'Tercer tiempo', sub: 'Frutas, agua, pan y pastelitos' },
  { icon: '🎁', title: 'Sorteos', sub: 'Bici Mini CIC, ropa Virtual, más' },
  { icon: '🎤', title: 'Ambiente en vivo', sub: 'DJ + locutor toda la jornada' },
]

const initialForm = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  rut: '',
  categoria: '',
  club: '',
}

function Field({ label, name, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-[11px] text-white/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.15em' }}>
        {label} {required && <span className="text-[#f5e400]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#f5e400] focus:bg-black transition-all placeholder-white/20 text-sm"
        style={{ backgroundColor: '#0f0f0f' }}
      />
    </div>
  )
}

export default function Inscripcion() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const reset = () => setStatus('idle')
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Error al procesar la inscripción')

      window.location.href = data.redirect
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <section id="inscripcion" className="relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img src={eventoImg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/75" />
      </div>

      {/* Banner urgencia */}
      <div className="relative z-10 bg-[#f5e400] text-black text-center py-2.5 px-4">
        <span
          className="text-xs md:text-sm uppercase"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, letterSpacing: '0.2em' }}
        >
          🔥 Inscripciones abiertas — Mayo 2026 · Solo 200 medallones finisher
        </span>
      </div>

      <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-4"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Reserva tu cupo
          </p>
          <h2
            className="text-5xl md:text-7xl text-white uppercase leading-none mb-4"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Inscríbete <span className="text-[#f5e400]">ahora</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base">
            Clásica Virtual Bike 2026 · 21 de Mayo · Alto Noviciado
          </p>
        </div>

        {/* Caja precio + resumen — horizontal arriba del form */}
        <div className="bg-black/60 backdrop-blur-sm border border-white/10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 md:gap-0">
            {/* Precio */}
            <div className="border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-8 flex flex-col justify-center md:min-w-[260px]">
              <div
                className="text-6xl md:text-7xl text-[#f5e400] leading-none"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                $40.000
              </div>
              <p className="text-white/40 text-[10px] md:text-xs mt-2 tracking-[0.2em] uppercase">
                CLP · Inscripción única
              </p>
            </div>

            {/* Quick beneficios */}
            <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
              {[
                'Medallón finisher (200 primeros)',
                'Premios en dinero + sorteos',
                'Fotos y videos GRATIS',
                '3 metas volantes por grupo',
                'Tercer tiempo incluido',
                'Tricota Champion al 1°',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#f5e400] mt-0.5 text-xs">✓</span>
                  <span className="text-white/80 text-xs md:text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-black/70 backdrop-blur-sm border border-white/10 p-6 md:p-10">
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
            <h3
              className="text-xl md:text-2xl text-white uppercase"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.04em' }}
            >
              Datos de inscripción
            </h3>
            <span className="text-white/30 text-[10px] uppercase tracking-widest hidden sm:block">
              Todos los campos son obligatorios
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
              <Field label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Teléfono" name="telefono" type="tel" placeholder="9 1234 5678" value={form.telefono} onChange={handleChange} required />
              <Field label="RUT" name="rut" placeholder="12.345.678-9" value={form.rut} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] text-white/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.15em' }}>
                  Categoría <span className="text-[#f5e400]">*</span>
                </label>
                <select
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#f5e400] focus:bg-black transition-all text-sm"
                  style={{ backgroundColor: '#0f0f0f' }}
                >
                  <option value="">Selecciona tu categoría</option>
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <Field label="Club / Equipo (opcional)" name="club" value={form.club} onChange={handleChange} />
            </div>

            {errorMsg && (
              <div className="border border-red-500/30 bg-red-500/5 text-red-400 text-sm px-4 py-3">
                {errorMsg}
              </div>
            )}

            <div className="pt-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#f5e400] text-black py-4 text-lg uppercase hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.08em' }}
              >
                {status === 'loading' ? 'Procesando...' : (
                  <>
                    <span>Inscribirme por $40.000</span>
                    <span className="text-xl">→</span>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-4 mt-4 text-white/30 text-[10px] uppercase tracking-widest">
                <span className="flex items-center gap-1.5">🔒 Pago seguro vía Getnet</span>
                <span className="hidden sm:flex items-center gap-1.5">✓ Datos protegidos</span>
              </div>
            </div>
          </form>
        </div>

        {/* Beneficios expandidos abajo del form */}
        <div className="mt-14">
          <p
            className="text-center text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Incluido con tu inscripción
          </p>
          <h3
            className="text-center text-3xl md:text-4xl text-white uppercase mb-10"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Todo lo que te llevas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="border border-white/10 bg-black/40 backdrop-blur-sm p-5 hover:border-[#f5e400]/40 hover:bg-black/60 transition-all"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <div
                  className="text-white uppercase text-lg leading-tight mb-1"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                >
                  {b.title}
                </div>
                <div className="text-white/50 text-xs leading-relaxed">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
