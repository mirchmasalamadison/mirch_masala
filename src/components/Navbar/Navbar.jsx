import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import images from '../../constants/images';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">

        {/* Logo Link, use app__logo for css match */}
      <Link className='logo' to='/'>
        <h1 style={{color: "white"}}>Mirch Masala</h1>
      {/* <img src={LogoS} alt='logo' /> */}
      </Link>
        {/* <img src={images.gericht} alt="app__logo" /> */}
      </div>
      <div className='app__navbar-links' >
      <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          className='p__opensans'
          >
            Home
        </NavLink>
        <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/about"
          className='p__opensans'
          >
          About
        </NavLink>
        <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/menu"
          className='p__opensans'
          >
           Menu
        </NavLink>
        <NavLink 
          activeclassname="active"
          // className="about-link"
          to="/contact"
          className='p__opensans'
          >
           Contact
        </NavLink>
        </div>
      {/* <ul className="app__navbar-links">
         <li className="p__opensans"><a href="#home">Home</a></li> 
         <li className="p__opensans"><a href="#about">About</a></li> 
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul> */}
      {/* <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <div className="app__navbar-smallscreen_links" >
            <NavLink 
                exact="true"
                activeclassname="active"
                to="/"
                className='dropdown_links'
                onClick={() => setToggleMenu(false)}
                >
                  Home
              </NavLink>
              <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/about"
                className='dropdown_links'
                onClick={() => setToggleMenu(false)}
                >
                About
              </NavLink>
              <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/menu"
                className='dropdown_links'
                onClick={() => setToggleMenu(false)}
                >
                Menu
              </NavLink>
              <NavLink 
                activeclassname="active"
                // className="about-link"
                to="/contact"
                className='dropdown_links'
                onClick={() => setToggleMenu(false)}
                >
                Contact
              </NavLink>
              </div>
            {/* <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;