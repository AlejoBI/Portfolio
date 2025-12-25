import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-20 right-4 z-50 flex items-center"
    >
      {isOpen && (
        <div className="absolute right-16 glass-dark border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden animate-slide-in-up">
          <button
            onClick={() => changeLanguage("es")}
            className="flex items-center gap-3 w-full text-left px-5 py-3 text-white hover:bg-blue-500/20 transition-all duration-300 border-b border-gray-700/50"
          >
            <span className="text-2xl">🇪🇸</span>
            <span className="font-medium">Español</span>
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center gap-3 w-full text-left px-5 py-3 text-white hover:bg-blue-500/20 transition-all duration-300"
          >
            <span className="text-lg font-bold text-white">EN</span>
            <span className="font-medium">English</span>
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group p-4 bg-gray-800 dark:bg-gradient-tech hover:shadow-2xl rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Change Language"
      >
        <svg
          className="w-6 h-6 text-blue-400 dark:text-white transition-all duration-300 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
