import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LUXURY_EASE } from './MotionPrimitives';

export const InitialLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return false;

    try {
      return !sessionStorage.getItem('healrx_intro_seen');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('healrx_intro_seen', 'true');
      } catch {
        // Ignore
      }
    }, 950);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg pointer-events-none"
        >
          <div className="flex flex-col items-center space-y-2 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="font-serif text-3xl sm:text-4xl tracking-tight text-theme-fg"
            >
              Heal<span className="text-theme-accent italic font-light">Rx</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: LUXURY_EASE }}
              className="text-[10px] uppercase tracking-widest-luxury text-theme-accent font-medium"
            >
              Aesthetics &amp; Laser Clinic • Sion
            </motion.div>

            {/* Subtle luxury hairline progress */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="w-16 h-[1.5px] bg-theme-accent/60 mt-3 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
