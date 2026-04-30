import React, { createContext, useState, useContext } from "react";

// Create a context for dark mode
const AppContext = createContext();

// Create a custom hook to easily access the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create a provider component
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  import.meta.env.VITE_BACKEND_URL;

  const socialLinks = {
    facebook: "https://www.facebook.com/james.kidd.3348/",
    instagram: "https://www.instagram.com/cmd.sen?igsh=MWF2c25zMTZkODQ1Mw==",
    github: "https://github.com/UnS1milar",
    linkedin: "https://www.linkedin.com/in/arsenio-malinao-jr-46311328a/",
    prescripto: "https://doctorappointmentbooking-frontend.onrender.com",
    portfolio: "https://final-portfolio-website-1k44.onrender.com",
    nike: "https://resume-builder-client-roan.vercel.app/",
    resume:
      "https://resume-builder-client-roan.vercel.app/view/69ee3d0b063a0e0f82792e89",
  };

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, socialLinks }}>
      {children}
    </AppContext.Provider>
  );
};
