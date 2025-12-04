import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import Footer from './components/FooterSection'
import { CartSidebar } from './components/CartSidebar'
import Contact from './components/ContactSection'


const App = () => {
  return (

    <div>
      <Navbar/>
      <HeroSection/>
      <MenuSection/>
      <CartSidebar/>
      <AboutSection/>
      <Footer/>
      
    </div>

  )
}

export default App
