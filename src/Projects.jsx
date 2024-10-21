import React from "react";
import project1 from "./assets/images/project1.png";

function App() {
  return (
    <>
      <div className="text-paragraph flex w-full font-josefin items-center justify-center bg-background text-3xl lg:text-5xl pt-20 mt-5 dark:bg-background2 dark:text-headline2">
        My Projects
      </div>
      <div className="w-full grid grid-cols-auto-fit sm:grid-cols-auto pt-5 justify-center gap-y-8 gap-x-8 px-6">
        <div className=" border-2 rounded-xl border-headline bg-background shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:bg-background2 dark:border-headline2 dark:shadow-custom-light">
          <div className="relative flex flex-col justify-center items-center ">
            <div className=" mt-4 mx-5 ">
              <img className="rounded-xl" src={project1} alt="" />
            </div>

            <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
              Doctors Appointment Booking
            </p>
            <p className="text-slate-600 mx-5 text-center text-base mt-4 dark:text-paragraph2">
              A web application designed to facilitate easy scheduling of
              medical appointments. Featuring a responsive design, the
              application ensures a seamless user experience across devices,
              from desktops to smartphones.
            </p>
            <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
              <div className="bg-blue-600 rounded-full px-3">React js</div>
              <div className="bg-blue-100 rounded-full px-3">Tailwind</div>
              <div className="bg-blue-600 rounded-full px-3">Node js</div>
              <div className="bg-blue-100 rounded-full px-3">MongoDB</div>
              <div className="bg-blue-600 rounded-full px-3">Express js</div>
            </div>
            <div className="project-content rounded-xl dark:bg-headline2 dark:bg-opacity-10 dark:backdrop-blur-sm ">
              <h1 className="dark:text-button2">Image hover effect</h1>
              <p>Go to github</p>
            </div>
          </div>
        </div>

        <div className=" border-2 rounded-xl border-headline bg-background shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:bg-background2 dark:border-headline2 dark:shadow-custom-light">
          <div className="relative flex flex-col justify-center items-center ">
            <div className=" mt-4 mx-5 ">
              <img className="rounded-xl" src={project1} alt="" />
            </div>

            <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
              Doctors Appointment Booking
            </p>
            <p className="text-slate-600 mx-5 text-center text-base mt-4 dark:text-paragraph2">
              A web application designed to facilitate easy scheduling of
              medical appointments. Featuring a responsive design, the
              application ensures a seamless user experience across devices,
              from desktops to smartphones.
            </p>
            <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
              <div className="bg-blue-600 rounded-full px-3">React js</div>
              <div className="bg-blue-100 rounded-full px-3">Tailwind</div>
              <div className="bg-blue-600 rounded-full px-3">Node js</div>
              <div className="bg-blue-100 rounded-full px-3">MongoDB</div>
              <div className="bg-blue-600 rounded-full px-3">Express js</div>
            </div>
            <div className="project-content rounded-xl dark:bg-headline2 dark:bg-opacity-10 dark:backdrop-blur-sm ">
              <h1 className="dark:text-button2">Image hover effect</h1>
              <p>Go to github</p>
            </div>
          </div>
        </div>

        <div className=" border-2 rounded-xl border-headline bg-background shadow-custom-darker cursor-pointer hover:translate-y-[-10px] transition-all duration-500 dark:bg-background2 dark:border-headline2 dark:shadow-custom-light">
          <div className="relative flex flex-col justify-center items-center ">
            <div className=" mt-4 mx-5 ">
              <img className="rounded-xl" src={project1} alt="" />
            </div>

            <p className="text-paragraph text-xl font-medium mt-4 dark:text-headline2">
              Doctors Appointment Booking
            </p>
            <p className="text-slate-600 mx-5 text-center text-base mt-4 dark:text-paragraph2">
              A web application designed to facilitate easy scheduling of
              medical appointments. Featuring a responsive design, the
              application ensures a seamless user experience across devices,
              from desktops to smartphones.
            </p>
            <div className="flex justify-center items-center text-base gap-2 w-72 flex-wrap mt-4 mb-8">
              <div className="bg-blue-600 rounded-full px-3">React js</div>
              <div className="bg-blue-100 rounded-full px-3">Tailwind</div>
              <div className="bg-blue-600 rounded-full px-3">Node js</div>
              <div className="bg-blue-100 rounded-full px-3">MongoDB</div>
              <div className="bg-blue-600 rounded-full px-3">Express js</div>
            </div>
            <div className="project-content rounded-xl dark:bg-headline2 dark:bg-opacity-10 dark:backdrop-blur-sm ">
              <h1 className="dark:text-button2">Image hover effect</h1>
              <p>Go to github</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
