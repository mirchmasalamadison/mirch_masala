import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Navbar2 from '../Navbar/Navbar2'
// import Footer from '../Footer/FooterOverlay'
import { Outlet } from 'react-router-dom'
import Location from '../Location/Location'

const Layout = () => {
  return (
    <div className='App'>
        {/* <Navbar/> */}
        <Navbar2/>
        <Location/>
        <div className='page'>
            <Outlet/>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Layout
