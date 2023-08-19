import React from "react"
import Paper from "@material-ui/core/Paper"

export default function SkillsCard({ name, icon }) {
  return (
    <Paper className="skill__card" elevation={2} style={{ borderRadius: "10px" }}>
      {icon}
      <div className="skill__title">{name}</div>
    </Paper>
  )
}
