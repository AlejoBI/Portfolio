import { memo } from "react";
import { Code2, Layers3, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const services = isEnglish
    ? [
        { icon: Code2, number: "01", title: "Understand the challenge", description: "I start by understanding the need, the people involved, and the information that gives the problem its shape." },
        { icon: Server, number: "02", title: "Design the solution", description: "I organize ideas, flows, technology, and information into a clear path from concept to delivery." },
        { icon: Layers3, number: "03", title: "Build meaningful change", description: "I turn the solution into something useful, maintainable, and ready to improve as new needs appear." },
      ]
    : [
        { icon: Code2, number: "01", title: "Entender el reto", description: "Parto de comprender la necesidad, las personas involucradas y la información que da forma al problema." },
        { icon: Server, number: "02", title: "Diseñar la solución", description: "Organizo ideas, flujos, tecnología e información en un camino claro desde el concepto hasta la entrega." },
        { icon: Layers3, number: "03", title: "Construir cambios significativos", description: "Convierto la solución en algo útil, mantenible y preparado para mejorar cuando aparezcan nuevas necesidades." },
      ];

  return (
    <section className="container mx-auto mb-24 px-6 lg:px-20" aria-labelledby="services-title">
      <div className="mb-8 flex items-end justify-between gap-5">
        <div>
          <p className="section-kicker mb-3">{isEnglish ? "03 / Approach" : "03 / Enfoque"}</p>
          <h2 id="services-title" className="text-4xl font-bold tracking-tight md:text-5xl">
            {isEnglish ? "How I create value" : "Cómo creo valor"}
          </h2>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-slate-400 md:block dark:text-slate-600">
          {isEnglish ? "Engineering with purpose" : "Ingeniería con propósito"}
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map(({ icon: Icon, number, title, description }) => (
          <article key={number} className="group relative min-h-64 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-950/10 dark:border-slate-700/70 dark:bg-slate-900/60 dark:hover:shadow-black/30">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300"><Icon className="h-6 w-6" /></div>
                <span className="font-mono text-sm text-cyan-600 dark:text-cyan-300">{number}</span>
              </div>
              <div className="mt-12">
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">{description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(Services);
