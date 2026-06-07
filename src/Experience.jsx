import React, { useEffect } from "react";

import elementary from "./assets/images/elementary-logo.jpg";
import highschool from "./assets/images/highschool-logo.jpg";
import college from "./assets/images/college-logo.png";
import job1 from "./assets/images/job1-logo.png";
import job2 from "./assets/images/job2-logo.jpg";
import job3 from "./assets/images/job3-logo.png";

function Experience() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hideXP");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showXP", entry.isIntersecting);
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 px-6 md:px-16">
      {/* TITLE */}
      <h2 className="hideXP text-center text-3xl md:text-4xl font-bold text-headline dark:text-headline2 mb-16 font-josefin">
        Educational & Work Experience
      </h2>

      <div className="timeline pt-10">
        {/* ELEMENTARY */}
        <div className="container left-container hideXP">
          <img src={elementary} alt="elem logo" />
          <div className="text-box shadow-custom-dark dark:bg-black/30 dark:text-headline2">
            <h2 className="dark:text-button2">Bagbaguin Elementary School</h2>
            <small>2004-2010</small>
            <p className="text-paragraph dark:text-paragraph2">
              S Manalon Street, Meycauayan, Bulacan
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* HIGH SCHOOL */}
        <div className="container right-container hideXP">
          <img src={highschool} alt="hs logo" />
          <div className="text-box shadow-custom-dark dark:bg-black/30 dark:text-headline2">
            <h2 className="dark:text-button2">Kalalake National High School</h2>
            <small>2010-2014</small>
            <p className="text-paragraph dark:text-paragraph2">
              Olongapo, Zambales
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* COLLEGE */}
        <div className="container left-container hideXP">
          <img src={college} alt="college logo" />
          <div className="text-box shadow-custom-dark dark:bg-black/30 dark:text-headline2">
            <h2 className="dark:text-button2">
              Bestlink College of the Philippines
            </h2>
            <small>2015-2019</small>
            <h3>BS in Information Technology</h3>
            <p className="text-paragraph dark:text-paragraph2">
              Quezon City, Metro Manila
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* JOB 1 */}
        <div className="container right-container hideXP">
          <img src={job1} alt="job1 logo" />
          <div className="text-box shadow-custom-dark dark:bg-black/30 dark:text-headline2">
            <h2 className="dark:text-button2">Prime Label Group Inc.</h2>
            <small>Aug 2020 - Feb 2022</small>
            <h3>Invoice Clerk</h3>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* JOB 2 */}
        <div className="container left-container hideXP">
          <img src={job2} alt="job2 logo" />
          <div className="text-box shadow-custom-dark dark:bg-black/30 dark:text-headline2">
            <h2 className="dark:text-button2">
              Huawei Technologies Philippines
            </h2>
            <small>Mar 2022 - Sep 2022</small>
            <h3>Site Engineer</h3>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* JOB 3 */}
        <div className="container right-container hideXP">
          <img src={job3} alt="job3 logo" />
          <div className="text-box shadow-custom-dark dark:bg-black/30 dark:text-headline2">
            <h2 className="dark:text-button2">
              Young Achievers' School of Caloocan
            </h2>
            <small>May 2025 - April 2026</small>
            <h3>IT Administrator</h3>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* LINE */}
        <div className="timeline-line hideXP"></div>
      </div>
    </section>
  );
}

export default Experience;
