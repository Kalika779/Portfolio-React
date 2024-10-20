import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
 return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Contact />
    <Footer />
  </div>
 )
}

export default App
