import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  Award, 
  CheckCircle2, 
  Compass, 
  Calendar,
  MessageCircle,
  ChevronRight,
  Star
} from 'lucide-react';
import { CLINIC_INFO, MEDICAL_DIRECTOR, TRUST_PILLARS } from '../data/site';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';
import { ASSETS } from '../data/assets';
import { FAQS } from '../data/faqs';
import { TESTIMONIALS } from '../data/testimonials';
import { HeroCanvas } from '../components/3d/HeroCanvas';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { LightboxGallery } from '../components/ui/LightboxGallery';
import { Accordion } from '../components/ui/Accordion';
import { SEOHead } from '../components/seo/SEOHead';

interface HomePageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 selection:bg-gold-500 selection:text-white">
      <SEOHead
        title="HealRx Aesthetics & Laser Clinic | Sion, Mumbai"
        description="Doctor-led aesthetic and laser clinic in Sion, Mumbai. Advanced laser hair reduction, carbon laser facial, Hydra medi-facials, and hair PRP by Dr. Pruthvi Vaity."
      />

      {/* 1. LUXURY HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-ivory-300/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300/40 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-600 animate-pulse" />
                <span className="text-[11px] uppercase tracking-widest-luxury font-medium text-gold-800">
                  {CLINIC_INFO.address.area} • Mumbai
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-charcoal-900 text-balance">
                SCIENCE FOR YOUR SKIN.<br />
                <span className="italic text-gold-700 font-light">CONFIDENCE</span> FOR YOU.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl text-balance">
                {CLINIC_INFO.subTagline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  showArrow
                  onClick={() => onOpenBooking()}
                >
                  Book A Consultation
                </Button>
                <Button
                  as="a"
                  href="#treatments-section"
                  variant="outline"
                  size="lg"
                >
                  Explore Treatments
                </Button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-stone-600">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span className="font-medium text-charcoal-800">Doctor-Led Protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span className="font-medium text-charcoal-800">Triple-Wavelength Laser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold-600" />
                  <span className="font-medium text-charcoal-800">Ahead of PVR Cinema, Sion</span>
                </div>
              </div>
            </div>

            {/* Right 3D Visual (5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroCanvas className="w-full" />
              
              {/* Floating Aesthetic Micro-Card */}
              <div className="absolute -bottom-4 right-2 sm:right-6 glass-card p-4 rounded-2xl shadow-luxury max-w-[240px] hidden sm:block animate-float-slow">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-charcoal-900">5.0 / 5.0</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-snug">
                  "Painless laser hair reduction & visible skin rejuvenation."
                </p>
                <span className="block text-[9px] uppercase tracking-wider text-gold-600 font-semibold mt-1">
                  Verified Patient Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL TRUST STRIP */}
      <section className="bg-charcoal-900 text-ivory-50 py-6 border-y border-white/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-medium block">
                  {pillar.label}
                </span>
                <p className="text-[11px] text-stone-300 leading-tight">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL ABOUT SECTION */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Imagery (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-gold-300/30 aspect-[4/5]">
                <img
                  src={ASSETS.clinic.consultationSuite}
                  alt="HealRx Consultation Suite Sion Mumbai"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory-100 hidden sm:block aspect-[4/3]">
                <img
                  src={ASSETS.doctor.consultation}
                  alt="Doctor Consultation at HealRx"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Editorial Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                label="The HealRx Medical Philosophy"
                title="YOUR SKIN. YOUR GOALS. YOUR JOURNEY."
                subtitle="At HealRx Aesthetics & Laser Clinic, transformation is personal. Located in Sion Koliwada, Mumbai, we unite medical rigor with bespoke aesthetic artistry."
              />

              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Led by <strong>Dr. Pruthvi Vaity</strong>, our clinic operates on an unwavering principle of conservative, evidence-based care. We reject over-filled or artificial outcomes, focusing instead on cellular skin health, follicular precision, and natural facial harmony.
                </p>
                <p>
                  Every patient journey begins with an in-depth dermatological analysis. Whether you seek permanent laser hair reduction, carbon laser radiance, or acne scar resurfacing, our protocols are calibrated specifically for Indian skin phototypes with maximum safety.
                </p>
              </div>

              {/* Core Tenets Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  'US FDA-compliant laser platforms',
                  'Doctor-conducted evaluations',
                  'Continuous sapphire cooling tech',
                  'Zero downtime radiance protocols',
                  'Transparent, honest guidance',
                  'Convenient Sion East location'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Button
                  as="a"
                  href="/about"
                  variant="primary"
                  size="md"
                  showArrow
                >
                  Learn About Our Clinic
                </Button>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-xs uppercase tracking-widest font-semibold text-gold-700 hover:text-gold-900 underline underline-offset-8 transition-colors"
                >
                  Book Doctor Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENT UNIVERSE SECTION */}
      <section id="treatments-section" className="py-20 sm:py-28 bg-ivory-200/60 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clinical Treatment Universe"
            title="PERSONALIZED PROCEDURES FOR EVERY CONCERN"
            subtitle="Explore our verified clinical treatments spanning advanced laser dermatology, medical skin facials, regenerative hair therapy, and anti-aging aesthetics."
          />

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 my-10">
            {TREATMENT_CATEGORIES.map(category => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                    isActive
                      ? 'bg-charcoal-900 text-ivory-50 shadow-md'
                      : 'bg-white/80 text-charcoal-700 hover:bg-white hover:text-gold-700 border border-stone-200/80'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTreatments.map(treatment => (
              <div
                key={treatment.slug}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-luxury hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-semibold text-charcoal-900">
                      {treatment.categoryLabel}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 group-hover:text-gold-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {treatment.shortDescription}
                    </p>

                    {/* Metadata Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-stone-500">
                      <span className="px-2.5 py-1 bg-ivory-200 rounded-lg">
                        ⏱ {treatment.whatToExpect.duration}
                      </span>
                      <span className="px-2.5 py-1 bg-ivory-200 rounded-lg">
                        ✨ {treatment.whatToExpect.downtime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-charcoal-900 hover:text-gold-600 flex items-center transition-colors"
                  >
                    <span>Treatment Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(treatment.slug)}
                    className="p-2 rounded-full bg-gold-50 text-gold-700 hover:bg-gold-500 hover:text-white transition-colors"
                    title={`Book consultation for ${treatment.title}`}
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              as="a"
              href="/treatments"
              variant="outline"
              size="lg"
            >
              View Complete Medical Treatment Menu ({TREATMENTS.length} Procedures)
            </Button>
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC FEATURED TREATMENT STORY */}
      <section className="py-20 sm:py-28 bg-charcoal-950 text-ivory-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/90 to-transparent z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-gold-400 font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block">
                Signature Clinical Technology
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                TRIPLE WAVELENGTH LASER HAIR REDUCTION.
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Engineered for maximum efficacy on Indian hair and skin phototypes. Our platform synchronizes Alexandrite 755nm, Diode 808nm, and Nd:YAG 1064nm wavelengths simultaneously, targeting all follicular depths while the active sapphire tip protects your skin at a soothing 4°C.
              </p>

              {/* Technical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-serif text-gold-400 block">755 • 808 • 1064</span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 mt-1 block">
                    Synchronized Wavelengths (nm)
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-serif text-gold-400 block">4°C</span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 mt-1 block">
                    Sapphire Contact Chill
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-serif text-gold-400 block">Zero</span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 mt-1 block">
                    Recovery Downtime
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => onOpenBooking('laser-hair-reduction')}
                >
                  Book Laser Consultation
                </Button>
                <Link
                  to="/treatments/laser-hair-reduction"
                  className="text-xs uppercase tracking-widest text-stone-300 hover:text-white underline underline-offset-8"
                >
                  Explore Laser Science →
                </Link>
              </div>
            </div>

            {/* Visual Asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                <img
                  src={ASSETS.treatments.laserHairReduction}
                  alt="Triple Wavelength Laser Hair Reduction at HealRx Sion"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PATIENT JOURNEY (01-04) */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Patient Experience"
            title="AN EVIDENCE-BASED, THOUGHTFUL JOURNEY"
            subtitle="From your first clinical assessment to structured aftercare, every step is transparent, comfortable, and tailored to you."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                step: '01',
                title: 'Clinical Consultation',
                description: 'In-depth examination of your skin type, medical history, and aesthetic aspirations by Dr. Pruthvi Vaity.'
              },
              {
                step: '02',
                title: 'Custom Care Protocol',
                description: 'A customized, transparent treatment blueprint outlining precise technology, sessions, and realistic outcomes.'
              },
              {
                step: '03',
                title: 'Doctor-Led Treatment',
                description: 'Procedural execution in our sterile Sion clinic utilizing calibrated US FDA-compliant laser and skin systems.'
              },
              {
                step: '04',
                title: 'Follow-Up & Longevity',
                description: 'Structured aftercare guidance, medical barrier support, and long-term cellular maintenance planning.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-luxury hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="font-serif text-4xl text-gold-500/60 group-hover:text-gold-600 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal-900 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
                  <span>Step {item.step} of 04</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE BEFORE & AFTER SLIDER */}
      <section className="py-20 sm:py-28 bg-ivory-200/60 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clinical Demonstration"
            title="REAL PROTOCOLS. MEASURABLE RESULTS."
            subtitle="Drag the interactive slider to inspect follicle reduction and textural skin refinement under structured clinical care."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 items-center">
            {/* Slider 1 */}
            <BeforeAfterSlider
              title={ASSETS.beforeAfter[0].title}
              subtitle={ASSETS.beforeAfter[0].notes}
              beforeImage={ASSETS.beforeAfter[0].before}
              afterImage={ASSETS.beforeAfter[0].after}
              beforeLabel="Baseline"
              afterLabel={ASSETS.beforeAfter[0].timeframe}
            />

            {/* Slider 2 */}
            <BeforeAfterSlider
              title={ASSETS.beforeAfter[1].title}
              subtitle={ASSETS.beforeAfter[1].notes}
              beforeImage={ASSETS.beforeAfter[1].before}
              afterImage={ASSETS.beforeAfter[1].after}
              beforeLabel="Baseline"
              afterLabel={ASSETS.beforeAfter[1].timeframe}
            />
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-gold-50/70 border border-gold-200/70 text-center max-w-2xl mx-auto text-xs text-stone-600">
            <p>
              * <strong>Clinical Note:</strong> Results vary based on individual biological response, follicle cycle, and adherence to aftercare protocols. Individualized timelines are reviewed in your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHY HEALRX EDITORIAL VALUE GRID */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <SectionHeading
                align="left"
                label="Why Patients Choose HealRx"
                title="EXCELLENCE IN EVERY DETAIL"
                subtitle="We do not believe in mass-market beauty packages. We deliver calibrated, physician-led aesthetic treatments designed for your longevity."
              />
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenBooking()}
                >
                  Schedule Your Visit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-stone-200/80 border-y border-stone-200/80">
              {[
                {
                  num: '01',
                  title: 'Doctor-Led Consultation & Execution',
                  desc: 'Every treatment is planned and overseen by Medical Director Dr. Pruthvi Vaity, ensuring medical safety and zero over-promising.'
                },
                {
                  num: '02',
                  title: 'Triple-Wavelength Laser Efficacy',
                  desc: 'Simultaneous 755nm, 808nm, and 1064nm wavelengths provide superior results on Indian hair follicles with active sapphire chill cooling.'
                },
                {
                  num: '03',
                  title: 'Natural, Undetectable Refinement',
                  desc: 'Our aesthetic principle celebrates your natural facial contours, avoiding unnatural over-filled results or exaggerated alterations.'
                },
                {
                  num: '04',
                  title: 'Spotless, Private Clinic Lounge in Sion',
                  desc: 'Centrally located in Sion Koliwada (ahead of PVR, opp. Croma), providing private appointment-only suites with strict hygiene.'
                }
              ].map(item => (
                <div key={item.num} className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start group">
                  <span className="sm:col-span-2 font-mono text-xs sm:text-sm text-gold-600 font-bold">
                    {item.num} /
                  </span>
                  <div className="sm:col-span-10 space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 group-hover:text-gold-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. MEDICAL DIRECTOR SPOTLIGHT: DR. PRUTHVI VAITY */}
      <section className="py-20 sm:py-28 bg-charcoal-950 text-ivory-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Portrait (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
                <img
                  src={MEDICAL_DIRECTOR.image}
                  alt={MEDICAL_DIRECTOR.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gold-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-ivory-100" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    India Book of Records
                  </span>
                </div>
                <p className="text-[11px] text-ivory-100/90 mt-1">
                  Award holder for medical seminars across Maharashtra colleges.
                </p>
              </div>
            </div>

            {/* Doctor Bio & Credentials (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-gold-400 font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block">
                Medical Director & Founder
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                {MEDICAL_DIRECTOR.name}
              </h2>

              <p className="text-gold-300 font-medium text-sm sm:text-base">
                {MEDICAL_DIRECTOR.designation}
              </p>

              <blockquote className="border-l-2 border-gold-500 pl-4 py-1 italic font-serif text-lg sm:text-xl text-stone-200">
                "{MEDICAL_DIRECTOR.quote}"
              </blockquote>

              <div className="space-y-3 text-stone-300 text-xs sm:text-sm leading-relaxed">
                {MEDICAL_DIRECTOR.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-2 pt-2">
                {MEDICAL_DIRECTOR.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => onOpenBooking()}
                >
                  Consult Dr. Pruthvi Vaity
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLINIC AMBIANCE & TECHNOLOGY GALLERY */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clinic Ambiance & Technology"
            title="A SANCTUARY OF CLINICAL REFINEMENT"
            subtitle="Explore our modern Sion clinic. Thoughtfully crafted consultation suites, high-spec laser rooms, and private treatment lounges."
          />

          <div className="mt-12">
            <LightboxGallery />
          </div>
        </div>
      </section>

      {/* 11. VERIFIED PATIENT EXPERIENCES */}
      <section className="py-20 sm:py-28 bg-ivory-200/60 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Patient Testimonials"
            title="STORIES OF CONFIDENCE & RESTORATION"
            subtitle="Read verified feedback from patients who have experienced our doctor-led laser and skin treatments in Sion, Mumbai."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {TESTIMONIALS.map(t => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-luxury flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500" />
                    ))}
                  </div>
                  <p className="font-serif text-lg text-charcoal-900 leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-charcoal-900">{t.patientName}</h4>
                    <span className="text-[11px] text-stone-500">{t.treatment}</span>
                  </div>
                  <span className="text-[11px] text-gold-700 font-medium px-2.5 py-1 bg-gold-50 rounded-full border border-gold-200/50">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CLINICAL FAQS */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            title="FREQUENTLY ASKED CLINICAL QUESTIONS"
            subtitle="Everything you need to know about preparing for your aesthetic consultation, laser hair reduction, and treatment aftercare."
          />

          <div className="mt-12">
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* 13. INTERACTIVE VISIT PLANNER & SION LOCATION */}
      <section className="py-20 sm:py-28 bg-charcoal-950 text-ivory-50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visit Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-gold-400 font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block">
                Visit HealRx Sion
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                CONVENIENTLY LOCATED IN SION EAST, MUMBAI
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {CLINIC_INFO.locationNote}
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-stone-300">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Exact Clinic Address:</strong>
                    <span>{CLINIC_INFO.address.full}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3">
                  <Compass className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Landmarks:</strong>
                    <span>Directly Opposite Croma Store & Ahead of PVR Cinema Sion Koliwada.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Operating Hours:</strong>
                    <span>{CLINIC_INFO.hours.days}: {CLINIC_INFO.hours.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={CLINIC_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-500 text-white rounded-full font-medium text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors inline-flex items-center shadow-luxury"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Google Maps Directions
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-6 py-3.5 bg-white/10 text-white rounded-full font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-colors inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {CLINIC_INFO.displayPhone}
                </a>
              </div>
            </div>

            {/* Interactive Simulated Map Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-charcoal-900 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-medium">
                    Sion East Map Hub
                  </span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="space-y-3 my-auto">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">
                    HealRx Aesthetics & Laser Clinic
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300">
                    C Wing 102, Shivkoliwada CHS, Opp. Croma Store, Sion, Mumbai
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-stone-400">
                    <span className="px-2.5 py-1 bg-white/10 rounded-lg">📍 Opp Croma Store</span>
                    <span className="px-2.5 py-1 bg-white/10 rounded-lg">🎬 Ahead of PVR Cinema</span>
                    <span className="px-2.5 py-1 bg-white/10 rounded-lg">🚆 5 Mins from Sion Station</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Open Today until 10:00 PM</span>
                  <a
                    href={CLINIC_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-gold-400 hover:text-gold-300 font-semibold underline"
                  >
                    Open Live Navigation ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FINAL LUXURY CONSULTATION CTA BANNER */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-ivory-100 to-ivory-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block">
            Begin Your Skin Transformation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-charcoal-900 leading-tight text-balance">
            READY TO EXPERIENCE EVIDENCE-BASED AESTHETIC CARE?
          </h2>

          <p className="text-stone-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            Schedule a dedicated, confidential consultation with Medical Director Dr. Pruthvi Vaity at our Sion clinic today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              showArrow
              onClick={() => onOpenBooking()}
            >
              Book A Consultation
            </Button>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#20ba5a] transition-all shadow-md inline-flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
