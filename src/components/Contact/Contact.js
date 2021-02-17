import React from "react"
import './Contact.css'
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

export default function Contact() {
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
          
          <form action="#">
            <div className="contact__fields">
              <div className="contact__fieldName">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="contact__fieldEmail">
                <input type="email" placeholder="Email" required />
              </div>
            </div>
                        
            <div className="contact__fieldSubject">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="contact__fieldTextarea">
              <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
            </div>
            <div className="contact__button">
              <button type="submit">Send message</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}
