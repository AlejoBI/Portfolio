import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import experienceProjects from "../../data/experience.json";
import experienceConclusion from "../../data/experienceConclusion.json";
import type { ExperienceProject, Translatable } from "../../types";
import { Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_VISIBLE = 4;

const FormalCard = memo(
  ({
    project,
    inView,
  }: {
    readonly project: ExperienceProject & { details?: Translatable[] };
    readonly inView: boolean;
  }) => {
    const [showAll, setShowAll] = useState(false);
    const details = project.details ?? [];
    const hasMore = details.length > INITIAL_VISIBLE;
    const visible = showAll ? details : details.slice(0, INITIAL_VISIBLE);

    return (
      <div
        className={`group relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-300/50 dark:border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center shadow-lg">
            <Briefcase className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {tData(project.name)}
                </h4>
                <span className="px-2 py-0.5 bg-blue-500/15 dark:bg-blue-500/25 text-blue-600 dark:text-blue-400 text-xs rounded-full font-semibold whitespace-nowrap">
                  {project.period}
                </span>
              </div>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-1">
                {project.company}
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {tData(project.description)}
          </p>
          {details.length > 0 && (
            <>
              <ul className="space-y-2 overflow-hidden transition-all duration-300">
                {visible.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 bg-blue-500 rounded-full" />
                    <span>{tData(detail)}</span>
                  </li>
                ))}
              </ul>
              {hasMore && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="mt-3 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  {showAll ? (
                    <>Show less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Show more ({details.length - INITIAL_VISIBLE} more) <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    );
  },
);
FormalCard.displayName = "FormalCard";

const UniversityCard = memo(
  ({
    project,
    index,
    inView,
  }: {
    readonly project: ExperienceProject;
    readonly index: number;
    readonly inView: boolean;
  }) => (
    <div
      className={`group relative bg-gray-100/50 dark:bg-gray-800/30 border border-gray-300/50 dark:border-gray-700/50 rounded-xl p-5 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center text-gray-900 dark:text-white font-bold code-font text-sm">
          {index + 1}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {tData(project.name)}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            {tData(project.description)}
          </p>
        </div>
      </div>
    </div>
  ),
);
UniversityCard.displayName = "UniversityCard";

const INITIAL_UNIVERSITY = 5;

const Experience = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const [showAllUni, setShowAllUni] = useState(false);
  const projects = experienceProjects as (ExperienceProject & { details?: Translatable[] })[];

  const formal = projects.filter((p) => p.type === "formal");
  const university = projects.filter((p) => p.type !== "formal");
  const uniHasMore = university.length > INITIAL_UNIVERSITY;
  const uniVisible = showAllUni ? university : university.slice(0, INITIAL_UNIVERSITY);

  return (
    <div className="space-y-10" ref={ref}>
      {formal.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {t("experience.formal")}
            </h3>
          </div>
          <div className="space-y-4">
            {formal.map((project) => (
              <FormalCard
                key={tData(project.name)}
                project={project}
                inView={inView}
              />
            ))}
          </div>
        </div>
      )}

      {university.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {t("experience.university")}
            </h3>
          </div>
          <div className="space-y-4">
            {uniVisible.map((project, index) => (
              <UniversityCard
                key={tData(project.name)}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
          {uniHasMore && (
            <button
              onClick={() => setShowAllUni(!showAllUni)}
              className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 mx-auto"
            >
              {showAllUni ? (
                <>Show less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show more ({university.length - INITIAL_UNIVERSITY} more) <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      )}

      <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 dark:border-blue-500/20 rounded-xl">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {tData(experienceConclusion.conclusion)}
        </p>
      </div>
    </div>
  );
};

Experience.displayName = "Experience";
export default memo(Experience);
