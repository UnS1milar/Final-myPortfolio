import React, { useState } from "react";

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

const SkillsToolsToggle = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "Java", icon: java },
    { name: "React", icon: react },
    { name: "Node JS", icon: node },
    { name: "MongoDB", icon: mongo },
    { name: "Express JS", icon: express },
    { name: "SQL", icon: sql },
    { name: "Spring Boot", icon: springboot },
    { name: "Tailwind CSS", icon: tailwind },
  ];

  const tools = [
    { name: "GitHub", icon: github },
    { name: "Microsoft", icon: microsoft },
    { name: "Photoshop", icon: photoshop },
    { name: "Canva", icon: canva },
    { name: "Postman", icon: postman },
    { name: "Vite", icon: vite },
    { name: "VS Code", icon: vscode },
  ];

  const [activeTab, setActiveTab] = useState("skills");

  const data = activeTab === "skills" ? skills : tools;

  return (
    <section className="flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl text-center">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-headline dark:text-headline2 font-josefin mb-8">
          Skills & Tech Stack
        </h2>

        {/* TOGGLE */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 rounded-full bg-background2/10 dark:bg-background/10 border border-button">
            {/* SKILLS */}
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 text-sm rounded-full transition-all duration-300 font-semibold
                ${
                  activeTab === "skills"
                    ? "bg-button dark:bg-button2 text-button-text shadow-md"
                    : "text-paragraph dark:text-paragraph2 hover:text-headline2"
                }`}
            >
              Skills
            </button>

            {/* TOOLS */}
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-6 py-2 text-sm rounded-full transition-all duration-300 font-semibold
                ${
                  activeTab === "tools"
                    ? "bg-button dark:bg-button2 text-button-text shadow-md"
                    : "text-paragraph dark:text-paragraph2 hover:text-headline2"
                }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="
                aspect-square
                flex flex-col items-center justify-center
                rounded-xl
                border border-button/20
                bg-background
                dark:bg-background2/40
                hover:scale-105
                hover:border-button
                transition-all duration-300
                shadow-sm hover:shadow-md
              "
            >
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />

              {/* LABEL */}
              <span className="text-xs sm:text-sm mt-2 text-paragraph dark:text-paragraph2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsToolsToggle;
