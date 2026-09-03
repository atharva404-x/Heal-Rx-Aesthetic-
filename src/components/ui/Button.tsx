import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  className = '',
  as = 'button',
  href,
  to,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-accent/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'px-5 py-2 text-xs uppercase tracking-widest',
    md: 'px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest',
    lg: 'px-9 py-4 text-sm uppercase tracking-widest',
  };

  const variantStyles = {
    primary: 'bg-theme-btn-primary-bg text-theme-btn-primary-fg hover:opacity-90 shadow-luxury hover:shadow-glow active:scale-[0.98]',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 shadow-luxury hover:shadow-glow-gold active:scale-[0.98]',
    secondary: 'bg-theme-surface-elevated text-theme-fg hover:bg-theme-surface border border-theme-border shadow-luxury-sm active:scale-[0.98]',
    outline: 'border border-theme-border text-theme-fg hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-surface active:scale-[0.98]',
    ghost: 'text-theme-fg hover:text-theme-accent hover:bg-theme-accent-surface active:scale-[0.98]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Link>
    );
  }

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedStyles} target={target} rel={rel}>
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
};

export default Button;
