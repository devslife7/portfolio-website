import React from 'react'
import { triviappObj, futFriendsObj, proTaskObj, netflixObj } from './Data'
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
      <Project {...triviappObj} />
      <Project {...netflixObj} />
    </div>
  )
}
