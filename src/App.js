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
import { homeObjOne } from "./components/InfoSection/Data"

function App() {
  return (
    <>
      <Router>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Grid item style={{ height: "40rem" }}>
          <Projects />
        </Grid>
        <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
          <Contact />
        </Grid>
        <Footer />
      </Router>
    </>
  )
}

export default App
