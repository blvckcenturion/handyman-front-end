import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHandSpock,  } from "@fortawesome/free-regular-svg-icons"
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"
import Heading from '../components/Heading'

const Myprofile = () => {
    
    return (
        <>
            <div className="myprofile-page">
            <Heading title={"Mi perfil"}/>
            <h1>MI PERFIL</h1>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <h3>Editar Perfil.</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHandSpock} className="icon" />
                    <h3>Opiniones Sobre Mi.</h3>
                    
                </div>
                <div>
                    <FontAwesomeIcon icon={faCameraRetro} className="icon" />
                    <h3>Subir Fotografias.</h3>
                </div>
            </div>
        </div>
    
        </>
    )
}

const Overlay = ({children, isOpen}) => {
    return isOpen ? (
        <div className="overlay">
            <div className="overlay-content">
                {children}
            </div>
        </div>
    ) : null
}

export default Myprofile
