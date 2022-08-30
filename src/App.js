import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Router>
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebarOpen} />
        <Navbar toggle={toggleSidebarOpen} />
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
