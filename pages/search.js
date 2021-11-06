/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'
import router, { useRouter } from 'next/router'

const Search = () => {
    return (
        <div className="search-page">
            <h1>6 RESULTADOS DE BUSQUEDA </h1>
            <p>Fontaneria en Cochabamba.</p>
            <div className="search-page-results">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Search


const Card = () => {
    const router = useRouter()
    return (
        <div className="search-card">
            <div className="search-card-image">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </div>
            <div className="search-card-content">
                <h3>Carlos Herrera Santana</h3>
                <p>10 años de experiencia</p>
                <div className="search-card-content-rating">
                    <p>(10)</p>
                    <Rating rating={4}/>
                </div>
                <button className="search-card-content-btn" onClick={() => router.push(`/profile/carlos`)}>
                    Saber mas
                </button>
            </div>
        </div>
    )
}

const Rating = ({rating}) => {

    return (
        <div className="rating">
            {
                [...Array(5)].map((star, i) => rating >= i + 1 ? <FontAwesomeIcon key={i} icon={faStar} /> : <FontAwesomeIcon key={i} icon={faStarOutline} />)
            }
        </div>
    )
}