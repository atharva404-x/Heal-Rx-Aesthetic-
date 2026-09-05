import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, AlertCircle, ArrowRight, Check } from 'lucide-react';
import { TreatmentConcernItem, TreatmentAccent } from '../../types';

interface TreatmentConcernSelectorProps {
  concerns: TreatmentConcernItem[];
  accent?: TreatmentAccent;
  onOpenBooking: () => void;
  ctaText?: string;
}

export const TreatmentConcernSelector: React.FC<TreatmentConcernSelectorProps> = ({
  concerns,
  accent,
  onOpenBooking,
  ctaText = 'Discuss Your Skin Concerns With Dr. Vaity →',
}) => {
  const [selectedConcernId, setSelectedConcernId] = useState<string>(
    concerns[0]?.id || ''
  );

  const activeConcern = concerns.find(c => c.id === selectedConcernId) || concerns[0];
  const primaryColor = accent?.primary || '#c5a059';

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span 
          className="text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-3.5 py-1.5 rounded-full border inline-block"
          style={{
            backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
            borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
            color: primaryColor,
          }}
        >
          Psychological Identification &bull; Targeted Indications
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-theme-fg font-normal leading-tight">
          Maybe your skin has been asking for this.
        </h2>

        <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed max-w-xl mx-auto">
          Over-the-counter creams only treat the surface stratum corneum. Select a concern below to see the anatomical reason behind it and how clinical intervention resolves it.
        </p>
      </div>

      {/* Concerns Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {concerns.map((concern, idx) => {
          const isSelected = concern.id === selectedConcernId;
          return (
            <button
              key={concern.id}
              onClick={() => setSelectedConcernId(concern.id)}
              className={`p-5 rounded-2xl text-left border transition-all duration-300 relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-theme-surface shadow-luxury scale-[1.02]'
                  : 'bg-theme-surface/60 border-theme-border hover:bg-theme-surface hover:border-theme-border-highlight'
              }`}
              style={{
                borderColor: isSelected ? primaryColor : undefined,
                boxShadow: isSelected ? `0 10px 30px ${accent?.glow || 'rgba(197, 160, 89, 0.15)'}` : undefined,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle font-medium">
                    Concern 0{idx + 1}
                  </span>
                  <div 
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'text-white' : 'text-theme-fg-subtle bg-theme-surface border border-theme-border'
                    }`}
                    style={{
                      backgroundColor: isSelected ? primaryColor : undefined,
                    }}
                  >
                    {isSelected ? <Check className="w-3 h-3" /> : <HelpCircle className="w-3 h-3" />}
                  </div>
                </div>

                <h3 className="font-serif text-lg text-theme-fg group-hover:text-theme-accent transition-colors font-medium">
                  {concern.title}
                </h3>

                <p className="text-xs text-theme-fg-muted mt-2 line-clamp-2 leading-relaxed">
                  {concern.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-theme-border flex items-center justify-between text-[11px] font-medium text-theme-fg-secondary">
                <span>View Clinical Insight</span>
                <ArrowRight 
                  className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-0.5'}`} 
                  style={{ color: isSelected ? primaryColor : undefined }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Concern Deep-Dive Panel */}
      {activeConcern && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcern.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left: The Underlying Anatomical Reality */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-500">
                <AlertCircle className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  Why Regular Skincare Struggles:
                </span>
              </div>

              <h4 className="font-serif text-2xl text-theme-fg font-normal">
                {activeConcern.title}
              </h4>

              <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
                {activeConcern.whyRoutineFails}
              </p>
            </div>

            {/* Right: The Medical Solution & Low-Friction Action */}
            <div 
              className="p-6 sm:p-8 rounded-2xl border space-y-5 transition-colors"
              style={{
                backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.05)',
                borderColor: accent?.border || 'rgba(197, 160, 89, 0.2)',
              }}
            >
              <div>
                <span 
                  className="text-[10px] uppercase tracking-widest font-bold block"
                  style={{ color: primaryColor }}
                >
                  The Clinical Pathway at HealRx
                </span>
                <p className="text-xs sm:text-sm text-theme-fg font-medium mt-2 leading-relaxed">
                  {activeConcern.clinicalSolution}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-5 rounded-xl font-medium text-xs uppercase tracking-widest text-white transition-all shadow-luxury-sm hover:opacity-95 active:scale-[0.98] flex items-center justify-center space-x-2"
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default TreatmentConcernSelector;
