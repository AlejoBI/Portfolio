import { useState, useLayoutEffect, useCallback } from "react";

const useTheme = () => {
  const [dark, setDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = useCallback(() => setDark((prev) => !prev), []);

  return { dark, toggle };
};

export default useTheme;
