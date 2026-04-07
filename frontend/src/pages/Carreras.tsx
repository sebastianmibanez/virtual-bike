import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import foto1 from '../assets/Carreras/clasica vbk.jpg'
import foto2 from '../assets/Carreras/clasica vbk 2.jpg'
import foto3 from '../assets/Carreras/clasica vbk3.jpg'
import './Carreras.css'

const carrerasImages = [foto1, foto2, foto3]

export default function Carreras() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carrerasImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carreras-page">
      <div className="page-header">
        <div className="container">
          <h1>Organización de Carreras</h1>
          <p>Virtual Bike organiza eventos de ciclismo para la comunidad amateur y clubes de Chile</p>
        </div>
      </div>

      {/* Descripción con carousel de fondo */}
      <section className="carreras-intro-section">
        {/* Slides de fondo */}
        {carrerasImages.map((img, i) => (
          <div
            key={i}
            className={`carreras-bg-slide${i === currentSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="carreras-bg-overlay" />

        <div className="container carreras-intro-content">
          <div className="carreras-intro reveal">
            <h2>¿Qué organizamos?</h2>
            <p>
              Carlos, fundador de Virtual Bike, lleva años organizando carreras de ciclismo en Chile pensadas
              para ciclistas amateurs, clubes y familias que quieren vivir la experiencia de competir en un
              ambiente seguro y bien organizado. Desde clásicas urbanas hasta rutas de montaña, cada evento
              está diseñado para disfrutar el deporte que amamos.
            </p>
            <p>
              Si eres parte de un club, representas a un equipo o simplemente quieres participar como
              individuo, te esperamos en la largada.
            </p>
            <Link to="/contacto" className="btn btn-accent">Consultar próximas fechas</Link>
          </div>

          {/* Dots */}
          <div className="carreras-dots">
            {carrerasImages.map((_, i) => (
              <button
                key={i}
                className={`carreras-dot${i === currentSlide ? ' active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="carreras-cta">
        <div className="container carreras-cta-inner reveal">
          <h2>¿Quieres participar o inscribir tu club?</h2>
          <p>Contáctanos y te enviamos toda la información sobre próximas carreras, categorías y requisitos de inscripción.</p>
          <Link to="/contacto" className="btn btn-accent">Escribir a Carlos</Link>
        </div>
      </section>
    </div>
  )
}
