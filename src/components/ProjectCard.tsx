import { TechBadge } from "./TechBadge";

import { FaGithub } from "react-icons/fa";
import { CardSpotlight } from "./ui/card-spotlight";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  type: "Project" | "Paper Implementation";
  period: string;
  githubUrl: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  type,
  period,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <CardSpotlight className=" group border border-border rounded-lg p-6 bg-card transition-all duration-300hover:shadow-lg">
      <div className="">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted-foreground relative z-50">
            [ {type} ]
          </span>
          <span className="text-xs font-mono text-muted-foreground relative z-50">
            {period}
          </span>
        </div>

        <h3 className="font-mono font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors relative z-50">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 relative z-50">
          {description}
        </p>

        

        <div className="flex flex-wrap gap-2 mb-4 relative z-50">
          {technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex gap-3 relative z-50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-r-2 border-l-2 border-b-2 border-border shadow-sm shadow-slate-700 dark:shadow-slate-300  gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            View Code →
          </a>
        </div>
      </div>
    </CardSpotlight>
  );
};
