import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DrawPath = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current || !sectionRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Reveal text
    gsap.fromTo(
      '.path-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden hidden sm:block"
    >
      <div className="container mx-auto px-6 relative">
        {/* SVG Path */}
        <svg
          viewBox="0 0 1200 400"
          className="w-full h-auto absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={pathRef}
            d="M0,200 C200,50 400,350 600,200 C800,50 1000,350 1200,200"
            fill="none"
            stroke="hsl(38, 90%, 55%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <span className="path-text text-primary text-sm uppercase tracking-widest block mb-4">
            My Approach
          </span>
          <h2 className="path-text text-4xl md:text-6xl font-bold mb-8">
            Code Meets <span className="text-gradient">Creativity</span>
          </h2>
          <p className="path-text text-muted-foreground text-lg md:text-base leading-relaxed">
            I believe great digital products are born at the intersection of technical
            excellence and creative vision. Every project is an opportunity to push
            boundaries and create something truly memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrawPath;
