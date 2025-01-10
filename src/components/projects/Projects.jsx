import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import projecto1 from "../../assets/images/projects/FrelancersPage.png";

const Projects = () => {
  const projectsList = [
    {
      title: "Freelancers web page",
      description:
        "A web page for freelancers to offer their services and clients to hire them",
      image: { projecto1 },
      tags: ["React", "Node.js", "Firebase"],
      link: "https://github.com/AlejoBI/Proyecto-EDA2",
      deploy: "https://freelancers-eda2.web.app/",
    },
    {
      title: "Project 2",
      description: "A responsive dashboard with real-time data visualization",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
      deploy: "#",
    },
    {
      title: "Project 3",
      description: "A mobile app for task management with offline capabilities",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React Native", "SQLite"],
      link: "#",
      deploy: "#",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="projects-slider">
      <Slider {...settings}>
        {projectsList.map((project, index) => (
          <div key={index} className="project-card p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap mt-4 gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    to={project.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Project
                  </Link>
                </div>
                <div className="mt-2">
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
