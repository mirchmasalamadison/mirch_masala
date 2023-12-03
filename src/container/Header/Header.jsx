import React from 'react';

// import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="app__header app__wrapper section__padding" >
    <div className="app__wrapper_info">
      <p className='app__subtitle'> Colorful, Fragrant, Delicious</p>
      <img src={images.spoon} alt="spoon_image" className="spoon__img" />
      {/* <SubHeading title="Fragrant, Colorful, Delicious" /> */}
      <h1 className="app__header-h1">A Savory Culinary Experience</h1>
      <p className='app__header_text'>
        Bringing the fabulous flavors of South Asia to Madison, Wisconsin
      </p>
      <button type='button' className='app__header-button' >
      <Link 
          activeclassname="active"
          to="/menu"
          className='header__button-link'
          >
           Explore Menu
        </Link>
      </button>
      {/* <button type="button" className="custom__button" >
      <Link 
          activeclassname="active"
          to="/menu"
          className='header__button-link'
          >
           Explore Menu
        </Link>
      </button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;