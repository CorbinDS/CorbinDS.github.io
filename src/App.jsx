import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import ProjectsGames from "./pages/ProjectsGames";
import ProjectsOther from "./pages/ProjectsOther";
import ProjectsRobotics from "./pages/ProjectsRobotics";
import { useState, useRef, useEffect } from "react";
import EmailDropdown from "./components/EmailDropdown";
const ICON_SIZE = 25;
const EMAIL = "corbinstickley@gmail.com";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Corbin Stickley</h1>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <a
              href="https://github.com/CorbinDS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
              aria-label="GitHub"
            >
              <FaGithub size={ICON_SIZE} />
            </a>
            <a
              href="https://www.linkedin.com/in/corbin-stickley-362365253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={ICON_SIZE} />
            </a>
            <a   
              href="https://nibrocu.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-400"
              aria-label="Itch.io">
              <FaItchIo size={ICON_SIZE} />
            </a>
            <a
              href="/CorbinStickleyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-700"
              title="Resume PDF"
            >
              <FaFilePdf size={ICON_SIZE*.9} />
            </a>
            <EmailDropdown/>
          </nav>
        </header>

        <main className="flex-grow p-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/games" element={<ProjectsGames />} />
            <Route path="/projects/other" element={<ProjectsOther />} />
            <Route path="/projects/robotics" element={<ProjectsRobotics />} />
          </Routes>
        </main>

        <footer className="text-sm text-gray-500 text-center py-1">
          © {new Date().getFullYear()} Corbin Stickley
        </footer>
      </div>
    </Router>
  );
}

export default App;
