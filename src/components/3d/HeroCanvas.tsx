import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CellularSculpture } from './CellularSculpture';
import { ASSETS } from '../../data/assets';

interface HeroCanvasProps {
  className?: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const [hasWebGL] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return (
      <div className={`relative overflow-hidden rounded-3xl ${className}`}>
        <img
          src={ASSETS.hero.fallbackPoster}
          alt="HealRx Aesthetic Medicine & Cellular Skin Rejuvenation"
          className="w-full h-full object-cover rounded-3xl filter brightness-95"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[380px] sm:h-[480px] lg:h-[580px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <CellularSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
};
