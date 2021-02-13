import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { triviappObj, futFriendsObj, proTaskObj, netflixObj } from "./components/InfoSection/Data"
import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection/Index"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

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
