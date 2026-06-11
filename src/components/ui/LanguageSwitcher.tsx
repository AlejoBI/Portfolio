import { memo } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith("es");
  const next = isSpanish ? "en" : "es";

  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      className="group fixed bottom-20 right-4 z-50 p-4 bg-gray-800 dark:bg-gradient-tech hover:shadow-2xl rounded-2xl shadow-xl hover:scale-110"
      aria-label={isSpanish ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="flex items-center justify-center w-6 h-6 text-white font-bold text-sm tracking-wide transition-all duration-300 group-hover:rotate-12">
        {isSpanish ? "EN" : "ES"}
      </span>
    </button>
  );
};

export default memo(LanguageSwitcher);
