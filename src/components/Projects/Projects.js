import React from "react"
import { triviappObj, futFriendsObj, proTaskObj, netflixObj } from "./Data"
import Project from "./Project"

export default function Projects() {
  return (
    <div className="projects">
      <Project {...futFriendsObj} />
      <Project {...proTaskObj} />
      <Project {...triviappObj} />
      <Project {...netflixObj} />
    </div>
  )
}
