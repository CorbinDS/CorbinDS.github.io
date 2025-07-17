import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div className="page-container space-y-4">
      {/* Header Section */}
      <h2 className="page-title">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/images/Headshot.png"
          alt="Headshot"
          className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 shadow-md"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg">
            Hello! I'm a graduate with a Bachelor's Degree in Computer Science
            (2024) and a minor in Game Design at Cornell University. During my
            time as a student, I worked extensively in two main areas: Robotics
            and Game Design, but I did work in a few other areas I found
            interesting, including Data Visualization, Computer Graphics, and
            more.
          </p>
          <a
            href="/CorbinSResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Open Resume
          </a>
        </div>
      </div>

      {/* Robotics Section */}
      <div>
        <h3 className="section-heading">Robotics</h3>
        <p>
          My robotics experience at Cornell was almost entirely from being a
          member, and eventually a team lead of {""}
          <Link to="/projects/robotics" className="text-blue-600 hover:text-blue-800">
            Cornell Cup Robotics Team (CCRT).
          </Link>{" "}
          I joined CCRT my freshman year and got more involved in the team
          throughout my time. In my last semester at Cornell, I was the primary
          team lead overseeing all three robotics projects we were working on.
        </p>
      </div>

      {/* Game Design Section */}
      <div>
        <h3 className="section-heading">Game Design</h3>
        <p>
          I started working with Unity during high school, which gave me the
          confidence to be a solo developer of a small project for Cornell Cup
          Robotics in collaboration with the Afghan Dreamers for a World Cup
          Event partnership that was planned with CCRT. After that, I worked on
          3 larger scale game projects including <b>Groove that Goob</b>,{" "}
          <b>Midnight Smack</b>, and a real time multiplayer game with voice
          chat for the <b>Cornell Phonetics Lab</b>.
        </p>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="section-heading">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="subsection-heading">Programming</h4>
            <ul className="item-list">
              <li>C++</li>
              <li>C#</li>
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h4 className="subsection-heading">Software / Tools</h4>
            <ul className="item-list">
              <li>Unity</li>
              <li>Unreal Engine</li>
              <li>React</li>
              <li>Git</li>
              <li>Blender</li>
            </ul>
          </div>
          <div>
            <h4 className="subsection-heading">
              Leadership & Soft Skills
            </h4>
            <ul className="item-list">
              <li>Team Leadership</li>
              <li>Project Management</li>
              <li>Public Speaking</li>
              <li>Organization</li>
              <li>Agile Project Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
