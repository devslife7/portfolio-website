import React from 'react'
import Paper from '@material-ui/core/Paper'

export default function SkillsCard({ name, imgLink }) {
  return (
    <Paper className="skill__card" elevation={2} style={{borderRadius: '10px'}}>
      <img className="skill__img" src={imgLink} alt={`${name} logo`} />
      <div className="skill__title">{name}</div>
    </Paper>
  )
}
