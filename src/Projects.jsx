import React from "react";
import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";
import { useEffect } from "react";
import { useAppContext } from "./AppContext";

function App() {
  // code for icon links
  const { socialLinks } = useAppContext();
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  /* for Animation */
  useEffect(() => {
    const observer2 = new IntersectionObserver((entries2) => {
      entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
          entry2.target.classList.add("showProjects");
        } else {
          entry2.target.classList.remove("showProjects");
        }
      });
    });
    const hiddenElements2 = document.querySelectorAll(".hideProjects");
    hiddenElements2.forEach((el2) => observer2.observe(el2));
  });
  return (
    <>
      <div className="hideProjects text-paragraph flex w-full font-josefin items-center justify-center text-3xl lg:text-5xl pt-20 dark:text-headline2">
        My Projects
      </div>
      <div className="w-full grid grid-cols-auto-fit sm:grid-cols-auto pt-5 justify-center gap-y-8 gap-x-8 px-6">
        <div className="hideProjects relative">
          <div className=" border rounded-xl overflow-hidden border-headline shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:border-headline2">
            <div className="relative flex flex-col justify-center items-center ">
              <div className=" mt-4 mx-5 border border-headline dark:border-headline2 rounded-xl overflow-hidden">
                <img src={project1} alt="" />
              </div>

              <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
                Doctors Appointment Booking
              </p>
              <p className="text-slate-600 mx-5 text-center text-base mt-2 dark:text-paragraph2">
                A web application designed to facilitate easy scheduling of
                medical appointments. Featuring a responsive design, the
                application ensures a seamless user experience across devices,
                from desktops to smartphones.
              </p>
              <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
                <div className="bg-blue-600 rounded-full px-3 border border-headline dark:border-headline2">
                  React js
                </div>
                <div className="bg-blue-100 rounded-full px-3 border border-headline dark:border-headline2">
                  Tailwind
                </div>
                <div className="bg-blue-600 rounded-full px-3 border border-headline dark:border-headline2">
                  Node js
                </div>
                <div className="bg-blue-100 rounded-full px-3 border border-headline dark:border-headline2">
                  MongoDB
                </div>
                <div className="bg-blue-600 rounded-full px-3 border border-headline dark:border-headline2">
                  Express js
                </div>
              </div>
              <div
                onClick={() => openLink(socialLinks.prescripto)}
                className="project-content dark:bg-headline2 dark:bg-opacity-10"
              >
                <h1 className="dark:text-button2 text-center">
                  Open on Github
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="hideProjects relative">
          <div className=" border rounded-xl overflow-hidden border-headline shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:border-headline2">
            <div className="relative flex flex-col justify-center items-center ">
              <div className=" mt-4 mx-5 border border-headline dark:border-headline2 rounded-xl overflow-hidden">
                <img src={project2} alt="" />
              </div>

              <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
                Portfolio Website
              </p>
              <p className="text-slate-600 mx-5 text-center text-base mt-2 dark:text-paragraph2">
                My portfolio is designed with a responsive layout, providing a
                seamless experience across devices. Users can switch between
                light and dark themes for enhanced viewing comfort, making it
                both adaptable and user-friendly.
              </p>
              <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
                <div className="bg-button rounded-full px-3 border border-headline dark:border-headline2">
                  React js
                </div>
                <div className="bg-indigo-800 rounded-full px-3 border border-headline dark:border-headline2">
                  Tailwind
                </div>
                <div className="bg-button rounded-full px-3 border border-headline dark:border-headline2">
                  Node js
                </div>
                <div className="bg-indigo-800 rounded-full px-3 border border-headline dark:border-headline2">
                  JavaScript
                </div>
                <div className="bg-button rounded-full px-3 border border-headline dark:border-headline2">
                  CSS
                </div>
              </div>
              <div
                onClick={() => openLink(socialLinks.portfolio)}
                className="project-content dark:bg-headline2 dark:bg-opacity-10"
              >
                <h1 className="dark:text-button2 text-center">
                  Open on Github
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="hideProjects relative">
          <div className=" border rounded-xl overflow-hidden border-headline shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:border-headline2">
            <div className="relative flex flex-col justify-center items-center ">
              <div className=" mt-4 mx-5 border border-headline dark:border-headline2 rounded-xl overflow-hidden">
                <img src={project3} alt="" />
              </div>

              <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
                Nike Store Frontend
              </p>
              <p className="text-slate-600 mx-5 text-center text-base mt-2 dark:text-paragraph2">
                Developed a fully responsive frontend clone of the Nike store,
                built with a focus on creating a seamless user experience across
                all devices. This project features a modern, intuitive interface
                and showcasing dynamic product displays.
              </p>
              <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
                <div className="bg-[#FF6452] rounded-full px-3 border border-headline dark:border-headline2">
                  React js
                </div>
                <div className="bg-blue-200 rounded-full px-3 border border-headline dark:border-headline2">
                  Tailwind
                </div>
                <div className="bg-[#FF6452] rounded-full px-3 border border-headline dark:border-headline2">
                  Node js
                </div>
                <div className="bg-blue-200 rounded-full px-3 border border-headline dark:border-headline2">
                  JavaScript
                </div>
                <div className="bg-[#FF6452] rounded-full px-3 border border-headline dark:border-headline2">
                  CSS
                </div>
              </div>
              <div
                onClick={() => openLink(socialLinks.nike)}
                className="project-content dark:bg-headline2 dark:bg-opacity-10 "
              >
                <h1 className="dark:text-button2 text-center">
                  Open on Github
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
