const gameProjects = [
    {
        name: "Micromancer Mike",
        description: "Adventure Platfomer for GTMK 2024",
        tags: ["Unity", "C#", "Developer", "Game Jam"],
        github: "https://github.com/yourname/paper-plane-game",
        itch: "https://nibrocu.itch.io/micromancer-mike",
        image: "/images/micromancer.webp",
        teamSize: "3",
        longDescription: "Micromancer Mike was made in 4 days for the GTMK 2024 game jam to fit the theme \"built to scale.\" All art and scripts were made during the 4 day period.",
        roleName: "Main Developer and Game Designer",
        timeFrame: "Aug - Aug 2024",
        responsibilities: [
            "Assisted in ideation of the game idea, as well as creation of the initial design document.",
            "Implementation of every C# script for the game.",
            "Utilized the Unity animation system to animate the character."
        ]
    },
    {
        name: "Midnight Smack",
        description: "Cooking Action Platformer",
        tags: ["C++", "Developer"],
        github: "https://github.com/johnwang108/Midnight-Smack-Game",
        gameplay: "https://www.youtube.com/watch?v=1mZz83I4bJA&feature=youtu.be",
        image: "/images/MidnightSmackPoster.png",
        teamSize: "10",
        longDescription: "We created Midnight Smack for CS4152 at Cornell University. The project was incredibly ambitious and we ran into scope creep far along into the development of the game. A large portion of the game that I worked on was cut about a month before the final deadline. Luckily I was able to utilize what I worked on to make meaningful additions to the final product. The game was shown off at the GDIAC Showcase 2024. Other than direct gameplay programming, I had to work a lot on debugging the Steam Deck build process of the game engine we were using.",
        timeFrame: "Jan - May 2024",
        roleName: "Gameplay Lead and Game Developer",
        responsibilities: [
            "Solo developer of the now cut Day Game Mode, including level loader, quests, and main gameplay loop.",
            "Developed inventory and item systems for the main game mode.",
            "Adapated main game mode to utilize item system and ingredients.",
            "Programmed touch screen and controller input as well as symbol recognition.",
            "Debugged Steam Deck & Linux builds of the game."
        ],
        embedVideo: "https://www.youtube.com/embed/1mZz83I4bJA?si=t7F7v8w1oBTPPUGV"
    },
    {
        name: "Groove that Goob",
        description: "Stealthy Rhythm Game released on Steam",
        tags: ["Java", "LibGDX", "Developer"],
        steam: "https://store.steampowered.com/app/2632630/Groove_that_Goob/",
        image: "/images/goobTaller.png",
        teamSize: "8",
        longDescription: "We created Groove that Goob for CS3152 at Cornell University. The project was started and finished in one semester, but we came back to the project to do a small update and then release it on Steam. I was one of 4 programmers on the team, and was active in the shaping the gameplay mechanics and game feel.",
        roleName: "Gameplay Developer and Game Designer",
        responsibilities: [
            "Designed and implemented the Entity and Game Board classes",
            "Programmed an advanced moving camera",
            "Engineered a level loader to import levels made in Tiled",
            "Worked with level designers and artists to determine best practices for creation of levels and storage of level data",
        ],
        timeFrame: "Jan - May 2023",
        embedSteam: "https://store.steampowered.com/widget/2632630/"
    },
    {
        name: "Dithering Shader and Minigame",
        description: "Unity Shader and Particle System",
        tags: ["Unity", "C#", "Developer", "Graphics"],
        github: "https://github.com/CorbinDS/InktoberMinigame",
        demo: "https://youtu.be/MAUQ2GKQWSA",
        image: "/images/shaderBall.png",
        teamSize: "1",
        longDescription: "I created this project for my CS4621 graphics practicum course. The project requirements were just a small scale project that utilized topics covered in Computer Graphics. I was very interested in shaders as well as particle systems, so I created this minigame to show off a shader effect and speed particle effect. I was inspired by games like Return of the Obra Dinn when creating the shader for the game.",
        roleName: "Solo Developer",
        timeFrame: "Sep - Dec 2023",
        responsibilities: [
            "Implemented a fragment shader to achieve and outlined and dithered shadow effect in Unity.",
            "Programmed a very rudimentary camera controller to follow the ball around a scene.",
            "Utilized very basic procedural generation to showcase a landscape within Unity.",
            "Used Unity's particle system to add a speed effect to the ball when using the boost.",
        ],
        embedVideo: "https://www.youtube.com/embed/MAUQ2GKQWSA?si=xGNs37hV5R33j_nN"
    }
];

export default gameProjects;