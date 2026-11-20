import { memo, useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import projectsData from "../../data/projects.json";
import type { Project } from "../../types";
import { tData } from "../../utils/tData";

const imageModules = import.meta.glob<{ default: string }>(
  "../../assets/images/projects/*/*.{webp,png}",
  { eager: true },
);

const imageMap: Record<string, string[]> = {};
for (const [path, module] of Object.entries(imageModules)) {
  const parts = path.split("/");
  const key = parts[parts.length - 2];
  imageMap[key] ??= [];
  imageMap[key].push(module.default);
}

const featuredProjects = (projectsData as Project[])
  .filter((project) => !project.disabled)
  .slice(0, 5)
  .map((project) => ({ ...project, images: imageMap[project.imageKey] ?? [] }));

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = featuredProjects[current];

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + featuredProjects.length) % featuredProjects.length);
    },
    [],
  );

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % featuredProjects.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  if (!project) return null;

  return (
    <section
      id="featured-projects"
      className="container mx-auto mb-24 scroll-mt-24 px-6 lg:px-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-labelledby="featured-projects-title"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker mb-3">01 / Selected work</p>
          <h2 id="featured-projects-title" className="text-4xl font-bold tracking-tight md:text-5xl">
            {t("projects.title")}
          </h2>
        </div>
        <div className="flex items-center gap-2" aria-label="Project carousel controls">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="rounded-full border border-slate-300 bg-white/70 p-3 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-cyan-300"
            aria-label="Previous featured project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="rounded-full bg-cyan-400 p-3 text-slate-950 transition hover:bg-cyan-300"
            aria-label="Next featured project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="premium-surface relative overflow-hidden rounded-[2rem] p-3 md:p-5">
        <div className="grid min-h-[30rem] overflow-hidden rounded-[1.5rem] bg-slate-950 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-64 overflow-hidden">
            {project.images?.[0] ? (
              <img
                key={project.images[0]}
                src={project.images[0]}
                alt={tData(project.title)}
                width={900}
                height={620}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-slate-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent md:bg-gradient-to-r" />
            <span className="absolute left-6 top-6 rounded-full border border-cyan-300/30 bg-slate-950/60 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur-md">
              {String(current + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative flex flex-col justify-between p-7 text-white md:p-10">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                Featured project
              </p>
              <h3 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
                {tData(project.title)}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                {tData(project.description)}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.slice(0, 6).map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {project.deployLabel ? tData(project.deployLabel) : t("projects.buttons.deployed_link")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 pt-5" aria-label="Select featured project">
          {featuredProjects.map((item, index) => (
            <button
              key={`${item.imageKey}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${index === current ? "w-10 bg-cyan-400" : "w-5 bg-slate-300 dark:bg-slate-700"}`}
              aria-label={`Show featured project ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturedProjects);
