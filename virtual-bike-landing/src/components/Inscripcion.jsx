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

const incluye = [
  'Medallón finisher para todos',
  'Fotos y videos sin costo',
  'Tercer tiempo incluido',
  'Opción a premios y sorteos',
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
      <label className="block text-xs text-gray-400 mb-1.5">
        {label} {required && <span className="text-[#f5e400]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-white/10 text-white px-4 py-2.5 focus:outline-none focus:border-[#f5e400]/60 transition-colors placeholder-white/20 text-sm" style={{ backgroundColor: '#0f0f0f' }}
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
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 py-24 px-8 md:px-20 lg:px-32 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

        {/* Izquierda — pitch */}
        <div>
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-5"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Cupos limitados
          </p>
          <h2
            className="text-5xl md:text-7xl text-white uppercase leading-none mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Inscríbete
          </h2>
          <p className="text-white/40 text-sm mb-10">
            Clásica CVBK 2026 · 21 de Mayo · Noviciado Alto, Lampa
          </p>

          {/* Precio */}
          <div className="mb-10 pb-10 border-b border-white/10">
            <div
              className="text-6xl text-[#f5e400] leading-none"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            >
              $40.000
            </div>
            <p className="text-white/30 text-xs mt-2 tracking-widest uppercase">CLP · Inscripción única</p>
          </div>

          {/* Beneficios */}
          <div className="space-y-2.5">
            {incluye.map((item) => (
              <p key={item} className="text-white/60 text-sm">{item}</p>
            ))}
          </div>
        </div>

        {/* Derecha — formulario */}
        <div>
          <h3
            className="text-xl text-white uppercase mb-6"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.04em' }}
          >
            Datos de inscripción
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
              <Field label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} required />
            </div>
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Teléfono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} required />
              <Field label="RUT" name="rut" placeholder="12.345.678-9" value={form.rut} onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1.5">
                Categoría <span className="text-[#f5e400]">*</span>
              </label>
              <select
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                required
                className="w-full border border-white/10 text-white px-4 py-2.5 focus:outline-none focus:border-[#f5e400]/60 transition-colors text-sm"
              style={{ backgroundColor: '#0f0f0f' }}
              >
                <option value="">Selecciona tu categoría</option>
                {categorias.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <Field label="Club / Equipo (opcional)" name="club" value={form.club} onChange={handleChange} />

            {errorMsg && (
              <div className="border border-red-500/20 text-red-400 text-xs px-4 py-3">
                {errorMsg}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#f5e400] text-black py-3.5 text-base uppercase hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.06em' }}
              >
                {status === 'loading' ? 'Procesando...' : 'Inscribirme por $40.000 →'}
              </button>
              <p className="text-center text-white/20 text-[10px] uppercase tracking-widest mt-3">
                Pago seguro vía Getnet · virtual-bike.cl
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
