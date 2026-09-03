import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  ArrowLeft, 
  ChevronRight, 
  Phone 
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { CLINIC_INFO } from '../data/site';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEOHead } from '../components/seo/SEOHead';
import { TextReveal, Magnetic } from '../components/motion/MotionPrimitives';

interface TreatmentDetailPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = TREATMENTS.find(t => t.slug === slug);

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
            The procedure &ldquo;{slug}&rdquo; is not currently listed or may have been renamed in our clinical portfolio.
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

  return (
    <div className="min-h-screen bg-theme-bg text-theme-fg pt-28 sm:pt-36 pb-20 transition-colors duration-400">
      <SEOHead
        title={`${treatment.title} in Sion, Mumbai | HealRx Clinic`}
        description={`${treatment.shortDescription} Performed by Dr. Pruthvi Vaity at HealRx Aesthetics & Laser Clinic, Sion, Mumbai.`}
      />

      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <Link
          to="/treatments"
          className="inline-flex items-center text-xs uppercase tracking-widest text-theme-fg-muted hover:text-theme-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>Back to All Procedures</span>
        </Link>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest-luxury text-theme-accent font-semibold px-3 py-1 rounded-full bg-theme-accent-surface border border-theme-border-highlight">
                {treatment.categoryLabel}
              </span>
              <span className="text-xs text-theme-fg-subtle">• Medical Protocol</span>
            </div>

            <TextReveal delay={0.1} as="h1" className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.1] text-theme-fg">
              {treatment.title}
            </TextReveal>

            <p className="font-serif text-lg sm:text-xl text-theme-accent italic">
              &ldquo;{treatment.tagline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed max-w-xl">
              {treatment.shortDescription}
            </p>

            {/* Treatment Fast Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-theme-surface rounded-2xl border border-theme-border shadow-luxury-sm">
                <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle block">Duration</span>
                <span className="text-xs sm:text-sm font-semibold text-theme-fg mt-0.5 block">
                  {treatment.whatToExpect.duration}
                </span>
              </div>

              <div className="p-3.5 bg-theme-surface rounded-2xl border border-theme-border shadow-luxury-sm">
                <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle block">Downtime</span>
                <span className="text-xs sm:text-sm font-semibold text-theme-fg mt-0.5 block">
                  {treatment.whatToExpect.downtime}
                </span>
              </div>

              <div className="p-3.5 bg-theme-surface rounded-2xl border border-theme-border shadow-luxury-sm col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle block">Sessions</span>
                <span className="text-xs sm:text-sm font-semibold text-theme-fg mt-0.5 block">
                  {treatment.whatToExpect.sessionCount.split(' ')[0]} {treatment.whatToExpect.sessionCount.split(' ')[1] || 'Sessions'}
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.25}>
                <Button
                  variant="primary"
                  size="lg"
                  showArrow
                  onClick={() => onOpenBooking(treatment.slug)}
                >
                  Book This Treatment
                </Button>
              </Magnetic>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-4 rounded-full border border-theme-border bg-theme-surface text-xs uppercase tracking-widest font-medium text-theme-fg hover:border-theme-accent hover:text-theme-accent transition-colors inline-flex items-center shadow-luxury-sm"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-theme-accent" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-luxury border border-theme-border aspect-[4/3] bg-theme-surface-elevated group">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Overview & Indications */}
      <section className="py-16 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Full Clinical Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                Clinical Overview &amp; Science
              </h2>
              <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed">
                {treatment.fullDescription}
              </p>

              <div className="pt-4 space-y-4">
                <h3 className="font-serif text-xl text-theme-fg">
                  Key Clinical Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-theme-fg-secondary">
                      <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Candidate Profile / Who It Is For (5 cols) */}
            <div className="lg:col-span-5 bg-theme-surface p-6 sm:p-8 rounded-3xl border border-theme-border shadow-luxury space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-theme-accent font-bold block">
                Candidate Indications
              </span>
              <h3 className="font-serif text-2xl text-theme-fg">
                Who Is This Treatment For?
              </h3>
              <ul className="space-y-3 pt-2">
                {treatment.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-theme-fg-muted">
                    <Sparkles className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Protocol"
          title="HOW THE PROCEDURE IS CONDUCTED"
          subtitle="A structured, sterile step-by-step clinical protocol to ensure safety, comfort, and efficacy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {treatment.process.map(step => (
            <div
              key={step.step}
              className="p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl text-theme-accent/70">{step.step}</span>
                <h4 className="font-serif text-xl text-theme-fg">{step.title}</h4>
                <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-theme-fg-subtle">
                Phase {step.step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect Table & Aftercare */}
      <section className="py-16 bg-theme-bg-alt border-y border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Quick Reference Table (6 cols) */}
            <div className="lg:col-span-6 bg-theme-surface p-6 sm:p-8 rounded-3xl border border-theme-border shadow-luxury space-y-4">
              <h3 className="font-serif text-2xl text-theme-fg">
                Treatment Specifications
              </h3>
              <div className="divide-y divide-theme-border text-xs sm:text-sm">
                <div className="py-3 flex justify-between items-center">
                  <span className="text-theme-fg-muted">Treatment Duration</span>
                  <span className="font-semibold text-theme-fg">{treatment.whatToExpect.duration}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-theme-fg-muted">Anesthesia</span>
                  <span className="font-semibold text-theme-fg">{treatment.whatToExpect.anesthesia}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-theme-fg-muted">Recovery Downtime</span>
                  <span className="font-semibold text-theme-fg">{treatment.whatToExpect.downtime}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-theme-fg-muted">Results Visibility</span>
                  <span className="font-semibold text-theme-fg">{treatment.whatToExpect.resultsVisibility}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-theme-fg-muted">Session Frequency</span>
                  <span className="font-semibold text-theme-fg">{treatment.whatToExpect.sessionCount}</span>
                </div>
              </div>
            </div>

            {/* Aftercare Guidance (6 cols) */}
            <div className="lg:col-span-6 bg-theme-surface p-6 sm:p-8 rounded-3xl border border-theme-border shadow-luxury space-y-4">
              <h3 className="font-serif text-2xl text-theme-fg flex items-center">
                <ShieldAlert className="w-5 h-5 text-theme-accent mr-2" />
                <span>Post-Procedure Aftercare</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {treatment.aftercare.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-theme-fg-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Treatment FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Clinical Questions"
          title={`FAQS REGARDING ${treatment.title.toUpperCase()}`}
          subtitle="Clear, conservative answers regarding procedural safety, comfort, and expectations."
        />

        <div className="mt-12">
          <Accordion
            items={treatment.faqs.map((faq, idx) => ({
              id: `t-faq-${idx}`,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </div>
      </section>

      {/* Related Treatments in Same Category */}
      {relatedTreatments.length > 0 && (
        <section className="py-16 bg-theme-bg-alt border-t border-theme-border transition-colors duration-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg mb-8">
              Complementary {treatment.categoryLabel} Procedures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTreatments.map(rel => (
                <Link
                  key={rel.slug}
                  to={`/treatments/${rel.slug}`}
                  className="group p-6 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury-sm flex items-center justify-between hover:border-theme-accent transition-all"
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-[10px] uppercase tracking-widest text-theme-accent font-semibold">
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

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-theme-surface-elevated text-theme-fg border border-theme-border shadow-luxury text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-theme-fg">
            Schedule Your {treatment.title} Consultation
          </h2>
          <p className="text-theme-fg-muted text-sm sm:text-base max-w-lg mx-auto">
            Meet with Dr. Pruthvi Vaity at our Sion clinic to review your suitability and begin your personalized treatment plan.
          </p>
          <div className="pt-2">
            <Magnetic strength={0.25}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenBooking(treatment.slug)}
              >
                Book Treatment Consultation
              </Button>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetailPage;
