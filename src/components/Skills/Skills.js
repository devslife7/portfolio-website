import React from "react"
import './Skills.css'

export default function Skills() {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <h3>Back End</h3>
      <img className="skills__each" src={require("../../images/ruby-logo.png")} alt='ruby logo' />
      <span>Ruby</span>
      <img className="skills__each" src={require("../../images/rails-logo.png")} alt='ruby logo' />
      <span>Rails</span>
      <img className="skills__each" src={require("../../images/postgresql-logo.png")} alt='rails logo' />
      <span>Postgress</span>
      <img className="skills__each" src={require("../../images/sqlite-logo.png")} alt='postgress logo' />
      <span>SQLite</span>
      <img className="skills__each" src={require("../../images/sql-logo.jpg")} alt='postgress logo' />
      <span>SQL</span>
      <h3>Front End</h3>
      <img className="skills__each" src={require("../../images/javascript-logo.png")} alt='sql logo' />
      <span>Javascript (ES6)</span>
      <img className="skills__each" src={require("../../images/react-logo.png")} alt='rails logo' />
      <span>React</span>
      <img className="skills__each" src={require("../../images/redux-logo.png")} alt='javascript logo' />
      <span>Redux</span>
      <img className="skills__each" src={require("../../images/redux-logo.png")} alt='redux logo' />
      <span>Thunk</span>
      <img className="skills__each" src={require("../../images/html-logo.png")} alt='heroku logo' />
      <span>HTML</span>
      <img className="skills__each" src={require("../../images/css-logo.png")} alt='html logo' />
      <span>CSS</span>
      <img className="skills__each" src={require("../../images/materialui-logo.png")} alt='css logo' />
      <span>Material UI</span>
      <h3>Other</h3>
      <img className="skills__each" src={require("../../images/heroku-logo.png")} alt='thunk logo' />
      <span>Heroku</span>
      <img className="skills__each" src={require("../../images/git-logo.png")} alt='css logo' />
      <span>Git</span>
      <img className="skills__each" src={require("../../images/github-logo.png")} alt='css logo' />
      <span>Github</span>
      <img className="skills__each" src={require("../../images/json-logo.png")} alt='json logo' />
      <span>json</span>
      <img className="skills__each" src={require("../../images/aws-logo.png")} alt='json logo' />
      <span>Amazon Web Services </span>
      <img className="skills__each" src={require("../../images/aws-logo.png")} alt='json logo' />
      <span>Firebase</span>
    </div>
  )
}
