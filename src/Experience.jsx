import React from "react";
import elementary from "./assets/images/elementary-logo.jpg";
import highschool from "./assets/images/highschool-logo.jpg";
import college from "./assets/images/college-logo.png";
import job1 from "./assets/images/job1-logo.png";
import job2 from "./assets/images/job2-logo.jpg";
import { useEffect } from "react";

function Experience() {
  /* for Animation */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showXP");
        } else {
          entry.target.classList.remove("showXP");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hideXP");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <div className="relative">
      <div className="hideXP w-full bg-gradient-to-r from-white via-blue-50 to-gray-50 pb-4 h-32 top-0 absolute flex justify-center items-end z-10 text-3xl lg:text-5xl text-headline font-josefin dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black dark:text-headline2">
        Educational Background
      </div>
      <div className="title2 hideXP absolute max-sm:hidden  bottom-[370px] flex w-full font-josefin items-center justify-center bg-gradient-to-r from-white via-blue-50 to-gray-50 h-24 max-md:bottom-[410px] text-2xl sm:text-3xl lg:text-5xl dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black dark:text-headline2">
        Work Experience
      </div>
      <div className="timeline pt-32">
        <div className="container left-container hideXP ">
          <img
            className="dark:border-background"
            src={elementary}
            alt="elem logo"
          />
          <div className="text-box shadow-custom-dark  dark:bg-black dark:bg-opacity-30 dark:border-white dark:text-headline2 ">
            <h2>Bagbaguin Elementary School</h2>
            <small>2004-2010</small>
            <p className="dark:text-paragraph2">
              S Manalon Street, Meycauayan, 3020 Bulacan <br />
              {`(044)`} 720 6810
            </p>
            <span className="left-container-arrow dark:border-l-background max-sm:dark:border-r-background"></span>
          </div>
        </div>

        <div className="container right-container hideXP">
          <img
            className="dark:border-background"
            src={highschool}
            alt="hs logo"
          />
          <div className="text-box shadow-custom-dark dark:bg-black dark:bg-opacity-30 dark:border-white dark:text-headline2">
            <h2>Kalalake National Highschool</h2>
            <small>2010-2014</small>
            <p className="dark:text-paragraph2">
              100 E 14th St, Olongapo, 2200 Zambales <br />
              {`(047)`} 602 4390
            </p>
            <span className="right-container-arrow dark:border-r-background"></span>
          </div>
        </div>

        <div className="container left-container hideXP">
          <img
            className="dark:border-background"
            src={college}
            alt="college logo"
          />
          <div className="text-box shadow-custom-dark dark:bg-black dark:bg-opacity-30 dark:border-white dark:text-headline2">
            <h2>Bestlink College of the Philippines</h2>
            <small>2015-2019</small>
            <h3>BS in Information Technology</h3>
            <p className="dark:text-paragraph2">
              Quirino Hwy, Novaliches, Quezon City, Metro Manila <br />
              {`(632)`} 844-28601
            </p>
            <span className="left-container-arrow dark:border-l-background max-sm:dark:border-r-background"></span>
          </div>
        </div>

        <div className="title2 hideXP hidden max-sm:flex  w-full font-josefin items-center justify-center bg-transparent h-16 text-2xl text-headline dark:text-headline2">
          Work Experience
        </div>

        <div className="container right-container hideXP mt-24 max-sm:mt-0">
          <img className="dark:border-background" src={job1} alt="plgi logo" />
          <div className="text-box shadow-custom-dark dark:bg-black dark:bg-opacity-30  dark:border-white dark:text-headline2">
            <h2>Prime Label Group Inc.</h2>
            <small>Aug 2020-Feb 2022</small>
            <h3>Invoice Clerk</h3>
            <p className="dark:text-paragraph2">
              Speaker perez st. Quezon City <br />
              8332-9516
            </p>
            <span className="right-container-arrow dark:border-r-background"></span>
          </div>
        </div>

        <div className="container left-container hideXP ">
          <img
            className="dark:border-background"
            src={job2}
            alt="huawei logo"
          />

          <div className="text-box shadow-custom-dark dark:bg-black dark:bg-opacity-30 dark:border-white dark:text-headline2">
            <h2>Huawei Technologies Philippines </h2>
            <small>March 2022-Sept 2022</small>
            <h3>Site Engineer</h3>
            <p className="dark:text-paragraph2">
              Makati, Metro Manila <br />
              {`(632)`} 374-8761
            </p>
            <span className="left-container-arrow dark:border-l-background max-sm:dark:border-r-background"></span>
          </div>
        </div>

        <div className="timeline-line hideXP dark:bg-background "></div>
      </div>
    </div>
  );
}

export default Experience;
