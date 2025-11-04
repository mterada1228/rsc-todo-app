"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      {theme == "light" ? "🌙 ダークモード" : "☀️ ライトモード"}
    </button>
  );
}
