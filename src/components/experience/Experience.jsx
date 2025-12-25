import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const projects = t("experience.projects", { returnObjects: true });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center transition-all duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
          {t("experience.university_projects")}
        </h3>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-100/50 dark:bg-gray-800/30 border border-gray-300/50 dark:border-gray-700/50 rounded-xl p-5 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:translate-x-2"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-tech rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold code-font transition-colors duration-300">
                {index + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 dark:border-blue-500/20 rounded-xl transition-all duration-300">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
          {t("experience.conclusion")}
        </p>
      </div>
    </div>
  );
};

export default Experience;
