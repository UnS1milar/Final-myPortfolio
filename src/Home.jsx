import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import mypicture from "./assets/images/my-picture.png";
import { useAppContext } from "./AppContext";

function Home() {
  const { socialLinks } = useAppContext();

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const [text] = useTypewriter({
    words: [
      "Developer",
      "Designer",
      "Tech Support",
      "Software Engineer",
      "Data Administrator",
    ],
    loop: 0,
    typeSpeed: 100,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".hideHome");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showHome", entry.isIntersecting);
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-28 md:pt-40">
      {/* CENTERED WRAPPER */}
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT */}
        <div className="flex flex-col max-w-xl text-left">
          <h1 className="hideHome text-3xl md:text-4xl lg:text-6xl font-bold text-headline dark:text-headline2">
            Hi!
          </h1>

          <h2 className="hideHome mt-6 text-2xl md:text-3xl lg:text-5xl font-bold text-headline dark:text-headline2">
            I’m{" "}
            <span className="text-button dark:text-button2">
              Arsenio Malinao Jr.
            </span>
          </h2>

          <h3 className="hideHome mt-5 text-xl md:text-2xl lg:text-4xl font-semibold text-headline dark:text-headline2">
            A <span className="text-tertiary2 dark:text-tertiary">{text}</span>
            <Cursor />
          </h3>

          <p className="hideHome mt-5 text-paragraph dark:text-paragraph2 text-lg leading-7">
            Motivated by a strong passion for technology and continuous
            learning, focused on building modern and scalable web applications.
          </p>

          {/* BUTTONS */}
          <div className="hideHome flex gap-4 mt-7">
            <button
              onClick={() => openLink(socialLinks.resumeView)}
              className="px-6 py-3 rounded-lg bg-button hover:bg-yellow-500 text-button-text hover:opacity-90 transition dark:bg-button2 dark:hover:bg-orange-700 font-semibold"
            >
              View Resume
            </button>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-button text-button hover:bg-button hover:text-button-text dark:hover:text-white dark:hover:bg-button2 dark:text-button2 dark:border-button2  transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hideHome flex justify-center">
          <div className="rounded-full p-3 border-4 border-button dark:border-tertiary">
            <img
              src={mypicture}
              alt="profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
