import { motion } from "framer-motion";
import { TerminalCard } from "./bento/TerminalCard";
import { FeaturesCard } from "./bento/FeaturesCard";
import { IsometricCard } from "./bento/IsometricCard";
import { TechStackCard } from "./bento/TechStackCard";
import { FreeCard } from "./bento/FreeCard";
import { IntegratedCard } from "./bento/IntegratedCard";

export function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Row 1 - 3 columns on desktop */}
     
      
      <div className="flex flex-col gap-4">
        <FeaturesCard />
        <IsometricCard />
      </div>

      <TechStackCard />

      {/* Row 2 - spans across */}
      <FreeCard />
      
      <div className="lg:col-span-2">
        <IntegratedCard />
      </div>
    </motion.div>
  );
}
