import React, { useState } from "react"
import './Home.css'
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"

export default function Home() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="home">
      <div className="home__content container">
        <div className="home__text-1">Hello<span className="home__span">,</span> my name is</div>
        <div className="home__text-2">Marcos Velasco</div>
        <div className="home__text-3">
          I'm a Full Stack Software
        </div>
        <Typewriter
                options={{
                  strings: ["Developer", "Engineer"],
                  autoStart: true,
                  loop:true
                }} 
              />

        <div className="home__btnWrapper">
          <Link
            className="home__btn"
            to='projects'
            smooth='true'
            duration={500}
            spy={true}
            exact='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
          >
            My Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
