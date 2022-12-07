import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './layouts/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
// import axios from 'axios'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    console.log('renders App on mount')
  }, [])

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
