/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Rating from '../../components/Rating'
import Heading from '../../components/Heading'

const Profile = () => {
    return (
        <div className="profile-page">
            <Heading title={"Pagina de perfil"}/>
            <div className="profile-page-basic-info">
                <div className="profile-page-basic-info-img">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </div>
                <div className="profile-page-basic-info-cont">
                    <h1>CARLOS SANTANA</h1>
                    <h3>10 años de experiencia</h3>
                    <p>Hola! mi nombre es Carlos, estoy en el campo de la fontaneria hace ya bastante tiempo, tengo bastantes habilidades y estoy seguro que puedo ayudarte a resolver todos tus problemas de fontaneria.</p>
                    <div>
                        <p>Precio por Hora: 100BOB</p>
                        <button>Contratar a Carlos</button>
                        <button><FontAwesomeIcon icon={ faWhatsapp}/> Enviar Mensaje</button>
                    </div>
                </div>
            </div>
            <div className="profile-page-work-desc">
                <h2>SERVICIOS QUE REALIZA</h2>
                <p>Tengo más de 10 años de experiencia brindando servicios de fontaneria excepcionales a una variedad de clientes / clientas. Garantizado para brindar un alto nivel de profesionalismo, confiabilidad y puntualidad, realizo distintos tipos de trabajos, incluyendo mantenimiento, instalacion, entre otros</p>
            </div>
            <div className="profile-page-previous-work">
                <h2>TRABAJOS PREVIOS DE CARLOS SANTANA</h2>
                <div>
                    <PreviousWorkCard/>
                    <PreviousWorkCard />
                    <PreviousWorkCard />
                    <PreviousWorkCard />
                    <PreviousWorkCard/>
                </div>
            </div>
            <div className="profile-page-reviews">
                <div className="profile-page-reviews-opt">
                    <div>
                        <h2>Opiniones sobre Carlos</h2>
    
                    </div>
                    <button>Dejar Opinion</button>
                </div>
                <div className="profile-page-reviews-indv">
                    <Review/>
                    <Review />
                    <Review/>
                    <Review/>
                </div>
            </div>
        </div>
    )
}

const PreviousWorkCard = () => {
    return (
        <div className="previous-work-card">
            <img src="https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <h4>Cambio de tuberias</h4>
        </div>
    )
}

const Review = () => {
    return (
        <div className="review-entry">
            <div>
                <h4>JANE DOE</h4>
                <p> 25-07-2021</p>
                <Rating rating={4}></Rating>
            </div>
            <div>
                <p>Carlos es un profesional que opera con exelencia, sin lugar a dudas que me ayudo a solucionar todos mis problemas, no pensaba que podia conseguir este tipo de profesionales en la ciudad pero ahora me doy cuenta que hay demasiado potencial en estos chicos jovenes que no necesariamente conozco pero tanto carlos como la plataforma me dieron mucha confianza.</p>
            </div>
        </div>
    )
}

export default Profile
