import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t("skills.programmingLanguages"),
      items: [
        {
          name: t("skills.items.javascript"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
    },
    {
      category: t("skills.frontendDevelopment"),
      items: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "React (Vite.js)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: t("skills.backendDevelopment"),
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
      ],
    },
    {
      category: t("skills.databasesAndServers"),
      items: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        { name: t("skills.items.restApis"), icon: "" },
      ],
    },
    {
      category: t("skills.toolsAndDevOps"),
      items: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
    {
      category: t("skills.softSkills"),
      items: [
        { name: t("skills.items.problemSolving"), icon: "" },
        { name: t("skills.items.innovation"), icon: "" },
        { name: t("skills.items.teamwork"), icon: "" },
        { name: t("skills.items.communication"), icon: "" },
      ],
    },
    {
      category: t("skills.languages"),
      items: [
        { name: t("skills.items.spanish"), icon: "🇪🇸", isEmoji: true },
        { name: t("skills.items.english"), icon: "EN", isText: true },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillCategory, idx) => (
        <div
          key={skillCategory.category}
          className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-500 card-hover"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                {skillCategory.category}
              </h3>
            </div>

            <ul className="space-y-3">
              {skillCategory.items.map((skill, skillIdx) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group/item"
                  style={{ animationDelay: `${idx * 0.1 + skillIdx * 0.05}s` }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gray-200/50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-gray-300/50 dark:group-hover/item:bg-gray-600/50 transition-all duration-300 overflow-hidden">
                      {skill.isEmoji ? (
                        <span className="text-xl">{skill.icon}</span>
                      ) : skill.isText ? (
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{skill.icon}</span>
                      ) : skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6 object-contain filter group-hover/item:brightness-125 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-3 h-3 bg-gradient-tech rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium group-hover/item:translate-x-1 transition-transform duration-300">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-tech opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
