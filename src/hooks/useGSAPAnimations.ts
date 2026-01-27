import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useRevealAnimation = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.reveal-up');
    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef]);
};

export const useStaggerAnimation = (containerRef: RefObject<HTMLElement>, selector: string) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, selector]);
};

export const useDrawPath = (pathRef: RefObject<SVGPathElement>) => {
  useEffect(() => {
    if (!pathRef.current) return;

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
        trigger: path,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathRef]);
};

export const useHorizontalScroll = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollContainer = container.querySelector('.horizontal-scroll-section');
    
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth + 200;

    gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef]);
};

export const useImageSequence = (
  containerRef: RefObject<HTMLElement>,
  imageRef: RefObject<HTMLImageElement>,
  images: string[]
) => {
  const frameIndexRef = useRef({ current: 0 });

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || images.length === 0) return;

    const updateImage = () => {
      if (imageRef.current && images[frameIndexRef.current.current]) {
        imageRef.current.src = images[frameIndexRef.current.current];
      }
    };

    gsap.to(frameIndexRef.current, {
      current: images.length - 1,
      snap: 'current',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: updateImage,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, imageRef, images]);
};

export const useZoomBackground = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const image = containerRef.current.querySelector('img');
    
    if (!image) return;

    gsap.fromTo(
      image,
      { scale: 1 },
      {
        scale: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef]);
};

export const useFollowPath = (
  elementRef: RefObject<HTMLElement>,
  pathRef: RefObject<SVGPathElement>
) => {
  useEffect(() => {
    if (!elementRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const element = elementRef.current;

    gsap.to(element, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: 'none',
      scrollTrigger: {
        trigger: path.closest('svg'),
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [elementRef, pathRef]);
};
