import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";

import ImagePortfolio from "../../assets/images/Foto.webp";
import cv from "../../assets/docs/CV.pdf";
import github from "../../assets/images/github2.webp";
import linkedin from "../../assets/images/logotipo_de_linkedin2.webp";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const projects = t("experience.projects", { returnObjects: true });
  const rolesList = t("roles.list", { returnObjects: true });

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
          <div className="flex mt-6 space-x-4">
            <a
              href="mailto:alejandrobravoisajar1@gmail.com"
              className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:scale-105 hover:shadow-xl transition duration-1000"
            >
              {t("presentation.contact")}
            </a>
            <a
              href="https://github.com/AlejoBI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-900 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-xl transition duration-1000"
            >
              <img src={github} alt="GitHub Logo" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-bravo-isajar-061b682b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-xl transition duration-1000"
            >
              <img src={linkedin} alt="LinkedIn Logo" className="w-6 h-6" />
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
          <p className="text-gray-700 dark:text-gray-300 text-lg transition duration-1000">
            <strong>{t("experience.university_projects")}</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg transition duration-1000">
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}:</strong> {project.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-gray-300 text-lg transition duration-1000 mt-4">
            {t("experience.conclusion")}
          </p>
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
            Roles Performed
          </h2>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            {rolesList.map((role, index) => (
              <li
                key={index}
                className="text-gray-700 dark:text-gray-300 text-lg transition duration-1000"
              >
                {role}
              </li>
            ))}
          </ul>
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
