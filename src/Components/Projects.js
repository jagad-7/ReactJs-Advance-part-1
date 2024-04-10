import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Projects() {
  return (
    <div>
        <h1>Projects</h1>
        <nav >
        <Link className='second' to={'/projects/featureProjects'}>Feature Projects</Link>
        <Link className='second' to={'/projects/newProjects'}>New Projects</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Projects