import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram, MapPin } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../../data/site';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
            ? 'glass-nav py-3.5 shadow-sm'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-charcoal-900 group-hover:text-gold-700 transition-colors">
              Heal<span className="text-gold-600 italic">Rx</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest-luxury text-stone-500 font-semibold -mt-1 group-hover:text-charcoal-900 transition-colors">
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
                  className={`text-xs uppercase tracking-widest font-medium transition-colors relative py-1 focus:outline-none focus:text-gold-600 ${
                    isActive
                      ? 'text-gold-600 font-semibold'
                      : 'text-charcoal-800 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="p-2.5 rounded-full text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              title={`Call ${CLINIC_INFO.displayPhone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenBooking()}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-full bg-gold-500 text-white text-xs"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-charcoal-900 hover:bg-ivory-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
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
          className="fixed inset-0 z-50 bg-ivory-100 flex flex-col justify-between p-6 sm:p-8 animate-fadeIn md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar with Brand & Close */}
          <div className="flex items-center justify-between border-b border-stone-200/60 pb-5">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl font-medium text-charcoal-900">
                Heal<span className="text-gold-600 italic">Rx</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest-luxury text-stone-500 font-semibold -mt-0.5">
                Aesthetics & Laser Clinic
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-charcoal-800 hover:bg-stone-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
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
                    isActive ? 'text-gold-600 font-medium' : 'text-charcoal-900 hover:text-gold-600'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-stone-400">0{index + 1}</span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Info & Action */}
          <div className="space-y-4 pt-4 border-t border-stone-200/60">
            <div className="flex items-center space-x-2 text-xs text-stone-600">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>Sion Koliwada, Ahead of PVR Cinema, Sion, Mumbai</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-charcoal-800 border border-stone-200 hover:text-gold-600 transition-colors"
                aria-label="HealRx Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex-1 py-3 px-4 bg-ivory-200 rounded-full text-xs font-medium uppercase tracking-wider text-charcoal-900 flex items-center justify-center space-x-2 hover:bg-ivory-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
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
