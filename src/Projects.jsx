import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";
import { useAppContext } from "./AppContext";

function Projects() {
  const { socialLinks } = useAppContext();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Doctors Appointment Booking",
      desc: "A web application designed for easy medical appointment scheduling with responsive UI.",
      tools: ["React", "Tailwind", "Node JS", "MongoDB", "Express", "PayPal"],
      image: project1,
      links: {
        live: socialLinks?.prescripto || "#",
        github:
          "https://github.com/UnS1milar/Final-DoctorAppointmentBooking.git",
        figma:
          "https://www.figma.com/design/2iGSu0hU64V31BLhv7NwtW/DocKonek---UI-Design?node-id=0-1&t=FvQpUevzTwpJDCAu-1",
      },
    },
    {
      title: "Employee Management System",
      desc: "A comprehensive system for managing employee information and tasks with a user-friendly interface.",
      tools: [
        "React",
        "Tailwind",
        "Node JS",
        "Supabase",
        "Express",
        "Inngest AI",
      ],
      image: project2,
      links: {
        live: socialLinks?.ems || "#",
        github: "https://github.com/your-username/ems",
        figma: "https://figma.com/@your-design",
      },
    },
    {
      title: "Resume Builder AI",
      desc: "AI-powered resume builder for generating professional resumes with formatting support.",
      tools: [
        "React",
        "Tailwind",
        "Node JS",
        "MongoDB",
        "Express",
        "Image Kit",
      ],
      image: project3,
      links: {
        live: socialLinks?.resume || "#",
        github: "https://github.com/your-username/resume-builder",
        figma: "https://figma.com/@your-design",
      },
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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="hideProjects text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-headline dark:text-headline2 font-josefin">
          Featured Works
        </h2>
        <p className="text-paragraph dark:text-paragraph2/80 mt-4 text-base">
          A showcase of recent projects built with modern technologies.
        </p>
      </div>

      {/* MODERN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            className="
              hideProjects
              group relative flex flex-col justify-between
              rounded-3xl overflow-hidden cursor-pointer
              border border-black/10 dark:border-white/10
              bg-white/50 dark:bg-neutral-900/40
              backdrop-blur-md shadow-sm hover:shadow-2xl
              hover:-translate-y-2 hover:border-button/40 dark:hover:border-button2/40
              transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-button
            "
          >
            {/* IMAGE CONTAINER */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* CARD CONTENT */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-wide text-headline dark:text-headline2 group-hover:text-button dark:group-hover:text-button2 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-paragraph dark:text-paragraph2/80 mt-2 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* ACTION TRIGGER */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-sm font-semibold text-headline dark:text-headline2">
                <span>View Details</span>
                <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-button group-hover:text-white dark:group-hover:bg-button2 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* REUSABLE MODAL COMPONENT */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
