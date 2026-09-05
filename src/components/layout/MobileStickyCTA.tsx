import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../../data/site';
import { TREATMENTS } from '../../data/treatments';

interface MobileStickyCTAProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  const location = useLocation();

  // Detect if on a treatment detail page
  const match = location.pathname.match(/^\/treatments\/([a-z0-9-]+)$/);
  const currentTreatmentSlug = match ? match[1] : undefined;
  const currentTreatment = currentTreatmentSlug 
    ? TREATMENTS.find(t => t.slug === currentTreatmentSlug)
    : undefined;

  // Shorten or clean up the CTA label for small mobile viewports
  const ctaLabel = currentTreatment?.ctaLabel
    ? (currentTreatment.ctaLabel.length > 28 ? 'Book Treatment' : currentTreatment.ctaLabel.replace(/\s*→\s*$/, ''))
    : 'Book Consultation';

  const primaryColor = currentTreatment?.accent?.primary;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-theme-bg/95 backdrop-blur-lg border-t border-theme-border md:hidden shadow-luxury transition-colors duration-300">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-shrink-0 p-3 bg-theme-surface-elevated text-theme-fg rounded-2xl flex items-center justify-center hover:bg-theme-surface border border-theme-border active:scale-95 transition-all shadow-luxury-sm"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-theme-accent" />
        </a>

        <button
          onClick={() => onOpenBooking(currentTreatmentSlug)}
          className="flex-1 py-3 px-4 rounded-2xl text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 shadow-luxury hover:opacity-90 active:scale-[0.98] transition-all truncate text-white"
          style={{
            backgroundColor: primaryColor || 'var(--color-accent, #c5a059)',
          }}
        >
          <Calendar className="w-3.5 h-3.5 opacity-80 flex-shrink-0" />
          <span className="truncate">{ctaLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-80 flex-shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
