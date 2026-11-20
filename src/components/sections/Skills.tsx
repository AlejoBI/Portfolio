import { memo, useState, type ComponentType } from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import skillsData from "../../data/skills.json";
import type { SkillCategory, Translatable } from "../../types";
import {
  Code2,
  Monitor,
  Server,
  ShieldCheck,
  Database,
  Container,
  FlaskConical,
  Sparkles,
  CheckSquare,
  Globe,
} from "lucide-react";

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  "Programming Languages": Code2,
  "Lenguajes de Programación": Code2,
  "Frontend Development": Monitor,
  "Desarrollo Frontend": Monitor,
  "Backend Development": Server,
  "Desarrollo Backend": Server,
  "APIs, Authentication and Architecture": ShieldCheck,
  "APIs, Autenticación y Arquitectura": ShieldCheck,
  Databases: Database,
  "Bases de Datos": Database,
  "DevOps and Observability": Container,
  "DevOps y Observabilidad": Container,
  Testing: FlaskConical,
  "AI Productivity": Sparkles,
  "Productividad con IA": Sparkles,
  Methodologies: CheckSquare,
  Metodologías: CheckSquare,
  Languages: Globe,
  Idiomas: Globe,
};

const SkillCard = memo(
  ({
    category,
    items,
    index,
    inView,
  }: {
    readonly category: string;
    readonly items: readonly { name: string; icon: string }[];
    readonly index: number;
    readonly inView: boolean;
  }) => {
    const CategoryIcon = categoryIcons[category] || Code2;

    return (
      <div
        className={`group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700/70 rounded-2xl p-6 hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-[transform,opacity,border-color] duration-500 card-hover ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
         <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-400/15 border border-cyan-400/30 rounded-lg flex items-center justify-center">
              <CategoryIcon className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
          </div>
          <ul className="space-y-3">
            {items.map((skill, skillIdx) => (
              <li
                key={skill.name}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group/item"
                style={{ animationDelay: `${skillIdx * 50}ms` }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 overflow-hidden">
                    {skill.icon.startsWith("http") ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain transition-all duration-300"
                      />
                    ) : skill.icon ? (
                      <span className="text-xs leading-none">{skill.icon}</span>
                    ) : (
                      <div className="w-4 h-4 text-gray-900 dark:text-white">
                        <CategoryIcon className="w-full h-full" />
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-sm font-medium group-hover/item:translate-x-1 transition-transform duration-300">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
         <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500" />
      </div>
    );
  },
);
SkillCard.displayName = "SkillCard";

const Skills = () => {
  const { ref, inView } = useInView();

  // Every label here comes from tData(), which reads i18next imperatively and so
  // does not subscribe on its own. Without this hook the memoized cards keep the
  // labels resolved on first render and never follow a language switch.
  const { i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const skills: SkillCategory[] = skillsData as SkillCategory[];
  const filters = i18n.language === "en"
    ? [
        ["all", "All skills"],
        ["frontend", "Frontend"],
        ["backend", "Backend & APIs"],
        ["infra", "Data & DevOps"],
        ["other", "Methods & AI"],
      ]
    : [
        ["all", "Todas"],
        ["frontend", "Frontend"],
        ["backend", "Backend y APIs"],
        ["infra", "Datos y DevOps"],
        ["other", "Métodos e IA"],
      ];

  const getFilter = (category: Translatable) => {
    const name = tData(category).toLowerCase();
    if (name.includes("frontend")) return "frontend";
    if (name.includes("backend") || name.includes("api") || name.includes("architecture") || name.includes("arquitectura")) return "backend";
    if (name.includes("database") || name.includes("base de datos") || name.includes("devops")) return "infra";
    return "other";
  };

  const visibleSkills = skills.filter(
    (category) => activeFilter === "all" || getFilter(category.category) === activeFilter,
  );

  return (
    <div ref={ref}>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
        {filters.map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={activeFilter === value}
            onClick={() => setActiveFilter(value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeFilter === value
                ? "border-cyan-400 bg-cyan-400 text-slate-950"
                : "border-slate-300 text-slate-600 hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-cyan-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {visibleSkills.map((skillCategory, idx) => (
        <SkillCard
          key={tData(skillCategory.category)}
          category={tData(skillCategory.category)}
          items={skillCategory.items.map((item) => ({
            name: tData(item.name),
            icon: item.icon,
          }))}
          index={idx}
          inView={inView}
        />
      ))}
      </div>
    </div>
  );
};

export default memo(Skills);
