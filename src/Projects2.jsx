import React from "react";
import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";

const projects = [
  {
    title: "Doctor Appointment System",
    description:
      "A web application for booking doctor appointments with role-based access for admin, doctors, and patients.",
    image: project2,
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Website",
    description:
      "A responsive eCommerce platform with product listings, cart functionality, and checkout system.",
    image: project3,
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    image: project1,
    tech: ["React", "Tailwind"],
    live: "#",
    github: "#",
  },
];

const Projects2 = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          My Projects
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE WRAPPER (FIXED ISSUE HERE 🔥) */}
              <div className="p-4 bg-gray-50">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pb-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black text-sm rounded-md font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white text-sm rounded-md hover:bg-white hover:text-black transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
