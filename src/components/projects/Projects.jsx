import React from "react";

import { Link } from "react-router-dom";

const Projects = () => {
  const projectsList = [
    {
      title: "Project 1",
      description:
        "A full-stack web application built with Next.js and PostgreSQL",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "A responsive dashboard with real-time data visualization",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
    },
  ];

  return (
    <div>
      {projectsList.map((project, index) => (
        <div key={index}>
          <div>
            <img src={project.image} alt={project.title} />
          </div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button>
              <Link to={project.link}>View project</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
