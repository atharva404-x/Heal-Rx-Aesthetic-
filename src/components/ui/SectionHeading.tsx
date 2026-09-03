import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
  theme = 'auto',
}) => {
  const { isDark: activeThemeIsDark } = useTheme();
  const isDark = theme === 'auto' ? activeThemeIsDark : theme === 'dark';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {label && (
        <span className={`inline-block text-[11px] uppercase tracking-widest-luxury font-medium mb-3 px-3.5 py-1.5 rounded-full ${
          isDark 
            ? 'text-theme-accent bg-theme-accent-surface border border-theme-border' 
            : 'text-theme-accent bg-theme-accent-surface border border-theme-border-highlight'
        }`}>
          {label}
        </span>
      )}
      
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] text-balance text-theme-fg transition-colors duration-300">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-balance text-theme-fg-muted transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
