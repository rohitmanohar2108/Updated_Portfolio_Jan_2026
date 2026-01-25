import { motion } from "framer-motion";

interface OrbData {
  id: number;
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
  delay: number;
  intensity: "normal" | "bright";
}

const orbs: OrbData[] = [
  { id: 1, x: 55, y: 8, size: "lg", delay: 0, intensity: "bright" },
  { id: 2, x: 68, y: 5, size: "md", delay: 0.3, intensity: "normal" },
  { id: 3, x: 80, y: 12, size: "lg", delay: 0.5, intensity: "bright" },
  { id: 4, x: 92, y: 8, size: "md", delay: 0.2, intensity: "normal" },
  { id: 5, x: 62, y: 22, size: "md", delay: 0.7, intensity: "normal" },
  { id: 6, x: 75, y: 28, size: "lg", delay: 0.4, intensity: "bright" },
  { id: 7, x: 88, y: 25, size: "sm", delay: 0.9, intensity: "normal" },
  { id: 8, x: 95, y: 35, size: "md", delay: 0.6, intensity: "normal" },
  { id: 9, x: 58, y: 38, size: "sm", delay: 1.0, intensity: "normal" },
  { id: 10, x: 70, y: 45, size: "lg", delay: 0.8, intensity: "bright" },
  { id: 11, x: 82, y: 42, size: "md", delay: 1.1, intensity: "normal" },
  { id: 12, x: 93, y: 52, size: "lg", delay: 0.3, intensity: "bright" },
  { id: 13, x: 65, y: 55, size: "md", delay: 1.2, intensity: "normal" },
  { id: 14, x: 78, y: 60, size: "sm", delay: 0.5, intensity: "normal" },
  { id: 15, x: 52, y: 28, size: "sm", delay: 0.9, intensity: "normal" },
];

// Define connections between orbs by their IDs
const connections: [number, number][] = [
  [1, 2], [2, 3], [3, 4],
  [1, 5], [2, 5], [5, 6], [3, 6], [6, 7], [4, 7], [7, 8],
  [5, 9], [9, 10], [6, 10], [10, 11], [7, 11], [11, 12], [8, 12],
  [9, 13], [10, 13], [13, 14], [11, 14], [12, 14],
  [15, 5], [15, 9], [15, 1],
];

// Create lookup for orb positions by ID
const orbPositions = orbs.reduce((acc, orb) => {
  acc[orb.id] = { x: orb.x, y: orb.y };
  return acc;
}, {} as Record<number, { x: number; y: number }>);

const HeroOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none items-center justify-center">
      {/* Ambient glow background */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 55% / 0.2) 0%, hsl(45 100% 55% / 0.05) 40%, transparent 70%)",
          right: "-15%",
          top: "-20%",
        }}
      />

      {/* SVG layer for lines AND orbs to ensure proper overlap */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(45 100% 55% / 0.1)" />
            <stop offset="50%" stopColor="hsl(45 100% 55% / 0.4)" />
            <stop offset="100%" stopColor="hsl(45 100% 55% / 0.1)" />
          </linearGradient>
          
          {/* Glow filter for orbs */}
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="glowIntense" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Radial gradient for orbs */}
          <radialGradient id="orbGradient">
            <stop offset="0%" stopColor="hsl(0 0% 100%)" />
            <stop offset="30%" stopColor="hsl(45 100% 70%)" />
            <stop offset="70%" stopColor="hsl(45 100% 55%)" />
            <stop offset="100%" stopColor="hsl(45 100% 45% / 0)" />
          </radialGradient>
          
          <radialGradient id="orbGradientBright">
            <stop offset="0%" stopColor="hsl(0 0% 100%)" />
            <stop offset="20%" stopColor="hsl(45 100% 80%)" />
            <stop offset="50%" stopColor="hsl(45 100% 60%)" />
            <stop offset="100%" stopColor="hsl(45 100% 50% / 0)" />
          </radialGradient>
        </defs>
        
        {/* Draw lines first (behind orbs) */}
        {connections.map(([fromId, toId], i) => {
          const from = orbPositions[fromId];
          const to = orbPositions[toId];
          if (!from || !to) return null;
          
          return (
            <motion.line
              key={`line-${fromId}-${toId}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3 + i * 0.05,
                ease: "easeOut",
              }}
            />
          );
        })}
        
        {/* Draw orbs on top of lines */}
        {orbs.map((orb) => {
          const sizes = { sm: 6, md: 8, lg: 10 };
          const radius = sizes[orb.size];
          const filterType = orb.intensity === "bright" ? "url(#glowIntense)" : "url(#glow)";
          const gradientType = orb.intensity === "bright" ? "url(#orbGradientBright)" : "url(#orbGradient)";
          
          return (
            <motion.g key={`orb-${orb.id}`}>
              {/* Outer glow circle */}
              <motion.circle
                cx={`${orb.x}%`}
                cy={`${orb.y}%`}
                r={radius * 2.5}
                fill={gradientType}
                filter={filterType}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: orb.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Core bright circle */}
              <motion.circle
                cx={`${orb.x}%`}
                cy={`${orb.y}%`}
                r={radius * 0.5}
                fill="hsl(45 100% 85%)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: orb.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Secondary ambient glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 60% / 0.15) 0%, transparent 60%)",
          right: "20%",
          top: "30%",
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default HeroOrbs;
