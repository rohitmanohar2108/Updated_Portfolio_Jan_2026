import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface Milestone {
  year: string;
  title: string;
  description: string;
  skills: string[];
}

const milestones: Milestone[] = [
  {
    year: "2020",
    title: "Secondary Education",
    description:
      "School: Murtizapur Highschool Murtizapur",
    skills: ["10 Board: 91.80%", "Elementary Art Grading Examination: B+", "Securing second place at a Taluka-level science exhibition",],
  },
  {
    year: "2022",
    title: "Higher Secondary Education",
    description:
      "Collage: Dharampeth M.P. Deo Memorial Science College Nagpur",
    skills: ["Secured All India Rank (AIR) 4891 in JEE Main with a 99.46 percentile", "Received the Gold Medal of Excellence in the SOF National Science Olympiad."],
  },
  {
    year: "2022-2026",
    title: "Bachelor of Technology",
    description:
      "Computer Science and Engineering",
    skills: ["Team leader of OS simulator course project "],
  },
  {
    year: "2023-2026",
    title: "Executive Member",
    description:
      "TEDx NITK Surathkal Club",
    skills: ["Mentored 15+ students under a Summer mentorship program on Canva & illustration tools.", "Designed event posters and visual content, contributed to media strategies"],
  },
  {
    year: "Now",
    title: "Final Year • Career Focus",
    description:
      "Actively preparing for software engineering roles and interviews while building a strong core CS knowledge.",
    skills: ["DSA", "Full-Stack Dev", "AI/ML"],
  },
];

const SpiralTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate vertical spiral path
  const generateSpiralPath = () => {
    const points: string[] = [];
    const amplitude = 120; // Horizontal wave amplitude
    const verticalSpacing = 200; // Vertical space between peaks
    const totalHeight = (milestones.length - 1) * verticalSpacing + 200;

    points.push(`M 200 50`);

    for (let i = 0; i < milestones.length; i++) {
      const y = 100 + i * verticalSpacing;
      const isLeft = i % 2 === 0;
      const x = isLeft ? 200 - amplitude : 200 + amplitude;

      if (i === 0) {
        points.push(`C 200 80, ${x} ${y - 40}, ${x} ${y}`);
      } else {
        const prevX = (i - 1) % 2 === 0 ? 200 - amplitude : 200 + amplitude;
        const prevY = 100 + (i - 1) * verticalSpacing;
        points.push(`S ${x} ${y - 40}, ${x} ${y}`);
      }
    }

    return points.join(" ");
  };

  const spiralPath = generateSpiralPath();
  const totalHeight = (milestones.length - 1) * 200 + 250;

  // Calculate milestone positions on the spiral
  const getMilestonePosition = (index: number) => {
    const y = 100 + index * 200;
    const isLeft = index % 2 === 0;
    const x = isLeft ? 200 - 120 : 200 + 120;
    return { x, y, isLeft };
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pathRef.current || !dotRef.current || !glowRef.current) return;

      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      // Set up the path for drawing
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Draw path on scroll
      const drawTl = gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 0.5,
          onUpdate: (self) => {
            // Update active milestone based on scroll progress
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * milestones.length),
              milestones.length - 1,
            );
            setActiveIndex(newIndex);
          },
        },
      });

      // Animate dot along path
      gsap.to([dotRef.current, glowRef.current], {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 0.5,
        },
      });

      // Animate milestone cards on scroll
      milestones.forEach((_, index) => {
        const card = document.querySelector(`[data-milestone="${index}"]`);
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="My Journey"
      ref={sectionRef}
      className="hidden sm:block  relative bg-background py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest max-w-lg mx-auto">
             — scroll to explore —
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative" style={{ height: `${totalHeight}px` }}>
          {/* SVG Spiral */}
          <svg
            ref={svgRef}
            viewBox={`0 0 400 ${totalHeight}`}
            className="absolute left-1/2 -translate-x-1/2 w-full max-w-md h-full"
            fill="none"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <linearGradient
                id="spiralGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="hsl(24, 95%, 53%)" />
                <stop offset="50%" stopColor="hsl(35, 92%, 50%)" />
                <stop offset="100%" stopColor="hsl(24, 95%, 53%)" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id="softGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                </feMerge>
              </filter>
            </defs>

            {/* Background path (dashed) */}
            <path
              d={spiralPath}
              stroke="hsl(0, 0%, 20%)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="6 6"
              opacity="0.4"
            />

            {/* Main animated path */}
            <path
              ref={pathRef}
              d={spiralPath}
              stroke="url(#spiralGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Milestone markers */}
            {milestones.map((milestone, index) => {
              const pos = getMilestonePosition(index);
              const isActive = activeIndex >= index;
              const isHovered = hoveredIndex === index;

              return (
                <g
                  key={index}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Hit area */}
                  <circle cx={pos.x} cy={pos.y} r="25" fill="transparent" />

                  {/* Outer ring */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="18"
                    fill="transparent"
                    stroke={isActive ? "hsl(24, 95%, 53%)" : "hsl(0, 0%, 25%)"}
                    strokeWidth="2"
                    opacity={isHovered ? 0.6 : 0.3}
                    className="transition-all duration-300"
                  />

                  {/* Main marker */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 12 : 10}
                    fill={isActive ? "hsl(24, 95%, 53%)" : "hsl(0, 0%, 15%)"}
                    stroke={isActive ? "hsl(35, 92%, 50%)" : "hsl(0, 0%, 30%)"}
                    strokeWidth="3"
                    className="transition-all duration-300"
                    filter={isActive ? "url(#glow)" : undefined}
                  />

                  {/* Inner dot */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill={isActive ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 40%)"}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}

            {/* Animated glow circle */}
            <circle
              ref={glowRef}
              r="25"
              fill="hsl(24, 95%, 53%)"
              opacity="0.3"
              filter="url(#softGlow)"
            />

            {/* Animated dot */}
            <circle
              ref={dotRef}
              r="8"
              fill="hsl(24, 95%, 53%)"
              filter="url(#glow)"
            />
          </svg>

          {/* Milestone cards */}
          {milestones.map((milestone, index) => {
            const pos = getMilestonePosition(index);
            const isActive = activeIndex >= index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                data-milestone={index}
                className={`absolute w-[calc(50%-40px)] transition-all duration-500 ${
                  pos.isLeft ? "left-0 text-left" : "right-0 text-left pl-4"
                }`}
                style={{ top: `${pos.y - 40}px` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`card-elevated p-5 transition-all duration-300 ${
                    isHovered || isActive
                      ? "border rounded-br-none rounded-tl-none rounded-tr-3xl rounded-bl-3xl shadow-lg"
                      : "opacity-60"
                  } ${isHovered ? "" : ""}`}
                >
                  {/* Year badge */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 transition-all duration-300 ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {milestone.year}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {milestone.title}
                  </h3>

                  {/* Description - show on hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground text-sm mb-3">
                      {milestone.description}
                    </p>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-1.5 justify-start`}>
                      {milestone.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpiralTimeline;
