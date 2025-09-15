import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";

// Componente Navigation
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Controla el scroll para cambiar el estilo de la navegación
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú móvil cuando se cambia de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Enlaces de navegación
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/projects" },
    { name: "Sobre Mí", path: "/about" },
    // { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? "bg-darkBlue/65 shadow-lg backdrop-blur-sm py-4"
          : "bg-darkBlue py-5"
      }`}
    >
      <div className="container mx-auto px-24 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-cianGreen font-bold text-2xl tracking-tight hover:text-opacity-80 transition-colors"
        >
          <Logo />
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`font-medium transition-colors hover:text-cianGreen ${
                location.pathname === link.path
                  ? "text-cianGreen"
                  : "text-lightSlate"
              }`}
            >
              <span className="text-cianGreen">{`0${index + 1}. `}</span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-lightSlate hover:text-cianGreen"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed right-0 top-0 h-screen w-1/2 bg-darkBlue/65 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-24 px-8`}
      >
        <div className="flex flex-col space-y-6">
          <button
            className="md:hidden text-lightSlate self-end hover:text-cianGreen"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`font-medium text-lg transition-colors hover:text-cianGreen ${
                location.pathname === link.path
                  ? "text-cianGreen"
                  : "text-lightSlate"
              }`}
            >
              <span className="text-cianGreen mr-2">{`0${index + 1}.`}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay para cerrar el menú móvil */}
      {isOpen && (
        <div
          className="md:hidden fixed h-screen inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
