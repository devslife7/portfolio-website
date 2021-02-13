import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import './Navbar.css'
import { animateScroll as scroll } from "react-scroll"
import { Link } from "react-scroll"
import { MobileIcon, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarElements"

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
        <div className="nav__container">
          
          <div className="nav__logo" onClick={toggleHome}>
            Portfo<span style={{ color: 'red'}}>lio</span>
          </div>
          <div className="nav__mobileIcon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav__menu">
            <div className="nav__item">
              <Link className="nav__link" to='Home' smooth='true' duration={500} spy={true} exact='true' offset={-80}>
                Home
              </Link>
            </div>
            <div className="nav__item">
              <Link className="nav__link" to='skills' smooth='true' duration={500} spy={true} exact='true' offset={-80}>
                Skills
              </Link>
            </div>
            <div className="nav__item">
              <NavLinks to='futfriends' smooth='true' duration={500} spy={true} exact='true' offset={-80}>
                Projects
              </NavLinks>
            </div>
            <div className="nav__item">
              <NavLinks to='about' smooth='true' duration={500} spy={true} exact='true' offset={-80}>
                About
              </NavLinks>
            </div>
            <div className="nav__item">
              <NavLinks to='contact' smooth='true' duration={500} spy={true} exact='true' offset={-80}>
                Contact
              </NavLinks>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
