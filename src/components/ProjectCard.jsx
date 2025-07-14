function ProjectCard({ project, isExpanded, onToggle }) {
  return (
    <div
      className="space-y-2 cursor-pointer"
      onClick={onToggle}
    >
      <div className="relative group rounded-lg overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center pointer-events-none">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-sm mt-2">{project.description}</p>

          <div className="flex gap-4 text-sm text-blue-300 mt-4 pointer-events-auto">
            {["steam", "github", "link", "itch", "demo", "gameplay", "video"].map((key) =>
              project[key] ? (
                <a
                  key={key}
                  href={project[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ) : null
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
    </div>
  );
}

export default ProjectCard;