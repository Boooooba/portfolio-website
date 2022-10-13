import React from 'react'

const Projects = ({ code, img, link, text }) => {

  const mystyle = {
    height: '260px'
  }

  return (
    <div className="projects-intro">
        <div className="projects-browser">
          <div className="projects-circle"></div>
          <div className="projects-circle"></div>
          <div className="projects-circle"></div>
        </div>
        <div className='img-a-wrapper'>
        <a href={link} className='img-a' target='_blank'>
          <img style={mystyle} src={img} alt='project' className='projects-image' />
        </a>
        </div>
          <p className='project-text'>{text}</p>
          <div className="project-src-code"><a href={code} target='_blank' className='src'>Source Code</a></div>
    </div>
  )
}

export default Projects