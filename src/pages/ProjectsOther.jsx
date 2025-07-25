import ProjectGallery from "../components/ProjectGallery";
import projects from "../data/otherProjects";
import BackLink from "../components/BackLink"
function ProjectsOther() {
  return (
    <div className="page-container">
      <BackLink />
      <h1 className="page-title">
        {" "}
        Other Projects
      </h1>
      <ProjectGallery projects={projects} expandable={true} />
    </div>
  );
}

export default ProjectsOther;
