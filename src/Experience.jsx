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
        console.log(entry);
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
    <>
      <div className="w-full bg-background h-28"></div>
      <div className="timeline">
        <div className="title hideXP flex w-full font-josefin items-center justify-center bg-background h-20 absolute text-5xl">
          Education Background
        </div>
        <div className="container left-container hideXP">
          <img src={elementary} alt="elem logo" />
          <div className="text-box">
            <h2>Bagbaguin Elementary School</h2>
            <small>2004-2010</small>
            <p>
              S Manalon Street, Meycauayan, 3020 Bulacan <br />
              {`(044)`} 720 6810
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container hideXP">
          <img src={highschool} alt="hs logo" />
          <div className="text-box">
            <h2>Kalalake National Highschool</h2>
            <small>2010-2014</small>
            <p>
              100 E 14th St, Olongapo, 2200 Zambales <br />
              {`(047)`} 602 4390
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container hideXP">
          <img src={college} alt="college logo" />
          <div className="text-box">
            <h2>Bestlink College of the Philippines</h2>
            <small>2015-2019</small>
            <h3>BS in Information Technology</h3>
            <p>
              Quirino Hwy, Novaliches, Quezon City, Metro Manila <br />
              {`(632)`} 844-28601
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="title2 hideXP flex w-full font-josefin items-center justify-center bg-background h-24 text-5xl">
          Work Experience
        </div>

        <div className="container right-container hideXP">
          <img src={job1} alt="plgi logo" />
          <div className="text-box">
            <h2>Prime Label Group Inc.</h2>
            <small>Aug 2020-Feb 2022</small>
            <h3>Invoice Clerk</h3>
            <p>
              Speaker perez st. Quezon City <br />
              8332-9516
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container hideXP">
          <img src={job2} alt="huawei logo" />
          <div className="text-box">
            <h2>Huawei Technologies Philippines </h2>
            <small>March 2022-Sept 2022</small>
            <h3>Site Engineer</h3>
            <p>
              Makati, Metro Manila <br />
              {`(632)`} 374-8761
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="timeline-line hideXP"></div>
      </div>
    </>
  );
}

export default Experience;
