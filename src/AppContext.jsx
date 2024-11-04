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

  const socialLinks = {
    facebook: "https://www.facebook.com/james.kidd.3348",
    instagram: "https://www.instagram.com/cmd.sen/",
    github: "https://github.com/UnS1milar?tab=repositories",
    linkedin: "https://www.linkedin.com/in/arsenio-malinao-jr-46311328a/",
    prescripto: "https://github.com/UnS1milar/Final-DoctorAppointmentBooking",
    portfolio: "https://github.com/UnS1milar/Final-myPortfolio",
    nike: "https://github.com/UnS1milar/final-NikeFrontend",
  };

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, socialLinks }}>
      {children}
    </AppContext.Provider>
  );
};
