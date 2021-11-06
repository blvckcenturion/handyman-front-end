import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Login = () => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-page">
            <div className="login-page-card">
                <div className="login-page-card-header">
                    <h1>Inicia Sesion.</h1>
                </div>
                <div className="login-page-card-body">
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
        </div>
    )
}

export default Login
