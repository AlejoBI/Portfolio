import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import traducir from "../../assets/images/traducir.webp";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Cierra el menú si se hace clic fuera
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
      className="fixed bottom-20 right-4 z-10 flex items-center"
    >
      {isOpen && (
        <div className="absolute right-14 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition duration-300">
          <button
            onClick={() => changeLanguage("es")}
            className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
          >
            Spanish
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
          >
            English
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white to-blue-500 dark:from-blue-700 dark:to-gray-900 text-gray-900 dark:text-white shadow-lg hover:from-blue-600 hover:to-white dark:hover:from-gray-800 dark:hover:to-blue-600 transition duration-1000"
      >
        <img src={traducir} alt="Traducir" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
