import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 60 && !scrolled) {
        setScrolled(true);
      } else if (current < 20 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header className="sticky top-0 z-50 flex justify-center">
      <div
        className={`
          flex items-center justify-between gap-8
          px-6 py-4 w-full max-w-4xl
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]

          /* MOBILE: always normal */
          bg-transparent border-transparent shadow-none
          opacity-100 translate-y-0 scale-100

          /* DESKTOP: animated pill */
          ${
            scrolled
              ? `
                lg:mt-4
                lg:rounded-full
                lg:bg-background/70
                lg:backdrop-blur-md
                lg:border lg:border-border
                lg:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                lg:scale-[0.98]
              `
              : `
                lg:rounded-none
                lg:bg-transparent
                lg:border-transparent
                lg:shadow-none
              `
          }
        `}
      >
        {/* Logo */}
        <div className="font-mono font-bold text-lg">
          <span className="text-primary">rohit</span>
          <span className="text-muted-foreground">.dev</span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Skills
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
