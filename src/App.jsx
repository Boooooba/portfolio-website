import Intro from './components/Intro'
import React from 'react'
import ProjectsList from './components/ProjectsList'
import Contact from './components/Contact'

function App(){
  return(
    <div className='App'>
        <Intro />
        <ProjectsList />
        <Contact />
    </div>
  )
}

export default App