import { Grid } from "@material-ui/core"
import React from "react"
import "./App.css"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Projects from "./components/Projects"

function App() {
  return (
    <Grid container direction='column' className='App'>
      <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
        <Header />
      </Grid>
      <Grid item style={{ height: "40rem" }}>
        <Projects />
      </Grid>
      <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
        <Contact />
      </Grid>
    </Grid>
  )
}

export default App
