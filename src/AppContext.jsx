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
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
  };

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, socialLinks }}>
      {children}
    </AppContext.Provider>
  );
};
