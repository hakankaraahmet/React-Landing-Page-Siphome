import React from 'react'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Update from './components/update/Update'

const App = () => {
  return (
    <div className="app">
      <div className="firstpage">
      <Navbar/>
      <Hero/>
      </div>
      <Features/>
      <Update/>
    </div>
  )
}

export default App

