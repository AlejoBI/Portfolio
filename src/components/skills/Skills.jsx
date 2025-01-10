import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming and Development",
      items: [
        { name: "Data Structures", level: "Intermediate" },
        { name: "Algorithms and Complexity", level: "Intermediate" },
        { name: "Recursion", level: "Basic" },
        { name: "Dynamic Programming", level: "Basic" },
        { name: "Object-Oriented Programming", level: "Intermediate" },
        { name: "Functional Programming", level: "Basic" },
        { name: "Web Development", level: "Intermediate" },
        { name: "Design Patterns", level: "Basic" },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Basic" },
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Basic" },
        { name: "SQL", level: "Intermediate" },
        { name: "C++", level: "Basic" },
      ],
    },
    {
      category: "Databases and Servers",
      items: [
        { name: "SQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "RESTful APIs", level: "Intermediate" },
        { name: "Spring Boot", level: "Basic" },
      ],
    },
    {
      category: "Frameworks and Tools",
      items: [
        { name: "React.js", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Docker", level: "Basic" },
        { name: "Git (GitHub)", level: "Intermediate" },
        { name: "Bootstrap", level: "Basic" },
        { name: "Tailwind CSS", level: "Basic" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Basic" },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Effective Communication", level: "Advanced" },
        { name: "Teamwork", level: "Advanced" },
        { name: "Problem Solving", level: "Intermediate" },
        { name: "Adaptability", level: "Advanced" },
      ],
    },
  ];

  return (
    <div className="space-y-4 text-gray-800 dark:text-white transition-colors duration-1000"> 
      {skills.map((skillCategory) => (
        <details key={skillCategory.category} className="border p-2 rounded hover:shadow-xl">
          <summary className="text-xl font-semibold cursor-pointer">
            {skillCategory.category}
          </summary>
          <ul className="mt-2 space-y-1 pl-4">
            {skillCategory.items.map((skill) => (
              <li key={skill.name} className="flex justify-between">
                <span>{skill.name}</span>
                <span className="text-gray-500">{skill.level}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default Skills;
