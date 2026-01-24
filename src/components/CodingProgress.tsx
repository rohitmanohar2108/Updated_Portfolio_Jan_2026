import { useState } from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { motion } from "framer-motion";
import { Code2Icon } from "lucide-react";
const CodingProgress = () => {
  const [hoveredDifficulty, setHoveredDifficulty] = useState<string | null>(
    null,
  );

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
  const difficulties = [
    {
      name: "Hard",
      solved: 62,
      total: 254,
      color: "hsl(0, 72%, 51%)",
      glowColor: "rgba(239, 68, 68, 0.6)",
    },
    {
      name: "Medium",
      solved: 92,
      total: 438,
      color: "hsl(45, 93%, 47%)",
      glowColor: "rgba(234, 179, 8, 0.6)",
    },
    {
      name: "Easy",
      solved: 85,
      total: 306,
      color: "hsl(142, 76%, 36%)",
      glowColor: "rgba(34, 197, 94, 0.6)",
    },
  ];

  const totalSolved = difficulties.reduce((acc, d) => acc + d.solved, 0);
  const totalProblems = difficulties.reduce((acc, d) => acc + d.total, 0);

  // SVG parameters - concentric circles
  const size = 180;
  const baseStrokeWidth = 10;
  const ringGap = 14;

  const isActive = (name: string) =>
    hoveredDifficulty === null || hoveredDifficulty === name;

  const getRingProps = (
    index: number,
    difficulty: (typeof difficulties)[0],
  ) => {
    const radius = 70 - index * ringGap;
    const circumference = 2 * Math.PI * radius;
    const percentage = difficulty.solved / difficulty.total;
    const strokeDasharray = `${percentage * circumference} ${circumference}`;
    const isHovered = hoveredDifficulty === difficulty.name;

    return {
      radius,
      circumference,
      strokeDasharray,
      isHovered,
    };
  };

  return (
    <section
      id="progress"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
      
    >
      <div className="max-w-6xl text-center">
        <div>
           <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Code2Icon size={14} className="text-accent" />
            <span className="text-xs font-mono text-muted-foreground">LeetCode Progress</span>
          </motion.div>
        </div>
        <div>
          <div className="flex justify-center">
            <CardSpotlight className="group  w-full sm:w-auto sm:max-w-none border border-border rounded-2xl p-6 bg-card  transition-all duration-300 md:hover:shadow-lg sm:p-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              {/* Circular Progress Rings */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative z-50 
 "
              >
                <svg
                  width={size}
                  height={size}
                  className="transform -rotate-90"
                >
                  <defs>
                    {difficulties.map((difficulty) => (
                      <filter
                        key={`glow-${difficulty.name}`}
                        id={`glow-${difficulty.name}`}
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    ))}
                  </defs>

                  {/* Background circles */}
                  {difficulties.map((difficulty, index) => {
                    const { radius } = getRingProps(index, difficulty);
                    return (
                      <circle
                        key={`bg-${difficulty.name}`}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={baseStrokeWidth}
                        className="text-muted/20"
                      />
                    );
                  })}

                  {/* Progress arcs */}
                  {difficulties.map((difficulty, index) => {
                    const { radius, strokeDasharray, isHovered } = getRingProps(
                      index,
                      difficulty,
                    );
                    return (
                      <circle
                        key={difficulty.name}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={difficulty.color}
                        strokeWidth={baseStrokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={strokeDasharray}
                        className="transition-all duration-300 cursor-pointer"
                        style={{
                          opacity: isActive(difficulty.name) ? 1 : 0.15,
                          filter: isHovered
                            ? `url(#glow-${difficulty.name})`
                            : "none",
                        }}
                        onMouseEnter={() =>
                          setHoveredDifficulty(difficulty.name)
                        }
                        onMouseLeave={() => setHoveredDifficulty(null)}
                      />
                    );
                  })}
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {totalSolved}
                  </span>
                  <div className="w-10 h-px bg-muted-foreground/40 my-1" />
                  <span className="text-lg text-muted-foreground">
                    {totalProblems}
                  </span>
                </div>
              </motion.div>

              {/* Legend */}
              <div className="flex flex-col gap-4 relative z-50 ">
                {[...difficulties].reverse().map((difficulty) => {
                  const isHovered = hoveredDifficulty === difficulty.name;
                  return (
                    <div
                      key={difficulty.name}
                      className="flex items-center gap-3 cursor-pointer transition-transform duration-300
  hover:scale-105 hover:-translate-y-2"
                      style={{
                        opacity: isActive(difficulty.name) ? 1 : 0.3,
                      }}
                      onMouseEnter={() => setHoveredDifficulty(difficulty.name)}
                      onMouseLeave={() => setHoveredDifficulty(null)}
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: difficulty.color,
                          transform: isHovered ? "scale(1.4)" : "scale(1)",
                          boxShadow: isHovered
                            ? `0 0 12px ${difficulty.glowColor}`
                            : "none",
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-medium hover:text-bold transition-colors duration-300"
                        style={{
                          color: isHovered ? difficulty.color : "inherit",
                        }}
                      >
                        {difficulty.name}
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground font-medium hover:text-bold transition-colors duration-300 "
                        style={{
                          color: isHovered ? difficulty.color : "inherit",
                        }}
                      >
                        {difficulty.solved}/{difficulty.total}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProgress;
