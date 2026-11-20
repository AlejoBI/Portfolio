import { memo } from "react";
import skillsData from "../../data/skills.json";
import type { SkillCategory } from "../../types";
import { tData } from "../../utils/tData";

const technologies = Array.from(
  new Map(
    (skillsData as SkillCategory[])
      .flatMap((category) => category.items)
      .filter((item) => item.icon && typeof item.name === "string")
      .map((item) => [item.name as string, item]),
  ).values(),
).slice(0, 16);

const TechMarquee = () => (
  <section className="relative mb-24 overflow-hidden border-y border-slate-200/80 py-5 dark:border-slate-800/80" aria-label="Technologies">
    <div className="tech-marquee flex w-max gap-10 px-6">
      {[...technologies, ...technologies].map((technology, index) => (
        <div key={`${technology.name}-${index}`} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">
          <img src={technology.icon} alt="" width={24} height={24} loading="lazy" className="h-6 w-6 object-contain" />
          <span>{tData(technology.name)}</span>
          <span className="ml-7 h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>
      ))}
    </div>
  </section>
);

export default memo(TechMarquee);
