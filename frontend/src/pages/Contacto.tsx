import { useState } from 'react'
import { submitContact } from '../services/api'
import './Contacto.css'

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(''); setSuccess('')
    setLoading(true)
    try {
      const res = await submitContact(form)
      setSuccess(res.data.message)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contacto-page">
      <div className="page-header">
        <div className="container">
          <h1>Contacto</h1>
          <p>Escríbenos y te respondemos a la brevedad</p>
        </div>
      </div>

      <div className="container contacto-layout">
        <div className="contacto-info reveal">
          <h2>¿En qué podemos ayudarte?</h2>
          <p>Consultas sobre productos, tallas, envíos o si quieres unirte al club — estamos aquí.</p>
          <div className="contact-items">
            {[
              { icon: '📧', label: 'Email', value: 'hola@virtual-bike.cl' },
              { icon: '📍', label: 'Ubicación', value: 'Santiago, Chile' },
              { icon: '⏰', label: 'Horario', value: 'Lun–Vie 9:00–18:00' },
            ].map((item) => (
              <div key={item.label} className="contact-item">
                <span className="contact-item-icon">{item.icon}</span>
                <div>
                  <p className="contact-item-label">{item.label}</p>
                  <p className="contact-item-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contacto-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre *</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+56 9 1234 5678" />
            </div>
            <div className="form-group">
              <label>Asunto</label>
              <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="¿Sobre qué?" />
            </div>
          </div>
          <div className="form-group">
            <label>Mensaje *</label>
            <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Escribe tu mensaje..." required />
          </div>
          {success && <p className="form-success">{success}</p>}
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  )
}
