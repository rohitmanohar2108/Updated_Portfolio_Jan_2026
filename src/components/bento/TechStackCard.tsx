import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const technologies = [
  { name: "React", position: { top: "0%", left: "10%" } },
  { name: "TypeScript", position: { top: "5%", right: "5%" } },
  { name: "Node.js", position: { top: "35%", left: "0%" } },
  { name: "Python", position: { top: "45%", right: "0%" } },
  { name: "Tailwind", position: { bottom: "15%", left: "15%" } },
];

export function TechStackCard() {
  return (
    <motion.div
      className="bento-card row-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-foreground">
        Speaks Your Language
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Expertise in React, TypeScript, Python, Node.js and more.
      </p>

      {/* Floating tech badges */}
      <div className="relative h-48 grid-bg rounded-lg overflow-hidden">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute px-3 py-1.5 bg-card border border-border rounded text-xs font-medium shadow-sm"
            style={tech.position}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -5, 0],
            }}
            transition={{ 
              delay: 0.5 + index * 0.1,
              y: {
                duration: 2 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.1 }}
          >
            {tech.name}
          </motion.div>
        ))}
        
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </div>
    </motion.div>
  );
}
