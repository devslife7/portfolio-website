import { Container, Grid, Typography } from "@material-ui/core"
import React from "react"

export default function Contact() {
  return (
    <>
      <Container>
        <Grid container direction='column'>
          <Typography variant='h4' style={{ marginTop: "4rem" }}>
            Contact
          </Typography>
          <Typography variant='subtitle1' style={{ marginTop: "4rem" }}>
            Marcos Velasco
          </Typography>
          <Typography variant='subtitile1' style={{ marginTop: "4rem" }}>
            Alexandria, VA
          </Typography>
          <Typography variant='subtitile1' style={{ marginTop: "4rem" }}>
            devslife7@gmail.com
          </Typography>
        </Grid>
      </Container>
    </>
  )
}
