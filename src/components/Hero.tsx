import { useTypewriter } from "@/hooks/useTypewriter";
import AnimatedSection from "./AnimatedSection";
import { TechBadge } from "./TechBadge";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import { Tooltip } from "@/components/ui/tooltip-card";


export const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <p className="text-lg mb-2 text-muted-foreground font-mono">Hey there,</p>
      <h1 className="text-3xl md:text-4xl font-mono font-bold mb-6">
        I'm{" "}
        <Tooltip
          containerClassName="link-underline cursor-pointer"
          content={<TooltipCard2 />}
        >
          Rohit Manohar
        </Tooltip>
        , I build cool stuff using <TechBadge tech="C/C++" className="mx-1" />,{" "}
        <TechBadge tech="Node.js" className="mx-1" />,{" "}
        <TechBadge tech="TypeScript" className="mx-1" />,{" "}
        <TechBadge tech="JavaScript" className="mx-1" /> and{" "}
        <TechBadge tech="socket.io" className="mx-1" />
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
        Computer Science undergrad at{" "}
        <Tooltip
          containerClassName="text-foreground font-medium link-underline cursor-pointer"
          content={<TooltipCard />}
        >
          NIT Karnataka
        </Tooltip>
        . Passionate about building scalable systems, real-time applications,
        and exploring ML/Deep Learning.
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
            <span className="text-primary">•</span> Real-Time Systems &
            WebSockets
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
        . I've also solved 400+ coding problems and earned certifications in
        cloud & AI.
      </p>

      <AnimatedSection className="pt-32 md:pt-40 lg:pt-48 pb-6 md:pb-16 lg:pb-24 px-4 md:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-10 inline-flex flex-col items-center">
            <div className="flex items-center">
              <span
                className="border border-black dark:border-white px-3 md:px-6 py-2 md:py-4 animate-fade-in transition-transform duration-300
  hover:scale-105 hover:-translate-y-2
  hover:shadow-2xl hover:shadow-black ease-out
    transform-gpu"
              >
                Engineer
              </span>
              <span
                className="bg-[#dcff6b] border border-black dark:border-white dark:text-black px-3 md:px-6 py-2 md:py-4 rounded-[20px] md:rounded-[40px] -ml-px animate-fade-in transition-transform duration-300
  hover:scale-105 hover:-translate-y-2
  hover:shadow-2xl hover:shadow-black ease-out
    transform-gpu"
              >
                design
              </span>
            </div>
            <div className="flex items-center -mt-px">
              <span
                className="border border-black dark:border-white px-3 md:px-6 py-2 md:py-4 animate-fade-in transition-transform duration-300
  hover:scale-105 hover:-translate-y-2
  hover:shadow-2xl hover:shadow-black ease-out
    transform-gpu"
              >
                code
              </span>
              <span
                className="border border-l-0 border-black dark:border-white px-3 md:px-6 py-2 md:py-4 animate-fade-in transition-transform duration-300
  hover:scale-105 hover:-translate-y-2
  hover:shadow-2xl hover:shadow-black ease-out
    transform-gpu"
              >
                now
              </span>
            </div>
          </h1>
          <div>
            <TextGenerateEffectDemo />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const TooltipCard = () => {
  return (
    <div>
      <img
        src="https://www.nitk.ac.in/design-system/campus-images/beach.jpg"
        alt="NITK"
        className=" aspect-auto w-full rounded-sm"
      />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">NIT Karnataka</p>
        <p className="mt-1 text-xs text-muted-foreground text-neutral-600 dark:text-neutral-400">
          National Institute of Technology Karnataka, Surathkal is located in
          Mangalore City, Karnataka State, India.
        </p>
      </div>
    </div>
  );
};

const TooltipCard2 = () => {
  return (
    <div>
      <img
        src="https://imgcdn.stablediffusionweb.com/2024/3/13/c191e3ea-9659-4ea4-b008-f20320033311.jpg"
        alt="Rohit"
        className="aspect-square w-full rounded-sm"
      />
    </div>
  );
};
