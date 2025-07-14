import React, { useState } from "react";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="space-y-2 cursor-pointer" onClick={handleCardClick}>
      <div className="relative group rounded-lg overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-sm mt-2">{project.description}</p>

          <div className="flex gap-4 text-sm text-blue-300 mt-4">
            {project.steam && (
              <a href={project.steam} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                Steam Page
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                GitHub
              </a>
            )}
           
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="mt-2 p-4 bg-gray-50 border rounded space-y-2">
          {project.embedVideo && (
            <div className="aspect-video">
              <iframe
                src={project.embedVideo}
                title="Project Video"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
          {project.embedSteam && (
            <iframe
              src={project.embedSteam}
              frameBorder="0"
              className="w-full h-64"
              title="Steam Embed"
            ></iframe>
          )}
          {project.longDescription && <p>{project.longDescription}</p>}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;