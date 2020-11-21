// import { Grid } from "@material-ui/core"
import React from "react"
import "./App.css"
// import Contact from "./components/Contact"
// import Header from "./components/Header"
// import Projects from "./components/Projects"
// import background1 from "./images/background1.jpg"

import HeroSection from "./components/HeroSection"

function App() {
  return (
    <>
      <HeroSection />

      {/* <Grid container direction='column' className='App'>
      <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
        <img src={require("./images/svg-1.svg")} alt='background' />
        <Header />
      </Grid>
      <Grid item style={{ height: "40rem" }}>
        <Projects />
      </Grid>
      <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
        <Contact />
      </Grid>
    </Grid> */}
    </>
  )
}

export default App
