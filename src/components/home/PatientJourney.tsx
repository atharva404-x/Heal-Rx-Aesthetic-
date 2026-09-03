import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Stethoscope, Sliders, HeartPulse } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Magnetic, FadeIn } from '../motion/MotionPrimitives';

interface Step {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
}

const JOURNEY_STEPS: Step[] = [
  {
    num: '01',
    title: 'IN-DEPTH CONSULTATION',
    subtitle: 'Diagnostic Assessment & Skin Mapping',
    desc: 'Medical Director Dr. Pruthvi Vaity conducts an individualized assessment analyzing your skin biology, Fitzpatrick phototype, and lifestyle factors to establish a clinical baseline.',
    icon: Stethoscope,
  },
  {
    num: '02',
    title: 'PERSONALIZED PLAN',
    subtitle: 'Custom Medical Protocol Design',
    desc: 'We formulate a bespoke treatment regimen targeting root causes rather than superficial symptoms, calibrated specifically for melanin-rich Indian skin with zero guesswork.',
    icon: Sliders,
  },
  {
    num: '03',
    title: 'PRECISION TREATMENT',
    subtitle: 'Advanced Technology Execution',
    desc: 'Procedures are conducted in private, sterile clinical suites utilizing US FDA-compliant triple-wavelength lasers, Hydra infusions, or regenerative autologous therapies.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'FOLLOW-UP & CARE',
    subtitle: 'Cellular Recovery & Longevity Maintenance',
    desc: 'Post-treatment evaluations, barrier repair protocols, and scheduled review milestones ensure continuous outcome optimization and lasting skin health.',
    icon: HeartPulse,
  },
];

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Patient Experience"
          title="YOUR JOURNEY TO RADIANCE"
          subtitle="From initial clinical consultation to lasting cellular rejuvenation, experience thoughtful medicine designed exclusively around you."
          align="center"
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Step Navigator (7 Cols) */}
          <div className="lg:col-span-7 space-y-3 relative">
            {/* Connecting Vertical Track */}
            <div className="absolute left-6 top-8 bottom-8 w-[1.5px] bg-theme-border -z-0 hidden sm:block">
              <motion.div
                className="w-full bg-theme-accent origin-top"
                animate={{
                  height: `${((activeStep + 1) / JOURNEY_STEPS.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-400 border select-none group ${
                    isActive
                      ? 'bg-theme-surface border-theme-accent/50 shadow-luxury'
                      : 'bg-theme-surface/40 border-theme-border hover:bg-theme-surface hover:border-theme-border-highlight'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6 z-10 relative">
                    {/* Step Number & Icon Indicator */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? 'bg-theme-accent text-white shadow-glow scale-105'
                          : 'bg-theme-surface-elevated text-theme-fg-muted border border-theme-border group-hover:text-theme-accent'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-theme-accent font-semibold">
                          Step {step.num}
                        </span>
                        <span className="text-xs font-mono text-theme-fg-subtle">
                          0{idx + 1} / 04
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-lg sm:text-2xl mt-0.5 tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-theme-fg font-medium scale-[1.01] origin-left'
                            : 'text-theme-fg-muted group-hover:text-theme-fg'
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm mt-1 transition-colors duration-300 ${
                          isActive ? 'text-theme-accent font-medium' : 'text-theme-fg-subtle'
                        }`}
                      >
                        {step.subtitle}
                      </p>

                      {/* Mobile Expanded Summary */}
                      <div className="sm:hidden mt-3 pt-3 border-t border-theme-border">
                        <p className="text-xs text-theme-fg-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Feature Card (5 Cols) */}
          <div className="lg:col-span-5 hidden sm:block">
            <FadeIn delay={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-theme-accent-surface rounded-full blur-2xl pointer-events-none -z-0" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-theme-accent-surface border border-theme-border-highlight text-theme-accent text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Clinical Protocol Standard</span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-4xl sm:text-5xl text-theme-accent/40 font-light block">
                      {JOURNEY_STEPS[activeStep].num}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                      {JOURNEY_STEPS[activeStep].title}
                    </h4>
                    <p className="text-xs uppercase tracking-widest text-theme-accent font-medium">
                      {JOURNEY_STEPS[activeStep].subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
                    {JOURNEY_STEPS[activeStep].desc}
                  </p>

                  <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                    <div className="text-xs text-theme-fg-subtle">
                      Lead Physician: <strong className="text-theme-fg">Dr. Pruthvi Vaity</strong>
                    </div>

                    <Magnetic strength={0.25}>
                      <Button
                        variant="primary"
                        size="sm"
                        showArrow
                        onClick={onOpenBooking}
                      >
                        Begin Journey
                      </Button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
