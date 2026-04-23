import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Premios from './components/Premios'
import Inscripcion from './components/Inscripcion'
import Patrocinadores from './components/Patrocinadores'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Premios />
      <Inscripcion />
      <Patrocinadores />
      <Footer />
    </div>
  )
}
