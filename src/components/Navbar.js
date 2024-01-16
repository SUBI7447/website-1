import React, { useState } from 'react'
import './Navbar.css'
import './Nav-media.css'
import logo from '../assets/logo.svg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile=window.innerWidth <= 820;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }




    const toggleDropdown = () => {
        if (!isMobile) {
            setIsOpen(!isOpen);
        }
        else{

        }
    };


    return (
        <div>
            {isMobile ? (
                <img className="menu-button" src={logo1} alt="menu button" onClick={toggleMenu} />
            ) : null}
            <div className={`navbar ${menuOpen? 'open' : ''}`}>
                <div className='icon'><img src={isMobile ? logo2 : logo} alt='microsoft logo' /></div>
                <div className='nav-content'>
                    <a className='nav-button'>Home</a>
                    <a className='nav-button'>About</a>
                    <a className='nav-button'>Vision</a>
                    <div className='dropdown'>
                        <a onMouseEnter={toggleDropdown} className='nav-button'>Benefits</a>
                        <div onMouseLeave={toggleDropdown} className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                            <a className='benefit-button '>Developers</a>
                            <a className='benefit-button '>Designers</a>
                            <a className='benefit-button '>Artists</a>
                            <a className='benefit-button '>Gamers</a>
                            <a className='benefit-button end'>Business</a>
                        </div>
                    </div>
                    <a className='nav-button'>Apply</a>
                    <a className='nav-button'>Contact</a>
                </div>
                <div className='icon-content'>
                    <a className='brand-icon'><FontAwesomeIcon icon={faDiscord} /></a>
                    <a className='brand-icon'><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a className='brand-icon'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
