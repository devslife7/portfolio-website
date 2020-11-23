import React from "react"
import { Button } from "../ButtonElements"
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
} from "./InfoElements"

export default function InfoSection({
  id,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  darkTheme,
  flipped,
}) {
  return (
    <>
      <InfoContainer darkTheme={darkTheme} id={id}>
        <InfoWrapper>
          <InfoRow flipped={flipped}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading darkTheme={darkTheme}>{headline}</Heading>

                <Subtitle darkTheme={darkTheme}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={darkTheme ? 1 : 0}
                    dark={darkTheme ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
