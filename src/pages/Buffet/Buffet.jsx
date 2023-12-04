import React from 'react'
import './Buffet.css'
import { images } from '../../constants';


const Buffet = () => {
  return (
    <>
            <div className='buffet__header'> <h1>Buffet</h1> </div>
            <div className="buffet__container" >
            <div className="buffet__invite">
            <p className='app__subtitle'> Lunch Buffet Everyday!</p>
      <img src={images.spoon} alt="spoon_image" className="spoon__img" />
      <div className="buffet__text">
            <p className='buffet__subtitle'>
                Come enjoy our Lunch Buffet during all our opening days!
            </p>
            <h3 className='buffet__time'>
                Tuesday - Sunday <br/>
            11:30AM - 3:30PM
            </h3>
            </div>
      </div>

      <div className="buffet__image-container">
            <img src={images.welcome} className='buffet__image' alt="buffet" />
            </div>
      
      </div>

            {/* <div className='buffet__container app__wrapper section__padding'>

            <div className="buffet__text">
            <p className='buffet__invite'>
                Come enjoy our Lunch Buffet during all our opening days!
            </p>
            <h3 className='buffet__time'>
                Tuesday - Sunday <br/>
            11:30AM - 3:30PM
            </h3>
            </div>
            <div className="buffet__image-container">
            <img src={images.welcome} className='buffet__image' alt="buffet" />
            </div>
            </div> */}


            {/* <FindUs /> */}


    </>
  )
}

export default Buffet
