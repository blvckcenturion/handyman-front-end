import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHandSpock,  } from "@fortawesome/free-regular-svg-icons"
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons"

const Myprofile = () => {
    
    return (
        <>
        <div className="myprofile-page">
            <h1>MI PERFIL</h1>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <h3>Editar Perfil.</h3>
                    <Overlay isOpen={false}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nombre</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Apellido</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Apellido" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha de Nacimiento</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Fecha de Nacimiento" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirmar Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirmar Contraseña" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Foto de Perfil</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Foto de Perfil" />
                        </div>
                    </Overlay>
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
        <Overlay isOpen={true}>
            <h1>Hola</h1>
        </Overlay>
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
