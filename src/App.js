import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </Router>
    </>
  )
}

export default App
