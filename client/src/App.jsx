import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'


const App = () => {
  return (

    <div>
      <Navbar/>
      <HeroSection/>
      <MenuSection/>
    </div>
  //  <Routes>
  //   <Route path='/' element= {<Navbar/>} />

  //  </Routes>
  )
}

export default App
