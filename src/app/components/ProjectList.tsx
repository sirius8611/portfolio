import React from 'react'
import ProjectItem from './ProjectItem'
const ProjectList = ({projects}: {projects: { 
  id: number, 
  title: string,  
  description: string,
  image: string,
  tasks: string,
  technologies: string, }[]}) => {
  const projectDisplay = projects.map(project => {
    return <ProjectItem key={project.id} project={project} />
  })
  return (
    <div className="flex">
    {projectDisplay}
    </div>
  )
}

export default ProjectList