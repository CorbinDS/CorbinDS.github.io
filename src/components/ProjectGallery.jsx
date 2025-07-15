import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ExpandedProjectCard from "./ExpandedProjectCard"; // we'll define this next

function ProjectGallery({ projects, showFilters = true, expandable = true}) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        );

  // Define the number of cards per row based on screen size
  const cardsPerRow = 3;

  // Group projects into rows
  const projectRows = [];
  for (let i = 0; i < filteredProjects.length; i += cardsPerRow) {
    projectRows.push(filteredProjects.slice(i, i + cardsPerRow));
  }

  return (
    <div className="space-y-6">
      {showFilters && (
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
      )}

      <div className="space-y-8">
        {projectRows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {row.map((project, indexInRow) => {
                const globalIndex = rowIndex * cardsPerRow + indexInRow;
                return (
                  <ProjectCard
                    key={globalIndex}
                    project={project}
                    isExpanded={expandedIndex === globalIndex}
                    onToggle={() =>
                      expandable &&
                      setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex)
                    }
                  />
                );
              })}
            </div>
            {expandable &&
              expandedIndex !== null &&
              expandedIndex >= rowIndex * cardsPerRow &&
              expandedIndex < (rowIndex + 1) * cardsPerRow && (
                <div className="col-span-full">
                  <ExpandedProjectCard
                    project={filteredProjects[expandedIndex]}
                    onClose={() => setExpandedIndex(null)}
                  />
                </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
