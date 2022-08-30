import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
// const axios = require('axios')

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    console.log('renders App on mount')
    fetch(`${process.env.REACT_APP_SERVER_URL}/wakeup`)
      .then(resp => resp.json())
      .then(data => console.log(data.message))
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
