import React, { useState } from "react"
import "./Home.css"
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"

export default function Home() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const handleClick = e => {
    const body = document.getElementsByTagName("BODY")[0]
    body.style.setProperty("--color-primary", "yellow")
    console.log(e.target.id)
  }

  return (
    <div className='home'>
      <div className='home__content container'>
        <div className='home__text-1'>
          Hello<span className='theme__span'>,</span> my name is
        </div>
        <div className='home__text-2'>Marcos Velasco</div>
        <div className='home__text-3'>
          <p>I'm a Full Stack Software</p>
          <span className='home__spanTypewriter'>
            <Typewriter
              options={{
                strings: ["Developer", "Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <div className='home__btnWrapper'>
          <Link
            className='home__btn'
            to='projects'
            smooth='true'
            duration={500}
            spy={true}
            exact='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            offset={-80}
          >
            My Projects
          </Link>
        </div>

        <div id='theme-orange' className='home__themeSelector' onClick={handleClick}>
          orange
        </div>
        <div id='theme-blue' className='home__themeSelector' onClick={handleClick}>
          blue
        </div>
        <div id='theme-green' className='home__themeSelector' onClick={handleClick}>
          green
        </div>
        <div id='theme-red' className='home__themeSelector' onClick={handleClick}>
          red
        </div>
      </div>
    </div>
  )
}
