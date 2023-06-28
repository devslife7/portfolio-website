import React from 'react'
import Tag from './Tag'
import './Projects.css'

export default function Projects({
  name,
  description,
  darkTheme,
  flipped,
  mobile,
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

                <div className='project__btn-container'>
                  <a
                    target='_blank'
                    className='project__demo-btn'
                    href={projectLink}
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className='project_img_container'>
            <img
              className={mobile ? 'project_img_mobile' : 'project__img'}
              src={projectGif}
              alt={`${name} preview`}
            />
          </div>
        </div>
      </div>
    </>
  )
}
