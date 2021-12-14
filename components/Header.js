import { useState, useEffect } from 'react'
import Link from 'next/link'
import useWindowSize from '../utils/useWindowSize'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'

const Header = () => {
    const { width, height } = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline()
        console.log('gay')
        const openNav = { duration: 0.5, opacity: 1, display:'flex', scale: 1}
        const closedNav = { opacity: 0, display: 'none', scale: 0.1}
        if (!isOpen) {
            tl.fromTo('.navigation', closedNav, openNav)
        } else {
            tl.fromTo('.navigation', openNav, closedNav)
        }

    }

    useEffect(() => {
        const tl = gsap.timeline()
        tl
            .fromTo('.header', { opacity:0, scaleX: 0}, { duration: 1, opacity: 1, scaleX: 1, delay: 0.5})
            .fromTo('.header-title a', { opacity: 0, y: 150, skewX: 50 }, { duration: 1, opacity: 1, y: 0, skewX: 0 })
            .fromTo('.header-nav-toggler', { opacity: 0, rotate: 80 }, { duration: 1, opacity: 1, y: 0, rotate: 0 })
        }, [])

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
            <NavLinks setIsOpen={ handleClick}/>
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
