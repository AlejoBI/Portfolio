import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";
import projecto1 from "../../assets/images/projects/FrelancersPage.webp";
import projecto2 from "../../assets/images/projects/ScoreBoardApp.webp";
import projecto3 from "../../assets/images/projects/CosasEcommerce.webp";
import projecto4 from "../../assets/images/projects/SistemaRag.webp";
import projecto5 from "../../assets/images/projects/ISOlytics.webp"; // Descomenta cuando tengas la imagen

import { useTranslation } from "react-i18next";

const Projects = () => {
  const [expandedDescription, setExpandedDescription] = useState(null);
  const [expandedTags, setExpandedTags] = useState(null);
  const { t } = useTranslation();

  const listProjectsTranslations = t("projects.list", { returnObjects: true });

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
      description:
        "A RAG (Retrieval-Augmented Generation) system that uses OpenAI AI together with vectorization techniques to process and analyze documents provided by the user. The system allows generating precise responses based on the information provided, integrating an interactive dashboard for document management, query monitoring and results visualization, thus optimizing access to personalized and relevant knowledge.",
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
    {
      title: "ISOlytics",
      description:
        "Audit and compliance software. Implementation of a tool for companies to validate their compliance with standards (ISO, ITIL, etc.).",
      image: projecto5,
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Firebase",
        "Redux",
        "TailwindCSS",
        "Docker",
        "Microservicios",
      ],
      link: "https://isolytics.vercel.app/",
      deploy: "https://isolytics.vercel.app/",
    },
  ];

  if (Array.isArray(listProjectsTranslations)) {
    for (let i = 0; i < projectsList.length; i++) {
      projectsList[i] = { ...projectsList[i], ...listProjectsTranslations[i] };
    }
  }

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
    beforeChange: () => {
      setExpandedDescription(null);
      setExpandedTags(null);
    },
    focusOnSelect: false,
    edgeFriction: 0.1,
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gradient-tech transition-all duration-300 cursor-pointer"></div>
    ),
  };

  return (
    <div className="projects-slider">
      <Slider {...settings}>
        {projectsList.map((project, index) => (
          <div key={index} className="project-card px-2 md:px-4 py-6">
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-700 hover:-translate-y-2">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-30 animate-pulse"></div>
              </div>

              {/* Main card content with subtle inner border */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl m-[2px]">
                {/* Image Container with enhanced effects */}
                <div className="relative overflow-hidden h-72 md:h-96 rounded-t-3xl">
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />

                  {/* Animated badge with glow effect */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 dark:bg-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-100 animate-pulse"></div>
                      <div className="relative px-4 py-2 bg-blue-600 dark:bg-gradient-tech rounded-full text-white text-sm font-bold shadow-2xl border-2 border-white/20">
                        #{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="p-6 md:p-8 relative">
                  {/* Title with gradient on hover */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <div className="mb-6">
                    <p
                      className={`text-gray-700 dark:text-gray-300 text-base leading-relaxed transition-all duration-300 ${
                        expandedDescription === index
                          ? ""
                          : "line-clamp-2 md:line-clamp-none"
                      }`}
                    >
                      {project.description}
                    </p>
                    {project.description.length > 100 && (
                      <button
                        onClick={() =>
                          setExpandedDescription(
                            expandedDescription === index ? null : index
                          )
                        }
                        className="md:hidden mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline focus:outline-none flex items-center gap-1"
                      >
                        {expandedDescription === index ? (
                          <>
                            Ver menos
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Ver más
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="mb-8">
                    <div
                      className={`flex flex-wrap gap-2 transition-all duration-300 ${
                        expandedTags === index
                          ? ""
                          : "max-h-20 md:max-h-none overflow-hidden"
                      }`}
                    >
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tag}
                          className="group/tag relative px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-blue-500 hover:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-gray-700 dark:text-gray-300 hover:text-white text-sm font-medium rounded-full shadow-sm hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default"
                          style={{ 
                            animationDelay: `${tagIdx * 0.05}s`,
                            animation: 'fadeInUp 0.5s ease-out forwards'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.tags.length > 5 && (
                      <button
                        onClick={() =>
                          setExpandedTags(expandedTags === index ? null : index)
                        }
                        className="md:hidden mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedTags === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                        </svg>
                        {expandedTags === index
                          ? "Ver menos"
                          : `Ver todas (${project.tags.length})`}
                      </button>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 dark:bg-gradient-tech text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {t("projects.buttons.view_project")}
                    </Link>

                    {project.deploy !== "Deployed Link" && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-xl font-semibold border border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        {t("projects.buttons.deployed_link")}
                      </a>
                    )}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
