import React, { useEffect } from "react";
import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";
import { useAppContext } from "./AppContext";

function App() {
  const { socialLinks } = useAppContext();

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  /* tools arrays */
  const tools1 = ["React js", "Tailwind", "MongoDB", "Express js", "PayPal"];
  const tools2 = ["React js", "Tailwind", "Node js", "JavaScript", "CSS"];
  const tools3 = ["React js", "Tailwind", "MongoDB", "Express js", "Gemini AI"];

  /* Animation */
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
  }, []);

  return (
    <>
      <div className="hideProjects text-paragraph flex w-full font-josefin items-center justify-center font-bold text-2xl sm:text-3xl lg:text-4xl pt-20 dark:text-headline2">
        My Projects
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 justify-items-center gap-y-8 gap-x-8 px-6">
        {/* CARD 1 */}
        <div className="hideProjects relative flex justify-center">
          <div className="w-[90%] sm:w-[320px] lg:w-auto border rounded-xl overflow-hidden border-headline shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:border-headline2">
            <div className="relative flex flex-col justify-center items-center">
              <div className="mt-4 mx-5 border border-headline dark:border-headline2 rounded-xl overflow-hidden">
                <img src={project1} alt="" />
              </div>

              <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
                Doctors Appointment Booking
              </p>

              <p className="text-slate-600 mx-5 text-center text-base mt-2 dark:text-paragraph2">
                A web application designed to facilitate easy scheduling of
                medical appointments with a responsive design for seamless user
                experience across devices.
              </p>

              <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
                {tools1.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white rounded-full px-3 border border-headline dark:border-headline2"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <div
                onClick={() => openLink(socialLinks.prescripto)}
                className="project-content dark:bg-headline2 dark:bg-opacity-10"
              >
                <h1 className="dark:text-button2 text-center">
                  Open this Website
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="hideProjects relative flex justify-center">
          <div className="w-[90%] sm:w-[320px] lg:w-auto border rounded-xl overflow-hidden border-headline shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:border-headline2">
            <div className="relative flex flex-col justify-center items-center">
              <div className="mt-4 mx-5 border border-headline dark:border-headline2 rounded-xl overflow-hidden">
                <img src={project2} alt="" />
              </div>

              <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
                Portfolio Website
              </p>

              <p className="text-slate-600 mx-5 text-center text-base mt-2 dark:text-paragraph2">
                Responsive portfolio website built with React, Node.js, and
                Tailwind CSS. Features a dark mode toggle, animations for
                enhanced user experience.
              </p>

              <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
                {tools2.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white rounded-full px-3 border border-headline dark:border-headline2"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <div
                onClick={() => openLink(socialLinks.portfolio)}
                className="project-content dark:bg-headline2 dark:bg-opacity-10"
              >
                <h1 className="dark:text-button2 text-center">
                  Open this Website
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="hideProjects relative flex justify-center">
          <div className="w-[90%] sm:w-[320px] lg:w-auto border rounded-xl overflow-hidden border-headline shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:border-headline2">
            <div className="relative flex flex-col justify-center items-center">
              <div className="mt-4 mx-5 border border-headline dark:border-headline2 rounded-xl overflow-hidden">
                <img src={project3} alt="" />
              </div>

              <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
                Resume Builder
              </p>

              <p className="text-slate-600 mx-5 text-center text-base mt-2 dark:text-paragraph2">
                Developed an AI-powered Resume Builder web application that
                allows users to easily create, edit, and format professional
                resumes.
              </p>

              <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
                {tools3.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 text-white rounded-full px-3 border border-headline dark:border-headline2"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <div
                onClick={() => openLink(socialLinks.nike)}
                className="project-content dark:bg-headline2 dark:bg-opacity-10"
              >
                <h1 className="dark:text-button2 text-center">
                  Open this Website
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
