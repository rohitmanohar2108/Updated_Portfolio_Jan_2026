import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HeroOrbs from "./HeroOrbs";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Rohit Manohar. Built with React,
          TypeScript & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:manoharrohit372@gmail.com"
            className="p-2 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/rohitmanohar2108"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/50 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
