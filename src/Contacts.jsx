import React from "react";
import contactMe from "./assets/images/contact-me.png";
import Swal from "sweetalert2";
import { useAppContext } from "./AppContext";

function Contacts() {
  // code for icon links
  const { socialLinks } = useAppContext();
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const swal_key = import.meta.env.VITE_SWAL_ACCESS_KEY;
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", swal_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      // Clear the form fields
      event.target.reset();
    }
  };

  return (
    <>
      <div className="pt-[105px] flex w-full font-josefin flex-col items-center justify-center h-20 mt-5">
        <p className=" text-3xl lg:text-5xl text-paragraph dark:text-headline2">
          Contact Me
        </p>
        <p className=" text-lg lg:text-xl text-slate-500 text-center dark:text-paragraph2">
          Please fill out the form below to initiate discussing about potential
          job opportunities
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-24">
        <div className="w-[50%]  flex-col justify-end items-center mb-32 hidden md:flex">
          <img
            src={contactMe}
            className="h-[350px] w-[350px] max-lg:w-[300px] max-lg:h-[300px]"
            alt=""
          />
          <div className="flex flex-row gap-3 text-headline dark:text-background">
            <i
              onClick={() => openLink(socialLinks.facebook)}
              className="homeIcon1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"
                />
              </svg>
            </i>
            <i
              onClick={() => openLink(socialLinks.instagram)}
              className="homeIcon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"
                />
              </svg>
            </i>
            <i
              onClick={() => openLink(socialLinks.github)}
              className="homeIcon3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"
                />
              </svg>
            </i>
            <i
              onClick={() => openLink(socialLinks.linkedin)}
              className="homeIcon4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"
                />
              </svg>
            </i>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-start items-start max-md:items-center pb-28 ">
          <form
            onSubmit={onSubmit}
            className="w-[70%] flex flex-col items-center max-lg:w-[80%] max-md:w-[70%]"
          >
            <div className="w-full mt-2">
              <input
                className="w-full h-10 p-4 bg-transparent border-2 outline-none rounded-md text-paragraph dark:text-headline2 mt-2 shadow-lg"
                type="text"
                placeholder="Enter your name"
                required
                name="name"
              />
            </div>
            <div className="w-full mt-2">
              <input
                className="w-full h-10 p-4 bg-transparent border-2 outline-none rounded-md text-paragraph dark:text-headline2 mt-2 shadow-lg"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
            </div>
            <div className="w-full mt-2">
              <textarea
                className="w-full h-48 p-4 bg-transparent border-2 outline-none rounded-md text-paragraph dark:text-headline2 mt-2 shadow-lg resize-none"
                name="message"
                id=""
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              className="buttonContact2 mt-3 dark:bg-button2 dark:text-headline2 dark:border-button2 dark:hover:text-paragraph"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
