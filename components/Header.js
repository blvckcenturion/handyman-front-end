import { useState } from 'react'
import Link from 'next/link'
import useWindowSize from '../utils/useWindowSize'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    const { width, height } = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-title">
                    <Link href="/">
                        <a>
                            HANDYMAN
                        </a>
                    </Link>
                </div>
                <div className="header-nav-toggler">
                    <FontAwesomeIcon icon={faPlus} onClick={ () => setIsOpen(!isOpen)}/>
                </div>
            </div>
            { isOpen && <NavLinks /> }
        </div>
    )
}

export default Header


const NavLinks = () => {

    const { width, height } = useWindowSize()

    return (
        <div className="navigation" style={{width, height}}>
            <Link href="/categories">
                <a>
                Categorias  
                </a>
            </Link>
            <Link href="/login">
                <a>
                    Inicia Sesion
                </a>
            </Link>
            <Link href="/register">
                <a>
                    Ofrece tus Servicios
                </a>
            </Link>
        </div>
    )
}
