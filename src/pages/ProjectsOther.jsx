import ProjectGallery from "../components/ProjectGallery";
import projects from "../data/otherProjects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ProjectsOther() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div>
        <Link to="/" className="absolute text-blue-500 hover:text-blue-700">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-center text-4xl font-bold my-4 pb-5">
        {" "}
        Game Development Projects
      </h1>
      <ProjectGallery projects={projects} expandable={true} />
    </div>
  );
}

export default ProjectsOther;
