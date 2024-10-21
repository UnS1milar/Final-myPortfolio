import React from "react";
import contactMe from "./assets/images/contact-me.png";
import Swal from "sweetalert2";

function Contacts() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3d7007cf-5f94-46d8-84b2-7516b647e27f");

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
    }
  };

  return (
    <>
      <div className="pt-32 flex w-full font-josefin flex-col items-center justify-center bg-background h-20 mt-5 dark:bg-background2">
        <p className=" text-3xl lg:text-5xl text-paragraph dark:text-headline2">
          Contact Me
        </p>
        <p className=" text-lg lg:text-xl text-slate-500 text-center dark:text-paragraph2">
          Please fill out the form below to initiate discussing about potential
          job opportunities
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-24">
        <div className="w-[40%] justify-end items-center mb-32 hidden md:flex">
          <img
            src={contactMe}
            className="h-[400px] w-[400px] max-lg:w-[300px] max-lg:h-[300px]"
            alt=""
          />
        </div>
        <div className="w-full md:w-[60%] flex flex-col justify-start items-center pt-3 pb-28 ">
          <form
            onSubmit={onSubmit}
            className="w-[70%] md:w-[60%] flex flex-col items-center"
          >
            <div className="w-full mt-3">
              <input
                className="w-full h-12 p-4 bg-transparent border-2 outline-none rounded-md text-paragraph mt-2 shadow-lg"
                type="text"
                placeholder="Enter your name"
                required
                name="name"
              />
            </div>
            <div className="w-full mt-3">
              <input
                className="w-full h-12 p-4 bg-transparent border-2 outline-none rounded-md text-paragraph mt-2 shadow-lg"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
            </div>
            <div className="w-full mt-3">
              <textarea
                className="w-full h-52 p-4 bg-transparent border-2 outline-none rounded-md text-paragraph mt-2 shadow-lg resize-none"
                name="message"
                id=""
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button className="buttonContact2 mt-3" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
