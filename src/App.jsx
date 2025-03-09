import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Services from './pages/Services'
import Moto from './pages/Moto'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Moto />
      <Contact />
    </>
  )
}

export default App
