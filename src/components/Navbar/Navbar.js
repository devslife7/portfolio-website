import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import './Navbar.css'
import { animateScroll as scroll } from "react-scroll"
import { Link } from "react-scroll"

export default function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <div className={`nav ${scrollNav && "nav--background"}`}>
        <div className="nav__content container">
          
          <div className="nav__logo" onClick={toggleHome}>
            Portfo<span className="nav__logoColor">lio</span>
          </div>
          <div className="nav__mobileIcon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav__menu">
            <div className="nav__item">
              <Link className="nav__link" to='home' smooth='true' duration={500} spy={true} exact='true' offset={-90}>
                Home
              </Link>
            </div>
            <div className="nav__item">
              <Link className="nav__link" to='skills' smooth='true' duration={500} spy={true} exact='true' offset={-90}>
                Skills
              </Link>
            </div>
            <div className="nav__item">
              <Link className="nav__link" to='projects' smooth='true' duration={500} spy={true} exact='true' offset={-90}>
                Projects
              </Link>
            </div>
            <div className="nav__item">
              <Link className="nav__link" to='about' smooth='true' duration={500} spy={true} exact='true' offset={-90}>
                About
              </Link>
            </div>
            <div className="nav__item">
              <Link className="nav__link" to='contact' smooth='true' duration={500} spy={true} exact='true' offset={-90}>
                Contact
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
