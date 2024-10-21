import { navLinks } from "./constants/myIndex";
import sunLight from "./assets/icons/sun-light.png";
import sunDark from "./assets/icons/sun-dark.png";
import moonLight from "./assets/icons/moon-light.png";
import moonDark from "./assets/icons/moon-dark.png";
import portfolioLogo from "./assets/images/portfolio-logo.png";
import hamburger from "./assets/icons/hamburger-menu.png";
import { useEffect, useState, useContext } from "react";
import { useAppContext } from "./AppContext";

function Nav() {
  const { darkMode, setDarkMode } = useAppContext();
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // To track navbar visibility
  const [isScrolling, setIsScrolling] = useState(false); // To detect if user is scrolling
  let scrollTimeout = null; // To track the scroll timeout
  /* for Animation */
  useEffect(() => {
    const observer2 = new IntersectionObserver((entries2) => {
      entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
          entry2.target.classList.add("showNav");
        } else {
          entry2.target.classList.remove("showNav");
        }
      });
    });
    const hiddenElements2 = document.querySelectorAll(".hideNav");
    hiddenElements2.forEach((el2) => observer2.observe(el2));
  });

  useEffect(() => {
    const handleScroll = () => {
      // When scrolling, set visibility to false
      setIsScrolling(true);
      setIsVisible(false);

      // Clear the previous timeout if the user keeps scrolling
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a timeout to show the navbar after scrolling stops for 200ms
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true);
      }, 600); // Delay in ms after scrolling stops (adjust this as needed)
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener and timeout on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // On component mount, check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode on and off
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <>
      <header
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-background dark:bg-opacity-10 dark:backdrop-blur-md dark:shadow-custom-lighter fixed top-0 z-20 px-8 py-3 w-full transition-opacity duration-300 ease-in-out shadow-lg sm:px-14`}
        style={{ transition: "opacity 1s" }} // Additional transition for smooth hide/show
      >
        <nav className="hideNav flex justify-between items-center w-full">
          <div
            className="hidden max-lg:block"
            onClick={() => setShowMenu(true)}
          >
            <img
              className="rounded hover:bg-amber-100 transition-colors transform hover:scale-125 hover:rounded-full duration-300"
              src={hamburger}
              alt="hamburger icon"
            />
          </div>

          <div className="absolute left-7">
            <a href="#home">
              <img src={portfolioLogo} alt="My Logo" />
            </a>
          </div>

          <ul className="flex-1 flex justify-center items-center gap-16 mr-28 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-center font-josefin leading-normal text-lg text-headline dark:text-headline2 transition-all duration-300 ease-in-out transform hover:text-button hover:scale-110 dark:hover:text-button2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contacts">
            <button className="buttonContact max-lg:hidden dark:bg-button2 dark:text-headline2 dark:border-button2 dark:hover:text-paragraph ">
              Contact Me
            </button>
          </a>

          <input
            className="ml-4"
            type="checkbox"
            id="darkmode-toggle"
            onClick={toggleDarkMode}
          />

          <label
            className="labelContact transform hover:scale-110 transition duration-300"
            htmlFor="darkmode-toggle"
          >
            <img className="sunlight" src={sunLight} alt="sun image" />
            <img className="sundark" src={sunDark} alt="sun image" />
            <img className="moonlight" src={moonLight} alt="sun image" />
            <img className="moondark" src={moonDark} alt="sun image" />
          </label>
        </nav>
      </header>
      {/* ----- Mobile Menu---- */}
      <div
        className={` ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } lg:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all`}
      >
        <i
          onClick={() => setShowMenu(false)}
          className="absolute top-5 right-5 text-headline hover:text-red-700 transition-colors transform hover:scale-125 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </i>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 pt-14 text-lg sm:text-xl font-medium text-paragraph">
          <a href="#home" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block hover:bg-amber-200 transition-colors transform hover:scale-110 duration-300">
              HOME
            </p>
          </a>
          <a href="#experience" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block hover:bg-amber-200 transition-colors transform hover:scale-110 duration-300">
              EXPERIENCE
            </p>
          </a>
          <a href="#skills" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block hover:bg-amber-200 transition-colors transform hover:scale-110 duration-300">
              SKILLS
            </p>
          </a>
          <a href="#projects" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block hover:bg-amber-200 transition-colors transform hover:scale-110 duration-300">
              PROJECTS
            </p>
          </a>
          <a href="#contacts" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block hover:bg-amber-200 transition-colors transform hover:scale-110 duration-300">
              CONTACT ME
            </p>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Nav;
