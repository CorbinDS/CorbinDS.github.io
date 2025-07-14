import React, { useState } from "react";
import projects from "../data/gameProjects";
import ProjectCard from "../components/ProjectCard";

// Get all unique tags
const allTags = [...new Set(projects.flatMap((project) => project.tags))];

function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);

  // Toggle a tag on/off
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter logic: show all if no tags selected, otherwise match any tag
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        );

  return (
    <div className="max-w-screen-xl mx-auto px-4 space-y-6">
      <h2 className="text-3xl font-bold">Developer Projects</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition ${
              selectedTags.includes(tag)
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="ml-2 px-3 py-1 bg-red-200 text-black-800 rounded-full text-sm"
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* Project cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;