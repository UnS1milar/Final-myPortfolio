import React from "react";
import { useEffect } from "react";

function Skills() {
  /* for Animation */
  useEffect(() => {
    const observer2 = new IntersectionObserver((entries2) => {
      entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
          entry2.target.classList.add("showSkills");
        } else {
          entry2.target.classList.remove("showSkills");
        }
      });
    });
    const hiddenElements2 = document.querySelectorAll(".hideSkills");
    hiddenElements2.forEach((el2) => observer2.observe(el2));
  });
  return (
    <>
      <div className="hideSkills  pt-[70px] flex w-full font-josefin flex-col items-center justify-center">
        <p className=" text-3xl lg:text-5xl text-paragraph dark:text-headline2">
          Software Skills
        </p>
        <p className=" text-lg lg:text-xl text-slate-500 dark:text-paragraph2">
          Tools and Frameworks
        </p>
      </div>
      <div className="flex justify-center items-center pt-4 flex-col md:flex-row">
        <div className=" w-3/4 md:w-[40%] flex flex-col justify-center items-center">
          <div className="hideSkills skill-box group ">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2  group-hover:text-orange-600 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="m0 32l34.9 395.8L191.5 480l157.6-52.2L384 32zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4l-97.9 27v.3h-1.1l-98.7-27.3l-6-75.8h47.7L138 320l53.5 14.5l53.7-14.5l6-62.2H84.3L71.5 112.2h241.1z"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">HTML</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per html">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-blue-800 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="m0 32l34.9 395.8L192 480l157.1-52.2L384 32zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6l-98.2 28.7l-98.8-29.2l-6.4-73.9h48.9l3.2 38.3l52.6 13.3l54.7-15.4l3.7-61.6l-166.3-.5v-.1l-.2.1l-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112z"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">CSS</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per css ">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2  group-hover:text-yellow-400 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 32v448h448V32zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5c-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">JavaScript</span>

            <div className="skill-bar shadow-custom-dark dark:border-background ">
              <span className="skill-per javascript">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6  text-headline dark:text-headline2  group-hover:text-green-500 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7m46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8m54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1m-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3s4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4m-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3m-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8M137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2s2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1s2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4m-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7m-74.3-124.9l-.8.5h1.1zm76.2 130.2l-.4-.7v.9z"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Node JS</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per nodejs">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-cyan-400 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M418.2 177.2q-8.1-2.7-16.2-5.1c.9-3.7 1.7-7.4 2.5-11.1c12.3-59.6 4.2-107.5-23.1-123.3c-26.3-15.1-69.2.6-112.6 38.4c-4.3 3.7-8.5 7.6-12.5 11.5c-2.7-2.6-5.5-5.2-8.3-7.7c-45.5-40.4-91.1-57.4-118.4-41.5c-26.2 15.2-34 60.3-23 116.7c1.1 5.6 2.3 11.1 3.7 16.7c-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5c4.5 1.5 9 3 13.6 4.3c-1.5 6-2.8 11.9-4 18c-10.5 55.5-2.3 99.5 23.9 114.6c27 15.6 72.4-.4 116.6-39.1c3.5-3.1 7-6.3 10.5-9.7c4.4 4.3 9 8.4 13.6 12.4c42.8 36.8 85.1 51.7 111.2 36.6c27-15.6 35.8-62.9 24.4-120.5q-1.35-6.6-3-13.5c3.2-.9 6.3-1.9 9.4-2.9c57.7-19.1 99.5-50 99.5-81.7c0-30.3-39.4-59.7-93.8-78.4M282.9 92.3c37.2-32.4 71.9-45.1 87.7-36c16.9 9.7 23.4 48.9 12.8 100.4c-.7 3.4-1.4 6.7-2.3 10c-22.2-5-44.7-8.6-67.3-10.6c-13-18.6-27.2-36.4-42.6-53.1c3.9-3.7 7.7-7.2 11.7-10.7M167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9c-15.6-1.7-31.1-4.2-46.4-7.5c4.4-14.4 9.9-29.3 16.3-44.5c4.6 8.8 9.3 17.5 14.3 26.1m-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8c-5.3 8.3-10.5 16.8-15.4 25.4c-4.9 8.5-9.7 17.2-14.2 26c-6.3-14.9-11.6-29.5-16-43.6m27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7q12.75 18.9 24.3 38.7c11.55 19.8 14.9 26.7 21.7 40.4q-10.05 20.7-21.6 40.8c-7.6 13.3-15.7 26.2-24.2 39c-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4q-13.05-19.05-24.6-39c-11.55-19.95-14.8-26.8-21.5-40.6m180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7c6.4 14.5 12 29.2 16.9 44.3c-15.5 3.5-31.2 6.2-47 8c5.4-8.4 10.5-17 15.5-25.6m14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2q-7.35-12.75-15.3-25.2c16.1 2 31.5 4.7 45.9 8c-4.6 14.8-10 29.2-16.1 43.4M256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8c-19.8-.9-39.7-.9-59.5 0c9.8-12.9 19.9-24.9 29.9-35.8M140.2 57c16.8-9.8 54.1 4.2 93.4 39c2.5 2.2 5 4.6 7.6 7c-15.5 16.7-29.8 34.5-42.9 53.1c-22.6 2-45 5.5-67.2 10.4c-1.3-5.1-2.4-10.3-3.5-15.5c-9.4-48.4-3.2-84.9 12.6-94m-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9c-21.3-6.7-45.5-17.3-63-31.2c-10.1-7-16.9-17.8-18.8-29.9c0-18.3 31.6-41.7 77.2-57.6c5.7-2 11.5-3.8 17.3-5.5c6.8 21.7 15 43 24.5 63.6c-9.6 20.9-17.9 42.5-24.8 64.5m116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3c-11.1 5.3-23.9 5.8-35.3 1.3c-15.9-9.2-22.5-44.5-13.5-92c1.1-5.6 2.3-11.2 3.7-16.7c22.4 4.8 45 8.1 67.9 9.8c13.2 18.7 27.7 36.6 43.2 53.4c-3.2 3.1-6.4 6.1-9.6 8.9m24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3c9.6.4 19.5.6 29.5.6c10.3 0 20.4-.2 30.4-.7c-9.2 12.7-19.1 24.8-29.6 36.4m130.7 30c-.9 12.2-6.9 23.6-16.5 31.3c-15.9 9.2-49.8-2.8-86.4-34.2c-4.2-3.6-8.4-7.5-12.7-11.5c15.3-16.9 29.4-34.8 42.2-53.6c22.9-1.9 45.7-5.4 68.2-10.5c1 4.1 1.9 8.2 2.7 12.2c4.9 21.6 5.7 44.1 2.5 66.3m18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6c-7-21.8-15.6-43.1-25.5-63.8c9.6-20.4 17.7-41.4 24.5-62.9c5.2 1.5 10.2 3.1 15 4.7c46.6 16 79.3 39.8 79.3 58c0 19.6-34.9 44.9-84.8 61.4m-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8s-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">React</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per react">
                <span className="tooltip">45%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-teal-400 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="M7.5 2.5c-1.026 0-1.908.277-2.6.87c-.688.59-1.137 1.447-1.387 2.516a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156c-.582-.359-1.305-.6-2.264-.6M4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Tailwind</span>

            <div className="skill-bar shadow-custom-dark dark:border-background ">
              <span className="skill-per tailwind">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="top-1 left-0 md:left-6 text-headline dark:text-headline2 absolute  group-hover:text-gray-400 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Express JS</span>

            <div className="skill-bar shadow-custom-dark dark:border-background ">
              <span className="skill-per react">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-3/4 md:w-[40%] flex flex-col justify-center items-center">
          <div className="hideSkills skill-box group">
            <i className="top-1 left-0 md:left-6 text-headline dark:text-headline2 absolute  group-hover:text-green-600 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.869.162a.5.5 0 0 0-.738 0l-2.63 2.87a5.5 5.5 0 0 0-.271 7.115L7 13.673V15h1v-1.327l2.77-3.526a5.5 5.5 0 0 0-.27-7.114zM8 3a.5.5 0 0 0-1 0v7.5a.5.5 0 0 0 1 0z"
                  clipRule="evenodd"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">MongoDB</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per mongodb">
                <span className="tooltip">55%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="top-1 left-0 md:left-6 text-headline dark:text-headline2 absolute  group-hover:text-red-600 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3c-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1m-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6c-23.9 35.9 11.7 74.4 60.2 118.2m114.6-176.2c.1 0-175.2 43.8-91.5 140.2c24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3m-6.1 270.5a12.2 12.2 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3a70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4M348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7c-18.3-7.9 16-19 26.8-21.3c11.2-2.4 17.7-2 17.7-2c-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4M124.44 396c-78.7 22 47.9 67.4 148.1 24.5a186 186 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5c-33.5-3.8-13.9-15.2-13.9-15.2m179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6c0-.1 11.8 9.7 72.4 13.6c92.2 5.9 233.8-3.3 237.1-46.9c0 0-6.4 16.5-76.2 29.7M260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6c-33.5-3.5-11.6-19.7-11.6-19.7c-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1-21.1-12.8"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Java</span>

            <div className="skill-bar shadow-custom-dark dark:border-background ">
              <span className="skill-per java">
                <span className="tooltip">35%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-green-500 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338c0 0-.599.034-1.201.133c0 0 .228-.097.519-.198c2.374-.821 3.496-.986 4.939-1.727c2.71-1.388 5.408-4.413 5.957-7.555c-1.032 3.022-4.17 5.623-7.027 6.679c-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059c1.916-.736 3.747-.332 5.818-.825c2.208-.525 4.766-2.18 5.805-4.344c1.165 3.458 2.565 8.866.054 12.21m.042-13.28a9.2 9.2 0 0 1-1.065 1.89a9.98 9.98 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.98 9.98 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292c.274-2.539-.476-5.763-1.752-9.596"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">
              Spring Boot
            </span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per springboot">
                <span className="tooltip">30%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-cyan-800 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m24.129 23.412l-.508-.484a6.7 6.7 0 0 0-.809-.891l-.005-.004q-.448-.407-.931-.774q-.387-.266-1.064-.641a1.6 1.6 0 0 1-.818-.824l-.004-.01l-.048-.024c.212-.021.406-.06.592-.115l-.023.006l.57-.157c.236-.074.509-.122.792-.133h.006q.446-.02.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496a2.6 2.6 0 0 0-.443-.468l-.005-.004q-.629-.556-1.303-1.076a16 16 0 0 0-1.311-.916l-.068-.04a5 5 0 0 0-.825-.435l-.034-.012q-.448-.182-.883-.399a1.6 1.6 0 0 0-.327-.119l-.011-.002a.5.5 0 0 1-.29-.169l-.001-.001a3 3 0 0 1-.355-.609l-.008-.02q-.145-.339-.314-.651q-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967a5.4 5.4 0 0 0-.461-.942l.013.023a17 17 0 0 0-1.331-1.961l.028.038a14.6 14.6 0 0 0-1.459-1.59l-.008-.007a18 18 0 0 0-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282a3.7 3.7 0 0 0-.965-.393l-.026-.006l-1.113-.278l-.629-.048q-.314-.024-.629-.024a1.7 1.7 0 0 1-.387-.279a4 4 0 0 0-.353-.295l-.01-.007a11.7 11.7 0 0 0-2.043-.93L2.071.18A1.36 1.36 0 0 0 .9.096L.909.093a1.36 1.36 0 0 0-.795.84l-.003.01a1.52 1.52 0 0 0 .232 1.549l-.002-.003q.544.725.834 1.14q.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448q.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52T3.738 9a.9.9 0 0 0 .241.242l.003.002a.4.4 0 0 1 .169.313v.001a1.3 1.3 0 0 0-.217.586l-.001.006a4 4 0 0 1-.153.695l.008-.03a7.1 7.1 0 0 0-.351 2.231q0 .387.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787a.914.914 0 0 0 1.106.203l-.005.002a.93.93 0 0 0 .617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067a.6.6 0 0 0 .038-.211l-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003a7.7 7.7 0 0 0 1.127 1.001l.022.015q.316.242.566.528l.004.004q.239.28.56.454l.01.005v-.024h.048a.46.46 0 0 0-.18-.205l-.002-.001a2 2 0 0 1-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798a1 1 0 0 1-.096-.334v-.005a.32.32 0 0 0-.168-.265l-.002-.001a3 3 0 0 1-.408.545l.001-.001a2 2 0 0 0-.382.58l-.005.013a4.3 4.3 0 0 0-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024l-.024.024a.86.86 0 0 1-.59-.443l-.002-.005q-.182-.351-.326-.69a6.5 6.5 0 0 1-.423-2.144v-.009a6.2 6.2 0 0 1 .286-2.318l-.012.044q.072-.266.314-.896t.097-.871a.9.9 0 0 0-.265-.41l-.001-.001a3 3 0 0 1-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544a11 11 0 0 1-.474-1.353l-.022-.089a10 10 0 0 0-.546-1.503l.026.064a3.3 3.3 0 0 0-.39-.669l.006.008q-.244-.326-.436-.617q-.244-.314-.484-.605a3.4 3.4 0 0 1-.426-.657l-.009-.02a1.6 1.6 0 0 1-.119-.327l-.002-.011a.4.4 0 0 1 .049-.34l-.001.002a.3.3 0 0 1 .073-.145a.3.3 0 0 1 .143-.072h.002a.55.55 0 0 1 .536-.035l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085a5 5 0 0 1 .234.536l.011.033q.097.278.217.57q.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57q.194.145.651.423t.484.52a11 11 0 0 0-1.834.087l.056-.006a6 6 0 0 0-1.479.39l.04-.014a2.6 2.6 0 0 1-.388.129l-.019.004a.31.31 0 0 0-.266.277v.001q.093.115.143.26l.002.006q.05.151.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005q.212.26.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399q.11.108.191.239l.003.005a.57.57 0 0 0 .36.193h.003v-.048a.5.5 0 0 1-.184-.267l-.001-.004a1 1 0 0 0-.112-.273l.002.004zM5.553 4.207q-.194 0-.363.012a1.3 1.3 0 0 0-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798l.048-.024a.74.74 0 0 0 .252-.321l.002-.005c.052-.139.082-.301.082-.469l-.001-.054v.003a.5.5 0 0 1-.108-.154l-.001-.003l-.081-.182a.5.5 0 0 0-.214-.192l-.003-.001a1 1 0 0 1-.244-.169"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">MySql</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per mysql">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1  left-0 md:left-6  text-headline dark:text-headline2 group-hover:text-black transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Github</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per github">
                <span className="tooltip">65%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute top-1 left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-blue-900 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 32h214.6v214.6H0zm233.4 0H448v214.6H233.4zM0 265.4h214.6V480H0zm233.4 0H448V480H233.4z"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Microsoft</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per microsoft">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>

          <div className="hideSkills skill-box group">
            <i className="absolute left-0 md:left-6 text-headline dark:text-headline2 group-hover:text-blue-800 transition-colors transform group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.2em"
                height="3.2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.45 10.48a1.3 1.3 0 0 1-1 1.33a4.8 4.8 0 0 1-1.61.19c-.14 0-.15-.09-.15-.19V9.26c0-.07.07-.19.11-.19a4.9 4.9 0 0 1 1.71.11a1.28 1.28 0 0 1 .94 1.3"
                />
                <path
                  fill="currentColor"
                  d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-6 11a3.5 3.5 0 0 1-1.68.54H7.98c-.28 0-.28 0-.28.27v2.32c0 .2-.06.26-.26.26H6.12c-.19 0-.24-.07-.24-.25V7.71c0-.2 0-.26.25-.26h3.13a3.34 3.34 0 0 1 1.62.47a2.75 2.75 0 0 1 1.4 2.39A2.83 2.83 0 0 1 11 13m5.92 3.3a4.6 4.6 0 0 1-2.73.19q-.409-.09-.8-.24a.29.29 0 0 1-.16-.2v-1.51c.32.12.62.26.93.36a3.66 3.66 0 0 0 1.61.14q.162-.03.31-.1a.37.37 0 0 0 .08-.63a4 4 0 0 0-.73-.4c-.41-.2-.83-.36-1.22-.59a1.82 1.82 0 0 1-1-1.93a2 2 0 0 1 1.36-1.63a4.2 4.2 0 0 1 2-.17c.32 0 .63.12.95.18c.17 0 .23.14.22.31v1.17c0 .22-.05.24-.25.16a3.87 3.87 0 0 0-2-.34a.9.9 0 0 0-.28.08a.37.37 0 0 0-.1.63q.434.289.91.5c.38.19.78.34 1.15.55a1.73 1.73 0 0 1 1 1.79a1.92 1.92 0 0 1-1.26 1.64z"
                />
              </svg>
            </i>
            <span className="title-skills dark:text-headline2">Photoshop</span>

            <div className="skill-bar shadow-custom-dark dark:border-background">
              <span className="skill-per photoshop">
                <span className="tooltip">30%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
