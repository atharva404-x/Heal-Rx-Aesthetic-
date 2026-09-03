import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Phone, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO, MEDICAL_DIRECTOR } from '../data/site';
import { ASSETS } from '../data/assets';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEOHead } from '../components/seo/SEOHead';

interface AboutPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title="About Us & Medical Leadership | Dr. Pruthvi Vaity"
        description="Learn about HealRx Aesthetics & Laser Clinic in Sion, Mumbai. Founded by Medical Director Dr. Pruthvi Vaity, dedicated to evidence-based aesthetic medicine and longevity care."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block mb-4">
            About HealRx Aesthetics
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal-900 text-balance">
            WHERE CLINICAL SCIENCE MEETS UNDERSTATED LUXURY.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
            HealRx Aesthetics & Laser Clinic was established in Sion, Mumbai with a singular conviction: that aesthetic dermatology must be practiced with rigorous medical integrity, anatomical restraint, and sincere patient care.
          </p>
        </div>
      </section>

      {/* Editorial Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-luxury aspect-[16/9] border border-gold-300/30">
            <img
              src={ASSETS.clinic.consultationSuite}
              alt="HealRx Aesthetic Suite in Sion Mumbai"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-luxury aspect-[4/3] md:aspect-auto border border-gold-300/30">
            <img
              src={ASSETS.clinic.laserSuite}
              alt="HealRx Medical Laser Suite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Medical Director Deep-Dive */}
      <section className="py-16 bg-ivory-200/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/60 aspect-[4/5] bg-charcoal-900">
                <img
                  src={MEDICAL_DIRECTOR.image}
                  alt={MEDICAL_DIRECTOR.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-gold-700 font-semibold px-3 py-1 rounded-full bg-gold-100/70 border border-gold-300/50 inline-block">
                Founder & Medical Director
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900">
                {MEDICAL_DIRECTOR.name}
              </h2>

              <p className="text-gold-700 font-medium text-sm sm:text-base">
                {MEDICAL_DIRECTOR.designation}
              </p>

              <blockquote className="border-l-2 border-gold-600 pl-4 italic font-serif text-lg sm:text-xl text-stone-700">
                "{MEDICAL_DIRECTOR.quote}"
              </blockquote>

              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                {MEDICAL_DIRECTOR.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Accolades */}
              <div className="space-y-2.5 pt-2">
                {MEDICAL_DIRECTOR.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenBooking()}
                >
                  Book Consultation with Dr. Vaity
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Clinical Standards"
          title="THE FIVE PILLARS OF HEALRX CARE"
          subtitle="How we maintain uncompromised clinical excellence, patient confidentiality, and predictable outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {[
            {
              icon: ShieldCheck,
              title: 'Evidence-Based Safety',
              desc: 'We strictly administer protocols backed by peer-reviewed clinical dermatological research, utilizing US FDA-compliant laser platforms.'
            },
            {
              icon: Sparkles,
              title: 'Anatomical Restraint',
              desc: 'We do not believe in drastic, unrecognizable changes. Our objective is restoration, collagen remodeling, and natural skin refinement.'
            },
            {
              icon: HeartHandshake,
              title: 'Transparent Consultations',
              desc: 'We never upsell unneeded treatments. If a procedure is not biologically indicated for your skin, we will frankly advise against it.'
            }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-luxury space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-600 flex items-center justify-center border border-gold-200/60">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal-900">{card.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-950 text-ivory-50 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Visit Our Sion Clinic Lounge
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-lg mx-auto">
            Conveniently situated opposite Croma Store and ahead of PVR Cinema, Sion Koliwada, Mumbai. Open daily 10:00 AM – 10:00 PM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="gold" size="lg" onClick={() => onOpenBooking()}>
              Schedule Consultation
            </Button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-8 py-4 bg-white/10 text-white rounded-full font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-all inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call {CLINIC_INFO.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
