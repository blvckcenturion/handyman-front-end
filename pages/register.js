import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { AVAILABLE_CITIES, CATEGORIES } from '../utils/dummyData'

const Register = () => {
    return (
        <div className="register-page">
            <form className="register-form" action="">
                
                <h1>REGISTRATE</h1>
                    <div className="register-form-input">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="mail" id="usermail" placeholder="Correo electronico" required/>
                    </div>
                    <div className="register-form-input">
                        <FontAwesomeIcon icon={faKey} />
                        <input type="password" id="userpassword" placeholder="Contraseña" required />
                    </div>
                    <div className="register-form-input">
                        <FontAwesomeIcon icon={faKey} />
                        <input type="password" id="userrepeatpassword" placeholder="Repetir Contraseña" required />
                    </div>
                    <h2>CUENTANOS SOBRE VOS</h2>
                    <div className="register-form-input-section-2">
                        <label htmlFor="userdesc">Breve descripcion personal</label>
                        <input type="text" id="userdesc" required/>
                    </div>
                    <div className="register-form-input-section-2">
                        <label htmlFor="userpricing">¿Cuanto sueles cobrar por hora? (BOB)</label>
                        <input type="number" id="userpricing"  required />
                    </div>
                    <div className="register-form-input-section-2">
                        <label htmlFor="usercategory">Categoria en la que te desempeñas</label>
                        <select name="category" id="usercategory" required>
                            {CATEGORIES.map((category, i) => <option key={i} value={i}>{category.name}</option>)}
                        </select>
                    </div>
                    <div className="register-form-input-section-2">
                        <label htmlFor="userworkdesc">Describenos que servicios ofreces</label>
                        <input type="text" id="userworkdesc" required/>
                    </div>
                    <div className="register-form-input-section-2">
                        <label htmlFor="userphone">Numero de telefono</label>
                        <input type="number" id="userphone" required/>
                    </div>
                    <div className="register-form-input-section-2">
                    <label htmlFor="usercity">Ciudad</label>
                        <select name="category" id="usercity" required>
                            {AVAILABLE_CITIES.map((city, i) => <option key={i} value={city}>{city}</option>)}
                        </select>
                    </div>
                    <div className="register-form-input-section-2">
                        <label htmlFor="userpic">Foto de perfil</label>
                        <input type="text" id="url" required/>
                    </div>
                    <button>
                        Registrarse
                    </button>
                
            </form>
        </div>
    )
}

export default Register
