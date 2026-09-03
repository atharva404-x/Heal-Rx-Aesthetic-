import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ASSETS } from '../../data/assets';
import { ThreeErrorBoundary } from './ThreeErrorBoundary';

// Progressively lazy-load Three.js / Canvas bundle so it does not block initial paint
const CellularCanvasScene = lazy(() => import('./CellularCanvasScene'));

interface HeroCanvasProps {
  className?: string;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const [hasWebGL] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [is3DReady, setIs3DReady] = useState(false);
  const [shouldMount3D, setShouldMount3D] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 3. Progressive 3D mounting after main thread has settled
  useEffect(() => {
    if (!hasWebGL || prefersReducedMotion) return;

    // Small timeout ensures initial paint and LCP complete before Three.js scene compilation
    const timer = setTimeout(() => {
      setShouldMount3D(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [hasWebGL, prefersReducedMotion]);

  // Luxury Fallback Poster Component
  const PosterFallback = (
    <div className="relative w-full h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden rounded-3xl shadow-luxury-md border border-gold-200/40 bg-ivory-200">
      <img
        src={ASSETS.hero.fallbackPoster}
        alt="HealRx Aesthetic Medicine & Cellular Skin Rejuvenation"
        className="w-full h-full object-cover rounded-3xl filter brightness-[0.98] transition-transform duration-700 hover:scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-ivory-100/90 backdrop-blur-md border border-gold-200/60 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gold-800 font-semibold block">
            Cellular Biocompatibility
          </span>
          <span className="font-serif text-sm text-charcoal-900 font-medium">
            Triple Wavelength &amp; Regenerative Medicine
          </span>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-gold-600 animate-ping" />
      </div>
    </div>
  );

  // If client prefers reduced motion or lacks WebGL, show only the luxury poster
  if (!hasWebGL || prefersReducedMotion) {
    return <div className={`relative ${className}`}>{PosterFallback}</div>;
  }

  return (
    <div className={`relative w-full h-[380px] sm:h-[480px] lg:h-[580px] ${className}`}>
      {/* Background Poster: Always visible instantly, fades out smoothly once 3D canvas is interactive */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          is3DReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {PosterFallback}
      </div>

      {/* 3D Interactive Canvas Scene: Progressively loaded & isolated with ErrorBoundary */}
      {shouldMount3D && (
        <ThreeErrorBoundary fallback={PosterFallback}>
          <div 
            className={`w-full h-full transition-opacity duration-1000 ${
              is3DReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Suspense fallback={null}>
              <CellularCanvasScene onLoaded={() => setIs3DReady(true)} />
            </Suspense>
          </div>
        </ThreeErrorBoundary>
      )}
    </div>
  );
};

export default HeroCanvas;
