import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // ✅ Load theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ Apply theme whenever it changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const socialLinks = {
    facebook: "https://www.facebook.com/james.kidd.3348/",
    instagram: "https://www.instagram.com/cmd.sen?igsh=MWF2c25zMTZkODQ1Mw==",
    github: "https://github.com/UnS1milar",
    linkedin: "https://www.linkedin.com/in/arsenio-malinao-jr-46311328a/",
    prescripto: "https://doctorappointmentbooking-frontend.onrender.com",
    ems: "https://fullstack-ems-sandy.vercel.app/",
    resume: "https://resume-builder-client-roan.vercel.app/",
    resumeView:
      "https://drive.google.com/file/d/1rdzc5olHrKCiMxmQ6Di5WScBhyxr43zd/view?usp=sharing",
  };

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, socialLinks }}>
      {children}
    </AppContext.Provider>
  );
};
