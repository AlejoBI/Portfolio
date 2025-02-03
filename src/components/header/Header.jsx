import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/dev.webp";
import { scrollToTop } from "../utils/scrollToTop";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Mantener la última posición del scroll
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // Cuando el usuario baja, ocultamos el navbar
        setMenuOpen(false);
      } else {
        setShow(true); // Cuando el usuario sube, mostramos el navbar
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
    setMenuOpen(false); // Cerrar el menú al seleccionar una opción
  };

  return (
    <header
      id="home"
      className={`bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-400 transition duration-1000 fixed top-0 w-full z-10 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-300 flex items-center transition duration-1000"
            onClick={scrollToTop}
          >
            <img src={logo} alt="Dev Logo" className="h-10 w-10 rounded-full" />
            <span className="ml-2">Portfolio</span>
          </Link>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-gray-700 dark:text-white"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navegación en escritorio */}
        <nav className="hidden lg:flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300"
              onClick={handleLinkClick} // Cerrar el menú al seleccionar una opción
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Navegación en móvil */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-gray-100 dark:bg-gray-900 p-4 h-screen ${
            menuOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <hr />
          <nav className="space-y-3 mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-gray-400 block py-3 text-center"
                onClick={handleLinkClick} // Cerrar el menú al seleccionar una opción
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
