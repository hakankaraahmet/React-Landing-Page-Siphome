import React from 'react'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Update from './components/update/Update'
import Services from "./components/services-page/Services"
import Testimonals from "./components/testimonals/Testimonals"
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div className="app">
      <div className="firstpage">
      <Navbar/>
      <Hero/>
      </div>
      <Features/>
      <Update/>
      <div className="gradient">
        <Services/>
        <Testimonals/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

