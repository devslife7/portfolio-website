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

function App() {
  return (
    <>
      <Router>
        <HeroSection />
        <div style={{ textAlign: "center" }}>
          <h3>Skills</h3>
          <p>Ruby, Rails, Postgres, SQL, Javascript (ES6), React, Redux, Thunk, Heroku, HTML, CSS, Git</p>
        </div>

        <InfoSection {...futFriendsObj} />
        <InfoSection {...proTaskObj} />
        <InfoSection {...triviappObj} />
        <InfoSection {...netflixObj} />

        <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
          <Contact />
        </Grid>

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
