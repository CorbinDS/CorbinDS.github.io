const otherProjects = [
    {
        name: "Ray Tracing in Python",
        description: "Ray Tracing and Constructive Solid Geometry",
        tags: ["Python", "Graphics", "CSG"],
        github: "https://github.com/CorbinDS/RaytracingPython",
        image: "/images/labCat.png",
        teamSize: "2",
        longDescription: "This was a two person project created for Computer Graphics at Cornell. The project was very short scale, and the intention was to create a Python based ray tracer to learn about Ray Tracing, Constructive Solid Geometry (CSG), and lighting models.",
        roleName: "Developer",
        timeFrame: "Nov - Nov 2023",
        responsibilities: [
            "Developed half of the ray tracing engine, including shadows, Blinn-Phong shading.",
            "Programmed support for constructive solid geometry using primitive shapes like circles etc.",
            "Composition of the final render for submission."
        ]
    },
    // {
    //     name: "Simplistic Toon Shader",
    //     description: "Toon Shader with Accessible Parameters",
    //     tags: ["Typescript", "Graphics", "GLSL"],
    //     image: "/images/moonCat.png"
    // },
    {
        name: "Disability Statistics Infographic",
        description: "Interactive Info Viz for Disability Statistics in the U.S.",
        tags: ["D3.js", "JavaScript", "Data Visualization"],
        github: "https://github.com/desaiwang/info4310-hw4",
        link: "https://info4310-hw4-ccdn.onrender.com/",
        image: "/images/disRedesign.png",
        teamSize: "4",
        longDescription: (
            <>
                This was the final project for Interactive Info Visualization at Cornell. We were particularly interested this topic because one of our group members was working on disability statistics for their job at Cornell. The design present helped along the creation of the {" "}  
                <a
                    href="https://www.disabilitystatistics.org/acs-custom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                >
                    current website 
                </a> {" "}
                that is being used by the Northeast ADA Center.
                
            </> 
        ),
        roleName: "Developer",
        timeFrame: "Mar - Mar 2024",
        responsibilities: [
            "Created the table present on the site, that is responsive with filtering done on the map and the search filters.",
            "Helped brainstorm designs with the main designer of the project.",
            "Assisted with debugging of other features on the site, including the map and the data legend."
        ]
    },
];

export default otherProjects;