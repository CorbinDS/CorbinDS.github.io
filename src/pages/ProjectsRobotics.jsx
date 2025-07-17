import Carousel from "../components/Carousel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ProjectsRobotics() {
  return (
    <main className="px-6 py-1 max-w-screen-xl mx-auto text-gray-800">
      <Link to="/" className="absolute text-blue-500 hover:text-blue-700">
        ← Back to Home
      </Link>
      <h1 className="text-center text-4xl font-bold mb-4">
        My time on{"  "}
        <a
          href="https://cornellcuprobotics.com/"
          target="_blank"
          className="underline text-red-600 hover:text-red-800"
        >
          Cornell Cup Robotics
        </a>
      </h1>
      <h2 className="text-center text-2xl text-gray-600 font-medium mb-8">
        Fall 2020 - Spring 2024
      </h2>
      {/* <Carousel
        items={[
          {
            type: "image",
            src: "/images/physicalBlocklyDemo.png",
            alt: "Overhead vision system",
            caption: "Physical Blockly system scanning Apriltags - 2022",
          },
          {
            type: "image",
            src: "/images/blocklyDemo.png",
            alt: "Physical Blockly Redo Demo",
            caption: "Demo of Minibot Physical Blockly with RFID - 2024",
          },
          {
            type: "image",
            src: "/images/chatbotDemo.png",
            alt: "Chatbot Demo",
            caption: "Demo of Minibot Chatbot - 2024",
          },
        ]}
        className="mx-auto size-full"
      /> */}
      <Carousel
        aspect="aspect-square"
        items={[
          {
            type: "image",
            src: "/images/FirstMinibot.png",
            alt: "Original Minibot",
            caption: "Original Minibot before XRP Redesign - 2023",
          },
          {
            type: "image",
            src: "/images/minibotCSquare.png",
            alt: "XRP Minibot Attachments",
            caption: "Minibot for XRP - 2024",
          },
          {
            type: "image",
            src: "/images/C1C0Square.png",
            alt: "C1C0",
            caption: "C1C0 Project - 2024",
          },
          {
            type: "image",
            src: "/images/bobFIRST.png",
            alt: "Bob at FIRST",
            caption: "BOB VR Robot Prototype - 2024",
          },
        ]}
        className="mx-auto width-l"
      />

      {/* Minibot Developer Section */}
      <section className="mb-12">
        <div className="flex flex-row items-end justify-between mb-2">
          <h2 className="text-2xl font-semibold">Minibot Developer</h2>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/cornell-cup/cs-reminibot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              aria-label="GitHub"
            >
              Minibot Github
            </a>
          </div>
        </div>
        <p className="mb-4">
          As a developer on the team (Fall 2021 - Spring 2022), I worked on two
          main software features for Minibot, both of them relating to computer
          vision and utilizing Apriltags. The first project (Fall 2021) was an
          overhead vision system used to track the position of the Minibot for
          later use in path planning algorithms and more. This was my first
          Computer Vision project, but I learned a lot from the three other
          developers I worked with on the project. Then, I started a new project
          (Spring 2022) with one other developer called Physical Blockly. The
          project utilized Apriltags on physical blocks to create a physical
          programming language for the Minibot platform. My work focused on
          generating Google's Blockly blocks and either executing them on the
          robot or sending them over to the web based basestation for the robot
          (using React) and building up a small program to run later.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Utilized CV principles to correct lens distortion and reduce noise
            in camera input
          </li>
          <li>
            Programmed vision systems in Python utilizing OpenCV to recognize
            Apriltags.
          </li>
          <li>
            Worked on the web based basestation for Minibot with Javascript and
            React
          </li>
          <li>
            Generated Blockly code based on recognized Apriltags, allowing for
            programming with physical objects.
          </li>
          <li>
            Studied the Google Blockly API to generate Blockly tags with
            Javascript instead of mouse input.
          </li>
        </ul>
        <div className="text-sm text-gray-600">
          <strong>Skills:</strong> Python, React, Javascript, Computer Vision,
          Raspberry Pi, Git
        </div>
      </section>

      {/* CS Lead Section */}
      <section className="mb-12">
        <div className="flex flex-row items-end justify-between mb-2">
          <h2 className="text-2xl font-semibold">Minibot CS Lead</h2>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/cornell-cup/cs-reminibot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              aria-label="GitHub"
            >
              Minibot Github
            </a>
            <a
              href="https://github.com/cornell-cup/cs-rere  minibot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              aria-label="GitHub"
            >
              Minibot for XRP Github
            </a>
          </div>
        </div>
        <p className="mb-4">
          I was chosen to be the Minibot CS lead for the Minibot project (Fall
          2022 - Fall 2024), where I was the main driver for system
          architecture, new features, as well as cross team communication. I
          planned features, worked closely with newer devs, and ensured smooth
          integration across software subsystems. I was involved in every
          subsystem of Minibot, including the Chatbot, where I pushed for
          integration with LLMs, the computer vision projects, as well as
          updating the Physical Blockly project to use RFID tags instead of a
          camera based Apriltag system. Starting Fall 2023, the team as a whole
          decided to migrate from the old Minibot platform and switch to
          building software and hardware attachments to an existing modular
          robotics platform. After extensive research into options, the team
          chose the Experiential Robotics Platform (XRP) by Sparkfun. From
          there, I spearheaded migration of software systems to support totally
          new physical architecture, migrating from a setup involving a
          Raspberry Pi and multiple Arduinos, to using the ESP32 and a Raspberry
          Pi Zero for onboard vision.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Led development of a modular robotics kit utilizing Raspberry Pi and
            Arduino
          </li>
          <li>
            Lead software sections of presentations to company representatives
            of Intel, Autodesk, NASA, and more.
          </li>
          <li>
            Spearheaded migration of Minibot software to the XRP platform by
            Sparkfun.
          </li>
          <li>
            Planned architecture changes to support a completely different
            microcontroller.
          </li>
          <li>Pushed for LLM integration with existing platform features.</li>
        </ul>
        <div className="text-sm text-gray-600">
          <strong>Skills:</strong> Planning system architecture, team mentoring,
          pair debugging, project management, feature planning, leading demos
        </div>
      </section>

      {/* Team Lead Section */}
      <section className="mb-12">
        <div className="flex flex-row items-end justify-between mb-2">
          <h2 className="text-2xl font-semibold">Full Project Team Lead</h2>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/cornell-cup/cs-rere  minibot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              aria-label="GitHub"
            >
              Minibot for XRP Github
            </a>
          </div>
        </div>
        <p className="mb-4">
          As Team Lead (Spring 2024 - Spring 2024), I oversaw development for
          all three robotics projects. My role was primarily focused on
          coordination, long-term planning, and ensuring communication across
          CS, MechE, and ECE teams. When not running scrum meetings and helping
          to set goals and deadlines for all three robotics projects, I bounced
          around helping teams that were running behind. This involved assisting
          with Unity and VR integration, planning for SPI communication
          protocols, communication between ESP32 and laptops over the network,
          and more.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Managed team of around 60 members work over 3 unique robotics
            projects.
          </li>
          <li>
            Started and managed weekly scrum meetings, offering technical advice
            and help with logistics.
          </li>
          <li>
            Led presentations to investors, and company representatives of
            Sparkfun, DEKA, AutoDesk, FIRST, and more.
          </li>
          <li>
            Assisted with rapid prototyping of software for a robot (BOB) with
            VR integration.
          </li>
          <li>
            Did simple controls programming for early arm mechanisms for BOB
          </li>
        </ul>
        <div className="text-sm text-gray-600">
          <strong>Skills:</strong> Agile project management, project planning,
          cross-functional leadership, system planning
        </div>
      </section>

      {/* Reflection or Summary */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Reflections</h2>
        <p className="mb-4">
          Through 4 years on the same robotics team, I grew from an individual
          contributor to a system planner and leader. I learned how to design
          for the long term, mentor teammates, and drive technical projects from
          idea to implementation.
        </p>
        <p className="text-sm text-gray-600">
          While much of the code is in shared repositories, I'm happy to walk
          through parts I directly contributed to or designed if you'd like to
          chat! I'm also directly linking the Minibot repositories in
          particular, but I worked with developers on the other two robotics
          projects as well.
        </p>
      </section>
    </main>
  );
}
