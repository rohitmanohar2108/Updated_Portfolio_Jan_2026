import { motion } from "framer-motion";

export function IsometricCard() {
  return (
    <motion.div
      className="bento-card flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex-1 flex items-center justify-center py-4">
        <div className="relative">
          {/* Isometric layers */}
          <motion.div
            className="w-32 h-20 border-2 border-foreground/20 bg-card transform rotate-45 skew-x-12"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-4 left-2 w-32 h-20 border-2 border-foreground/30 bg-card transform rotate-45 skew-x-12"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500" />
          </motion.div>
          <motion.div
            className="absolute top-8 left-4 w-32 h-20 border-2 border-foreground/40 bg-card transform rotate-45 skew-x-12 grid-bg"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="absolute top-6 left-8 w-2 h-2 rounded-full bg-accent" />
            <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-accent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
