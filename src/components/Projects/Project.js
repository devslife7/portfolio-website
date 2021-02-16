import React from "react"
// import { Button } from "../ButtonElements"
import Button from "../Button"
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
} from "./ProjectElements"

export default function Projects({
  id,
  topLine,
  headline,
  description,
  img,
  darkTheme,
  flipped,
  projectLink
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
                  <Button href={projectLink}>
                    Live Demo
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={`${id} preview`} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
