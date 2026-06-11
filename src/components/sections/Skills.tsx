import { memo, type ComponentType } from "react";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import skillsData from "../../data/skills.json";
import type { SkillCategory } from "../../types";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  CheckSquare,
  Users,
  Globe,
} from "lucide-react";

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  "Programming Languages": Code2,
  "Lenguajes de Programación": Code2,
  "Frontend Development": Monitor,
  "Desarrollo Frontend": Monitor,
  "Backend Development": Server,
  "Desarrollo Backend": Server,
  "Databases and Servers": Database,
  "Bases de Datos y Servidores": Database,
  "Tools and DevOps": Wrench,
  "Herramientas y DevOps": Wrench,
  Methodologies: CheckSquare,
  Metodologías: CheckSquare,
  "Soft Skills": Users,
  "Habilidades Blandas": Users,
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
        className={`group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-[transform,opacity,border-color] duration-500 card-hover ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
              <CategoryIcon className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {category}
            </h3>
          </div>
          <ul className="space-y-3">
            {items.map((skill, skillIdx) => (
              <li
                key={skill.name}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group/item"
                style={{ animationDelay: `${skillIdx * 50}ms` }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-tech rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 overflow-hidden">
                    {skill.icon.startsWith("http") ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
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
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-tech opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500" />
      </div>
    );
  },
);
SkillCard.displayName = "SkillCard";

const Skills = () => {
  const { ref, inView } = useInView();

  const skills: SkillCategory[] = skillsData as SkillCategory[];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skillCategory, idx) => (
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
  );
};

export default memo(Skills);
