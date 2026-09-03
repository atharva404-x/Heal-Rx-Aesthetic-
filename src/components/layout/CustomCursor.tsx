import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Only run on non-touch desktop devices without reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isWide = typeof window !== 'undefined' && window.innerWidth >= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || !isWide || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor]');
      const imageElement = target.closest('img, [role="img"], .gallery-item');
      
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else if (imageElement) {
        setIsHovered(true);
        const customText = imageElement.getAttribute('data-cursor');
        setCursorText(customText || 'VIEW');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ${
          isHovered
            ? `w-14 h-14 ${isDark ? 'bg-gold-500/20 border-gold-400/60' : 'bg-gold-500/15 border-gold-600/40'} border backdrop-blur-[2px] scale-110 shadow-glow`
            : `w-3 h-3 ${isDark ? 'bg-gold-400 border-charcoal-900' : 'bg-charcoal-800 border-ivory-100'} border scale-100`
        } ${isClicking ? 'scale-90' : ''}`}
      >
        {cursorText && (
          <span className={`text-[9px] uppercase font-bold tracking-widest ${isDark ? 'text-gold-200' : 'text-gold-800'} animate-fadeIn select-none`}>
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
