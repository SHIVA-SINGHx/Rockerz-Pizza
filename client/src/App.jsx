import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import Footer from './components/FooterSection'


const App = () => {
  return (

    <div>
      <Navbar/>
      <HeroSection/>
      <MenuSection/>
      <AboutSection/>
      <Footer/>
    </div>

  )
}

export default App
