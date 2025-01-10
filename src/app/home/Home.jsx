import React from "react";

import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";

import ImagePortfolio from "../../assets/images/Foto.jpg";
import cv from "../../assets/docs/CV.pdf";

const Home = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 dark:bg-gray-900 dark:text-white transition-colors duration-1000">
      {/* PRESENTATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight transition-colors duration-1000">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400 transition-colors duration-1000 hover:underline">
              Alejandro Bravo Isajar
            </span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg transition-colors duration-1000">
            Developer specializing in building exceptional digital experiences.
          </p>
          <div className="flex mt-6 space-x-4">
            <a
              href="mailto:alejandrobravoisajar1@gmail.com"
              className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 hover:shadow-xl transition-colors duration-1000"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/AlejoBI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-xl transition-colors duration-1000"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-bravo-isajar-061b682b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-xl transition-colors duration-1000"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={ImagePortfolio}
            alt="Portrait of Alejandro Bravo Isajar"
            className="rounded-full w-full max-w-xs shadow-lg hover:scale-105 hover:shadow-xl duration-1000"
          />
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
          About Me
        </h2>
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-1000">
          I'm a passionate developer with X years of experience in building web
          applications. I specialize in creating user-friendly interfaces and
          solving complex problems through clean, efficient code. When I'm not
          coding, you can find me exploring technology, playing sports, or
          enjoying time with family and friends.
        </p>
      </div>

      {/* SKILLS */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
          Skills
        </h2>
        <div className="mt-8">
          <Skills />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {/* EXPERIENCE */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
            Experience
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-1000">
              No experience yet. Stay tuned! 😉
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-1000">
              Bachelor's in Computer Engineering
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-1000">
              Universidad Autonoma de Occidente - 2022 to 2026
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-1000">
              Focused on software development, data structures, and algorithms,
              with hands-on experience in collaborative projects.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* ROLES */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
            Roles Performed
          </h2>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-1000">
              Backend Developer
            </li>
            <li className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-1000">
              Full Stack Developer
            </li>
            <li className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-1000">
              Team Lead (Small Projects)
            </li>
          </ul>
        </div>

        {/* DOWNLOAD CV */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-center transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
              Download My CV
            </h2>
            <div className="mt-6 text-center">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition transition-colors duration-1000"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors duration-1000 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition-colors duration-1000">
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
