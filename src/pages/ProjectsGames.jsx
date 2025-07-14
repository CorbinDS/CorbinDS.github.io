import ProjectGallery from "../components/ProjectGallery";
import projects from "../data/gameProjects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const allTags = [...new Set(projects.flatMap((project) => project.tags))];

function ProjectsGames() {
  return (
    
    <div className="max-w-screen-xl mx-auto px-4">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
        <ProjectGallery projects={projects} />
    </div>
  );
}

export default ProjectsGames;