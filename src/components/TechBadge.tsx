import { cn } from "@/lib/utils";

type TechType = "js" | "ts" | "python" | "react" | "node" | "db" | "cloud" | "default";

const techColors: Record<TechType, string> = {
  js: "bg-badge-js text-accent-foreground",
  ts: "bg-badge-ts text-primary-foreground",
  python: "bg-badge-python text-primary-foreground",
  react: "bg-badge-react text-accent-foreground",
  node: "bg-badge-node text-primary-foreground",
  db: "bg-badge-db text-primary-foreground",
  cloud: "bg-badge-cloud text-primary-foreground",
  default: "bg-secondary text-secondary-foreground",
};

const techMapping: Record<string, TechType> = {
  javascript: "js",
  js: "js",
  typescript: "ts",
  ts: "ts",
  python: "python",
  tensorflow: "python",
  keras: "python",
  flask: "python",
  react: "react",
  "react.js": "react",
  node: "node",
  "node.js": "node",
  express: "node",
  "express.js": "node",
  "socket.io": "node",
  mysql: "db",
  postgresql: "db",
  redis: "db",
  sql: "db",
  aiven: "cloud",
  "aiven cloud": "cloud",
  websockets: "cloud",
  asyncio: "python",
  "scikit-learn": "python",
  "deep learning": "python",
  "next.js": "react",
};

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  const techLower = tech.toLowerCase();
  const techType = techMapping[techLower] || "default";
  const colorClass = techColors[techType];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium rounded-sm",
        colorClass,
        className
      )}
    >
      {tech}
    </span>
  );
};
