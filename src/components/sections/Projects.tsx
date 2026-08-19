import { memo, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import projectsData from "../../data/projects.json";
import type { Project } from "../../types";

const imageModules = import.meta.glob<{
  default: string;
}>("../../assets/images/projects/*/*.webp", { eager: true });

const buildImageMap = (): Record<string, string[]> => {
  const map: Record<string, string[]> = {};
  for (const [path, mod] of Object.entries(imageModules)) {
    const parts = path.split("/");
    const folder = parts[parts.length - 2];
    if (!map[folder]) map[folder] = [];
    map[folder].push(mod.default);
  }
  return map;
};

const allImages = buildImageMap();

const projects = (projectsData as Project[])
  .filter((p) => !p.disabled)
  .map((p) => ({ ...p, images: allImages[p.imageKey] || [] })) as Project[];

const PLACEHOLDER_IMG = (
  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
    <svg
      className="w-12 h-12 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  </div>
);

const ImageGallery = memo(({ images, title }: { readonly images: string[]; readonly title: string }) => {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const prev = useCallback(() => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  if (images.length === 0) return PLACEHOLDER_IMG;

  return (
    <div className="relative h-48 overflow-hidden group/gallery">
      {imgError[current] ? (
        PLACEHOLDER_IMG
      ) : (
        <img
          src={images[current]}
          alt={title}
          loading="lazy"
          width={800}
          height={192}
          onError={() => setImgError((prev) => ({ ...prev, [current]: true }))}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
});
ImageGallery.displayName = "ImageGallery";

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
    const [expanded, setExpanded] = useState(false);

    return (
      <div
        className={`group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-[transform,opacity,border-color] duration-500 card-hover ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <ImageGallery images={project.images || []} title={tData(project.title)} />

        {project.archived && (
          <span className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-amber-500/90 dark:bg-amber-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {t("projects.university_project")}
          </span>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {tData(project.title)}
          </h3>
          <p
            className={`text-gray-600 dark:text-gray-400 text-sm mb-4 transition-all duration-300 ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {tData(project.description)}
          </p>
          {tData(project.description).length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline mb-4 -mt-2"
            >
              {expanded ? t("projects.buttons.show_less") : t("projects.buttons.show_more")}
            </button>
          )}

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
              className="px-4 py-2 bg-blue-600 dark:bg-gradient-tech text-white text-sm rounded-lg hover:shadow-xl hover:scale-105"
            >
              {t("projects.buttons.view_project")}
            </a>
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-sm rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
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
