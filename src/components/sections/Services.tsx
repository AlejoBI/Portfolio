import { memo } from "react";
import { Code2, Layers3, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const services = isEnglish
    ? [
        { icon: Code2, number: "01", title: "Frontend experiences", description: "Interfaces that feel clear, fast and intentional across every screen." },
        { icon: Server, number: "02", title: "Backend & APIs", description: "Reliable services, integrations and data flows built to scale with the product." },
        { icon: Layers3, number: "03", title: "Product architecture", description: "A practical bridge between design, code and the technical decisions behind it." },
      ]
    : [
        { icon: Code2, number: "01", title: "Experiencias frontend", description: "Interfaces claras, rápidas e intencionales en cualquier pantalla." },
        { icon: Server, number: "02", title: "Backend y APIs", description: "Servicios, integraciones y flujos de datos confiables que pueden crecer con el producto." },
        { icon: Layers3, number: "03", title: "Arquitectura de producto", description: "Un puente práctico entre diseño, código y las decisiones técnicas que lo hacen posible." },
      ];

  return (
    <section className="container mx-auto mb-24 px-6 lg:px-20" aria-labelledby="services-title">
      <div className="mb-8 flex items-end justify-between gap-5">
        <div>
          <p className="section-kicker mb-3">02 / Capabilities</p>
          <h2 id="services-title" className="text-4xl font-bold tracking-tight md:text-5xl">
            {isEnglish ? "What I build" : "Lo que construyo"}
          </h2>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-slate-400 md:block dark:text-slate-600">
          {isEnglish ? "From idea to interface" : "De la idea a la interfaz"}
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
