import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import projecto1 from "../../assets/images/projects/FrelancersPage.png";

const Projects = () => {
  const projectsList = [
    {
      title: "Freelancers Web Page",
      description:
        "A web page for freelancers to offer their services and clients to hire them",
      image: projecto1,
      tags: ["React", "Node.js", "Firebase"],
      link: "https://github.com/AlejoBI/Proyecto-EDA2",
      deploy: "https://freelancers-eda2.web.app/",
    },
    {
      title: "Responsive Dashboard",
      description: "A responsive dashboard with real-time data visualization",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
      deploy: "#",
    },
    {
      title: "Task Management App",
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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    focusOnSelect: false,
    edgeFriction: 0.1,
  };

  return (
    <div className="projects-slider">
      <Slider {...settings}>
        {projectsList.map((project, index) => (
          <div key={index} className="project-card p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover shadow-md"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Project
                  </Link>
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
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
