import { Grid, Typography } from "@material-ui/core"
import React from "react"
import "./App.css"
import Header from "./components/Header"

function App() {
  return (
    <Grid container direction='column' className='App'>
      <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
        <Typography variant='h3'>Marcos Velasco</Typography>
      </Grid>
      <Grid item style={{ height: "40rem" }}>
        <Typography variant='h3'>Projects</Typography>
      </Grid>
      <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
        <Typography variant='h3'>Contact</Typography>
      </Grid>
    </Grid>
  )
}

export default App
