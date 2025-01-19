const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "JavaScript (Main)",
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
      category: "Frontend Development",
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
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Backend Development",
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
      category: "Databases and Servers",
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
        { name: "RESTful APIs", icon: "" },
      ],
    },
    {
      category: "Tools and DevOps",
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
      category: "Soft Skills",
      items: [
        { name: "Problem Solving", icon: "" },
        { name: "Innovation", icon: "" },
        { name: "Teamwork", icon: "" },
        { name: "Communication", icon: "" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Spanish (Native)", icon: "https://flagcdn.com/w320/es.png" },
        { name: "English (B2)", icon: "https://flagcdn.com/w320/gb.png" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {skills.map((skillCategory) => (
        <div
          key={skillCategory.category}
          className="border p-4 rounded shadow-md bg-gray-50 dark:bg-gray-800 transition-colors duration-1000 hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-1000">
            {skillCategory.category}
          </h3>
          <ul className="space-y-2">
            {skillCategory.items.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 transition-colors duration-1000"
              >
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-1000">
                  {skill.icon && <img src={skill.icon} alt={skill.name} />}
                </div>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
