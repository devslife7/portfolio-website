import { Container, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"

export default function Projects() {
  return (
    <>
      <Container>
        <Typography variant='h4' style={{ margin: "4rem 0" }}>
          Projects
        </Typography>

        <Grid container justify='space-around'>
          <Paper style={{ width: "20rem", height: "20rem" }}>Triviapp</Paper>
          <Paper style={{ width: "20rem", height: "20rem" }}>FutFriends</Paper>
          <Paper style={{ width: "20rem", height: "20rem" }}>ProjectManager</Paper>
        </Grid>
      </Container>
    </>
  )
}
