import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After Protocol',
  title,
  subtitle,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Container with Interactive Slider */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Before and after comparison for ${title}`}
        onKeyDown={handleKeyDown}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize select-none border border-theme-border shadow-luxury focus:outline-none focus:ring-2 focus:ring-theme-accent"
      >
        {/* "After" Image (Base Layer) */}
        <img
          src={afterImage}
          alt={`After treatment result: ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* "Before" Image (Clipped Layer with GPU clip-path) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt={`Before treatment baseline: ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950/80 backdrop-blur-md text-white text-[11px] font-medium uppercase tracking-widest rounded-full z-10 border border-white/10">
          {beforeLabel}
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 bg-gold-600/90 backdrop-blur-md text-white text-[11px] font-medium uppercase tracking-widest rounded-full z-10 border border-gold-400/30">
          {afterLabel}
        </span>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-glow z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-theme-surface text-theme-fg rounded-full shadow-luxury-md flex items-center justify-center border-2 border-theme-accent">
            <div className="flex items-center space-x-0.5 text-xs font-bold text-theme-accent">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title & Notes */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
        <div>
          <h4 className="font-serif text-lg text-theme-fg">{title}</h4>
          {subtitle && <p className="text-xs text-theme-fg-muted">{subtitle}</p>}
        </div>
        <div className="flex items-center text-[11px] text-theme-fg-subtle">
          <Sparkles className="w-3.5 h-3.5 text-theme-accent mr-1.5" />
          <span>Drag slider or use arrow keys</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
