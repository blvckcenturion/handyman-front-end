import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Heading from '../components/Heading'

const Login = () => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-page">
            <Heading title={ "Login" }/>
            <div className="login-page-card">
                <h1>Inicia Sesion</h1>
                <form>
                    <div className="login-form-input">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="mail" id="usermail" required placeholder="Correo Electronico"  onChange={(e) => setMail(e.target.value)} value={ mail }/>
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faUnlockAlt} />
                        <input type="password" id="query" required placeholder="Contraseña"  onChange={(e) => setPassword(e.target.value)} value={ password }/>
                    </div>
                    <button>Iniciar Sesion</button>
                </form>
            </div>
        </div>
    )
}

export default Login
