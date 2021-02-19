import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <div className='about__content container'>
        <h1 className='about__title'>About me</h1>
        {/* <h4 className='about__header'>Hello, I'm Marcos Velasco and I'm a Full Stack Software Developer</h4> */}
        <p className='about__text'><span className='about__tab'></span>
          Hello, I'm Marcos Velasco and I'm a Full Stack Software Developer.
          I have experience in building Ruby on Rails and Javascript based web applications,
          and RESTful API architecture.
          Possess strong skill in problem solving and teamwork.
          Excited by challenging work and enjoy creating sites that focus on usefulness and elegance.
        </p>
        <a className='about__resumeLink' href='google.com' target="#" arial-label='resume link'> Resume </a>
        <div>social media link container</div>
      </div>
    </div>
  )
}