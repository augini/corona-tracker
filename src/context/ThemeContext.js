import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const [dark, setDark] = useState({
    syntax: "rgba(237, 237, 237, 0.5)",
    ui: "#333",
    bg: "#555",
  });

  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#fff",
    bg: "#eee",
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ dark, light, isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
