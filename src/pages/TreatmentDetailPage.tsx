import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
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

interface TreatmentDetailPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = TREATMENTS.find(t => t.slug === slug);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  const relatedTreatments = TREATMENTS
    .filter(t => t.category === treatment.category && t.slug !== treatment.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title={`${treatment.title} | HealRx Sion Mumbai`}
        description={treatment.shortDescription}
      />

      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          to="/treatments"
          className="inline-flex items-center text-xs uppercase tracking-widest text-stone-500 hover:text-gold-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2" />
          <span>Back to All Treatments</span>
        </Link>
      </div>

      {/* Treatment Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-widest-luxury text-gold-700 font-semibold px-3.5 py-1.5 rounded-full bg-gold-100/70 border border-gold-300/50 inline-block">
              {treatment.categoryLabel}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-tight">
              {treatment.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
              {treatment.tagline}
            </p>

            {/* Quick Spec Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Duration</span>
                <span className="text-xs sm:text-sm font-semibold text-charcoal-900 mt-0.5 block">
                  {treatment.whatToExpect.duration}
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Downtime</span>
                <span className="text-xs sm:text-sm font-semibold text-charcoal-900 mt-0.5 block">
                  {treatment.whatToExpect.downtime}
                </span>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Sessions</span>
                <span className="text-xs sm:text-sm font-semibold text-charcoal-900 mt-0.5 block">
                  {treatment.whatToExpect.sessionCount.split(' ')[0]} {treatment.whatToExpect.sessionCount.split(' ')[1] || 'Sessions'}
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => onOpenBooking(treatment.slug)}
              >
                Book This Treatment
              </Button>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-4 rounded-full border border-stone-300 text-xs uppercase tracking-widest font-medium text-charcoal-900 hover:border-gold-500 hover:text-gold-700 transition-colors inline-flex items-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-gold-600" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Right Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gold-300/30 aspect-[4/3] bg-charcoal-900">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Overview & Indications */}
      <section className="py-16 bg-ivory-200/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Full Clinical Overview (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                Clinical Overview & Science
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {treatment.fullDescription}
              </p>

              <div className="pt-4 space-y-4">
                <h3 className="font-serif text-xl text-charcoal-900">
                  Key Clinical Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-charcoal-800">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Candidate Profile / Who It Is For (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold block">
                Candidate Indications
              </span>
              <h3 className="font-serif text-2xl text-charcoal-900">
                Who Is This Treatment For?
              </h3>
              <ul className="space-y-3 pt-2">
                {treatment.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-600">
                    <Sparkles className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
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
              className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-luxury flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl text-gold-500/70">{step.step}</span>
                <h4 className="font-serif text-xl text-charcoal-900">{step.title}</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400">
                Phase {step.step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect Table & Aftercare */}
      <section className="py-16 bg-ivory-200/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Quick Reference Table (6 cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4">
              <h3 className="font-serif text-2xl text-charcoal-900">
                Treatment Specifications
              </h3>
              <div className="divide-y divide-stone-100 text-xs sm:text-sm">
                <div className="py-3 flex justify-between items-center">
                  <span className="text-stone-500">Treatment Duration</span>
                  <span className="font-semibold text-charcoal-900">{treatment.whatToExpect.duration}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-stone-500">Anesthesia</span>
                  <span className="font-semibold text-charcoal-900">{treatment.whatToExpect.anesthesia}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-stone-500">Recovery Downtime</span>
                  <span className="font-semibold text-charcoal-900">{treatment.whatToExpect.downtime}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-stone-500">Results Visibility</span>
                  <span className="font-semibold text-charcoal-900">{treatment.whatToExpect.resultsVisibility}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-stone-500">Session Frequency</span>
                  <span className="font-semibold text-charcoal-900">{treatment.whatToExpect.sessionCount}</span>
                </div>
              </div>
            </div>

            {/* Aftercare Guidance (6 cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-luxury space-y-4">
              <h3 className="font-serif text-2xl text-charcoal-900 flex items-center">
                <ShieldAlert className="w-5 h-5 text-gold-600 mr-2" />
                <span>Post-Procedure Aftercare</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {treatment.aftercare.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-2 flex-shrink-0" />
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
        <section className="py-16 bg-ivory-200/60 border-t border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-8">
              Complementary {treatment.categoryLabel} Procedures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTreatments.map(rel => (
                <Link
                  key={rel.slug}
                  to={`/treatments/${rel.slug}`}
                  className="group p-6 rounded-3xl bg-white border border-stone-200/80 shadow-luxury flex items-center justify-between hover:border-gold-400 transition-all"
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-serif text-xl text-charcoal-900 group-hover:text-gold-700 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-1">
                      {rel.tagline}
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-ivory-200 text-charcoal-900 group-hover:bg-gold-500 group-hover:text-white transition-colors flex-shrink-0">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-950 text-ivory-50 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Schedule Your {treatment.title} Consultation
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-lg mx-auto">
            Meet with Dr. Pruthvi Vaity at our Sion clinic to review your suitability and begin your personalized treatment plan.
          </p>
          <div className="pt-2">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onOpenBooking(treatment.slug)}
            >
              Book Treatment Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
