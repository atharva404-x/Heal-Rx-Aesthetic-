import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-theme-accent/50 border border-theme-border bg-theme-surface hover:bg-theme-surface-elevated text-theme-fg hover:text-theme-accent shadow-luxury-sm group ${className}`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} mode (Currently: ${theme})`}
    >
      {/* Sun icon for Dark Mode (click to turn light) */}
      <Sun
        className={`w-4 h-4 transition-all duration-500 absolute transform ${
          isDark
            ? 'opacity-100 rotate-0 scale-100 text-amber-400'
            : 'opacity-0 -rotate-90 scale-75 pointer-events-none'
        }`}
      />

      {/* Moon icon for Light Mode (click to turn dark) */}
      <Moon
        className={`w-4 h-4 transition-all duration-500 absolute transform ${
          isDark
            ? 'opacity-0 rotate-90 scale-75 pointer-events-none'
            : 'opacity-100 rotate-0 scale-100 text-charcoal-700 group-hover:text-gold-600'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
