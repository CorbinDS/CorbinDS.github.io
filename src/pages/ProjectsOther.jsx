import ProjectGallery from "../components/ProjectGallery";
import projects from "../data/otherProjects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ProjectsOther() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
        <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
        <ProjectGallery projects={projects} expandable={true}/>
    </div>
  );
}

export default ProjectsOther;