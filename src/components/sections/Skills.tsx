import { memo, useState, type ComponentType } from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../hooks/useInView";
import { tData } from "../../utils/tData";
import skillsData from "../../data/skills.json";
import type { SkillCategory } from "../../types";
import {
  CheckSquare,
  ChevronDown,
  Code2,
  Container,
  Database,
  FlaskConical,
  Globe,
  Monitor,
  Server,
  ShieldCheck,
  Sparkles,
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
  Tools: Sparkles,
  Herramientas: Sparkles,
  Methodologies: CheckSquare,
  Metodologías: CheckSquare,
  Languages: Globe,
  Idiomas: Globe,
};

const Skills = () => {
  const { ref, inView } = useInView();
  const { i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const skills = skillsData as SkillCategory[];
  const activeCategory = skills[activeIndex] ?? skills[0];
  const activeName = activeCategory ? tData(activeCategory.category) : "";
  const ActiveIcon = categoryIcons[activeName] ?? Code2;

  return (
    <div ref={ref} className={`transition-[opacity,transform] duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {i18n.language === "en"
            ? "A practical view of the tools and knowledge I use to turn ideas into reliable digital solutions."
            : "Una mirada práctica a las herramientas y conocimientos que utilizo para convertir ideas en soluciones digitales confiables."}
        </p>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
          {String(skills.length).padStart(2, "0")} {i18n.language === "en" ? "areas" : "áreas"}
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(13rem,0.32fr)_1fr]">
        <div className="lg:hidden">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            {i18n.language === "en" ? "Explore an area" : "Explora un área"}
          </span>
          <div className="relative z-30 max-w-full">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-haspopup="listbox"
              className="flex w-full max-w-full items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-4 text-left text-sm font-semibold text-slate-800 shadow-sm outline-none transition hover:border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <ActiveIcon className="h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />
              <span className="min-w-0 flex-1 break-words">{String(activeIndex + 1).padStart(2, "0")} · {activeName}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${mobileOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 max-h-[min(16rem,calc(100vh-12rem))] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/40" role="listbox">
                {skills.map((category, index) => (
                  <button
                    key={tData(category.category)}
                    type="button"
                    role="option"
                    aria-selected={index === activeIndex}
                    onClick={() => { setActiveIndex(index); setMobileOpen(false); }}
                    className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${index === activeIndex ? "bg-cyan-400/15 text-cyan-800 dark:text-cyan-300" : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"}`}
                  >
                    <span className="shrink-0 font-mono text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 break-words">{tData(category.category)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <nav className="hidden lg:block lg:space-y-1" aria-label={i18n.language === "en" ? "Skill areas" : "Áreas de habilidades"}>
          {skills.map((category, index) => {
            const name = tData(category.category);
            const Icon = categoryIcons[name] ?? Code2;
            const isActive = index === activeIndex;

            return (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`group flex min-w-0 items-center gap-2 rounded-xl px-3 py-3 text-left transition lg:w-full lg:gap-3 lg:px-4 ${isActive ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:bg-cyan-400 dark:text-slate-950" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/70 dark:hover:text-white"}`}
              >
                <span className={`font-mono text-xs ${isActive ? "text-cyan-300 dark:text-slate-700" : "text-slate-400"}`}>{String(index + 1).padStart(2, "0")}</span>
                <Icon className="h-4 w-4" />
                <span className="min-w-0 text-xs font-semibold leading-4 sm:text-sm">{name}</span>
              </button>
            );
          })}
        </nav>

        {activeCategory && (
          <section className="relative min-h-[19rem] min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-900/50 md:p-8" role="tabpanel">
            <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300">
                    <ActiveIcon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{String(activeIndex + 1).padStart(2, "0")} / {i18n.language === "en" ? "Focus" : "Enfoque"}</p>
                    <h3 className="break-words text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">{activeName}</h3>
                  </div>
                </div>
                <span className="self-start whitespace-nowrap rounded-full border border-slate-200 px-3 py-1 font-mono text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  {activeCategory.items.length} {i18n.language === "en" ? "skills" : "habilidades"}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {activeCategory.items.map((skill) => (
                  <div key={tData(skill.name)} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 transition hover:-translate-y-0.5 hover:border-cyan-400/60 dark:border-slate-800 dark:bg-slate-950/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      {skill.icon.startsWith("http") ? <img src={skill.icon} alt="" loading="lazy" width={22} height={22} className="h-5 w-5 object-contain" /> : skill.icon ? <span className="text-sm">{skill.icon}</span> : <ActiveIcon className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />}
                    </div>
                    <span className="min-w-0 break-words text-sm font-medium text-slate-700 dark:text-slate-300">{tData(skill.name)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default memo(Skills);
