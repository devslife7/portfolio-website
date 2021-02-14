import React, { useState } from "react"
import {
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  LinkBtn,
} from "./HomeElements"
import './Home.css'

export default function Home() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="home">
      <div className="home__content container">
        <div className="home__text-1">Hello, my name is</div>
        <div className="home__text-2">Marcos Velasco</div>
        <div className="home__text-3">And I'm a Full Stack Software Developer</div>
        <div className="home__btnWrapper">
          <LinkBtn
            to='projects'
            smooth='true'
            duration={500}
            spy={true}
            exact='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
          >
            Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </LinkBtn>
        </div>
      </div>
    </div>
  )
}
