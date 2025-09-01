import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Hero/>
    <Section />
    <Footer/>
    </>
  )
}

export default App
