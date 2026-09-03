import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin, Clock, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../../data/site';
import { TREATMENTS } from '../../data/treatments';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-bg-alt text-theme-fg pt-16 sm:pt-20 pb-12 border-t border-theme-border transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-theme-border">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-serif text-3xl text-theme-fg">
                Heal<span className="text-theme-accent italic">Rx</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest-luxury text-theme-accent font-semibold -mt-1">
                Aesthetics & Laser Clinic
              </span>
            </Link>

            <p className="text-theme-fg-muted text-sm leading-relaxed max-w-sm">
              {CLINIC_INFO.tagline} {CLINIC_INFO.subTagline}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-accent hover:bg-theme-accent hover:text-theme-accent-fg transition-colors shadow-luxury-sm"
                aria-label="Instagram @healrx.in"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-accent hover:bg-theme-accent hover:text-theme-accent-fg transition-colors shadow-luxury-sm"
                aria-label="Call HealRx"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-accent hover:bg-theme-accent hover:text-theme-accent-fg transition-colors shadow-luxury-sm"
                aria-label="Email HealRx"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest-luxury text-theme-accent font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-theme-fg-muted">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-theme-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="hover:text-theme-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-theme-accent transition-colors">
                  Terms & Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest-luxury text-theme-accent font-medium">
              Clinical Procedures
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-theme-fg-muted">
              {TREATMENTS.slice(0, 5).map(treatment => (
                <li key={treatment.slug}>
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="hover:text-theme-accent transition-colors line-clamp-1"
                  >
                    {treatment.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/treatments"
                  className="text-theme-accent hover:underline font-medium inline-flex items-center text-xs uppercase tracking-wider pt-1"
                >
                  View All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Operating Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest-luxury text-theme-accent font-medium">
              Clinic Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-theme-fg-muted">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.line2}, {CLINIC_INFO.address.area}, Sion, Mumbai 400022
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <span>{CLINIC_INFO.hours.days}: {CLINIC_INFO.hours.time}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-theme-accent transition-colors">
                  {CLINIC_INFO.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs uppercase tracking-wider text-theme-accent hover:underline"
                >
                  Get Directions on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-theme-fg-subtle text-xs">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            <strong>Medical Disclaimer:</strong> HealRx Aesthetics & Laser Clinic provides evidence-based aesthetic and dermatological services. Individual results may vary based on skin biology and adherence to medical protocols. A personalized clinical consultation with Dr. Pruthvi Vaity is conducted prior to all procedures.
          </p>

          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} HealRx Aesthetics. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-fg-muted hover:text-theme-accent hover:bg-theme-surface-elevated transition-colors shadow-luxury-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
