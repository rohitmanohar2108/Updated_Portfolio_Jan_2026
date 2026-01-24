import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // default DARK

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // first visit → dark
    const shouldBeDark = savedTheme ? savedTheme === "dark" : true;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    localStorage.setItem("theme", shouldBeDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border border-border bg-card hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-accent" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
};
