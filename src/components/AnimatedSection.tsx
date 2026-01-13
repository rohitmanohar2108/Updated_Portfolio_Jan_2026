import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const getAnimationClass = (animation: AnimationType) => {
  const animations: Record<AnimationType, string> = {
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'scale-up': 'animate-scale-up',
    'blur-in': 'animate-blur-in'
  };
  return animations[animation];
};

const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? getAnimationClass(animation) : 'opacity-0',
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
