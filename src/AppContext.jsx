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
    facebook: import.meta.env.VITE_FACEBOOK,
    instagram: import.meta.env.VITE_INSTAGRAM,
    github: import.meta.env.VITE_GITHUB,
    linkedin: import.meta.env.VITE_LINKEDIN,
    prescripto: import.meta.env.VITE_PRESCRIPTO,
    portfolio: import.meta.env.VITE_PORTFOLIO,
    nike: import.meta.env.VITE_NIKE,
  };

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, socialLinks }}>
      {children}
    </AppContext.Provider>
  );
};
