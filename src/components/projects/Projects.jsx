import Slider from "react-slick";
import { Link } from "react-router-dom";
import projecto1 from "../../assets/images/projects/FrelancersPage.webp";
import projecto2 from "../../assets/images/projects/ScoreBoardApp.webp";
import projecto3 from "../../assets/images/projects/CosasEcommerce.webp";
import projecto4 from "../../assets/images/projects/SistemaRag.webp";

const Projects = () => {
  const projectsList = [
    {
      title: "Freelancers Web Page",
      description:
        "A web page for freelancers to offer their services and clients to hire them. (No responsive design yet).",
      image: projecto1,
      tags: ["React", "Node.js", "Firebase", "Bootstrap"],
      link: "https://github.com/AlejoBI/Proyecto-EDA2",
      deploy: "https://freelancers-eda2.web.app/",
    },
    {
      title: "ScoreBoard App",
      description:
        "An application for recording and organizing equipment, designed to simplify the organization and presentation of results efficiently.",
      image: projecto2,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/JuanJaramillo12004/ScoreBoard",
      deploy: "Deployed Link",
    },
    {
      title: "E-commerce",
      description:
        "An e-commerce platform designed to facilitate the purchase and sale of products, offering an intuitive experience for users, with functionalities such as inventory management, product search, and an efficient purchase flow.",
      image: projecto3,
      tags: ["HTML", "CSS", "JavaScript", "SQL", "Bootstrap", "Spring Boot"],
      link: "https://github.com/JuanDiegoCortes/E-commerce",
      deploy: "Deployed Link",
    },
    {
      title: "RAG System",
      description: "A RAG (Retrieval-Augmented Generation) system that uses OpenAI AI together with vectorization techniques to process and analyze documents provided by the user. The system allows generating precise responses based on the information provided, integrating an interactive dashboard for document management, query monitoring and results visualization, thus optimizing access to personalized and relevant knowledge.",
      image: projecto4,
      tags: [
        "Python",
        "FastApi",
        "React",
        "JavaScript",
        "Bootstrap",
        "ApiRest",
        "MongoDB",
        "ChromaDB",
        "CI/CD",
        "Code Coverage",
      ],
      link: "https://github.com/AlejoBI/Proyecto-IS2",
      deploy: "Deployed Link",
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-1000">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover shadow-md"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-1000">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-1000">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white text-sm px-3 py-1 rounded-full transition-colors duration-1000"
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
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-1000"
                  >
                    View Project
                  </Link>
                  {project.deploy !== "Deployed Link" && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-1000"
                    >
                      Deployed Link
                    </a>
                  )}
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
