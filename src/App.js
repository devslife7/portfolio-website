import { Grid } from "@material-ui/core"
import React from "react"
import "./App.css"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Projects from "./components/Projects"
import background1 from "./images/background1.jpg"
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

        <InfoSection {...futFriendsObj} />
        <InfoSection {...proTaskObj} />
        <InfoSection {...triviappObj} />
        <InfoSection {...netflixObj} />

        <InfoSection {...futFriendsObj} />
        <InfoSection {...proTaskObj} />
        <InfoSection {...triviappObj} />
        <InfoSection {...netflixObj} />
        
        <InfoSection {...futFriendsObj} />
        <InfoSection {...proTaskObj} />
        <InfoSection {...triviappObj} />
        <InfoSection {...netflixObj} />

        <div style={{ textAlign: "center" }}>
          <h3>Contact Me</h3>
          <p>Send me a message</p>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
