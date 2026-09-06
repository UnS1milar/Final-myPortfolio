import React, { useEffect, useRef, useState } from "react";

import elementary from "./assets/images/elementary-logo.jpg";
import highschool from "./assets/images/highschool-logo.jpg";
import college from "./assets/images/college-logo.png";
import job1 from "./assets/images/job1-logo.png";
import job2 from "./assets/images/job2-logo.jpg";
import job3 from "./assets/images/job3-logo.png";

function Experience() {
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

  // Binagalan ang duration (1000ms / 1s) para sa mas smooth at relaxed na entrance
  const getAnimClass = (delayClass = "delay-100") =>
    `transition-all duration-1000 ease-out transform ${delayClass} ${
      isVisible
        ? "opacity-100 translate-y-0 blur-0"
        : "opacity-0 translate-y-12 blur-sm"
    }`;

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 px-6 md:px-16 max-w-6xl mx-auto overflow-hidden"
    >
      {/* TITLE */}
      <h2
        className={`${getAnimClass(
          "delay-100",
        )} text-center text-3xl md:text-4xl font-extrabold text-headline dark:text-headline2 mb-16 tracking-tight`}
      >
        Educational & Work Experience
      </h2>

      <div className="timeline relative pt-6">
        {/* ELEMENTARY */}
        <div
          className={`container left-container ${getAnimClass("delay-200")}`}
        >
          <div className="img-holder border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm">
            <img src={elementary} alt="Bagbaguin Elementary School logo" />
          </div>
          <div className="text-box bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-bold text-headline dark:text-button2">
              Bagbaguin Elementary School
            </h2>
            <small className="inline-block my-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              2004 - 2010
            </small>
            <p className="text-paragraph dark:text-paragraph2 text-sm mt-2 leading-relaxed">
              S Manalon Street, Meycauayan, Bulacan
            </p>
            <span className="left-container-arrow border-r-white dark:border-r-neutral-900"></span>
          </div>
        </div>

        {/* HIGH SCHOOL */}
        <div
          className={`container right-container ${getAnimClass("delay-400")}`}
        >
          <div className="img-holder border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm">
            <img src={highschool} alt="Kalalake National High School logo" />
          </div>
          <div className="text-box bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-bold text-headline dark:text-button2">
              Kalalake National High School
            </h2>
            <small className="inline-block my-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              2010 - 2014
            </small>
            <p className="text-paragraph dark:text-paragraph2 text-sm mt-2 leading-relaxed">
              Olongapo, Zambales
            </p>
            <span className="right-container-arrow border-l-white dark:border-l-neutral-900"></span>
          </div>
        </div>

        {/* COLLEGE */}
        <div
          className={`container left-container ${getAnimClass("delay-600")}`}
        >
          <div className="img-holder border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm">
            <img src={college} alt="Bestlink College logo" />
          </div>
          <div className="text-box bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-bold text-headline dark:text-button2">
              Bestlink College of the Philippines
            </h2>
            <small className="inline-block my-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              2015 - 2019
            </small>
            <h3 className="text-sm font-semibold text-headline/90 dark:text-headline2/90 mt-1">
              BS in Information Technology
            </h3>
            <p className="text-paragraph dark:text-paragraph2 text-sm mt-2 leading-relaxed">
              Quezon City, Metro Manila
            </p>
            <span className="left-container-arrow border-r-white dark:border-r-neutral-900"></span>
          </div>
        </div>

        {/* JOB 1 */}
        <div
          className={`container right-container ${getAnimClass("delay-800")}`}
        >
          <div className="img-holder border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm">
            <img src={job1} alt="Prime Label Group logo" />
          </div>
          <div className="text-box bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-bold text-headline dark:text-button2">
              Prime Label Group Inc.
            </h2>
            <small className="inline-block my-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              Aug 2020 - Feb 2022
            </small>
            <h3 className="text-sm font-semibold text-headline/90 dark:text-headline2/90 mt-1">
              Invoice Clerk
            </h3>
            <span className="right-container-arrow border-l-white dark:border-l-neutral-900"></span>
          </div>
        </div>

        {/* JOB 2 */}
        <div
          className={`container left-container ${getAnimClass("delay-1000")}`}
        >
          <div className="img-holder border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm">
            <img src={job2} alt="Huawei Technologies logo" />
          </div>
          <div className="text-box bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-bold text-headline dark:text-button2">
              Huawei Technologies Philippines
            </h2>
            <small className="inline-block my-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              Mar 2022 - Sep 2022
            </small>
            <h3 className="text-sm font-semibold text-headline/90 dark:text-headline2/90 mt-1">
              Site Engineer
            </h3>
            <span className="left-container-arrow border-r-white dark:border-r-neutral-900"></span>
          </div>
        </div>

        {/* JOB 3 */}
        <div
          className={`container right-container ${getAnimClass("delay-1200")}`}
        >
          <div className="img-holder border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm">
            <img src={job3} alt="Young Achievers' School logo" />
          </div>
          <div className="text-box bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-bold text-headline dark:text-button2">
              Young Achievers' School of Caloocan
            </h2>
            <small className="inline-block my-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
              May 2025 - April 2026
            </small>
            <h3 className="text-sm font-semibold text-headline/90 dark:text-headline2/90 mt-1">
              IT Administrator
            </h3>
            <span className="right-container-arrow border-l-white dark:border-l-neutral-900"></span>
          </div>
        </div>

        {/* TIMELINE LINE */}
        <div
          className={`timeline-line ${getAnimClass("delay-100")} bg-gray-200 dark:bg-neutral-800`}
        ></div>
      </div>
    </section>
  );
}

export default Experience;
