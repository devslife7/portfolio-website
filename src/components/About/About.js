import React from 'react'
import './About.css'
import LaunchIcon from '@material-ui/icons/Launch'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaMedium } from 'react-icons/fa'

export default function About() {
  return (
    <div className='about'>
      <div className='about__content container'>
        <h1 className='about__title'>
          Ab<span className='theme__span'>ou</span>t
        </h1>
        {/* <h4 className='about__header'>Hello, I'm Marcos Velasco and I'm a Full Stack Software Developer</h4> */}
        <p className='about__text'>
          Hello, I'm Marcos Velasco and I'm a Full Stack Software Developer. I have experience in building
          Full Stack Ruby on Rails and Javascript based web applications, and RESTful API architecture.
          Possess strong skill in problem solving and teamwork. Excited by challenging work and enjoy creating
          sites that focus on usefulness and elegance.
        </p>
        <a
          className='about__resumeLink'
          href='https://docs.google.com/document/d/1Cht0kQH6qNid2bBqsinMaxYOk2GjQV82-rbuGDgiakM/edit?usp=sharing'
          target='#'
          arial-label='resume link'
        >
          {' '}
          RESUME <LaunchIcon />
        </a>
        <div className='about__socialIcons'>
          <a
            className='about__socialIconLink'
            href='https://www.linkedin.com/in/marcos-velasco-1b07a7189/'
            target='#'
            arial-label='Linkedin'
          >
            <FaLinkedin />
          </a>
          <a
            className='about__socialIconLink'
            href='https://github.com/devslife7'
            target='#'
            arial-label='Github'
          >
            <FaGithub />
          </a>
          <a
            className='about__socialIconLink'
            href='https://medium.com/@devslife7'
            target='#'
            arial-label='Medium'
          >
            <FaMedium />
          </a>
          <a
            className='about__socialIconLink'
            href='https://www.facebook.com/marcos.velasco.5/'
            target='#'
            arial-label='Facebook'
          >
            <FaFacebook />
          </a>
          <a
            className='about__socialIconLink'
            href='https://www.youtube.com/channel/UCBmRRBM8cmE29ZGba51Sbzw'
            target='#'
            arial-label='Youtube'
          >
            <FaYoutube />
          </a>
          <a
            className='about__socialIconLink'
            href='https://www.instagram.com/markuz1457'
            target='#'
            arial-label='Instagram'
          >
            <FaInstagram />
          </a>
          <a
            className='about__socialIconLink'
            href='https://twitter.com/Markuz113'
            target='#'
            arial-label='Twitter'
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}
