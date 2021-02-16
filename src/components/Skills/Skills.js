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
      <div className="skills__content container">
        <div className="skills__header">Technical Skills</div>


        <div className="skills__header">Front End</div>
        <div className="skills__section">
          { renderSkills(frontEnd) }
        </div>


        <div className="skills__header">Back End</div>  

        <div className="skills__section">
          { renderSkills(backEnd) }
        </div>

        <div className="skills__header">Other</div>

        <div className="skills__section">
          { renderSkills(other) }
        </div>

      </div>

    </div>
  )
}
