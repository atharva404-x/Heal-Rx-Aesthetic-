/* eslint-disable react-refresh/only-export-components */
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

// ============================================================================
// MOTION TOKENS & EASING SYSTEM
// ============================================================================

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
export const EDITORIAL_EASE = [0.25, 1, 0.5, 1] as const;
export const SOFT_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATIONS = {
  micro: 0.2,
  ui: 0.35,
  content: 0.6,
  editorial: 0.95,
  cinematic: 1.4,
} as const;

// Helper hook for reduced motion
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// ============================================================================
// 1. FADE IN & DIRECTIONAL REVEAL
// ============================================================================

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  viewportOnce?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = MOTION_DURATIONS.content,
  yOffset,
  xOffset,
  direction = 'up',
  className = '',
  viewportOnce = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: viewportOnce, margin: '-40px 0px' });
  const reducedMotion = usePrefersReducedMotion();

  let initialX = 0;
  let initialY = 0;

  if (!reducedMotion) {
    if (direction === 'up') initialY = yOffset ?? 24;
    if (direction === 'down') initialY = -(yOffset ?? 24);
    if (direction === 'left') initialX = xOffset ?? 28;
    if (direction === 'right') initialX = -(xOffset ?? 28);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{
        duration: reducedMotion ? 0.01 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 2. EDITORIAL TEXT REVEAL (OVERFLOW MASK + LINE SLIDE)
// ============================================================================

interface TextRevealProps {
  children: string | React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  duration = MOTION_DURATIONS.editorial,
  className = '',
  as = 'div',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px 0px' });
  const reducedMotion = usePrefersReducedMotion();

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className="overflow-hidden inline-block leading-tight">
      <MotionComponent
        initial={{ y: '108%', opacity: 0.15 }}
        animate={isInView ? { y: '0%', opacity: 1 } : { y: '108%', opacity: 0.15 }}
        transition={{
          duration,
          delay,
          ease: LUXURY_EASE,
        }}
        className={className}
      >
        {children}
      </MotionComponent>
    </div>
  );
};

// ============================================================================
// 3. REUSABLE IMAGE REVEAL (MASK INSET + SCALE SETTLE)
// ============================================================================

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'center';
  overlay?: React.ReactNode;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = 'aspect-[4/5]',
  className = '',
  imageClassName = '',
  delay = 0.1,
  duration = MOTION_DURATIONS.editorial,
  direction = 'up',
  overlay,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const reducedMotion = usePrefersReducedMotion();

  // Directional clip-paths for editorial variety
  const getClipPath = (opened: boolean) => {
    if (opened || reducedMotion) return 'inset(0% 0% 0% 0%)';
    switch (direction) {
      case 'down':
        return 'inset(0% 0% 100% 0%)';
      case 'left':
        return 'inset(0% 100% 0% 0%)';
      case 'right':
        return 'inset(0% 0% 0% 100%)';
      case 'center':
        return 'inset(18% 18% 18% 18%)';
      case 'up':
      default:
        return 'inset(100% 0% 0% 0%)';
    }
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl ${aspectRatio} ${className}`}
    >
      <motion.div
        initial={{ clipPath: getClipPath(false) }}
        animate={{ clipPath: getClipPath(isInView) }}
        transition={{
          duration: reducedMotion ? 0.01 : duration,
          delay: reducedMotion ? 0 : delay,
          ease: LUXURY_EASE,
        }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: reducedMotion ? 1 : 1.06 }}
          animate={{ scale: isInView ? 1 : 1.06 }}
          transition={{
            duration: reducedMotion ? 0.01 : duration + 0.35,
            delay: reducedMotion ? 0 : delay,
            ease: LUXURY_EASE,
          }}
          className={`w-full h-full object-cover ${imageClassName}`}
          loading="lazy"
        />
        {overlay}
      </motion.div>
    </div>
  );
};

// ============================================================================
// 4. REUSABLE IMAGE PARALLAX SYSTEM
// ============================================================================

interface ParallaxImageProps {
  src: string;
  alt: string;
  offset?: number; // Parallax translation in px (typically 20px - 45px)
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  overlay?: React.ReactNode;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  offset = 32,
  aspectRatio = 'aspect-[4/5]',
  className = '',
  imageClassName = '',
  overlay,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax y-movement: moves from +offset/2 to -offset/2 as user scrolls through
  const rawY = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 25, restDelta: 0.001 });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl ${aspectRatio} ${className}`}
    >
      <motion.div
        style={{
          y: reducedMotion ? 0 : smoothY,
          height: '116%',
          top: '-8%',
          position: 'absolute',
          left: 0,
          right: 0,
        }}
        className="w-full"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${imageClassName}`}
          loading="lazy"
        />
      </motion.div>
      {overlay}
    </div>
  );
};

// ============================================================================
// 5. STAGGERED CONTENT CONTAINER
// ============================================================================

interface StaggerRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0.05,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px 0px' });
  const reducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : staggerDelay,
        delayChildren: reducedMotion ? 0 : initialDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_DURATIONS.content,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return <motion.div variants={itemVariants}>{child}</motion.div>;
      })}
    </motion.div>
  );
};

// ============================================================================
// 6. REFINED MAGNETIC BUTTON INTERACTION (DESKTOP ONLY)
// ============================================================================

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.22, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isEnabled, setIsEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isWide = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !isTouch && isWide && !prefersReducedMotion;
  });

  useEffect(() => {
    const handleResize = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isWide = window.innerWidth >= 1024;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsEnabled(!isTouch && isWide && !prefersReducedMotion);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isEnabled || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!isEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
