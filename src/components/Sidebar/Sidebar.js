import React from 'react'
import './Sidebar.css'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Sidebar({ isOpen, toggle }) {
  return (
    <aside className={`sidebar ${!isOpen && 'sidebar__closed'}`} onClick={toggle}>
      <div className='sidebar__icon' onClick={toggle}>
        <FaTimes />
      </div>
      <ul className='sidebar__menu'>
        <Link
          className='sidebar__link'
          to='home'
          onClick={toggle}
          smooth='true'
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Ho<span className='theme__span'>m</span>e
        </Link>
        <Link
          className='sidebar__link'
          to='skills'
          onClick={toggle}
          smooth='true'
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Ski<span className='theme__span'>ll</span>s
        </Link>
        <Link
          className='sidebar__link'
          to='projects'
          onClick={toggle}
          smooth='true'
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          P<span className='theme__span'>ro</span>jects
        </Link>
        <Link
          className='sidebar__link'
          to='about'
          onClick={toggle}
          smooth='true'
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          Ab<span className='theme__span'>ou</span>t
        </Link>
        <Link
          className='sidebar__link'
          to='contact'
          onClick={toggle}
          smooth='true'
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
          C<span className='theme__span'>on</span>tact
        </Link>
      </ul>
    </aside>
  )
}
