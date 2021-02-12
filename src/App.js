import React from "react"
import "./App.css"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom"

import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection/Index"
import { triviappObj, futFriendsObj, proTaskObj, netflixObj } from "./components/InfoSection/Data"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import About from "./components/About"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Skills />

        <InfoSection {...futFriendsObj} />
        <InfoSection {...proTaskObj} />
        <InfoSection {...triviappObj} />
        <InfoSection {...netflixObj} />

        <About />
        
        <Contact />

        <Footer />
      </Router>
    </>
  )
}

export default App
