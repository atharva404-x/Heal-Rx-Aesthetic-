import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ShieldCheck, Clock } from 'lucide-react';
import { TreatmentProcedureStepJourney, TreatmentAccent } from '../../types';

interface TreatmentProcedureScrollerProps {
  steps: TreatmentProcedureStepJourney[];
  accent?: TreatmentAccent;
}

export const TreatmentProcedureScroller: React.FC<TreatmentProcedureScrollerProps> = ({
  steps,
  accent,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = steps[activeStepIndex] || steps[0];
  const primaryColor = accent?.primary || '#c5a059';

  const handleNext = () => {
    setActiveStepIndex(prev => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStepIndex(prev => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span 
              className="text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-3.5 py-1.5 rounded-full border inline-block"
              style={{
                backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
                borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
                color: primaryColor,
              }}
            >
              The Clinical Experience &bull; Step by Step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-theme-fg font-normal leading-tight">
              YOUR TREATMENT, STEP BY STEP
            </h2>
            <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
              Every appointment at HealRx Sion is executed in accordance with sterile medical protocols to guarantee precision, safety, and comfort.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              aria-label="Previous procedural phase"
              className="p-3 rounded-full bg-theme-surface border border-theme-border text-theme-fg hover:border-theme-accent transition-colors shadow-luxury-sm active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="font-serif text-sm text-theme-fg font-medium px-2">
              0{activeStepIndex + 1} / 0{steps.length}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next procedural phase"
              className="p-3 rounded-full bg-theme-surface border border-theme-border text-theme-fg hover:border-theme-accent transition-colors shadow-luxury-sm active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Step Indicator Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isActive
                    ? 'bg-theme-surface shadow-luxury border-theme-border-highlight scale-[1.02]'
                    : 'bg-theme-surface/50 border-theme-border hover:bg-theme-surface/80 opacity-75'
                }`}
                style={{
                  borderColor: isActive ? primaryColor : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span 
                    className="font-serif text-lg font-light"
                    style={{ color: isActive ? primaryColor : undefined }}
                  >
                    {step.step}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-theme-fg-subtle font-medium">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <span className="font-serif text-xs sm:text-sm font-medium text-theme-fg line-clamp-1 block">
                  {step.title}
                </span>
                <span className="text-[11px] text-theme-fg-muted mt-0.5 line-clamp-1 block">
                  {step.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Synchronized Step Stage Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Image: Changes Synchronously with Step (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-theme-border bg-theme-surface aspect-[4/3] sm:aspect-[16/11]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStep.image}
                  src={currentStep.image}
                  alt={currentStep.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Floating Clinical Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: primaryColor }} />
                  <span>Procedural Cadence: Phase {currentStep.step}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/70">
                  HealRx Sion Standard
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Card (6 cols) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury space-y-6"
              >
                <div className="flex items-center justify-between border-b border-theme-border pb-4">
                  <div className="flex items-center space-x-2">
                    <span 
                      className="font-serif text-3xl font-light"
                      style={{ color: primaryColor }}
                    >
                      {currentStep.step}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-theme-fg-subtle font-semibold">
                      &bull; {currentStep.subtitle}
                    </span>
                  </div>
                  <span 
                    className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
                      borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
                      color: primaryColor,
                    }}
                  >
                    Clinical Protocol
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg font-normal">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Clinical Focus Note */}
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
                      Physician Oversight Note:
                    </span>
                    <span className="text-xs text-theme-fg-secondary mt-0.5 block">
                      {currentStep.clinicalFocus}
                    </span>
                  </div>
                </div>

                {/* Step indicator pagination dots */}
                <div className="flex items-center space-x-2 pt-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStepIndex(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStepIndex ? 'w-8' : 'w-2 bg-theme-border hover:bg-theme-fg-subtle'
                      }`}
                      style={{
                        backgroundColor: i === activeStepIndex ? primaryColor : undefined,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcedureScroller;
