import React from 'react'

export default function SkillsCard({ name, imgLink }) {
  return (
    <div>
      <h3>{name}</h3>
      <img className="skills__item" src={imgLink} alt={`${name} logo`} />

    </div>
  )
}
