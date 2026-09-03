import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram, MapPin } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../../data/site';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Magnetic } from '../motion/MotionPrimitives';

interface NavbarProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change without cascading effect
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-luxury-sm'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-theme-accent rounded-lg p-1"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-theme-fg group-hover:text-theme-accent transition-colors">
              Heal<span className="text-theme-accent italic">Rx</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest-luxury text-theme-fg-muted font-semibold -mt-1 group-hover:text-theme-fg transition-colors">
              Aesthetics & Laser Clinic
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors relative py-1 focus:outline-none focus:text-theme-accent ${
                    isActive
                      ? 'text-theme-accent font-semibold'
                      : 'text-theme-fg-secondary hover:text-theme-accent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-theme-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Controls (Theme Switcher + Phone + Consultation CTA) */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Elegant Circular Theme Switcher */}
            <ThemeToggle />

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="p-2 rounded-full text-theme-fg-muted hover:text-theme-accent hover:bg-theme-surface-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent/40"
              title={`Call ${CLINIC_INFO.displayPhone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <Magnetic strength={0.2}>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenBooking()}
              >
                Book Consultation
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle className="w-8 h-8" />

            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-full bg-theme-accent text-white text-xs shadow-luxury-sm"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-theme-fg hover:bg-theme-surface-elevated transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-theme-bg flex flex-col justify-between p-6 sm:p-8 animate-fadeIn md:hidden text-theme-fg"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar with Brand, Theme Toggle & Close */}
          <div className="flex items-center justify-between border-b border-theme-border pb-5">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl font-medium text-theme-fg">
                Heal<span className="text-theme-accent italic">Rx</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest-luxury text-theme-fg-muted font-semibold -mt-0.5">
                Aesthetics & Laser Clinic
              </span>
            </Link>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full text-theme-fg hover:bg-theme-surface-elevated transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-5 py-6">
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-serif text-2xl sm:text-3xl flex items-center justify-between transition-colors ${
                    isActive ? 'text-theme-accent font-medium' : 'text-theme-fg hover:text-theme-accent'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-theme-fg-subtle">0{index + 1}</span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Info & Action */}
          <div className="space-y-4 pt-4 border-t border-theme-border">
            <div className="flex items-center space-x-2 text-xs text-theme-fg-muted">
              <MapPin className="w-4 h-4 text-theme-accent flex-shrink-0" />
              <span>Sion Koliwada, Ahead of PVR Cinema, Sion, Mumbai</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-theme-surface rounded-full text-theme-fg border border-theme-border hover:text-theme-accent transition-colors"
                aria-label="HealRx Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex-1 py-3 px-4 bg-theme-surface-elevated rounded-full text-xs font-medium uppercase tracking-wider text-theme-fg flex items-center justify-center space-x-2 hover:bg-theme-surface transition-colors border border-theme-border"
              >
                <Phone className="w-3.5 h-3.5 text-theme-accent" />
                <span>Call Clinic</span>
              </a>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
            >
              Book A Consultation
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
