import React from 'react'
import { futFriendsObj, proTaskObj, qatar2022 } from '../../data/Projects'
import Header from './Header'
import Project from './Project'
import './Projects.css'

export default function Projects() {
  return (
    <div className='projects'>
      <Header>
        Pro<span className='theme__span'>jec</span>ts
      </Header>
      <Project {...futFriendsObj} />
      <Project {...proTaskObj} />
      {/* <Project {...triviappObj} /> */}
      <Project {...qatar2022} />
      {/* <Project {...netflixObj} /> */}
    </div>
  )
}
