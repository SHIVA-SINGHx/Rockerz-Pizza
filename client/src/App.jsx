import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'


const App = () => {
  return (

    <div>
      <Navbar/>
      <HeroSection/>
      <MenuSection/>
      <AboutSection/>
    </div>

  )
}

export default App
