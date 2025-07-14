import React, { useEffect, useRef, useState } from "react";

function ExpandedProjectCard({ project, onClose }) {

  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div
        ref={containerRef} 
        className={`
            transition-all duration-500 ease-in-out overflow-hidden max-w-screen-lg mx-auto
            ${mounted ? "opacity-100 scale-100 max-h-[5000px]" : "opacity-0 scale-95 max-h-0"}
            bg-white border rounded shadow p-6 space-y-4 relative
        `}>
        <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black transition"
        >
            ✕
        </button>
        <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>

        <div className="flex gap-8 text-md text-gray-700">
            {project.roleName && (
                <div>
                    <span className="font-semibold">Role: </span>
                    {project.roleName}
                    
                </div>
            )}
            {project.timeFrame && (
            <div>
                <span className="font-semibold">Time Frame: </span>
                {project.timeFrame}
            </div>
            )}
            {project.teamSize && (
            <div>
                <span className="font-semibold">Team Size: </span>
                {project.teamSize}
            </div>
            )}
        </div>
        
      {project.longDescription && (
        <p className="text-gray-700 text-base leading-relaxed">{project.longDescription}</p>
      )}


      {project.responsibilities && (
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2">Responsibilities</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
            {project.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      )}

      {project.embedVideo && (
        <div className="aspect-video">
          <iframe
            src={project.embedVideo}
            title="Project Video"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}

      {project.embedSteam && (
        <iframe
          src={project.embedSteam}
          className="w-full h-64"
          title="Steam Embed"
        ></iframe>
      )}

      {project.images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="rounded shadow border"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpandedProjectCard;