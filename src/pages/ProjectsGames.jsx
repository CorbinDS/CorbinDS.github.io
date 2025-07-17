import ProjectGallery from "../components/ProjectGallery";
import projects from "../data/gameProjects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const allTags = [...new Set(projects.flatMap((project) => project.tags))];

function ProjectsGames() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div>
        <Link to="/" className="absolute text-blue-500 hover:text-blue-700">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-center text-4xl font-bold my-4">
        {" "}
        Game Development Projects
      </h1>
      <ProjectGallery projects={projects} />
    </div>
  );
}

export default ProjectsGames;
