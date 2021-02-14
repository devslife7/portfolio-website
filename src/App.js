import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Skills />

        <Projects />

        <About />

        <Contact />

        <Footer />
      </Router>
    </>
  )
}

export default App
