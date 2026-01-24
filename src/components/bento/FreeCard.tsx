import { motion } from "framer-motion";

export function FreeCard() {
  return (
    <motion.div
      className="bento-card flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h3 className="text-sm font-semibold tracking-widest uppercase mb-2 text-foreground">
        Open to Work
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Available for freelance and full-time opportunities.
      </p>

      {/* Dollar sign illustration */}
      <div className="flex-1 flex items-center justify-center dotted-bg rounded-lg">
        <motion.div
          className="relative"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 100 80"
            className="w-32 h-24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Paper shape */}
            <motion.path
              d="M20 20 L80 20 L80 60 L20 60 Z"
              className="text-foreground/30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            {/* Dollar symbol */}
            <motion.text
              x="50"
              y="45"
              textAnchor="middle"
              className="text-foreground fill-current"
              fontSize="18"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              $0.00
            </motion.text>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
