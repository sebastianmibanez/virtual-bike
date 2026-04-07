import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts, getCategories } from '../services/api'
import ProductCard from '../components/store/ProductCard'
import type { Product, Category } from '../types'
import heroImg1 from '../assets/Equipo/virtual-bike2.jpg'
import heroImg2 from '../assets/Equipo/virtual-bike5.jpg'
import heroImg3 from '../assets/Equipo/virtual-bike7.jpg'
import './Home.css'

const heroImages = [heroImg1, heroImg2, heroImg3]

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    getProducts({ page: 1 }).then((r) => setFeatured(r.data.products.slice(0, 4)))
    getCategories().then((r) => setCategories(r.data.categories))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}>
        <div className="hero-content container">
          <span className="hero-tag reveal">Equipo · Club · Tienda</span>
          <h1 className="reveal">Pedalea con los<br />mejores. Viste con <span>Virtual Bike.</span></h1>
          <p className="reveal">Ropa técnica de alto rendimiento y accesorios para ciclistas que compiten en serio.</p>
          <div className="hero-ctas reveal">
            <Link to="/tienda" className="btn btn-accent">Ver tienda</Link>
            <Link to="/equipo" className="btn btn-outline-white">Conoce el equipo</Link>
          </div>
        </div>
        <div className="hero-overlay" />
      </section>

      {/* Categories */}
      <section className="section container">
        <h2 className="section-title reveal">Explora por categoría</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/tienda?category=${cat.slug}`} className="category-card reveal">
              <div className="category-icon">
                {cat.slug === 'ropa' ? '👕' : cat.slug === 'repuestos' ? '⚙️' : '🪖'}
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Productos destacados</h2>
            <Link to="/tienda" className="btn btn-outline">Ver todos</Link>
          </div>
          <div className="products-grid">
            {featured.map((p) => (
              <div key={p.id} className="reveal">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="team-cta">
        <div className="container team-cta-inner">
          <div className="reveal">
            <h2>Más que una tienda.</h2>
            <p>Somos un equipo de ciclismo activo que compite a nivel nacional bajo los colores de Virtual Bike. Únete al club y entrena con los mejores.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/equipo" className="btn btn-accent">Conoce al equipo</Link>
              <Link to="/contacto" className="btn btn-outline-white">Únete al club</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section container">
        <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Por qué elegirnos?</h2>
        <div className="features-grid">
          {[
            { icon: '🏆', title: 'Calidad probada', desc: 'Usamos lo que vendemos. Cada producto está seleccionado por nuestros ciclistas.' },
            { icon: '🚚', title: 'Envío a todo Chile', desc: 'Despacho rápido y seguro. Seguimiento en tiempo real de tu pedido.' },
            { icon: '🛠️', title: 'Asesoría técnica', desc: '¿Dudas con los componentes? Nuestro equipo te ayuda a elegir lo mejor.' },
            { icon: '💳', title: 'Pago seguro', desc: 'MercadoPago integrado. Paga con débito, crédito o transferencia.' },
          ].map((f) => (
            <div key={f.title} className="feature-card reveal">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
