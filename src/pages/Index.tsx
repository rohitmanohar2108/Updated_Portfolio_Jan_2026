import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import CodingProgress from "@/components/CodingProgress";
import { HeroSection } from "@/components/ui/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useCallback, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import Preloader from "@/components/Preloader";
import DrawPath from "@/components/DrawPath";
import FollowPath from "@/components/FollowPath";
import SpiralTimeline from "@/components/SpiralTimeline";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useLenis();

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl patterned-border">
        <div className="relative z-10 inset-0 dotted-bg opacity-30" />
        {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}

        <div
          className={`transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <Header />
        <main>
          <Hero />

          <CodingProgress />
          <FollowPath />
          <SpiralTimeline />
          <ProjectsSection />
          <div className="border-t border-border mx-auto" />
          <SkillsSection />
          <motion.div
            className="absolute left-1/4 top-1 h-[600px] w-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(270 80% 65% / 0.12) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [-50, 50, -50],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="lineGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="hsl(38 92% 50% / 0.6)" />
                <stop offset="70%" stopColor="hsl(38 92% 50% / 0.6)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient
                id="lineGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="40%" stopColor="hsl(280 70% 50% / 0.3)" />
                <stop offset="60%" stopColor="hsl(280 70% 50% / 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Main flowing line */}
            <motion.path
              d="M-100 400 Q200 300 400 400 T800 350 T1200 400 T1600 380"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Secondary flowing line */}
            <motion.path
              d="M-100 450 Q300 380 500 450 T900 420 T1300 450 T1700 430"
              stroke="url(#lineGradient2)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Animated dots along the line */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.circle
                key={i}
                r="4"
                fill="hsl(38 92% 50%)"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "linear",
                }}
                style={{
                  offsetPath:
                    "path('M-100 400 Q200 300 400 400 T800 350 T1200 400 T1600 380')",
                }}
              />
            ))}

            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
