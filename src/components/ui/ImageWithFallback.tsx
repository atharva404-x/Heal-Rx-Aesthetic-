import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'HealRx Aesthetic Clinical Procedure',
  className = '',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-ivory-200/90 border border-gold-200/60 p-6 text-center text-charcoal-700 select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full bg-gold-100/80 border border-gold-300/60 flex items-center justify-center mb-3 text-gold-700">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-serif text-lg font-medium text-charcoal-900 tracking-wide">
          HealRx
        </span>
        <span className="text-[11px] uppercase tracking-widest text-gold-800/80 font-medium mt-1">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

export default ImageWithFallback;
