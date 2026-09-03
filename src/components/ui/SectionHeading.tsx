import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
  theme = 'light',
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {label && (
        <span className={`inline-block text-[11px] uppercase tracking-widest-luxury font-medium mb-3 px-3 py-1 rounded-full ${
          isDark 
            ? 'text-gold-300 bg-white/5 border border-white/10' 
            : 'text-gold-600 bg-gold-50 border border-gold-200/50'
        }`}>
          {label}
        </span>
      )}
      
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] text-balance ${
        isDark ? 'text-ivory-50' : 'text-charcoal-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed text-balance ${
          isDark ? 'text-charcoal-200' : 'text-stone-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
