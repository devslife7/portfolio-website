import React from "react"
import SkillsCard from "./SkillsCard"
import { frontEnd, backEnd, tools } from "../../data/Skills"
import "./Skills.css"

export default function Skills() {
  const renderSkills = list => {
    return list.map((skill, idx) => {
      return <SkillsCard key={idx} name={skill.name} icon={skill.icon} />
    })
  }

  return (
    <div className="skills">
      <div className="skills__content container">
        <h2 className="skills__title">
          My Ski<span className="theme__span">ll</span>s
        </h2>

        <div className="skills__header">
          Front <span className="theme__span">End</span>:
        </div>
        <div className="skills__section">{renderSkills(frontEnd)}</div>

        <div className="skills__header">
          Back <span className="theme__span">End</span>:
        </div>

        <div className="skills__section">{renderSkills(backEnd)}</div>

        <div className="skills__header">
          To<span className="theme__span">ol</span>s:
        </div>

        <div className="skills__section">{renderSkills(tools)}</div>
      </div>
    </div>
  )
}
