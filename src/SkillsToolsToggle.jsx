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
import figma from "./assets/icons/figma.png";
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
    { name: "Github", icon: github },
    { name: "Microsoft", icon: microsoft },
    { name: "Photoshop", icon: photoshop },
    { name: "Canva", icon: canva },
    { name: "Figma", icon: figma },
    { name: "Postman", icon: postman },
    { name: "Vite", icon: vite },
    { name: "VS Code", icon: vscode },
  ];

  const [activeTab, setActiveTab] = useState("skills");

  const data = activeTab === "skills" ? skills : tools;

  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-5xl text-center">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-headline dark:text-headline2 font-josefin mb-6">
          Skills & Tech Stack
        </h2>

        {/* TOGGLE */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-full flex gap-1">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-white shadow text-gray-800"
                  : "text-gray-500"
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => setActiveTab("tools")}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                activeTab === "tools"
                  ? "bg-white shadow text-gray-800"
                  : "text-gray-500"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3  ">
          {data.map((item, i) => (
            <div
              key={i}
              className="
                aspect-square
                flex items-center justify-center
                border border-gray-300
                rounded-lg
                bg-white
                hover:shadow-md
                hover:-translate-y-1
                transition-all duration-300
                dark:bg-black dark:bg-opacity-20
                
              "
            >
              <div className="flex flex-col items-center justify-center gap-1 ">
                {/* ICON */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                />

                {/* LABEL */}
                <span className="text-sm sm:text-base text-gray-700 mt-2 dark:text-paragraph2">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsToolsToggle;
