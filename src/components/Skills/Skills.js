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

        <h2 className="skills__title">My Ski<span className='skills__span'>ll</span>s</h2>


        <div className="skills__header">Front <span className='skills__span'>End</span>:</div>
        <div className="skills__section">
          { renderSkills(frontEnd) }
        </div>


        <div className="skills__header">Back <span className='skills__span'>End</span>:</div>  

        <div className="skills__section">
          { renderSkills(backEnd) }
        </div>

        <div className="skills__header">Oth<span className='skills__span'>er</span>:</div>

        <div className="skills__section">
          { renderSkills(other) }
        </div>

      </div>
    </div>
  )
}
