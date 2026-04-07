import { Link } from 'react-router-dom'
import foto1 from '../assets/Carreras/clasica vbk.jpg'
import foto2 from '../assets/Carreras/clasica vbk 2.jpg'
import './Carreras.css'

export default function Carreras() {
  return (
    <div className="carreras-page">
      <div className="page-header">
        <div className="container">
          <h1>Organización de Carreras</h1>
          <p>Virtual Bike organiza eventos de ciclismo para la comunidad amateur y clubes de Chile</p>
        </div>
      </div>

      {/* Descripción */}
      <section className="section container">
        <div className="carreras-intro reveal">
          <h2 className="section-title">¿Qué organizamos?</h2>
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
      </section>

      {/* Galería */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title reveal">Galería de eventos</h2>
          <div className="carreras-gallery">
            <div className="gallery-item reveal">
              <img src={foto1} alt="Clásica Virtual Bike" />
              <span className="gallery-caption">Clásica Virtual Bike</span>
            </div>
            <div className="gallery-item reveal">
              <img src={foto2} alt="Clásica Virtual Bike" />
              <span className="gallery-caption">Clásica Virtual Bike</span>
            </div>
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
