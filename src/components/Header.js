import { Avatar, Container, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"

export default function Header() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={6} container justify='center'>
            <Grid container direction='column' alignItems='flex-start'>
              <Typography variant='subtitle1' style={{ marginTop: "4rem" }}>
                Hello, I'm
              </Typography>
              <Typography variant='h3' style={{ margin: "1rem 0" }}>
                Marcos Velasco
              </Typography>
              <Typography variant='subtitle1'>A Full Stack Software Developer</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} container justify='center'>
            {/* <Paper style={{ margin: "4rem 0", height: "5rem" }}>Picture</Paper> */}
            <Avatar
              alt='Marcos Velasco'
              // src='/static/images/avatar/1.jpg'
              style={{ width: "15rem", height: "15rem", margin: "4rem 0" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
