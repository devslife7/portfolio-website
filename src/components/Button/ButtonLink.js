import React from 'react'
import "./Button.css"

export default function ButtonLink({ children, href}) {
  return (
    <a className="btn" href={href} target="#" arial-label='project link'>
      {children}
    </a>
  )
}
