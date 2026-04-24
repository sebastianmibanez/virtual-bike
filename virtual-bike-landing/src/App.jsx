import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inscripcion from './components/Inscripcion'
import DiaCarrera from './components/DiaCarrera'
import PremiosDinero from './components/PremiosDinero'
import Premios from './components/Premios'
import Patrocinadores from './components/Patrocinadores'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Inscripcion />
      <DiaCarrera />
      <PremiosDinero />
      <Premios />
      <Patrocinadores />
      <Footer />
      <StickyCTA />
    </div>
  )
}
