import { useEffect, useState } from 'react'
import { getTeamMembers, getTeamResults, getTeamSponsors } from '../services/api'
import type { TeamMember, RaceResult, Sponsor } from '../types'
import { formatDate, ordinalPosition } from '../utils/format'
import './Equipo.css'

export default function Equipo() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [results, setResults] = useState<RaceResult[]>([])
  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  useEffect(() => {
    getTeamMembers().then((r) => setMembers(r.data.members))
    getTeamResults().then((r) => setResults(r.data.results))
    getTeamSponsors().then((r) => setSponsors(r.data.sponsors))
  }, [])

  return (
    <div className="equipo-page">
      <div className="page-header">
        <div className="container">
          <h1>Team Virtual Bike</h1>
          <p>Ciclistas apasionados, resultados reales — negro, azul y amarillo en cada pedalada</p>
        </div>
      </div>

      {/* Team members */}
      <section className="section container">
        <h2 className="section-title reveal">Integrantes</h2>
        <div className="team-grid">
          {members.map((m) => (
            <div key={m.id} className="rider-card reveal">
              <div className="rider-photo">
                <img src={m.photo_url || 'https://placehold.co/300x300/080f1e/D4FF00?text=VBK'} alt={m.name} />
              </div>
              <div className="rider-info">
                <h3>{m.name}</h3>
                <span className="badge badge-blue">{m.role}</span>
                {m.bio && <p>{m.bio}</p>}
                {m.instagram_url && (
                  <a href={`https://instagram.com/${m.instagram_url.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="instagram-link">
                    {m.instagram_url}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      {results.length > 0 && (
        <section className="section section-alt" id="resultados">
          <div className="container">
            <h2 className="section-title reveal">Resultados destacados</h2>
            <div className="results-table reveal">
              <table>
                <thead>
                  <tr>
                    <th>Posición</th>
                    <th>Carrera</th>
                    <th>Fecha</th>
                    <th>Corredor</th>
                    <th>Categoría</th>
                    <th>Ubicación</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr key={r.id}>
                      <td>
                        <span className={`position-badge pos-${r.position}`}>
                          {ordinalPosition(r.position)}
                        </span>
                      </td>
                      <td className="race-name">{r.race_name}</td>
                      <td>{formatDate(r.date)}</td>
                      <td>{r.rider_name}</td>
                      <td>{r.category}</td>
                      <td>{r.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Sponsors */}
      {sponsors.length > 0 && (
        <section className="section container" id="sponsors">
          <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Nuestros sponsors</h2>
          <div className="sponsors-grid reveal">
            {sponsors.map((s) => (
              s.website_url ? (
                <a key={s.id} href={s.website_url} target="_blank" rel="noopener noreferrer" className={`sponsor-card tier-${s.tier}`}>
                  <img src={s.logo_url} alt={s.name} />
                </a>
              ) : (
                <div key={s.id} className={`sponsor-card tier-${s.tier}`}>
                  <img src={s.logo_url} alt={s.name} />
                </div>
              )
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
