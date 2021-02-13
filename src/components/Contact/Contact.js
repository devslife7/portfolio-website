import { Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import './Contact.css'

export default function Contact() {
  return (
    <>
      <Container className='contact'>
        <Grid container direction='column'>
          <Typography variant='h4' className="contact__typography">
            Contact
          </Typography>
          <Typography variant='subtitle1' className="contact__typography">
            Marcos Velasco
          </Typography>
          <Typography variant='subtitle1' className="contact__typography">
            Alexandria, VA
          </Typography>
          <Typography variant='subtitle1' className="contact__typography">
            Send me a message: devslife7@gmail.com
          </Typography>
        </Grid>
      </Container>
    </>
  )
}
