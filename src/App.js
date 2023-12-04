import React from 'react'
import {Route, Routes} from 'react-router-dom'
// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container'
import { Layout } from './components'
import {Home, Menu, Buffet} from './pages'
import './App.css'

const App = () => {
  return (
    <>

<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           {/* <Route path="/about" element={<About />} /> */}
           <Route path='/menu' element={<Menu />} />
           <Route path="/buffet" element={<Buffet />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>

      
    {/* <Navbar /> */}
    {/* <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs /> */}
    {/* <Footer /> */}
  </>
  )
}

export default App
