import { useState } from 'react'
import Link from 'next/link'
import useWindowSize from '../utils/useWindowSize'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    const { width, height } = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

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
                    <FontAwesomeIcon icon={faPlus} onClick={ handleClick }/>
                </div>
            </div>
            {isOpen && <NavLinks setIsOpen={ handleClick}/> }
        </div>
    )
}

export default Header


const NavLinks = ({setIsOpen}) => {

    const { width, height } = useWindowSize()

    return (
        <div className="navigation" style={{width, height}}>
            <Link href="/categories" >
                <a onClick={setIsOpen}>
                Categorias  
                </a>
            </Link>
            <Link href="/login">
                <a onClick={setIsOpen}>
                    Inicia Sesion
                </a>
            </Link>
            <Link href="/register">
                <a onClick={setIsOpen}>
                    Ofrece tus Servicios
                </a>
            </Link>
        </div>
    )
}
