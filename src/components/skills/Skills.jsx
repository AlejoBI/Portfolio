import React from "react";

const Skills = () => {
  const skillsList = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
  ];

  return (
    <div>
      {skillsList.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
};

export default Skills;
