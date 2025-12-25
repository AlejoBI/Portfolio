import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

import LanguageSwitcher from "../langSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.navigation.about"), href: "#about" },
    { name: t("header.navigation.skills"), href: "#skills" },
    { name: t("header.navigation.projects"), href: "#projects" },
    { name: t("header.navigation.experience"), href: "#experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
        setMenuOpen(false);
      } else {
        setShow(true);
        setMenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      id="home"
      className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-500 fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-white/10 shadow-lg ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-all duration-300 group"
            onClick={scrollToTop}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-tech rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative h-10 w-10 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-400 transition-all duration-300 bg-blue-600 dark:bg-gradient-tech flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
            </div>
            <span className="ml-3 code-font transition-colors duration-300">
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">
                {"<"}
              </span>
              Alejandro
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">
                {"/>"}
              </span>
            </span>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-50 relative"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center space-x-2">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
              onClick={handleLinkClick}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 bg-gradient-tech rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-tech group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl transition-all duration-500 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-3xl font-bold text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-tech transition-all duration-300 transform ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 100}ms` : "0ms",
                }}
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
