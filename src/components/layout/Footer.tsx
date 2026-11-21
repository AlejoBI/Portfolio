import { memo } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../../config/contact";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-16 border-t border-slate-200 bg-slate-100 py-10 dark:border-slate-800 dark:bg-[#070b14]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-400/[0.04] to-transparent" />
      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-3xl font-bold">
              <span className="code-font text-cyan-500 dark:text-cyan-400">{"<"}</span>
              <span className="text-slate-900 dark:text-white">ABI</span>
              <span className="code-font text-cyan-500 dark:text-cyan-400">{"/>"}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              {t("footer.builtWith")} React &amp; Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="https://github.com/AlejoBI" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-slate-300 p-3 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/alejandrobi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-300 p-3 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={contact.emailUrl} aria-label={t("footer.email")} className="rounded-full border border-slate-300 p-3 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-300">
              <Mail className="h-5 w-5" />
            </a>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-400 hover:text-slate-950 dark:text-cyan-300">
              {t("footer.backToTop")} <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Alejandro Bravo Isajar · {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
