import { Container, Grid, Typography } from "@material-ui/core"
import React from "react"

export default function Contact() {
  return (
    <>
      <Container style={{ textAlign: "center"}}>
        <Grid container direction='column'>
          <Typography variant='h4' style={{ margin: "2rem 0" }}>
            Contact
          </Typography>
          <Typography variant='subtitle1' style={{ margin: "2rem 0" }}>
            Marcos Velasco
          </Typography>
          <Typography variant='subtitle1' style={{ margin: "2rem 0" }}>
            Alexandria, VA
          </Typography>
          <Typography variant='subtitle1' style={{ margin: "2rem 0" }}>
            devslife7@gmail.com
          </Typography>
        </Grid>
      </Container>
    </>
  )
}
