import React from 'react';
import { ASSETS } from '../data/assets';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { FadeIn, TextReveal, Magnetic } from '../components/motion/MotionPrimitives';

interface ResultsPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-fg pt-28 sm:pt-36 pb-20 transition-colors duration-400">
      <SEOHead
        title="Clinical Results & Transformations | HealRx Sion Mumbai"
        description="Interactive before and after clinical demonstrations for Laser Hair Reduction, Carbon Laser Peels, Acne Scars, and Skin Rejuvenation at HealRx Clinic Sion."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl space-y-4">
          <FadeIn delay={0.05}>
            <span className="text-xs uppercase tracking-widest-luxury text-theme-accent font-semibold px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
              Clinical Proof &amp; Case Studies
            </span>
          </FadeIn>

          <TextReveal delay={0.1} as="h1" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-theme-fg">
            EVIDENCE-BASED CLINICAL RESULTS.
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="mt-4 text-base sm:text-lg text-theme-fg-muted leading-relaxed">
              Explore interactive before-and-after demonstrations illustrating follicular reduction, dermal remodeling, and skin radiance achieved through doctor-prescribed protocols.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sliders Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-16">
          {ASSETS.beforeAfter.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-10 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Slider (7 cols) */}
                <div className="lg:col-span-7">
                  <BeforeAfterSlider
                    title={item.title}
                    subtitle={item.notes}
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel="Baseline"
                    afterLabel={item.timeframe}
                  />
                </div>

                {/* Case Notes (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-theme-accent">
                    Protocol 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                    {item.title}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-theme-fg-muted">
                    <p><strong className="text-theme-fg">Primary Treatment:</strong> {item.treatment}</p>
                    <p><strong className="text-theme-fg">Timeline:</strong> {item.timeframe}</p>
                    <p><strong className="text-theme-fg">Clinical Notes:</strong> {item.notes}</p>
                  </div>

                  <div className="pt-4">
                    <Magnetic strength={0.2}>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onOpenBooking()}
                      >
                        Book Consultation For This Result
                      </Button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Medical Statement */}
        <div className="mt-12 p-6 rounded-3xl bg-theme-surface-elevated border border-theme-border text-theme-fg-muted text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto text-center space-y-2 shadow-luxury-sm">
          <p className="font-semibold text-theme-fg">
            ⚖️ Commitment to Ethical Aesthetic Standards:
          </p>
          <p>
            At HealRx Aesthetics, we do not utilize exaggerated filters, digital body warping, or fabricated clinical claims. Every patient responds differently depending on hair thickness, genetics, skin phototype, and lifestyle compliance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
