import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'


const App = () => {
  return (

    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  //  <Routes>
  //   <Route path='/' element= {<Navbar/>} />

  //  </Routes>
  )
}

export default App
