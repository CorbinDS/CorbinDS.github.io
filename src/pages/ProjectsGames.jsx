import ProjectGallery from "../components/ProjectGallery";
import projects from "../data/gameProjects";
const allTags = [...new Set(projects.flatMap((project) => project.tags))];
import BackLink from "../components/BackLink"

function ProjectsGames() {
  return (
    <div className="page-container">
      <BackLink />
      <h1 className="page-title">
        {" "}
        Game Development Projects
      </h1>
      <ProjectGallery projects={projects} />
    </div>
  );
}

export default ProjectsGames;
