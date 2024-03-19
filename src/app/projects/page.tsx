import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
export const metadata = {
  title: "Projects",
  description: "My personal projects"
}
export interface Project{
    id: number,
    title: string,
    description: string,
    image: string,
    tasks: string,
    technologies: string,
}
const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
    image: "https://via.placeholder.com/150",
    tasks: "",
    technologies: "",
  },
  {
    id: 2,
    title: "Project 1",
    description: "This is project 1",
    image: "https://via.placeholder.com/150",
    tasks: "",
    technologies: "",
  }
]
export default function Projects() {
  return (
    <div>
      <Header title="Projects"/>
      <div>Content</div>
      <ProjectList projects={projects}/>
      </div>
  );
}