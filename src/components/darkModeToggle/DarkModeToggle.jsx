import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(userPrefersDark);
    document.documentElement.classList.toggle("dark", userPrefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition fixed bottom-4 right-4 z-10"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
