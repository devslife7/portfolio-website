import React from 'react'
import Button from '../Button'
import Tag from './Tag'
import './Projects.css'

export default function Projects({
  name,
  description,
  darkTheme,
  flipped,
  projectLink,
  projectGif,
  technologies,
  hosting,
  live,
}) {
  const renderTags = (tags = []) => {
    return tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)
  }

  return (
    <>
      <div className={`${darkTheme && 'darkBackground'}`}>
        <div className={`project__wrapper container ${flipped && 'flipped'}`}>
          <div className='project__info'>
            <p className='project__name'>{name}</p>

            <p className='project__subtitle'>{description}</p>
            <div className='project__title'>Technologies:</div>
            <div className='project__technologies'>{renderTags(technologies)}</div>

            {live && (
              <div>
                <div className='project__title'>Hosted via:</div>
                <div className='project__technologies'>{renderTags(hosting)}</div>

                <Button href={projectLink}> Live Demo </Button>
              </div>
            )}
          </div>

          <div>
            <img className='project__img' src={projectGif} alt={`${name} preview`} />
          </div>
        </div>
      </div>
    </>
  )
}
