import { memo, useEffect, useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { contact } from "../../config/contact";

const ContactCTA = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      window.location.href = contact.emailUrl;
    }
  };

  return (
    <section id="contact" className="container mx-auto mb-24 scroll-mt-24 px-6 lg:px-20" aria-labelledby="contact-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-950 p-8 text-white shadow-2xl shadow-cyan-950/20 md:p-14">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">05 / Let&apos;s connect</p>
            <h2 id="contact-title" className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {isEnglish ? "Have a project in mind?" : "¿Tienes un proyecto en mente?"}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              {isEnglish ? "Let&apos;s turn an idea into something useful, clear and ready to grow." : "Convirtamos una idea en algo útil, claro y preparado para crecer."}
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Colombia</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> {contact.email}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              {copied ? (isEnglish ? "Email copied" : "Correo copiado") : isEnglish ? "Copy email" : "Copiar correo"}
              <Mail className="h-4 w-4" />
            </button>
            <a href={contact.emailUrl} className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300">
              {isEnglish ? "Send email" : "Enviar correo"}<ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactCTA);
