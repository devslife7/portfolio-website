import React from "react"
import './Sidebar.css'
import { FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

export default function Sidebar({ isOpen, toggle }) {
  return (
    <aside className={`sidebar ${!isOpen && 'sidebar__closed'}`} onClick={toggle}>
      <div className='sidebar__icon' onClick={toggle}>
        <FaTimes />
      </div>
        <ul className='sidebar__menu'>
          <Link className='sidebar__link' to='home' onClick={toggle}>
            H<span className="sidebar__span">o</span>me
          </Link>
          <Link className='sidebar__link' to='skills' onClick={toggle}>
            S<span className="sidebar__span">k</span>ills
          </Link>
          <Link className='sidebar__link' to='projects' onClick={toggle}>
            P<span className="sidebar__span">r</span>ojects
          </Link>
          <Link className='sidebar__link' to='about' onClick={toggle}>
            A<span className="sidebar__span">b</span>out
          </Link>
          <Link className='sidebar__link' to='contact' onClick={toggle}>
            C<span className="sidebar__span">o</span>ntact
          </Link>
        </ul>
    </aside>
  )
}
