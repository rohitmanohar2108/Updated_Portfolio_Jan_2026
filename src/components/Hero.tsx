import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { TechBadge } from "./TechBadge";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import { Tooltip } from "@/components/ui/tooltip-card";
import VideoBackground from "./VideoBackground";
import {
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import HeroOrbs from "./HeroOrbs";
import { useEffect, useRef } from "react";
import DrawPath from "./DrawPath";
import Footer3D from "./Footer3D";


export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return;

    const tl = gsap.timeline({ delay: 2.5 });

    // Parallax effect on scroll
    gsap.to(".hero-content", {
      yPercent: 30,
      opacity: 0.3,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="py-16 md:py-24">
      <p className="text-lg mb-2 text-muted-foreground font-mono">Hey there,</p>

      <h1 className="text-3xl md:text-4xl font-mono font-bold mt-3 variable-weight">
        I'm{" "}
        <Tooltip
          containerClassName="link-underline cursor-pointer"
          content={<TooltipCard2 />}
        >
          Rohit Manohar
        </Tooltip>
        , I build cool stuff using{" "}
        <span className="inline-flex items-center gap-1 mx-1 text-xs text-indigo-400">
          <SiCplusplus className="text-2xl" /> C/C++
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1 mx-1 text-xs text-green-500">
          <SiNodedotjs className="text-2xl" /> Node.js
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1 mx-1 text-xs text-blue-500">
          <SiTypescript className="text-2xl" /> TypeScript
        </span>
        ,{" "}
        <span className="inline-flex items-center gap-1 mx-1 text-xs text-yellow-400">
          <SiJavascript className="text-2xl" /> JavaScript
        </span>{" "}
        and{" "}
        <span className="inline-flex items-center gap-1 mx-1 text-xs text-black dark:text-slate-100">
          <SiSocketdotio className="text-2xl" /> Socket.IO
        </span>
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-lg text-muted-foreground mb-8 max-w-2xl"
      >
        Computer Science undergrad at{" "}
        <Tooltip
          containerClassName="text-foreground font-medium link-underline cursor-pointer variable-weight"
          content={<TooltipCard />}
        >
          NIT Karnataka
        </Tooltip>
        . Passionate about building scalable systems, real-time applications,
        and exploring ML/Deep Learning.
      </motion.div>

      <div className="mb-8">
        <h2 className="font-mono font-semibold text-sm text-muted-foreground  mb-4">
          What I'm into:
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-1.5 text-foreground"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground"
      >
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
      </motion.div>
      <Footer3D />
      <DrawPath />
      
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
