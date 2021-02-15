import React from "react"
import SkillsCard from "./SkillsCard"
import { frontEnd, backEnd, other } from "./Data"
import './Skills.css'

export default function Skills() {

  const renderSkills = list => {
    return list.map( (skill, idx) => {
      return <SkillsCard key={idx} name={skill.name} imgLink={skill.imgLink}/>
    })
  }

  return (
    <div className="skills">
      <h2 className="skills__header">Technical Skills</h2>


      <h2 className="skills__header">Front End</h2>
      <div className="skills__section">
        { renderSkills(frontEnd) }
      </div>


      <h2 className="skills__header">Back End</h2>  

      <div className="skills__section">
        { renderSkills(backEnd) }
      </div>

      <h2 className="skills__header">Other</h2>

      <div className="skills__section">
        { renderSkills(other) }
      </div>

    </div>
  )
}
