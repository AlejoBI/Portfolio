import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const projects = t("experience.projects", { returnObjects: true });

  return (
    <div>
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
      <hr className=" border-gray-300 dark:border-gray-700 transition duration-1000" />
      <p className="text-gray-700 dark:text-gray-300 text-lg transition duration-1000 mt-4">
        {t("experience.conclusion")}
      </p>
    </div>
  );
};

export default Experience;
