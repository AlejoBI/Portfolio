import React from "react";
import { Link } from "react-router-dom";

import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";

import ImagePortfolio from "../../assets/images/Foto.jpg";

const Home = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 my-10 lg:my-20 dark:bg-gray-900 dark:text-white">
      {/* PRESENTATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Alejandro Bravo Isajar
            </span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            Developer specializing in building exceptional digital experiences.
          </p>
          <div className="flex mt-6 space-x-4">
            <a
              href="mailto:alejandrobravoisajar1@gmail.com"
              className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition hover:scale-105 hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/AlejoBI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition hover:scale-105 hover:shadow-xl"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-bravo-isajar-061b682b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-400 transition hover:scale-105 hover:shadow-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={ImagePortfolio}
            alt="Portrait of Alejandro Bravo Isajar"
            className="rounded-full w-full max-w-xs shadow-lg hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
          About Me
        </h2>
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm a passionate developer with X years of experience in building web
          applications. I specialize in creating user-friendly interfaces and
          solving complex problems through clean, efficient code. When I'm not
          coding, you can find me exploring technology, playing sports, or
          enjoying time with family and friends.
        </p>
      </div>

      {/* SKILLS */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
          Skills
        </h2>
        <div className="mt-8">
          <Skills />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {/* EXPERIENCE */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
            Experience
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              No experience yet. Stay tuned! 😉
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor's in Computer Engineering
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Universidad Autonoma de Occidente - 2022 to 2026
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Focused on software development, data structures, and algorithms,
              with hands-on experience in collaborative projects.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* ROLES */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
            Roles Performed
          </h2>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-700 dark:text-gray-300 text-lg">
              Backend Developer
            </li>
            <li className="text-gray-700 dark:text-gray-300 text-lg">
              Full Stack Developer
            </li>
            <li className="text-gray-700 dark:text-gray-300 text-lg">
              Team Lead (Small Projects)
            </li>
          </ul>
        </div>

        {/* DOWNLOAD CV */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
              Download My CV
            </h2>
            <div className="mt-6 text-center">
              <a
                href="/path/to/your-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block">
          Projects
        </h2>
        <div className="mt-8">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
