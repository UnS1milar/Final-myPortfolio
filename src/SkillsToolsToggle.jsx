import React, { useEffect, useRef, useState } from "react";

import java from "./assets/icons/java.png";
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import js from "./assets/icons/js.png";
import react from "./assets/icons/react.png";
import node from "./assets/icons/node.png";
import mongo from "./assets/icons/mongoDB.png";
import sql from "./assets/icons/sql.png";
import express from "./assets/icons/express.png";
import springboot from "./assets/icons/springboot.png";
import github from "./assets/icons/github2.png";
import microsoft from "./assets/icons/microsoft.png";
import photoshop from "./assets/icons/photoshop.png";
import canva from "./assets/icons/canva.png";
import postman from "./assets/icons/postman.png";
import vite from "./assets/icons/vite.png";
import vscode from "./assets/icons/vscode.png";
import tailwind from "./assets/icons/tailwind.png";
import next from "./assets/icons/next.png";
import supabase from "./assets/icons/supabase.png";
import postgresql from "./assets/icons/postgresql.png";
import cursor from "./assets/icons/cursor.png";
import figma from "./assets/icons/figma.png";

const SkillsToolsToggle = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "Java", icon: java },
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "MongoDB", icon: mongo },
    { name: "Express.js", icon: express },
    { name: "SQL", icon: sql },
    { name: "Spring Boot", icon: springboot },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Next.js", icon: next },
    { name: "Supabase", icon: supabase },
    { name: "PostgreSQL", icon: postgresql },
  ];

  const tools = [
    { name: "GitHub", icon: github },
    { name: "Microsoft", icon: microsoft },
    { name: "Photoshop", icon: photoshop },
    { name: "Canva", icon: canva },
    { name: "Postman", icon: postman },
    { name: "Vite", icon: vite },
    { name: "VS Code", icon: vscode },
    { name: "Cursor", icon: cursor },
    { name: "Figma", icon: figma },
  ];

  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimClass = (delayClass = "delay-100") =>
    `transition-all duration-1000 ease-out transform ${delayClass} ${
      isVisible
        ? "opacity-100 translate-y-0 blur-0"
        : "opacity-0 translate-y-12 blur-sm"
    }`;

  const data = activeTab === "skills" ? skills : tools;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="flex items-center justify-center px-6 py-24 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="w-full text-center">
        {/* TITLE */}
        <h2
          className={`${getAnimClass(
            "delay-100",
          )} text-3xl md:text-4xl font-extrabold text-headline dark:text-headline2 mb-8 tracking-tight`}
        >
          Skills & Tech Stack
        </h2>

        {/* TOGGLE BUTTONS */}
        <div
          className={`${getAnimClass("delay-200")} flex justify-center mb-12`}
        >
          <div className="flex p-1.5 rounded-full bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
            {/* SKILLS TAB */}
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-7 py-2 text-sm rounded-full transition-all duration-300 font-semibold ${
                activeTab === "skills"
                  ? "bg-button dark:bg-button2 text-button-text shadow-sm"
                  : "text-paragraph dark:text-paragraph2 hover:text-headline dark:hover:text-headline2"
              }`}
            >
              Skills
            </button>

            {/* TOOLS TAB */}
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-7 py-2 text-sm rounded-full transition-all duration-300 font-semibold ${
                activeTab === "tools"
                  ? "bg-button dark:bg-button2 text-button-text shadow-sm"
                  : "text-paragraph dark:text-paragraph2 hover:text-headline dark:hover:text-headline2"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
          {data.map((item, i) => {
            // Staggered delay loop para magkakasunod na lumabas ang mga icon cards
            const delayIndex = (i % 6) * 100 + 300;
            return (
              <div
                key={item.name}
                className={`${getAnimClass(
                  `delay-[${delayIndex}ms]`,
                )} aspect-square flex flex-col items-center justify-center rounded-xl p-4 border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:scale-105 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm`}
              >
                {/* ICON */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                />

                {/* LABEL */}
                <span className="text-xs sm:text-sm mt-3 font-medium text-headline/80 dark:text-headline2/80 truncate w-full px-1">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsToolsToggle;
