import React, { useState, useRef } from 'react'
import './Contact.css'
import ReCAPTCHA from 'react-google-recaptcha'
import PersonIcon from '@material-ui/icons/Person'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import MuiAlert from '@material-ui/lab/Alert'
import emailjs from 'emailjs-com'
import Snackbar from '@material-ui/core/Snackbar'
import CircularProgress from '@material-ui/core/CircularProgress'
const axios = require('axios')

export default function Contact() {
  const [snackOpen, setSnackOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('asdf')
  const [email, setEmail] = useState('asd@asdf')
  const [subject, setSubject] = useState('asdf')
  const [message, setMessage] = useState('asdf')
  const captchaRef = useRef(null)

  const clearForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  const sendEmail = e => {
    e.preventDefault()
    setIsLoading(true)

    // Getting recaptcha value and resetting it
    const token = captchaRef.current.getValue()
    // captchaRef.current.reset()
    // console.log('token: ', token)

    axios.post('http://localhost:2000/post', { token }).then(resp11 => console.log(resp11))

    // const testing =
    //   'https://www.google.com/recaptcha/api/siteverify?secret=6LfUsR4hAAAAALB1HzBKLmhWrArNItA3G9RMEmgD&response=03ANYolqs238GPrpA-O9XMGTgKTOZOBnpzTCdxlVecLkGmENPTbFLpngwOgM5IM2S0S-XGQCBlnKMywMIaRe2ixKNPAyTxb-bY6-hOPZLIjMzXjTFe-8ZUWmH5UUO1hAK1nBP6fr44yzWqYEYwEznLYX5jOHvaISBIt2A-m9XFMNhnlP-HVwJTxmUE2n5FhhYOOFoTdYDhY5coLUS5Mlfl6YEceuoAZAAVyqM9YhDwR0gjRayr5h0jB0UOyoyTyyrJtTx1iTlKOw8xUrNbpMqq2vRHgWuYZ7F-pFIUfua-jXpUmWJ3BvDqcUMFCxokE93vbfatNQSgV1g-dhmH7nkwZT7jVanzBZDeoqWLQJcWYjkTioU1zvFOnpmfZdZo-sDJwQ_A9gJXbi1mflqOdXCzXGaqMEJk5ZD3hbtFM3w5imEtUyVBjUh5xGGuXrS1rtMzXjZvgc4P6eHrYHeGSl_N5_V3sVQ-XH0HSvWTx1VtB7EZnQXZyYgWcoPJwRfCg0jq6BTf2byibopqXjH9t1MgDRy0QcgF6h7Axl6XVb_T9TmVWK5lF5kpDCx_DLH_EJ8UYhtYUj2S02bAsmPx3w4eSwZXVnTnZKXbIA'
    // console.log(googleURL)

    // fetch(googleURL).then(resp => console.log(resp.json()))
    // fetch(testing, { mode: 'no-cors' }).then(resp => console.log(resp))

    // await axios.post(
    //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    //   );

    // fetch(popularLeaguesURL)
    //   .then(resp => resp.json())
    //   .then(popularLeagues => {
    //     dispatch({ type: 'ADD_DISPLAY_LEAGUES', payload: popularLeagues })
    //   })

    // emailjs.sendForm('service_o753f7s', 'template_dg1h7vq', e.target, 'user_fGVSXEIS9yWRUzLBPtd5K').then(
    //   resp => {
    //     if (resp.status === 200) {
    //       setSnackOpen(true)
    //       setIsLoading(false)
    //       clearForm()
    //     }
    //   },
    //   error => {
    //     console.log(error.text)
    //   }
    // )

    setSnackOpen(true)
    setIsLoading(false)
    clearForm()
  }

  return (
    <div className='contact'>
      <h2 className='contact__title'>
        C<span className='theme__span'>on</span>tact
      </h2>

      <div className='contact__content container'>
        <div className='contact__columnLeft'>
          <div className='contact__title2'>Get in Touch</div>
          <p className='contact__text'>
            I'm excited to connect with new people or answer any questions you might have. Easily send me a
            message using the following form including your email, and I will be in touch as soon as possible.
          </p>

          <div className='contact__infoRow'>
            <PersonIcon fontSize='large' className='contact__icon' />
            <div className='contanct__infoDetails'>
              <h4 className='contact__infoDetailsTitle'>Name</h4>
              <p>Marcos Velasco</p>
            </div>
          </div>

          <div className='contact__infoRow'>
            <LocationOnIcon fontSize='large' className='contact__icon' />
            <div className='contanct__infoDetails'>
              <h4 className='contact__infoDetailsTitle'>Location</h4>
              <p>Alexandria, VA</p>
            </div>
          </div>

          <div className='contact__infoRow'>
            <EmailIcon fontSize='large' className='contact__icon' />
            <div className='contanct__infoDetails'>
              <h4 className='contact__infoDetailsTitle'>Email</h4>
              <p>devslife7@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='contact__columnRight'>
          <div className='contact__title3'>Message me</div>

          <Snackbar
            style={{ top: '100px' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={snackOpen}
            onClose={handleSnackClose}
            autoHideDuration={3000}
            message='Message Sent Succesfully'
          >
            <MuiAlert style={{ fontSize: '17px' }} elevation={6} severity='success' variant='filled'>
              Message Sent Succesfully
            </MuiAlert>
          </Snackbar>

          <form onSubmit={sendEmail}>
            <div className='contact__fields'>
              <div className='contact__fieldName'>
                <input
                  className='contact__input'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  placeholder='Name'
                  required
                  name='name'
                />
              </div>
              <div className='contact__fieldEmail'>
                <input
                  className='contact__input'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  placeholder='Email'
                  required
                  name='email'
                />
              </div>
            </div>

            <div className='contact__fieldSubject'>
              <input
                className='contact__input'
                value={subject}
                onChange={e => setSubject(e.target.value)}
                type='text'
                placeholder='Subject'
                required
                name='subject'
              />
            </div>
            <div className='contact__fieldTextarea'>
              <textarea
                className='contact__input'
                cols='30'
                rows='10'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Message...'
                required
                name='message'
              ></textarea>
            </div>

            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />

            <div className='contact__button'>
              <button type='submit'>
                {isLoading ? (
                  <CircularProgress style={{ width: '30px', height: '30px', color: 'inherit' }} />
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
