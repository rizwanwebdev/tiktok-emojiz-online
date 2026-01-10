"use client";

import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(true);

  // Sync theme with <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className={`max-[350px]:hidden tdnn cursor-pointer ${
        !isDark ? "" : "day"
      }`}
    >
      <span className={`moon ${!isDark ? "" : "sun"}`} />
    </button>
  );
};

export default ThemeToggleButton;
