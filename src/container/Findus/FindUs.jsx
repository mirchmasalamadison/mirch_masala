import React from 'react';
import './FindUs.css'
// import { SubHeading } from '../../components';
// import { images } from '../../constants';

const FindUs = () => (

  <>
  <div className='findus__header'> <h1>Find Us</h1> </div>
  <div className="findus__container app__wrapper section__padding" >
  
    <div className="findus_info">
   
      {/* <img src={images.spoon} alt="spoon_image" className="spoon__img" /> */}
      <div className="findus__content">
      <p className='findus__subtitle_location'>Location</p>
        <p className="findus__address">439 Grand Canyon Drive <br/>Madison, WI 53719</p>
        <p className="findus__subtitle_hours" >Hours</p>
        {/* <img src={images.spoon} alt="spoon_image" className="spoon__img" /> */}
        <p className="findus__time"><strong>Tuesday - Saturday: </strong> 11:30 AM - 09:30 PM</p>
        <p className="findus__time"><strong>Sunday: </strong> 9:00 AM - 09:30 PM</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="findus__map">
      {/* <img src={images.findus} alt="finus_img" /> */}
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.7987869975752!2d-89.49630034865798!3d43.05836305902823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807af4540af43d5%3A0x76a6b4d70053914c!2sMirch%20Masala!5e0!3m2!1sen!2sus!4v1684418205480!5m2!1sen!2sus" 
      width="800" 
      title="findus"
      height="450" allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  </>
);

export default FindUs;

