import { motion } from "framer-motion";

export function IntegratedCard() {
  return (
    <motion.div
      className="bento-card flex flex-col lg:flex-row gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex-1">
        <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-foreground">
          Integrated
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Experience with AWS, Vercel, Supabase, and more. Integrated with modern tools and frameworks for seamless development workflow.
        </p>
      </div>

      {/* Puzzle piece illustration */}
      <div className="flex-shrink-0 flex items-center justify-center dotted-bg rounded-lg p-4">
        <motion.svg
          viewBox="0 0 80 80"
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Puzzle piece */}
          <motion.path
            d="M20 30 L30 30 L30 25 C30 20 40 20 40 25 L40 30 L50 30 L50 40 L55 40 C60 40 60 50 55 50 L50 50 L50 60 L20 60 L20 50 L15 50 C10 50 10 40 15 40 L20 40 Z"
            className="text-foreground/40"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          {/* Arrow */}
          <motion.path
            d="M55 25 L70 25 M65 20 L70 25 L65 30"
            className="text-foreground/60"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
