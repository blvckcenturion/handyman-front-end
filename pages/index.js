import Header from '../components/Header'
import { AVAILABLE_CITIES } from '../utils/dummyData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div className="index-page">
      <div className="search-box">
        <div className="search-box-title">
          <h1>ENCUENTRA PROFESIONALES CAPACITADOS EN TU AREA</h1>
        </div>
        <div className="search-box-description">
          <p>Obtenga ayuda en la casa de un profesional de confianza. Desde trabajos de mantenimiento y montaje de muebles hasta mudanzas, jardinería y más.</p>
        </div>
        <form className="search-box-form">
          <div>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            <input type="text" id="query" required placeholder="ej: Plomero" />
          </div>
          <select name="city" id="city">
          {AVAILABLE_CITIES.map((city, i) => <option key={i} value={city}>{ city}</option>)}
          </select>
          <button>Consigue ayuda hoy</button>
        </form>
      </div>
    </div>
  )
}
