import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-10">
      {/* Intro Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hello, I'm Corbin Stickley</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'm a Cornell graduate passionate about building games,
          robots and more.
          <br/>
          Check out my <b>work</b> below!
        </p>
      </section>

      {/* Projects Section */}
    <section>
      <div className="mt-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {/* Robotics */}
          <Link to="/projects/robotics" className="project-preview group">
            <img
              src="/images/minibotTall.png"
              alt="Robotics Preview"
              className="preview-img"
            />
            <div className="preview-overlay" />
            <h3 className="preview-title">
              Robotics
            </h3>
          </Link>

          {/* Game Dev */}
          <Link to="/projects/games" className="project-preview group">
            <img
              src="/images/groove.png"
              alt="Games Preview"
              className="preview-img"
            />
            <div className="preview-overlay" />
            <h3 className="preview-title">
              Game Development
            </h3>
          </Link>

          {/* Other Dev */}
          <Link to="/projects/other" className="project-preview group">
            <img
              src="/images/disabilityTall.png"
              alt="Other Projects Preview"
              className="preview-img"
            />
            <div className="preview-overlay" />
            <h3 className="preview-title">
              Other Projects
            </h3>
          </Link>
        </div>
      </div>
    </section>

    </div>
  );
}

export default Home;