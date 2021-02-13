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
} from "./HeroElements"

export default function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='Home' style={{ fontFamily: 'Ubuntu, sans-serif'}}>
      <HeroContent>
        <HeroP>Hello, my name is</HeroP>
        <HeroH1>Marcos Velasco</HeroH1>
        <HeroP>And I'm a Full Stack Software Developer</HeroP>
        <HeroBtnWrapper>
          <LinkBtn
            to='futfriends'
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
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}
