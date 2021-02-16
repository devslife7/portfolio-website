import React from "react"
import Button from "../Button"
import Tag from "./Tag"
import './Projects.css'

export default function Projects({
  name,
  description,
  img,
  darkTheme,
  flipped,
  projectLink,
  technologies,
  hosting
}) {

  const renderTags = (tags = []) => {
    return tags.map( (tag, idx) =>  <Tag key={idx}>{tag}</Tag>)
  }

  return (
    <>
      <div className={`${darkTheme && 'darkBackground'}`}>
        <div className={`project__wrapper container ${flipped && 'flipped'}`}>
            <div >
              <p className="project__name">{name}</p>

              <p className="project__subtitle">{description}</p>
              <div className="project__title">Technologies:</div>
              <div className="project__technologies">{renderTags(technologies)}</div>
              <div className="project__title">Hosted via:</div>
              <div className="project__technologies">{renderTags(hosting)}</div>

              <Button href={projectLink}> Live Demo </Button>
            </div >
              
            {/* <img className="project__img" src={img} alt={`${name} preview`} /> */}
        </div >
        </div>
    </>
  )
}
