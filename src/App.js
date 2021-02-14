import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
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
