import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/site';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-theme-bg/95 backdrop-blur-lg border-t border-theme-border md:hidden shadow-luxury transition-colors duration-300">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-shrink-0 p-3 bg-theme-surface-elevated text-theme-fg rounded-2xl flex items-center justify-center hover:bg-theme-surface border border-theme-border active:scale-95 transition-all shadow-luxury-sm"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-theme-accent" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-5 bg-theme-btn-primary-bg text-theme-btn-primary-fg rounded-2xl text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 shadow-luxury hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <Calendar className="w-3.5 h-3.5 opacity-80" />
          <span>Book Consultation</span>
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
