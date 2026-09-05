import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { ThreeErrorBoundary } from './ThreeErrorBoundary';
import { useTheme } from '../../context/ThemeContext';

const TreatmentSculpture = lazy(() => import('./TreatmentSculptures'));

interface TreatmentCampaignCanvasProps {
  treatmentSlug: string;
  accentColor?: string;
  className?: string;
}

export const TreatmentCampaignCanvas: React.FC<TreatmentCampaignCanvasProps> = ({
  treatmentSlug,
  accentColor = '#c5a059',
  className = '',
}) => {
  const { isDark } = useTheme();

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

  const [shouldMount3D, setShouldMount3D] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Progressive 3D mounting after initial DOM paint has settled
  useEffect(() => {
    if (!hasWebGL || prefersReducedMotion) return;

    const timer = setTimeout(() => {
      setShouldMount3D(true);
    }, 120);

    return () => clearTimeout(timer);
  }, [hasWebGL, prefersReducedMotion]);

  if (!hasWebGL || prefersReducedMotion || !shouldMount3D) {
    // Subtle static light glow fallback
    return (
      <div 
        className={`w-full h-full flex items-center justify-center pointer-events-none ${className}`}
      >
        <div 
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ backgroundColor: accentColor }}
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <ThreeErrorBoundary
        fallback={
          <div className="w-full h-full flex items-center justify-center pointer-events-none">
            <div 
              className="w-40 h-40 rounded-full blur-3xl opacity-30 animate-pulse"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        }
      >
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 4.2], fov: 42 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
            }}
            dpr={[1, 1.75]}
            className="w-full h-full"
          >
            {/* Cinematic Lighting */}
            <ambientLight intensity={isDark ? 0.6 : 0.8} />
            <directionalLight
              position={[4, 5, 4]}
              intensity={isDark ? 1.4 : 1.2}
              color={accentColor}
            />
            <directionalLight
              position={[-4, -3, -2]}
              intensity={isDark ? 0.8 : 0.6}
              color={isDark ? '#2d3748' : '#e2e8f0'}
            />
            <pointLight
              position={[0, -2, 2]}
              intensity={0.6}
              color={accentColor}
            />

            <TreatmentSculpture
              treatmentSlug={treatmentSlug}
              isDark={isDark}
              accentColor={accentColor}
            />
          </Canvas>
        </Suspense>
      </ThreeErrorBoundary>
    </div>
  );
};

export default TreatmentCampaignCanvas;
