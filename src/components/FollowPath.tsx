import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const FollowPath = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !pathRef.current || !followerRef.current) return;

    // Draw the path
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    // Follow the path
    gsap.to(followerRef.current, {
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces",
    },
    { icon: "💻", title: "Development", desc: "Clean, performant code" },
    { icon: "✨", title: "Animation", desc: "Smooth, engaging motion" },
    { icon: "🚀", title: "Optimization", desc: "Fast, accessible products" },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="hidden sm:block py-18 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            <span className="text-gradient">Services</span>
          </h2>
          <span className="text-primary text-sm uppercase tracking-widest">
            What I am good at
          </span>
        </div>

        {/* SVG Container */}
        <div className="relative h-[600px] md:h-[500px]">
          <svg
            viewBox="0 0 1000 400"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              ref={pathRef}
              d="M50,200 Q250,50 500,200 T950,200"
              fill="none"
              stroke="hsl(38, 90%, 55%)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          {/* Follower Element */}
          <div
            ref={followerRef}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          >
            {/* Lens */}
            <div className="relative w-16 h-16 rounded-full border-4 border-accent bg-orange-200/10 backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.6)] flex items-center justify-center">
              {/* Lens highlight */}
              <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-white/30 " />

              {/* Handle */}
              <div className="absolute w-3 h-20 bg-accent rounded-full origin-top -rotate-45 top-full left-11 -translate-y-2 shadow-md overflow-hidden">
                {/* highlight line */}
                <div className="absolute top-1 left-1 w-[4px] h-[90%] bg-white/70 dark:bg-black/70 rounded-full" />
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-6 items-center ">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-hover p-6 rounded-xl border rounded-br-none rounded-tl-none rounded-tr-[10%] rounded-bl-[10%]text-center bg-card"
                style={{
                  marginTop: index % 2 === 0 ? "-80px" : "80px",
                }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowPath;
