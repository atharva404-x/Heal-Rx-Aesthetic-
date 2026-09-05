import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Sparkles, 
  ChevronRight, 
  Phone,
  Star,
  ShieldCheck,
  Maximize2,
  X,
  Quote,
  ArrowRight,
  Compass
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { CLINIC_INFO } from '../data/site';
import { ASSETS } from '../data/assets';
import { TREATMENT_ASSETS } from '../data/treatmentAssets';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEOHead } from '../components/seo/SEOHead';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { 
  Magnetic, 
  ParallaxImage
} from '../components/motion/MotionPrimitives';
import { TreatmentHeroCampaign } from '../components/treatment/TreatmentHeroCampaign';
import { TreatmentDiscoveryHotspots } from '../components/treatment/TreatmentDiscoveryHotspots';
import { TreatmentProcedureScroller } from '../components/treatment/TreatmentProcedureScroller';
import { TreatmentConcernSelector } from '../components/treatment/TreatmentConcernSelector';
import { TreatmentMythFact } from '../components/treatment/TreatmentMythFact';
import { TreatmentVisualMetaphor } from '../components/treatment/TreatmentVisualMetaphor';

interface TreatmentDetailPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = TREATMENTS.find(t => t.slug === slug);
  const [lightboxImage, setLightboxImage] = useState<{ image: string; title: string; caption: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-theme-bg text-theme-fg pt-32 sm:pt-40 pb-20 transition-colors duration-400">
        <SEOHead 
          title="Treatment Not Found | HealRx Aesthetics Sion" 
          description="The requested aesthetic treatment was not found in our catalog. Explore doctor-led aesthetic protocols at HealRx Sion Mumbai."
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-widest-luxury text-theme-accent font-semibold px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
            Procedure Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-theme-fg font-normal">
            Treatment Procedure Not Found
          </h1>
          <p className="text-theme-fg-muted text-base leading-relaxed max-w-lg mx-auto">
            The procedure &ldquo;{slug}&rdquo; is not currently listed or may have been updated in our clinical portfolio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/treatments" variant="primary" size="md">
              View All Treatments
            </Button>
            <Button variant="secondary" size="md" onClick={() => onOpenBooking()}>
              Book Doctor Consultation
            </Button>
          </div>
          
          <div className="pt-12 text-left">
            <h2 className="font-serif text-xl text-theme-fg mb-6 text-center">
              Popular Clinical Procedures
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TREATMENTS.slice(0, 4).map(t => (
                <Link
                  key={t.slug}
                  to={`/treatments/${t.slug}`}
                  className="p-4 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-accent hover:shadow-luxury-sm transition-all group block"
                >
                  <span className="text-[10px] uppercase tracking-wider text-theme-accent block mb-1 font-medium">
                    {t.categoryLabel}
                  </span>
                  <span className="font-serif text-base text-theme-fg group-hover:text-theme-accent font-medium block">
                    {t.title}
                  </span>
                  <span className="text-xs text-theme-fg-muted mt-1 line-clamp-2 block">
                    {t.shortDescription}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const relatedTreatments = TREATMENTS
    .filter(t => t.category === treatment.category && t.slug !== treatment.slug)
    .slice(0, 2);

  const matchingBeforeAfter = treatment.beforeAfterId
    ? ASSETS.beforeAfter.find(item => item.id === treatment.beforeAfterId)
    : undefined;

  const treatmentAssets = TREATMENT_ASSETS[treatment.slug] || {
    hero: treatment.image,
    procedureImage: treatment.image,
    detailImage: treatment.image,
    textureImage: treatment.image,
    reviewImage: ASSETS.clinic.consultationSuite,
    gallery: treatment.galleryImages || [],
    source: 'HealRx Clinical Registry',
    licenseNote: 'Licensed Clinical Asset'
  };

  const treatmentCta = treatment.ctaLabel || 'Book Doctor Consultation →';
  const accent = treatment.accent;
  const primaryColor = accent?.primary || '#c5a059';

  return (
    <div className="min-h-screen bg-theme-bg text-theme-fg pb-24 transition-colors duration-400 relative overflow-hidden">
      <SEOHead
        title={`${treatment.title} in Sion, Mumbai | HealRx Aesthetics`}
        description={`${treatment.shortDescription} Doctor-led treatment protocol by Dr. Pruthvi Vaity at HealRx Aesthetics & Laser Clinic, Sion Koliwada, Mumbai.`}
      />

      {/* =========================================================================
          STAGE 01: CINEMATIC EDITORIAL CAMPAIGN HERO (HIGH-IMPACT VISUAL, NO 3D)
      ========================================================================= */}
      <TreatmentHeroCampaign
        treatment={treatment}
        onOpenBooking={onOpenBooking}
      />

      {/* =========================================================================
          STAGE 02: QUICK TREATMENT SNAPSHOT STRIP
      ========================================================================= */}
      <section className="bg-theme-bg-alt border-y border-theme-border py-8 transition-colors duration-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-theme-border">
            <div className="pt-3 md:pt-0 md:px-4 first:pl-0">
              <span className="text-[10px] uppercase tracking-widest text-theme-fg-subtle block font-semibold">
                Procedure Duration
              </span>
              <span className="font-serif text-base sm:text-lg text-theme-fg mt-1 block">
                {treatment.whatToExpect.duration}
              </span>
              <span className="text-[11px] text-theme-fg-muted block mt-0.5">
                In-clinic appointment
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[10px] uppercase tracking-widest text-theme-fg-subtle block font-semibold">
                Recovery Downtime
              </span>
              <span className="font-serif text-base sm:text-lg text-theme-fg mt-1 block">
                {treatment.whatToExpect.downtime}
              </span>
              <span className="text-[11px] text-theme-fg-muted block mt-0.5">
                Resume daily routine
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[10px] uppercase tracking-widest text-theme-fg-subtle block font-semibold">
                Sensation &amp; Comfort
              </span>
              <span className="font-serif text-base sm:text-lg text-theme-fg mt-1 block">
                {treatment.whatToExpect.sensation || 'Mild / Well-tolerated'}
              </span>
              <span className="text-[11px] text-theme-fg-muted block mt-0.5">
                Integrated cooling
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4">
              <span className="text-[10px] uppercase tracking-widest text-theme-fg-subtle block font-semibold">
                Primary Target
              </span>
              <span className="font-serif text-base sm:text-lg text-theme-fg mt-1 block">
                {treatment.whatToExpect.primaryConcern || treatment.categoryLabel}
              </span>
              <span className="text-[11px] text-theme-fg-muted block mt-0.5">
                Customized approach
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:px-4 col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase tracking-widest text-theme-fg-subtle block font-semibold">
                Clinical Delivery
              </span>
              <span className="font-serif text-base sm:text-lg text-theme-fg mt-1 block">
                Dr. Pruthvi Vaity
              </span>
              <span 
                className="text-[11px] block mt-0.5 font-medium"
                style={{ color: primaryColor }}
              >
                Lead Physician, Sion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 03: PSYCHOLOGICAL IDENTIFICATION (CONCERN SELECTOR)
      ========================================================================= */}
      {treatment.interactiveConcerns && treatment.interactiveConcerns.length > 0 && (
        <TreatmentConcernSelector
          concerns={treatment.interactiveConcerns}
          accent={accent}
          onOpenBooking={() => onOpenBooking(treatment.slug)}
          ctaText={`Discuss Your Concerns With Dr. Vaity →`}
        />
      )}

      {/* =========================================================================
          STAGE 04: FULL-BLEED CINEMATIC VISUAL MOMENT ("IMAGINE THE EXPERIENCE")
      ========================================================================= */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden my-8 select-none">
        {/* Full-bleed background visual with smooth parallax */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={treatmentAssets.procedureImage}
            alt={`${treatment.title} procedure atmosphere`}
            offset={40}
            aspectRatio="aspect-auto h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-theme-bg via-transparent to-theme-bg" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <span 
            className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-4 py-1.5 rounded-full border backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: accent?.border || 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
            }}
          >
            <Compass className="w-3 h-3 text-amber-300" />
            <span>The In-Clinic Atmosphere</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            &ldquo;What might your treatment journey feel like?&rdquo;
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Quiet, calm, and unrushed. From your baseline skin evaluation through active treatment and barrier protection, every minute is tailored to your comfort in our Sion East clinic.
          </p>

          <div className="pt-4 flex items-center justify-center space-x-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>&bull; US FDA Safety Calibrated</span>
            <span>&bull; Private Dedicated Lounge</span>
            <span>&bull; Certified Medical Protocol</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 05: WHAT IS THIS TREATMENT & EDITORIAL PULL-QUOTE
      ========================================================================= */}
      <section className="py-20 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Overview text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span 
                className="text-[10px] uppercase tracking-widest-luxury font-semibold px-3 py-1 rounded-full border inline-block"
                style={{
                  backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
                  borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
                  color: primaryColor,
                }}
              >
                Procedural Science
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-theme-fg font-normal">
                How the Science Works
              </h2>
              <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Editorial Pull Quote (5 cols) */}
            <div className="lg:col-span-5">
              {treatment.pullQuote && (
                <div className="p-8 sm:p-10 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury relative overflow-hidden space-y-5">
                  <Quote 
                    className="w-8 h-8 absolute top-6 right-6 opacity-25" 
                    style={{ color: primaryColor }}
                  />
                  <p className="font-serif text-lg sm:text-xl text-theme-fg italic leading-relaxed relative z-10">
                    &ldquo;{treatment.pullQuote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-theme-border">
                    <span className="font-serif text-sm font-medium text-theme-fg block">
                      Dr. Pruthvi Vaity
                    </span>
                    <span 
                      className="text-[11px] block font-medium"
                      style={{ color: primaryColor }}
                    >
                      Lead Aesthetic Physician &bull; HealRx Sion
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 06: INTERACTIVE DISCOVERY (HOTSPOTS ON DEVICE/PROCEDURE)
      ========================================================================= */}
      {treatment.interactiveDiscovery && (
        <TreatmentDiscoveryHotspots
          discovery={treatment.interactiveDiscovery}
          accent={accent}
        />
      )}

      {/* =========================================================================
          STAGE 07: CINEMATIC PROCEDURE JOURNEY (STEP-BY-STEP SCROLLER)
      ========================================================================= */}
      {treatment.procedureJourney && treatment.procedureJourney.length > 0 && (
        <TreatmentProcedureScroller
          steps={treatment.procedureJourney}
          accent={accent}
        />
      )}

      {/* =========================================================================
          STAGE 08: ABSTRACT BIOLOGICAL VISUAL METAPHOR
      ========================================================================= */}
      {treatment.visualMetaphor && (
        <TreatmentVisualMetaphor
          metaphor={treatment.visualMetaphor}
          accent={accent}
          treatmentTitle={treatment.title}
        />
      )}

      {/* =========================================================================
          STAGE 09: EDITORIAL TYPOGRAPHY BENEFITS SECTION (NO BORING ICON CARDS)
      ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <span 
            className="text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-3.5 py-1.5 rounded-full border inline-block"
            style={{
              backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
              borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
              color: primaryColor,
            }}
          >
            Clinical Milestones &bull; Expected Outcomes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-theme-fg font-normal leading-tight">
            The Transformative Milestones
          </h2>
          <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
            Documented biological outcomes based on verified dermatological principles across scheduled protocol courses.
          </p>
        </div>

        {/* Editorial Typographic List with Oversized Numbers and Thin Dividers */}
        <div className="divide-y divide-theme-border/80">
          {treatment.benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              {/* Oversized Numeral (2 cols) */}
              <div className="md:col-span-2">
                <span 
                  className="font-serif text-4xl sm:text-6xl font-light transition-colors duration-300"
                  style={{ color: primaryColor }}
                >
                  0{idx + 1}
                </span>
              </div>

              {/* Title & Description (10 cols) */}
              <div className="md:col-span-10 space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg font-normal group-hover:text-theme-accent transition-colors">
                  {benefit}
                </h3>
                <p className="text-xs sm:text-sm text-theme-fg-muted max-w-2xl leading-relaxed">
                  Carefully calibrated energy density and physiological intervals ensure maximum cellular response without overwhelming the skin barrier.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          STAGE 10: VISUAL COLLAGE & IN-CLINIC GALLERY
      ========================================================================= */}
      {treatment.galleryImages && treatment.galleryImages.length > 0 && (
        <section className="py-24 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="In-Clinic Environment"
              title="THE HEALRX CLINICAL EXPERIENCE"
              subtitle="Explore our dedicated treatment suites, high-precision equipment, and calm clinical setting located in Sion, Mumbai."
            />

            {/* Asymmetrical Collage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-14">
              {treatment.galleryImages.map((item, idx) => {
                const isWide = idx === 0;
                return (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(item)}
                    className={`group relative rounded-3xl overflow-hidden bg-theme-surface border border-theme-border shadow-luxury-sm cursor-pointer hover:border-theme-accent transition-all duration-300 ${
                      isWide ? 'md:col-span-7 aspect-[16/11]' : 'md:col-span-5 aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                        <Maximize2 className="w-4 h-4 text-white/80 group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-xs text-white/80 mt-1 line-clamp-2">{item.caption}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          STAGE 11: MYTH VS CLINICAL REALITY
      ========================================================================= */}
      {treatment.mythsVsFacts && treatment.mythsVsFacts.length > 0 && (
        <TreatmentMythFact
          myths={treatment.mythsVsFacts}
          accent={accent}
        />
      )}

      {/* =========================================================================
          STAGE 12: AUTHENTIC SOURCED PATIENT REVIEWS
      ========================================================================= */}
      {treatment.reviews && treatment.reviews.length > 0 && (
        <section className="py-20 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Verified Experiences"
              title="WHAT OUR PATIENTS SAY"
              subtitle="Authentic feedback from verified patients who underwent this specific procedure at our Sion clinic."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-5xl mx-auto">
              {treatment.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Stars and Platform Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle px-2.5 py-1 rounded-full bg-theme-surface-elevated border border-theme-border">
                        {review.source}
                      </span>
                    </div>

                    <p className="font-serif text-sm sm:text-base text-theme-fg leading-relaxed italic">
                      &ldquo;{review.review}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-theme-border flex items-center justify-between">
                    <div>
                      <span className="font-medium text-xs sm:text-sm text-theme-fg block">
                        {review.reviewer}
                      </span>
                      <span className="text-[11px] text-theme-fg-muted block">
                        {review.location}
                      </span>
                    </div>
                    {review.treatmentSpecific && (
                      <span className="inline-flex items-center text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        Verified Patient
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          STAGE 13: REAL RESULTS (BEFORE / AFTER OR CLINICAL ASSESSMENT)
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Clinical Evidence"
          title="RESULTS & CASE DOCUMENTATION"
          subtitle="Documented outcomes from structured clinical protocols conducted at our clinic."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          {matchingBeforeAfter ? (
            <div className="space-y-6">
              <div className="p-2 sm:p-4 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury">
                <BeforeAfterSlider
                  beforeImage={matchingBeforeAfter.before}
                  afterImage={matchingBeforeAfter.after}
                  title={matchingBeforeAfter.title}
                  subtitle={`Protocol: ${matchingBeforeAfter.treatment} • Timeframe: ${matchingBeforeAfter.timeframe}`}
                />
              </div>
              <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border text-center">
                <p className="text-xs sm:text-sm text-theme-fg-muted">
                  <strong>Clinical Note:</strong> {matchingBeforeAfter.notes} Individual patient responses vary based on dermal genetics, hormonal baseline, and protocol adherence.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-12 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury text-center space-y-6">
              <div 
                className="w-12 h-12 rounded-full border flex items-center justify-center mx-auto"
                style={{
                  backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
                  borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
                  color: primaryColor,
                }}
              >
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                Doctor-Led Photographic Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-theme-fg-muted max-w-xl mx-auto leading-relaxed">
                In accordance with medical ethics and Indian Medical Council patient privacy standards, we do not post unconsented patient facial photographs online. During your personal consultation at HealRx Sion, Dr. Pruthvi Vaity will share authentic, high-magnification photographic case records for patients with similar skin types.
              </p>
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => onOpenBooking(treatment.slug)}
                >
                  Request In-Clinic Case Review
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          STAGE 14: CANDIDATE INDICATIONS & AFTERCARE GUIDANCE
      ========================================================================= */}
      <section className="py-20 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Who It Is For (6 cols) */}
            <div className="lg:col-span-6 bg-theme-surface p-6 sm:p-8 rounded-3xl border border-theme-border shadow-luxury space-y-6">
              <span 
                className="text-[10px] uppercase tracking-widest font-semibold block"
                style={{ color: primaryColor }}
              >
                Candidate Indications
              </span>
              <h3 className="font-serif text-2xl text-theme-fg">
                Who Is An Ideal Candidate?
              </h3>
              <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
                This procedure is calibrated for individuals presenting with the following clinical indications:
              </p>
              <ul className="space-y-3 pt-2">
                {treatment.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-theme-fg-secondary">
                    <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aftercare Guidance (6 cols) */}
            <div className="lg:col-span-6 bg-theme-surface p-6 sm:p-8 rounded-3xl border border-theme-border shadow-luxury space-y-6">
              <span 
                className="text-[10px] uppercase tracking-widest font-semibold block"
                style={{ color: primaryColor }}
              >
                Clinical Guidelines
              </span>
              <h3 className="font-serif text-2xl text-theme-fg flex items-center">
                <ShieldAlert className="w-5 h-5 mr-2" style={{ color: primaryColor }} />
                <span>Post-Procedure Aftercare</span>
              </h3>
              <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
                Adhering to strict post-procedure instructions prevents hyperpigmentation and protects your dermal barrier:
              </p>
              <ul className="space-y-3 pt-2">
                {treatment.aftercare.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-theme-fg-muted">
                    <span 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                      style={{ backgroundColor: primaryColor }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE 15: TREATMENT-SPECIFIC FAQS
      ========================================================================= */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Clinical Clarifications"
          title={`FREQUENTLY ASKED QUESTIONS`}
          subtitle="Conservative medical answers regarding safety, procedural sensation, session counts, and realistic timelines."
        />

        <div className="mt-14">
          <Accordion
            items={treatment.faqs.map((faq, idx) => ({
              id: `t-faq-${idx}`,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </div>
      </section>

      {/* =========================================================================
          STAGE 16: THE FINAL CHAPTER & CONVERSION CLOSE
      ========================================================================= */}
      {/* Bottom Consultation Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 sm:p-14 rounded-3xl bg-theme-surface-elevated text-theme-fg border border-theme-border shadow-luxury text-center space-y-7 relative overflow-hidden">
          <div 
            className="w-12 h-12 rounded-full border flex items-center justify-center mx-auto"
            style={{
              backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
              borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
              color: primaryColor,
            }}
          >
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-theme-fg">
              Ready to Begin Your {treatment.title}?
            </h2>
            <p className="text-theme-fg-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Schedule your confidential clinical consultation with Dr. Pruthvi Vaity at our Sion clinic. We’ll review your medical history, assess your skin, and formulate a realistic protocol.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.25}>
              <button
                onClick={() => onOpenBooking(treatment.slug)}
                className="px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest text-white shadow-luxury hover:opacity-95 active:scale-[0.98] transition-all flex items-center space-x-2"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 10px 30px ${accent?.glow || 'rgba(197, 160, 89, 0.3)'}`,
                }}
              >
                <span>{treatmentCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Magnetic>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-6 py-4 rounded-full border border-theme-border bg-theme-surface text-xs uppercase tracking-widest font-medium text-theme-fg hover:border-theme-accent hover:text-theme-accent transition-colors inline-flex items-center shadow-luxury-sm"
            >
              <Phone className="w-3.5 h-3.5 mr-2" style={{ color: primaryColor }} />
              <span>Call Clinic ({CLINIC_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Related Treatments in Same Category */}
      {relatedTreatments.length > 0 && (
        <section className="py-16 bg-theme-bg-alt border-t border-theme-border transition-colors duration-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span 
                  className="text-[10px] uppercase tracking-widest font-semibold block"
                  style={{ color: primaryColor }}
                >
                  Comprehensive Portfolio
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                  Complementary {treatment.categoryLabel} Procedures
                </h3>
              </div>
              <Link
                to="/treatments"
                className="inline-flex items-center text-xs uppercase tracking-widest hover:underline font-medium"
                style={{ color: primaryColor }}
              >
                <span>View All 9 Treatments</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTreatments.map(rel => (
                <Link
                  key={rel.slug}
                  to={`/treatments/${rel.slug}`}
                  className="group p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury-sm flex items-center justify-between hover:border-theme-accent transition-all"
                >
                  <div className="space-y-2 pr-4">
                    <span 
                      className="text-[10px] uppercase tracking-widest font-semibold"
                      style={{ color: primaryColor }}
                    >
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-serif text-xl text-theme-fg group-hover:text-theme-accent transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-theme-fg-muted line-clamp-1">
                      {rel.tagline}
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-theme-surface-elevated text-theme-fg group-hover:bg-theme-accent group-hover:text-white transition-colors flex-shrink-0 border border-theme-border">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal for Visual Gallery */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-theme-surface rounded-3xl overflow-hidden border border-theme-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] bg-black">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-theme-surface border-t border-theme-border">
              <h3 className="font-serif text-xl text-theme-fg">{lightboxImage.title}</h3>
              <p className="text-xs sm:text-sm text-theme-fg-muted mt-1">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentDetailPage;
