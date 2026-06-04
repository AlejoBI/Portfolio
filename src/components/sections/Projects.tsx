import { memo } from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import projectsData from "../../data/projects.json";
import type { Project } from "../../types";
import projecto1 from "../../assets/images/projects/FrelancersPage.webp";
import projecto2 from "../../assets/images/projects/ScoreBoardApp.webp";
import projecto3 from "../../assets/images/projects/CosasEcommerce.webp";
import projecto4 from "../../assets/images/projects/SistemaRag.webp";
import projecto5 from "../../assets/images/projects/ISOlytics.webp";

const imageMap: Record<string, string> = {
  freelancers: projecto1,
  scoreboard: projecto2,
  ecommerce: projecto3,
  rag: projecto4,
  isolytics: projecto5,
};

const projects = (projectsData as Project[]).map((p) => ({
  ...p,
  image: imageMap[p.imageKey] || "",
})) as Project[];

const ProjectCard = memo(
  ({
    project,
    index,
    inView,
  }: {
    readonly project: Project;
    readonly index: number;
    readonly inView: boolean;
  }) => {
    const { t } = useTranslation();

    return (
      <div
        className={`group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-500 card-hover ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image!}
            alt={tData(project.title)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {tData(project.title)}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {tData(project.description)}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 dark:bg-gradient-tech text-white text-sm rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t("projects.buttons.view_project")}
            </a>
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-sm rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
              >
                {t("projects.buttons.deployed_link")}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  },
);
ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.imageKey}
          project={project}
          index={idx}
          inView={inView}
        />
      ))}
    </div>
  );
};

export default memo(Projects);
