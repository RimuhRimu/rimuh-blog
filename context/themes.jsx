import { createContext, useEffect, useState } from "react";

const themes = {
  dark: {
    "--links": "#ffa500",
    "--item-hover-color": "#7c7fff66",
    "--note-background-color": "#6f6f6f",
    "--search-icon": "#e3e3e3",
    "--search-background-color": "#505986",
    "--shadow-search": "2px 3px 8px 2px #505986",
    "--hits-background-color": "#2f2f2fef",
    "--card-background": "#334c7712",
    "color-scheme": "dark"
  },
  light: {
    "--links": "#0070f3",
    "--item-hover-color": "#7c7fff70",
    "--note-background-color": "#f5f5f5",
    "--search-icon": "#aaaaa0",
    "--search-background-color": "#f9f9fe",
    "--shadow-search": "2px 3px 8px 2px #dedef6",
    "--hits-background-color": "#f1f1fe",
    "--card-background": "#ffffff99",
    "color-scheme": "light"
  },
};

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = localStorage.getItem("theme-value") === "dark"
      ? "light"
      : "dark";
    setTheme(newTheme);

    for (const [prop, value] of Object.entries(themes[newTheme])) {
      document.documentElement.style.setProperty(prop, value);
    }

    localStorage.setItem("theme-value", newTheme);
  };

  useEffect(() => {
    const systemTheme =
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    localStorage.setItem("theme-value", systemTheme);
    setTheme(systemTheme);
  }, [false]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
