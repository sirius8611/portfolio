import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const ProjectItem = ({project}: {project: {
  title: string, 
  description: string,
  image: string,
  tasks: string,
  technologies: string,}}) => {
  return (
    <Card className='w-[350px]'>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default ProjectItem