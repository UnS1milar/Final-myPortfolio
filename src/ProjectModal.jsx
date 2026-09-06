import React from "react";

// Import ng icon images base sa asset paths mo
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import react from "./assets/icons/react.png";
import node from "./assets/icons/node.png";
import mongo from "./assets/icons/mongoDB.png";
import express from "./assets/icons/express.png";
import sql from "./assets/icons/sql.png";
import springboot from "./assets/icons/springboot.png";
import tailwind from "./assets/icons/tailwind.png";
import github from "./assets/icons/github2.png";
import microsoft from "./assets/icons/microsoft.png";
import photoshop from "./assets/icons/photoshop.png";
import canva from "./assets/icons/canva.png";
import postman from "./assets/icons/postman.png";
import vite from "./assets/icons/vite.png";
import vscode from "./assets/icons/vscode.png";
import paypal from "./assets/icons/paypal.png";
import inngest from "./assets/icons/inngest.png";
import imagekit from "./assets/icons/imagekit.png";
import supabase from "./assets/icons/supabase.png";

// Mapping ng tool names sa kani-kanilang icon image
// Tandaan: Tinanggal na ang JavaScript dito
// Mapping ng tool names sa kani-kanilang icon image
const toolIcons = {
  html: { name: "HTML", icon: html },
  css: { name: "CSS", icon: css },
  react: { name: "React", icon: react },
  node: { name: "Node JS", icon: node },
  "node js": { name: "Node JS", icon: node },
  mongodb: { name: "MongoDB", icon: mongo },
  mongo: { name: "MongoDB", icon: mongo },
  express: { name: "Express JS", icon: express },
  "express js": { name: "Express JS", icon: express },
  sql: { name: "SQL", icon: sql },
  springboot: { name: "Spring Boot", icon: springboot },
  "spring boot": { name: "Spring Boot", icon: springboot },
  tailwind: { name: "Tailwind CSS", icon: tailwind },
  "tailwind css": { name: "Tailwind CSS", icon: tailwind },
  github: { name: "GitHub", icon: github },
  microsoft: { name: "Microsoft", icon: microsoft },
  photoshop: { name: "Photoshop", icon: photoshop },
  canva: { name: "Canva", icon: canva },
  postman: { name: "Postman", icon: postman },
  vite: { name: "Vite", icon: vite },
  vscode: { name: "VS Code", icon: vscode },
  "vs code": { name: "VS Code", icon: vscode },
  paypal: { name: "PayPal", icon: paypal },

  // --- MGA INAYOS NA ALIASES ---
  inngest: { name: "Inngest AI", icon: inngest },
  "inngest ai": { name: "Inngest AI", icon: inngest },

  imagekit: { name: "ImageKit", icon: imagekit },
  "image kit": { name: "ImageKit", icon: imagekit },
  "imagekit io": { name: "ImageKit", icon: imagekit },
  supabase: { name: "Supabase", icon: supabase },
};

// Helper component para sa pag-render ng Image-based Tool Badge
const renderToolBadge = (tool) => {
  const key = tool.toLowerCase().trim();

  // Automatic ignorain / huwag i-render kapag javascript
  if (key === "javascript" || key === "js") return null;

  const toolData = toolIcons[key];

  return (
    <div
      key={tool}
      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium 
                 bg-neutral-100 text-neutral-800 border border-neutral-200 
                 dark:bg-white/5 dark:text-gray-200 dark:border-white/10 
                 backdrop-blur-md transition-transform hover:scale-105 shadow-sm"
    >
      {toolData?.icon ? (
        <img
          src={toolData.icon}
          alt={toolData.name || tool}
          className="w-4 h-4 object-contain"
        />
      ) : null}
      <span>{toolData?.name || tool}</span>
    </div>
  );
};

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Background Glow Effect */}
      <div className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glass Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#0c0d12] border border-black/10 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden transition-colors duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-600 dark:text-white/70 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 shadow-sm"
          aria-label="Close modal"
        >
          <span className="text-base">✕</span>
        </button>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Big Project Showcase Image */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-black/50 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[60vh] object-contain rounded-2xl"
            />
          </div>

          {/* Right Column: Title, Tech Stack & Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Project Title & Tech Badges with Icons */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight pr-6">
                {project.title}
              </h2>

              <div>
                <span className="text-[11px] font-bold text-neutral-400 dark:text-gray-400 uppercase tracking-wider block mb-2.5">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool) => renderToolBadge(tool))}
                </div>
              </div>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex flex-col gap-2.5 pt-2">
              {/* Active Live Preview Button */}
              <a
                href={project.links?.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  group relative w-full py-2.5 px-4 rounded-xl 
                  bg-cyan-800 text-white dark:bg-indigo-600/20 dark:text-indigo-200 
                  border border-neutral-600 dark:border-indigo-500/30 
                  hover:bg-black dark:hover:bg-indigo-600/30 dark:hover:border-indigo-500/50 
                  font-medium text-xs transition-all duration-300 flex items-center justify-between shadow-sm hover:scale-[1.01]
                "
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-white/10 dark:bg-indigo-500/20 text-white dark:text-indigo-300">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <span>Live Preview</span>
                </div>
                <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* Active Source Code Button */}
              <a
                href={project.links?.github || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  group relative w-full py-2.5 px-4 rounded-xl 
                  bg-neutral-100 text-neutral-800 border border-black/10 
                  dark:bg-white/5 dark:text-gray-200 dark:border-white/10 
                  hover:bg-neutral-200 dark:hover:bg-white/10 
                  font-medium text-xs transition-all duration-300 flex items-center justify-between hover:scale-[1.01]
                "
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-white">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <span>Source Code</span>
                </div>
                <span className="text-[11px] font-mono text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {"</>"}
                </span>
              </a>

              {/* Active Figma Design Button */}
              <a
                href={project.links?.figma || "#"}
                target="_blank"
                rel="noreferrer"
                className="
                  group relative w-full py-2.5 px-4 rounded-xl 
                  bg-neutral-100 text-neutral-800 border border-black/10 
                  dark:bg-white/5 dark:text-gray-200 dark:border-white/10 
                  hover:bg-neutral-200 dark:hover:bg-white/10 
                  font-medium text-xs transition-all duration-300 flex items-center justify-between hover:scale-[1.01]
                "
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-white">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 38 57"
                    >
                      <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5H19v-9.5z" />
                      <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" />
                      <path d="M19 0v19H9.5C4.253 19 0 14.747 0 9.5S4.253 0 9.5 0H19z" />
                      <path d="M19 0h9.5C33.747 0 38 4.253 38 9.5S33.747 19 28.5 19H19V0z" />
                      <path d="M0 28.5C0 23.253 4.253 19 9.5 19H19v19H9.5C4.253 38 0 33.747 0 28.5z" />
                    </svg>
                  </div>
                  <span>Figma Design</span>
                </div>
                <span className="text-sm group-hover:rotate-12 transition-transform">
                  ❖
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
