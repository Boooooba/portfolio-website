import React from 'react'
import Projects from './Projects.jsx'
import { proj } from '../data.jsx'

const ProjectsList = () => {

  return (
    <div className='proj-list' id='projects' >
        <div className="proj-list-texts">
            <h1 className="proj-list-title">
                Create & Inspire
            </h1>
            <p className='proj-list-description'>
                As a FrontEnd-Developer, I enjoy bridging the gap between engineering and design, combining technical knowledge with keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
            </p>
        </div>
        <span className='proj-desc-break'></span>
        <div className="projects-list">
            {proj.map( item => (
                <Projects code={item.code} key={item.id} link={item.link} img={item.img} text={item.text} />
            ))}
        </div>
    </div>
  )
}

export default ProjectsList