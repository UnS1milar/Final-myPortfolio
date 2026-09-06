import React, { useEffect, useRef, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import mypicture from "./assets/images/my-picture.png";
import { useAppContext } from "./AppContext";

// Isolated Typewriter component
function TypewriterText() {
  const [text] = useTypewriter({
    words: [
      "Developer",
      "Designer",
      "Tech Support",
      "Software Engineer",
      "Data Administrator",
    ],
    loop: 0,
    typeSpeed: 90,
    delaySpeed: 2000,
  });

  return (
    <span className="text-tertiary2 dark:text-tertiary font-bold">
      {text}
      <Cursor cursorStyle="|" cursorColor="#f97316" />
    </span>
  );
}

function Home() {
  const { socialLinks } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  const openLink = (url) => {
    if (url) window.open(url, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 },
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Pure Tailwind animation classes
  const animClass = `transition-all duration-1000 ease-out transform ${
    isVisible
      ? "opacity-100 translate-y-0 blur-0"
      : "opacity-0 translate-y-12 blur-sm"
  }`;

  return (
    <section
      ref={homeRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-10 md:pt-14 overflow-hidden"
    >
      {/* BALANCED CONTAINER (Tamang spacing lang sa gitna: gap-12 lg:gap-20) */}
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-20 z-10">
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col max-w-xl text-left items-start">
          {/* MINIMAL STATUS BADGE */}
          <div
            className={`${animClass} delay-100 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm font-medium`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Available for Opportunities
          </div>

          {/* MAIN HEADING */}
          <h1
            className={`${animClass} delay-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-headline dark:text-headline2 leading-tight`}
          >
            Hi, I’m{" "}
            <span className="text-button dark:text-button2">Arsenio</span>
          </h1>

          {/* DYNAMIC ROLE */}
          <h2
            className={`${animClass} delay-300 mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-headline/80 dark:text-headline2/80`}
          >
            A <TypewriterText />
          </h2>

          {/* BIO DESCRIPTION */}
          <p
            className={`${animClass} delay-500 mt-5 text-paragraph dark:text-paragraph2 text-base sm:text-lg leading-relaxed font-normal`}
          >
            Motivated by a strong passion for technology and continuous
            learning, focused on building modern, high-performance, and scalable
            web applications.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div
            className={`${animClass} delay-700 flex flex-wrap gap-4 mt-8 w-full sm:w-auto`}
          >
            <button
              onClick={() => openLink(socialLinks?.resumeView)}
              className="px-6 py-3 rounded-lg bg-button hover:bg-yellow-500 text-button-text font-semibold text-sm sm:text-base transition-colors duration-200 dark:bg-button2 dark:hover:bg-orange-700"
            >
              View Resume
            </button>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 text-headline dark:text-headline2 hover:bg-gray-100 dark:hover:bg-neutral-800 font-semibold text-sm sm:text-base transition-colors duration-200"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (Clean Minimalist Frame) */}
        <div
          className={`${animClass} delay-300 flex justify-center items-center shrink-0`}
        >
          <div className="rounded-full p-2 bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-md">
            <img
              src={mypicture}
              alt="Arsenio Malinao Jr."
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
