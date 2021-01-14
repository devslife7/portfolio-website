import React from "react"
import "./App.css"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom"

import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection/Index"
import { triviappObj, futFriendsObj, proTaskObj, netflixObj } from "./components/InfoSection/Data"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Router>
        <HeroSection />
        <Skills />

        <InfoSection {...netflixObj} />
        <InfoSection {...proTaskObj} />
        <InfoSection {...futFriendsObj} />
        <InfoSection {...triviappObj} />

        <Contact />

        <Footer />
      </Router>
    </>
  )
}

export default App
