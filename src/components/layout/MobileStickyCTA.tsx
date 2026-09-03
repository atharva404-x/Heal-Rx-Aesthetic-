import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/site';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-ivory-50/95 backdrop-blur-lg border-t border-stone-200/80 md:hidden shadow-lg transition-transform duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-shrink-0 p-3 bg-ivory-200 text-charcoal-900 rounded-2xl flex items-center justify-center hover:bg-ivory-300 active:scale-95 transition-all"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-gold-700" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-5 bg-charcoal-900 text-ivory-50 rounded-2xl text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 shadow-luxury hover:bg-gold-600 active:scale-[0.98] transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Book Consultation</span>
        </button>
      </div>
    </div>
  );
};
