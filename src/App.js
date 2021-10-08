import React from 'react'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  )
}

export default App

