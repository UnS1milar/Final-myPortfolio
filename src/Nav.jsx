import { navLinks } from "./constants/myIndex";
import portfolioLogo from "./assets/images/portfolio-logo.png";
import portfolioLogo2 from "./assets/images/portfolio-logo2.png";

import { useEffect, useRef, useState } from "react";
import { useAppContext } from "./AppContext";

import { Sun, Moon, Menu, X } from "lucide-react";

function Nav() {
  const { darkMode, setDarkMode } = useAppContext();

  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const scrollTimeout = useRef(null);

  // Hide navbar on scroll (clean fix)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Dark mode toggle (simple + clean)
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 px-6 sm:px-14 py-3 shadow-md transition-opacity duration-500
        ${isVisible ? "opacity-100" : "opacity-0"}
        bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800`}
      >
        <nav className="flex items-center justify-between">
          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setShowMenu(true)}
            aria-label="Open menu"
          >
            <Menu className="text-headline dark:text-headline2" size={28} />
          </button>

          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src={darkMode ? portfolioLogo2 : portfolioLogo}
              alt="logo"
              className="h-10 w-auto"
            />
          </a>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex gap-10">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            {/* DARK MODE TOGGLE (MEDIUM / BALANCED SIZE) */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className={`relative flex items-center w-14 h-7 rounded-full p-1
  transition-colors duration-300 ease-in-out
  ${darkMode ? "bg-slate-800" : "bg-yellow-400"}`}
            >
              {/* Left Icon (Moon) */}
              <Moon size={14} className="absolute left-2 text-gray-300" />

              {/* Right Icon (Sun) */}
              <Sun size={14} className="absolute right-2 text-yellow-800" />

              {/* Sliding Knob */}
              <div
                className={`z-10 w-5 h-5 rounded-full bg-white shadow-md
    transition-transform duration-300 ease-in-out
    ${darkMode ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>

            {/* CONTACT BUTTON */}
            <a
              href="#contacts"
              className="hidden lg:block px-4 py-2 rounded-md bg-button text-white hover:bg-yellow-500 dark:bg-button2 dark:hover:bg-orange-700 transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full z-50 w-full lg:hidden transition-transform duration-300
        ${showMenu ? "translate-x-0" : "translate-x-full"}
        bg-white dark:bg-black`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-5 right-5 text-headline dark:text-headline2"
          onClick={() => setShowMenu(false)}
          aria-label="Close menu"
        >
          <X size={30} />
        </button>

        {/* LINKS */}
        <ul className="flex flex-col items-center justify-center h-full gap-6 text-xl">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setShowMenu(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-orange-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Nav;
