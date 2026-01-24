import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="py-6 flex items-center justify-between">
      <div className="font-mono font-bold text-lg">
        <span className="text-primary">rohit</span>
        <span className="text-muted-foreground">.dev</span>
      </div>
      
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
    </header>
  );
};
