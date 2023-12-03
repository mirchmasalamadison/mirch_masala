import React, { useState } from 'react';
import { RiMenu5Line } from 'react-icons/ri'
import { MdOutlineRestaurantMenu, MdPhonelinkRing } from 'react-icons/md'
import './Navbar2.css'
import {Link, NavLink} from 'react-router-dom'
import { images } from '../../constants';



const Navbar2 = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav>

    <div className='nav__logo'>
        <Link className='nav__logo-link' to='/'>
          <img className='nav__logo-image' src={images.mirchLogo} alt='Mirch Masala Logo' />
             {/* <h1 className='nav__logo-name'>Mirch Masala</h1> */}
        </Link>

     </div>

    <div className='nav__big-screen_links'>
   
    <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          className='nav__link'
          >
            Home
        </NavLink>
        {/* <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/about"
          className='nav__link'
          >
          About
        </NavLink> */}
        <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/menu"
          className='nav__link'
          >
           Menu
        </NavLink>
        <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/buffet"
          className='nav__link'
          >
           Buffet
        </NavLink>
        {/* <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/contact"
          className='nav__link'
          >
           Contact
        </NavLink> */}

    </div>

    <div className='nav__small-screen'>
    <a href="tel:(608) 203-5387" className='nav__small-screen_phone'>
        <MdPhonelinkRing fontSize={27} className="nav__small-screen_phone-icon" />
        </a>
        <RiMenu5Line className='nav__small-screen_menu' onClick={() => setToggleMenu(true)} />

        {
            toggleMenu && (
                <div className="nav__small-screen_overlay flex__center slide-bottom">
                     <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                     <div className="nav__small-screen_links" >
            <NavLink 
                exact="true"
                activeclassname="active"
                to="/"
                className='nav__small-screen_link'
                onClick={() => setToggleMenu(false)}
                >
                  Home
              </NavLink>
              {/* <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/about"
                className='nav__small-screen_link'
                onClick={() => setToggleMenu(false)}
                >
                About
              </NavLink> */}
              <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/menu"
                className='nav__small-screen_link'
                onClick={() => setToggleMenu(false)}
                >
                Menu
              </NavLink>
              <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/buffet"
                className='nav__small-screen_link'
                onClick={() => setToggleMenu(false)}
                >
                Buffet
              </NavLink>
              {/* <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/contact"
                className='nav__small-screen_link'
                onClick={() => setToggleMenu(false)}
                >
                Contact
              </NavLink> */}
              </div>
                </div>
            )}
    </div>

    </nav>

  )
}

export default Navbar2
