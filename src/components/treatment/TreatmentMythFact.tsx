import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { TreatmentMythFact as TreatmentMythFactType, TreatmentAccent } from '../../types';

interface TreatmentMythFactProps {
  myths: TreatmentMythFactType[];
  accent?: TreatmentAccent;
}

export const TreatmentMythFact: React.FC<TreatmentMythFactProps> = ({
  myths,
  accent,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const primaryColor = accent?.primary || '#c5a059';

  return (
    <section className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
        <span 
          className="text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-3.5 py-1.5 rounded-full border inline-block"
          style={{
            backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
            borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
            color: primaryColor,
          }}
        >
          Clinical Clarity &bull; Dispelling Misconceptions
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-theme-fg font-normal leading-tight">
          Common Myths vs. Clinical Reality
        </h2>

        <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
          Aesthetic medicine should be guided by physics and clinical dermatology—not social media rumors.
        </p>
      </div>

      {/* Myth vs Reality Cards Accordion */}
      <div className="space-y-4">
        {myths.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'bg-theme-surface shadow-luxury border-theme-border-highlight'
                  : 'bg-theme-surface/50 border-theme-border hover:bg-theme-surface'
              }`}
            >
              {/* Card Trigger Header */}
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none"
              >
                <div className="space-y-1.5 pr-4">
                  <div className="flex items-center space-x-2 text-rose-500 text-xs font-semibold uppercase tracking-wider">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Myth:</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-theme-fg font-normal">
                    &ldquo;{item.myth}&rdquo;
                  </h3>
                </div>

                <div 
                  className={`p-2 rounded-full border border-theme-border flex-shrink-0 text-theme-fg transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 bg-theme-surface-elevated' : 'bg-theme-surface'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Reality Body */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-theme-border space-y-4">
                      {/* Verified Reality */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                          <span>Clinical Reality:</span>
                        </div>
                        <p className="text-sm sm:text-base text-theme-fg-secondary leading-relaxed font-medium">
                          {item.reality}
                        </p>
                      </div>

                      {/* Physician Insight Box */}
                      <div 
                        className="p-4 rounded-2xl border flex items-start space-x-3 transition-colors"
                        style={{
                          backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.05)',
                          borderColor: accent?.border || 'rgba(197, 160, 89, 0.2)',
                        }}
                      >
                        <ShieldCheck 
                          className="w-4 h-4 flex-shrink-0 mt-0.5" 
                          style={{ color: primaryColor }}
                        />
                        <div>
                          <span className="text-[11px] uppercase tracking-wider font-semibold block text-theme-fg">
                            Dr. Pruthvi Vaity’s Protocol Insight:
                          </span>
                          <span className="text-xs text-theme-fg-muted mt-0.5 block leading-relaxed">
                            {item.clinicalInsight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TreatmentMythFact;
