import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import experienceProjects from "../../data/experience.json";
import type { ExperienceProject, Translatable } from "../../types";
import { Briefcase, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

const INITIAL_VISIBLE = 1;
const INITIAL_UNIVERSITY = 4;

type ExperienceItem = ExperienceProject & { details?: Translatable[]; note?: Translatable };

const FormalEntry = memo(({ project, index, inView }: { project: ExperienceItem; index: number; inView: boolean }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const details = project.details ?? [];
  const visibleDetails = expanded ? details : details.slice(0, INITIAL_VISIBLE);
  const hasMore = details.length > INITIAL_VISIBLE;
  const canExpand = hasMore || Boolean(project.note);

  return (
    <article
      className={`relative grid gap-4 border-b border-slate-200/80 py-8 last:border-0 dark:border-slate-800/80 md:grid-cols-[8rem_1fr] md:gap-8 ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} transition-all duration-500`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-mono text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 md:pt-1">
        {project.period}
      </div>
      <div className="relative border-l border-cyan-400/30 pl-7 before:absolute before:-left-[0.4rem] before:top-1 before:h-3 before:w-3 before:rounded-full before:border-4 before:border-white before:bg-cyan-400 before:content-[''] dark:before:border-slate-950 md:pl-8">
        <div className="mb-2 flex items-start gap-3">
          <Briefcase className="mt-1 h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-300" />
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{tData(project.name)}</h4>
            <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">{project.company}</p>
          </div>
        </div>
        <p className={`leading-7 text-slate-600 dark:text-slate-400 ${expanded ? "" : "line-clamp-3"}`}>{tData(project.description)}</p>
        {details.length > 0 && (
          <>
            <ul className="mt-4 space-y-2">
              {visibleDetails.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{tData(detail)}</span>
                </li>
              ))}
            </ul>
            {canExpand && (
              <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300">
                {expanded ? t("experience.show_less") : t("experience.show_more")}
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            )}
          </>
        )}
        {project.note && expanded && <p className="mt-4 border-l-2 border-cyan-400/60 pl-4 text-sm leading-6 text-cyan-700 dark:text-cyan-300">{tData(project.note)}</p>}
      </div>
    </article>
  );
});
FormalEntry.displayName = "FormalEntry";

const UniversityEntry = memo(({ project, index, inView }: { project: ExperienceProject; index: number; inView: boolean }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/45 ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="flex items-start gap-4">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-semibold text-slate-900 dark:text-white">{tData(project.name)}</h4>
            <span className="font-mono text-xs text-slate-500">{project.period}</span>
          </div>
          <p className={`mt-2 leading-6 text-slate-600 dark:text-slate-400 ${expanded ? "" : "line-clamp-2"}`}>{tData(project.description)}</p>
          <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-2 text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300">
            {expanded ? t("experience.university_less") : t("experience.university_more")}
          </button>
        </div>
      </div>
    </article>
  );
});
UniversityEntry.displayName = "UniversityEntry";

const Experience = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const [showAllUniversity, setShowAllUniversity] = useState(false);
  const projects = experienceProjects as ExperienceItem[];
  const formal = projects.filter((project) => project.type === "formal");
  const university = projects.filter((project) => project.type !== "formal");
  const visibleUniversity = showAllUniversity ? university : university.slice(0, INITIAL_UNIVERSITY);

  return (
    <div ref={ref} className="space-y-12">
      {formal.length > 0 && (
        <section>
          <div className="mb-2 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("experience.formal")}</h3>
          </div>
          <div className="ml-1 pl-5 md:ml-0 md:pl-0">
            {formal.map((project, index) => <FormalEntry key={tData(project.name)} project={project} index={index} inView={inView} />)}
          </div>
        </section>
      )}

      {university.length > 0 && (
        <section>
          <div className="mb-2 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("experience.university")}</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {visibleUniversity.map((project, index) => <UniversityEntry key={tData(project.name)} project={project} index={index} inView={inView} />)}
          </div>
          {university.length > INITIAL_UNIVERSITY && <button type="button" onClick={() => setShowAllUniversity((value) => !value)} className="mt-4 ml-1 text-sm font-semibold text-cyan-700 hover:underline dark:text-cyan-300">{showAllUniversity ? t("experience.university_less") : t("experience.university_more")}</button>}
        </section>
      )}

    </div>
  );
};

Experience.displayName = "Experience";
export default memo(Experience);
