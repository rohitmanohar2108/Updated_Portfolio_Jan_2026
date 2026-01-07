import { TechBadge } from "./TechBadge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  type: "Project" | "Paper Implementation";
  period: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  type,
  period,
}: ProjectCardProps) => {
  return (
    <div className="group border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-muted-foreground">[ {type} ]</span>
        <span className="text-xs font-mono text-muted-foreground">{period}</span>
      </div>
      
      <h3 className="font-mono font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>
      
      <div className="flex gap-3">
        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          <Github className="h-4 w-4" />
          View Code →
        </button>
      </div>
    </div>
  );
};
