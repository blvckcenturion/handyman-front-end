import { useState } from 'react';
import Header from '../components/Header'
import { AVAILABLE_CITIES } from '../utils/dummyData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export default function Home() {
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?${search}`);
  }

  return (
    <div className="index-page">
      <div className="search-box">
        <div className="search-box-title">
          <h1>ENCUENTRA PROFESIONALES CAPACITADOS EN TU AREA</h1>
        </div>
        <div className="search-box-description">
          <p>Obtenga ayuda en la casa de un profesional de confianza. Desde trabajos de mantenimiento y montaje de muebles hasta mudanzas, jardinería y más.</p>
        </div>
        <form className="search-box-form" onSubmit={ handleSubmit }>
          <div>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            <input type="text" id="query" required placeholder="ej: Plomero" onChange={(e) => setSearch(e.target.value)} value={ search }/>
          </div>
          <select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
          {AVAILABLE_CITIES.map((city, i) => <option key={i} value={city}>{city}</option>)}
          </select>
          <button >Consigue ayuda hoy</button>
        </form>
      </div>
    </div>
  )
}
