import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "AirWise – Airline Reservation System",
    description:
      "A scalable full-stack airline reservation system enabling secure flight search, booking management, and transaction history tracking. Features 3NF MySQL database, JWT authentication with bcrypt password hashing.",
    technologies: ["MySQL", "React.js", "Node.js", "Express.js"],
    type: "Project" as const,
    period: "Feb 2024 – Mar 2024",
    githubUrl: "https://github.com/rohitmanohar2108/Airline_Reservation_System"
  },
  {
    title: "Image Super Resolution",
    description:
      "Web application using Flask with integrated pipeline for low-light image enhancement and super-resolution. Built CNN-based self-supervised model using Zero-DCE and GANs.",
    technologies: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    type: "Project" as const,
    period: "Feb 2025 – Mar 2025",
    githubUrl: "https://github.com/rohitmanohar2108/image-resolution"
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Scalable real-time chat app with Node.js, TypeScript, and Next.js using Socket.IO in a Turborepo monorepo. Achieved sub-100ms message latency with Redis Pub/Sub and PostgreSQL on Aiven Cloud.",
    technologies: ["Node.js", "Socket.IO", "Redis", "PostgreSQL", "Next.js"],
    type: "Project" as const,
    period: "Dec 2025 – Present",
    githubUrl: "https://github.com/rohitmanohar2108/Real_Time_Chat_Application"
  },
  {
    title: "Real-Time Crypto Execution Cost Simulator",
    description:
      "Low-latency execution cost simulator consuming OKX L2 orderbook streams at 5–20K msgs/sec with ~1ms latency. Modeled slippage using Quantile Regression and Almgren–Chriss model.",
    technologies: ["Python", "WebSockets", "Asyncio", "scikit-learn"],
    type: "Project" as const,
    period: "April 2025",
    githubUrl: "https://github.com/rohitmanohar2108/Crypto-Trade-Simulator"
  },
];

export const Projects = () => {
  return (
    <section className="py-16 border-t border-border">
      <h2 className="font-mono font-bold text-2xl md:text-3xl mb-8">
        Projects & Implementations
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div>
          <p className="text-center text-muted-foreground mt-8 font-mono">
            ...and many more on{" "}
            <a
              href="https://github.com/rohitmanohar2108?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary link-underline"
            >
              GitHub
            </a>
          </p>
        </div>
    </section>
  );
};
