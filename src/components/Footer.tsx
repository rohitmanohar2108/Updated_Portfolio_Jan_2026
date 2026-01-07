import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © 2025 Rohit Manohar. Built with React & Tailwind.
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="mailto:rohit@example.com"
            className="p-2 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
