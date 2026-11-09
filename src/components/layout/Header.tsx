import { useState, useEffect, useRef, memo, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useTranslation } from "react-i18next";

const NAV_IDS = ["about", "skills", "projects", "experience"];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useTranslation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const navigation = [
    { name: t("header.navigation.about"), href: "#about" },
    { name: t("header.navigation.skills"), href: "#skills" },
    { name: t("header.navigation.projects"), href: "#projects" },
    { name: t("header.navigation.experience"), href: "#experience" },
  ];

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen && firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  const handleMobileNavKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;

    const links = mobileNavRef.current?.querySelectorAll<HTMLElement>("a");
    if (!links?.length) return;

    const firstLink = links[0];
    const lastLink = links[links.length - 1];
    if (event.shiftKey && document.activeElement === firstLink) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      firstLink.focus();
    }
  };

  return (
    <header
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-[transform,opacity] duration-500 fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-white/10 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={scrollToTop}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded-lg"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-tech rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative h-10 w-10 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-400 bg-blue-600 dark:bg-gradient-tech flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
            </div>
            <span className="ml-3 code-font">
              <span className="text-blue-600 dark:text-blue-400">
                {"<"}
              </span>
              Alejandro
              <span className="text-blue-600 dark:text-blue-400">
                {"/>"}
              </span>
            </span>
          </button>
        </div>

        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden text-2xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 z-50 relative"
          aria-label={menuOpen ? t("header.navigation.close_menu") : t("header.navigation.open_menu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        <nav className="hidden lg:flex items-center space-x-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
              onClick={handleLinkClick}
              aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 bg-gradient-tech rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-tech group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl transition-[opacity] duration-500 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
            <nav
              id="mobile-navigation"
              ref={mobileNavRef}
              onKeyDown={handleMobileNavKeyDown}
              className="flex flex-col items-center justify-center h-full space-y-8"
              aria-label="Mobile navigation"
              aria-hidden={!menuOpen}
            >
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                className="text-3xl font-bold text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-tech focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
                tabIndex={menuOpen ? 0 : -1}
                style={{
                  transitionDelay: menuOpen ? `${index * 100}ms` : "0ms",
                }}
                onClick={handleLinkClick}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
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

export default memo(Header);
