import { memo } from "react";
import { useTranslation } from "react-i18next";
import certifications from "../../data/certifications.json";
import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import type { Project, SkillCategory } from "../../types";

const Stats = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const activeProjects = (projects as Project[]).filter((project) => !project.disabled);
  const technologyCount = new Set(activeProjects.flatMap((project) => project.tags.map((tag) => tag.toLowerCase()))).size;
  const stats = isEnglish
    ? [[String(activeProjects.length), "Active projects"], [String(technologyCount), "Technologies used"], [String(certifications.length), "Certifications"], [String((skills as SkillCategory[]).length), "Skill areas"]]
    : [[String(activeProjects.length), "Proyectos activos"], [String(technologyCount), "Tecnologías usadas"], [String(certifications.length), "Certificaciones"], [String((skills as SkillCategory[]).length), "Áreas técnicas"]];

  return (
    <section className="container mx-auto mb-24 px-6 lg:px-20" aria-label={isEnglish ? "Professional statistics" : "Estadísticas profesionales"}>
      <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white/60 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/40 md:grid-cols-4 md:divide-y-0">
        {stats.map(([value, label]) => (
          <div key={label} className="group p-6 transition hover:bg-cyan-400/5 md:p-8">
            <p className="font-mono text-4xl font-bold tracking-tight text-cyan-500 transition group-hover:translate-x-1 md:text-5xl">{value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Stats);
