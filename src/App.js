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
          <span>Ruby</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='ruby logo' />
          <span>Rails</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='rails logo' />
          <span>Postgress</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='postgress logo' />
          <span>SQL</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='sql logo' />
          <span>Javascript (ES6)</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='javascript logo' />
          <span>Rails</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='rails logo' />
          <span>Redux</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='redux logo' />
          <span>Thunk</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='thunk logo' />
          <span>Heroku</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='heroku logo' />
          <span>HTML</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='html logo' />
          <span>CSS</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='css logo' />
          <span>Git</span>
          <img style={{ width: "50px" }} src={require("./images/ruby-logo.png")} alt='git logo' />
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
