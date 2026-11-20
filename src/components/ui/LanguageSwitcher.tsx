import { memo } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith("es");
  const next = isSpanish ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      className="group fixed bottom-20 right-4 z-50 p-4 max-sm:bottom-[4.5rem] max-sm:right-3 max-sm:p-3 bg-slate-900 dark:bg-cyan-400 hover:shadow-2xl rounded-2xl shadow-xl hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
      aria-label={isSpanish ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="flex items-center justify-center w-6 h-6 text-white font-bold text-sm tracking-wide transition-all duration-300 group-hover:rotate-12">
        {isSpanish ? "EN" : "ES"}
      </span>
    </button>
  );
};

export default memo(LanguageSwitcher);
