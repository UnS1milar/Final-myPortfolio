import React, { useEffect } from "react";

import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";
import { useAppContext } from "./AppContext";

function Projects() {
  const { socialLinks } = useAppContext();

  const openLink = (url) => window.open(url, "_blank");

  const projects = [
    {
      title: "Doctors Appointment Booking",
      desc: "A web application designed for easy medical appointment scheduling with responsive UI.",
      tools: [
        "JavaScript",
        "React",
        "Tailwind",
        "MongoDB",
        "Express",
        "PayPal",
      ],
      image: project1,
      link: socialLinks.prescripto,
    },
    {
      title: "Employee Management System",
      desc: "A comprehensive system for managing employee information and tasks with a user-friendly interface.",
      tools: [
        "React",
        "Tailwind",
        "Node",
        "JavaScript",
        "MongoDB",
        "Express",
        "Inngest AI",
      ],
      image: project2,
      link: socialLinks.ems,
    },
    {
      title: "Resume Builder AI",
      desc: "AI-powered resume builder for generating professional resumes with formatting support.",
      tools: [
        "JavaScript",
        "React",
        "Tailwind",
        "MongoDB",
        "Express",
        "Gemini AI",
      ],
      image: project3,
      link: socialLinks.resume,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".hideProjects");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showProjects", entry.isIntersecting);
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      {/* TITLE */}
      <h2 className="hideProjects text-center text-3xl md:text-4xl font-bold font-josefin text-headline dark:text-headline2 mb-12">
        My Projects
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="
              hideProjects
              group
              rounded-2xl
              overflow-hidden
              border border-button/20
              bg-background
              dark:bg-background2/40
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-headline dark:text-headline2">
                {project.title}
              </h3>

              <p className="text-sm text-paragraph dark:text-paragraph2 mt-2">
                {project.desc}
              </p>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      border border-button/30
                      text-paragraph dark:text-paragraph2
                      bg-background2/10 dark:bg-background/10
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => openLink(project.link)}
                className="
                  mt-6
                  w-full
                  py-2
                  rounded-lg
                  bg-button
                  dark:bg-button2
                  text-button-text
                  font-semibold
                  hover:opacity-90
                  transition
                "
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
