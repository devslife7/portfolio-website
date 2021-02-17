import React, { useState } from "react"
import './Contact.css'
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import MuiAlert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Contact() {
  const [snackOpen, setSnackOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs.sendForm('service_o753f7s', 'template_dg1h7vq', e.target, 'user_fGVSXEIS9yWRUzLBPtd5K')
    //   .then((resp) => {
    //     if (resp.status === 200) {
    //       setSnackOpen(true)
    //     }
    //   }, (error) => {
    //     console.log(error.text)
    //   })
    //   e.target.reset()

      setSnackOpen(true)
  }

  return (
    <div className='contact'>
      <h2 className='contact__title'>Contact me</h2>

      <div className='contact__content container'>


        <div className='contact__columnLeft'>
          <div className='contact__title2'>
            Get in Touch
          </div>
          <p className='contact__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?
          </p>

          <div className='contact__infoRow'>
            <PersonIcon fontSize='large' className='contact__icon'/>
            <div className='contanct__infoDetails'>
              <h4 className='contact__infoDetailsTitle'>Name</h4>
              <p>Marcos Velasco</p>
            </div>
          </div>

          <div className='contact__infoRow'>
            <LocationOnIcon fontSize='large' className='contact__icon'/>
            <div className='contanct__infoDetails'>
              <h4 className='contact__infoDetailsTitle'>Location</h4>
              <p>Alexandria, VA</p>
            </div>
          </div>

          <div className='contact__infoRow'>
            <EmailIcon fontSize='large' className='contact__icon'/>
            <div className='contanct__infoDetails'>
              <h4 className='contact__infoDetailsTitle'>Email</h4>
              <p>devslife7@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='contact__columnRight'>
          <div className='contact__title2'>
            Message me
          </div>

          <Snackbar
            style={{ top: '100px'}}
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            open={snackOpen}
            onClose={handleSnackClose}
            autoHideDuration={3000}
            message="Message Sent Succesfully"
          >
            <MuiAlert style={{fontSize: '17px'}} elevation={6} severity="success" variant="filled">
              Message Sent Succesfully
            </MuiAlert>
          </Snackbar>
          
          <form onSubmit={sendEmail}>
            <div className="contact__fields">
              <div className="contact__fieldName">
                <input className='contact__input' type="text" placeholder="Name" required name='name'/>
              </div>
              <div className="contact__fieldEmail">
                <input className='contact__input' type="email" placeholder="Email" required name='email'/>
              </div>
            </div>
                        
            <div className="contact__fieldSubject">
              <input className='contact__input' type="text" placeholder="Subject" required name='subject'/>
            </div>
            <div className="contact__fieldTextarea">
              <textarea className='contact__input' cols="30" rows="10" placeholder="Message..." required name='message'></textarea>
            </div>
            <div className="contact__button">
              <button type="submit">
                {/* Send message */}
                <CircularProgress style={{color: '#fff', width: '30px', height: '30px', padding: 'auto'}} />
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}
