import React, { useState, useEffect } from "react"
import "./Home.css"
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"

export default function Home() {
  const [hover, setHover] = useState(false)
  const [themeColor, setThemeColor] = useState("--color-orange")

  const handleChangeThemeColor = color => {
    const body = document.getElementsByTagName("BODY")[0]
    body.style.setProperty("--color-primary", `var(${color})`)
    setThemeColor(color)
  }

  useEffect(() => {
    const storageThemeColor = localStorage.getItem("theme-color")

    if (storageThemeColor) {
      handleChangeThemeColor(storageThemeColor)
    } else {
      handleChangeThemeColor("--color-orange")
    }
  }, [])

  const onHover = () => {
    setHover(!hover)
  }

  const handleThemeChange = e => {
    handleChangeThemeColor(e.target.id)
    localStorage.setItem("theme-color", `${e.target.id}`)
  }

  return (
    <div className='home'>
      <div className='home__content container'>
        <div className='home__text-1'>
          Hello<span className='theme__span'>,</span> my name is
        </div>
        <div className='home__text-2'>Marcos Velasco</div>
        <div className='home__text-3'>
          <p>I'm a Full Stack Software</p>
          <span className='home__spanTypewriter'>
            <Typewriter
              options={{
                strings: ["Developer", "Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <div className='home__btnWrapper'>
          <Link
            className='home__btn'
            to='projects'
            smooth='true'
            duration={500}
            spy={true}
            exact='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            offset={-80}
          >
            My Projects
          </Link>
        </div>

        <div className='home__themeSelectorContainer'>
          <div
            id='--color-crimson'
            className={`home__themeCircles ${themeColor === "--color-crimson" && "theme-active"}`}
            onClick={handleThemeChange}
          ></div>
          <div
            id='--color-orange'
            className={`home__themeCircles ${themeColor === "--color-orange" && "theme-active"}`}
            onClick={handleThemeChange}
          ></div>
          <div
            id='--color-green'
            className={`home__themeCircles ${themeColor === "--color-green" && "theme-active"}`}
            onClick={handleThemeChange}
          ></div>
          <div
            id='--color-purple'
            className={`home__themeCircles ${themeColor === "--color-purple" && "theme-active"}`}
            onClick={handleThemeChange}
          ></div>
          <div
            id='--color-blue'
            className={`home__themeCircles ${themeColor === "--color-blue" && "theme-active"}`}
            onClick={handleThemeChange}
          ></div>
        </div>
      </div>
    </div>
  )
}
