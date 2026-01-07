import { TechBadge } from "./TechBadge";

export const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <p className="text-lg mb-2 text-muted-foreground font-mono">Hey there,</p>
      <h1 className="text-3xl md:text-4xl font-mono font-bold mb-6">
        I'm{" "}
        <span className="link-underline cursor-pointer">Rohit Manohar</span>,
        I build cool stuff using{" "}
        <TechBadge tech="C/C++" className="mx-1" />,{" "}
        <TechBadge tech="Python" className="mx-1" />,{" "}
        <TechBadge tech="TypeScript" className="mx-1" /> and{" "}
        <TechBadge tech="JavaScript" className="mx-1" />
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        Computer Science undergrad at{" "}
        <span className="text-foreground font-medium link-underline cursor-pointer">
          NIT Karnataka
        </span>
        . Passionate about building scalable systems, real-time applications, and exploring ML/Deep Learning.
      </p>

      <div className="mb-8">
        <h2 className="font-mono font-semibold text-sm text-muted-foreground mb-4">
          What I'm into:
        </h2>
        <ul className="space-y-1.5 text-foreground">
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span> Full-Stack Web Development
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span> APIs && Databases
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span> Real-Time Systems & WebSockets
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span> Machine Learning & Computer Vision
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span> Distributed Systems
          </li>
        </ul>
      </div>

      <p className="text-muted-foreground">
        Over the past few years, I've built projects around{" "}
        <span className="text-foreground font-medium link-underline cursor-pointer">
          airline systems
        </span>
        ,{" "}
        <span className="text-foreground font-medium link-underline cursor-pointer">
          image super-resolution
        </span>
        , and{" "}
        <span className="text-foreground font-medium link-underline cursor-pointer">
          real-time chat
        </span>
        . I've also solved 400+ coding problems and earned certifications in cloud & AI.
      </p>
    </section>
  );
};
