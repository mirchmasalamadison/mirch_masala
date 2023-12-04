import React from 'react'
import './Location.css'


const Location = () => {
  return (
    <div className='location__container'>
        <div className='location__address'>
        <a href="https://goo.gl/maps/qKTX42Lk8WsYzzMN8"
            className='location__address-link'
            target="_blank" rel="noreferrer"
        >439 Grand Canyon Drive, Madison, WI 53719
        </a>
        </div>

        <div className='location__phone'>
        <a href="tel:(608) 203-5387" className='location__phone'>
        (608) 203-5387
        {/* <MdPhonelinkRing className="nav__small-screen_phone-icon" /> */}
        </a>
        
        </div>
      
    </div>
  )
}

export default Location
