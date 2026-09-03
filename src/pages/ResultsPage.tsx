import React from 'react';
import { ASSETS } from '../data/assets';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';

interface ResultsPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title="Clinical Results & Transformations | HealRx Sion Mumbai"
        description="Interactive before and after clinical demonstrations for Laser Hair Reduction, Carbon Laser Peels, Acne Scars, and Skin Rejuvenation at HealRx Clinic Sion."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block mb-4">
            Clinical Proof & Case Studies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal-900">
            EVIDENCE-BASED CLINICAL RESULTS.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Explore interactive before-and-after demonstrations illustrating follicular reduction, dermal remodeling, and skin radiance achieved through doctor-prescribed protocols.
          </p>
        </div>
      </section>

      {/* Sliders Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-16">
          {ASSETS.beforeAfter.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-luxury"
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
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-600">
                    Protocol 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                    {item.title}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-stone-600">
                    <p><strong>Primary Treatment:</strong> {item.treatment}</p>
                    <p><strong>Timeline:</strong> {item.timeframe}</p>
                    <p><strong>Clinical Notes:</strong> {item.notes}</p>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onOpenBooking()}
                    >
                      Book Consultation For This Result
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Medical Statement */}
        <div className="mt-12 p-6 rounded-3xl bg-ivory-200/80 border border-stone-300 text-stone-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto text-center space-y-2">
          <p className="font-semibold text-charcoal-900">
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
