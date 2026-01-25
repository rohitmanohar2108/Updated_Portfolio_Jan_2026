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
import { BentoGrid } from "@/components/BentoGrid";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-4xl patterned-border">
        <div className="relative z-10 inset-0 dotted-bg opacity-30" />
        <Header />
        <main>
          <Hero />
          <CodingProgress />
          <ProjectsSection />
          <div className="border-t border-border mx-auto" />
          <SkillsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
