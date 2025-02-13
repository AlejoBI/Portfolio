import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Experience from "../../components/experience/Experience";
import Roles from "../../components/roles/Roles";

import ImagePortfolio from "../../assets/images/Foto.webp";
import cv from "../../assets/docs/CV.pdf";

import { useTranslation } from "react-i18next";
import Contact from "../../components/contact/Contact";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-40 lg:px-20 dark:bg-gray-900 dark:text-white transition duration-1000">
      {/* PRESENTATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition duration-1000 hover:scale-105 hover:shadow-xl">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight transition duration-1000">
            {t("presentation.greeting")}{" "}
            <span className="text-blue-600 dark:text-blue-400 transition duration-1000 hover:underline">
              Alejandro Bravo Isajar
            </span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg transition duration-1000">
            {t("presentation.description")}
          </p>
          <Contact />
        </div>
        <div className="flex justify-center">
          <img
            src={ImagePortfolio}
            alt="Portrait of Alejandro Bravo Isajar"
            className="rounded-full w-full max-w-xs shadow-lg hover:scale-105 hover:shadow-xl duration-1000"
          />
        </div>
      </div>

      <div id="about"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {/* ABOUT ME */}
        <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition duration-1000 hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
            {t("about.title")}
          </h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition duration-1000">
            {t("about.description")}
          </p>
        </div>

        {/* DOWNLOAD CV */}
        <div
          id="cv"
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-center transition duration-1000 hover:scale-105 hover:shadow-xl"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
              {t("presentation.download_cv")}
            </h2>
            <div className="mt-6 text-center">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-1000"
              >
                {t("presentation.download_cv")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="experience"></div>

      {/* EXPERIENCE */}
      <div className="mt-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-1000 hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
          {t("experience.title")}
        </h2>
        <div className="mt-4">
          <Experience />
        </div>
      </div>

      {/* SKILLS */}
      <div
        id="skills"
        className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition duration-1000"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
          {t("skills.title")}
        </h2>
        <div className="mt-8">
          <Skills />
        </div>
      </div>

      <div
        id="education"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20"
      >
        {/* EDUCATION */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-1000 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
            {t("education.title")}
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition duration-1000">
              {t("education.degree")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg transition duration-1000">
              {t("education.institution")} | {t("education.years")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 transition duration-1000">
              {t("education.focus")}
            </p>
          </div>
        </div>

        {/* ROLES */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-1000 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
            {t("roles.title")}
          </h2>
          <Roles />
        </div>
      </div>

      <div id="projects"></div>

      {/* PROJECTS */}
      <div className="mt-20 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 transition duration-1000 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-4 border-blue-600 dark:border-blue-400 inline-block transition duration-1000">
          {t("projects.title")}
        </h2>
        <div className="mt-8">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
