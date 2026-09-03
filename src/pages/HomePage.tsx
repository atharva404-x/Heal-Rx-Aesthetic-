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
import { PatientJourney } from '../components/home/PatientJourney';
import { FadeIn, TextReveal, Magnetic } from '../components/motion/MotionPrimitives';

interface HomePageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-fg selection:bg-theme-accent selection:text-white transition-colors duration-400">
      <SEOHead
        title="HealRx Aesthetics & Laser Clinic | Sion, Mumbai"
        description="Doctor-led aesthetic and laser clinic in Sion, Mumbai. Advanced laser hair reduction, carbon laser facial, Hydra medi-facials, and hair PRP by Dr. Pruthvi Vaity."
      />

      {/* 1. LUXURY HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-accent-surface rounded-full blur-3xl pointer-events-none -z-10 opacity-70" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-theme-accent-surface rounded-full blur-3xl pointer-events-none -z-10 opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight shadow-luxury-sm">
                  <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
                  <span className="text-[11px] uppercase tracking-widest-luxury font-medium text-theme-accent">
                    {CLINIC_INFO.address.area} • Mumbai
                  </span>
                </div>
              </FadeIn>

              {/* Mask/Clip Typography Reveal for Luxury Headline */}
              <div className="space-y-1">
                <TextReveal delay={0.1} as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-theme-fg">
                  SCIENCE FOR YOUR SKIN.
                </TextReveal>
                <TextReveal delay={0.2} as="h1" className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-theme-fg">
                  <span className="italic text-theme-accent font-light">CONFIDENCE</span> FOR YOU.
                </TextReveal>
              </div>

              <FadeIn delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl text-theme-fg-muted leading-relaxed max-w-xl text-balance">
                  {CLINIC_INFO.subTagline}
                </p>
              </FadeIn>

              {/* CTAs with subtle Magnetic effect on Desktop */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Magnetic strength={0.25}>
                    <Button
                      variant="primary"
                      size="lg"
                      showArrow
                      onClick={() => onOpenBooking()}
                    >
                      Book A Consultation
                    </Button>
                  </Magnetic>
                  <Button
                    as="a"
                    href="#treatments-section"
                    variant="outline"
                    size="lg"
                  >
                    Explore Treatments
                  </Button>
                </div>
              </FadeIn>

              {/* Quick Trust Highlights */}
              <FadeIn delay={0.5}>
                <div className="pt-6 border-t border-theme-border flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-theme-fg-muted">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-theme-accent" />
                    <span className="font-medium text-theme-fg">Doctor-Led Protocols</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-theme-accent" />
                    <span className="font-medium text-theme-fg">Triple-Wavelength Laser</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-theme-accent" />
                    <span className="font-medium text-theme-fg">Ahead of PVR Cinema, Sion</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right 3D Visual (5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroCanvas className="w-full" />
              
              {/* Floating Aesthetic Micro-Card */}
              <div className="absolute -bottom-4 right-2 sm:right-6 glass-card p-4 rounded-2xl shadow-luxury max-w-[240px] hidden sm:block animate-float-slow transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-theme-fg">5.0 Rating</span>
                </div>
                <p className="text-[11px] text-theme-fg-muted leading-tight">
                  &ldquo;Remarkable precision laser results under Dr. Pruthvi Vaity.&rdquo;
                </p>
                <span className="text-[10px] text-theme-accent uppercase tracking-wider block mt-1">
                  Verified Sion Patient
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST PILLARS STRIP */}
      <section className="border-y border-theme-border bg-theme-surface transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-theme-border">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div key={pillar.label} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''}`}>
                <span className="font-mono text-xs text-theme-accent font-semibold block mb-1">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-lg text-theme-fg font-medium">
                  {pillar.label}
                </h3>
                <p className="text-xs text-theme-fg-muted mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLINICAL PHILOSOPHY / WHY HEALRX */}
      <section className="py-20 sm:py-28 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Framing */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-theme-border aspect-[4/5] group">
                <img
                  src={ASSETS.clinic.treatmentRoom1}
                  alt="HealRx Aesthetic Clinical Suite Sion"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-charcoal-900/60 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-gold-300 font-medium block">
                    Sterile Sanctuary
                  </span>
                  <span className="font-serif text-sm">
                    Private Consultation &amp; Laser Rooms
                  </span>
                </div>
              </div>
            </div>

            {/* Right Editorial Story */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                label="Clinical Philosophy"
                title="A DOCTOR-LED APPROACH TO CELLULAR LONGEVITY"
                subtitle="True aesthetic medicine operates at the confluence of dermatology, laser physics, and regenerative science. We do not mask concerns; we optimize cellular renewal."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
                <div className="space-y-2 p-5 rounded-2xl bg-theme-surface border border-theme-border shadow-luxury-sm">
                  <h4 className="font-serif text-base text-theme-fg font-medium">
                    Evidence-Based Calibration
                  </h4>
                  <p>
                    Every laser pulse, peel concentration, and mesotherapy formulation is precisely chosen according to your Fitzpatrick phototype and tissue thickness.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-theme-surface border border-theme-border shadow-luxury-sm">
                  <h4 className="font-serif text-base text-theme-fg font-medium">
                    Zero Over-Correction
                  </h4>
                  <p>
                    We hold a firm medical conviction against unnatural distortion. Our ethos celebrates your authentic anatomy with subtle, undetectable refinement.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-6">
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={() => onOpenBooking()}
                >
                  Meet Dr. Pruthvi Vaity
                </Button>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-widest font-semibold text-theme-fg hover:text-theme-accent transition-colors"
                >
                  Read Clinic Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE TREATMENTS SECTION */}
      <section id="treatments-section" className="py-20 sm:py-28 lg:py-32 bg-theme-bg-alt border-t border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Medical Treatment Menu"
            title="PRECISION AESTHETIC & LASER PROCEDURES"
            subtitle="Explore our physician-formulated clinical protocols across laser dermatology, regenerative hair therapy, and specialized skin resurfacing."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-10 sm:my-14">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-theme-btn-primary-bg text-theme-btn-primary-fg shadow-luxury'
                  : 'bg-theme-surface text-theme-fg-muted hover:text-theme-fg border border-theme-border'
              }`}
            >
              All Procedures ({TREATMENTS.length})
            </button>
            {TREATMENT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-theme-btn-primary-bg text-theme-btn-primary-fg shadow-luxury'
                    : 'bg-theme-surface text-theme-fg-muted hover:text-theme-fg border border-theme-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Treatment Cards Grid with micro-interactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="group rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent/50 shadow-luxury-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Visual with image hover zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-theme-surface/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-semibold text-theme-accent border border-theme-border">
                      {treatment.categoryLabel}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-theme-fg group-hover:text-theme-accent transition-colors leading-snug">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed line-clamp-2">
                      {treatment.shortDescription}
                    </p>

                    {/* Metadata Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-theme-fg-subtle">
                      <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border">
                        ⏱ {treatment.whatToExpect.duration}
                      </span>
                      <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border">
                        ✨ {treatment.whatToExpect.downtime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-theme-border mt-4">
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-theme-fg hover:text-theme-accent flex items-center transition-colors"
                  >
                    <span>Treatment Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 text-theme-accent" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(treatment.slug)}
                    className="p-2.5 rounded-full bg-theme-accent-surface text-theme-accent hover:bg-theme-accent hover:text-white transition-colors border border-theme-border-highlight shadow-sm"
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
      <section className="py-20 sm:py-28 bg-theme-surface-elevated text-theme-fg border-y border-theme-border relative overflow-hidden transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-theme-accent font-medium px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
                Signature Clinical Technology
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-theme-fg">
                TRIPLE WAVELENGTH LASER HAIR REDUCTION.
              </h2>

              <p className="text-theme-fg-muted text-sm sm:text-base leading-relaxed max-w-xl">
                Engineered for maximum efficacy on Indian hair and skin phototypes. Our platform synchronizes Alexandrite 755nm, Diode 808nm, and Nd:YAG 1064nm wavelengths simultaneously, targeting all follicular depths while the active sapphire tip protects your skin at a soothing 4°C.
              </p>

              {/* Technical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border shadow-luxury-sm">
                  <span className="text-2xl font-serif text-theme-accent block">755 • 808 • 1064</span>
                  <span className="text-[11px] uppercase tracking-wider text-theme-fg-muted mt-1 block">
                    Synchronized Wavelengths (nm)
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border shadow-luxury-sm">
                  <span className="text-2xl font-serif text-theme-accent block">4°C</span>
                  <span className="text-[11px] uppercase tracking-wider text-theme-fg-muted mt-1 block">
                    Sapphire Contact Chill
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border shadow-luxury-sm">
                  <span className="text-2xl font-serif text-theme-accent block">Zero</span>
                  <span className="text-[11px] uppercase tracking-wider text-theme-fg-muted mt-1 block">
                    Recovery Downtime
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenBooking('laser-hair-reduction')}
                >
                  Book Laser Consultation
                </Button>
                <Link
                  to="/treatments/laser-hair-reduction"
                  className="text-xs uppercase tracking-widest text-theme-fg hover:text-theme-accent underline underline-offset-8 transition-colors"
                >
                  Explore Laser Science →
                </Link>
              </div>
            </div>

            {/* Visual Asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-luxury border border-theme-border aspect-[4/3] group">
                <img
                  src={ASSETS.treatments.laserHairReduction}
                  alt="Triple Wavelength Laser Hair Reduction at HealRx Sion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE PATIENT JOURNEY (01-04) */}
      <PatientJourney onOpenBooking={() => onOpenBooking()} />

      {/* 7. INTERACTIVE BEFORE & AFTER SLIDER */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clinical Visual Documentation"
            title="MEASURABLE CLINICAL RESTORATION"
            subtitle="Drag the central divider to inspect follicular reduction, dermal re-texturing, and pigmentation clarification across actual patient protocols."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {ASSETS.beforeAfter.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                beforeImage={item.before}
                afterImage={item.after}
                title={item.title}
                subtitle={`${item.treatment} • ${item.timeframe}`}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-theme-fg-subtle max-w-xl mx-auto leading-relaxed">
              * <strong>Clinical Note:</strong> Results vary based on individual biological response, follicle cycle, and adherence to aftercare protocols. Individualized timelines are reviewed in your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHY HEALRX EDITORIAL VALUE GRID */}
      <section className="py-20 sm:py-28 lg:py-32 bg-theme-bg-alt border-t border-theme-border transition-colors duration-400">
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
                <Magnetic strength={0.2}>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onOpenBooking()}
                  >
                    Schedule Your Visit
                  </Button>
                </Magnetic>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-theme-border border-y border-theme-border">
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
                  <span className="sm:col-span-2 font-mono text-xs sm:text-sm text-theme-accent font-bold">
                    {item.num} /
                  </span>
                  <div className="sm:col-span-10 space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-theme-fg group-hover:text-theme-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
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
      <section className="py-20 sm:py-28 bg-theme-surface text-theme-fg border-t border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Portrait (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-luxury border border-theme-border aspect-[4/5] group">
                <img
                  src={MEDICAL_DIRECTOR.image}
                  alt={MEDICAL_DIRECTOR.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-theme-accent text-white p-4 sm:p-6 rounded-2xl shadow-luxury max-w-xs hidden sm:block border border-white/10">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    India Book of Records
                  </span>
                </div>
                <p className="text-[11px] text-white/90 mt-1">
                  Award holder for medical seminars across Maharashtra colleges.
                </p>
              </div>
            </div>

            {/* Doctor Bio & Credentials (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-theme-accent font-medium px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
                Medical Director &amp; Founder
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-fg">
                {MEDICAL_DIRECTOR.name}
              </h2>

              <p className="text-theme-accent font-medium text-sm sm:text-base">
                {MEDICAL_DIRECTOR.designation}
              </p>

              <blockquote className="border-l-2 border-theme-accent pl-4 py-1 italic font-serif text-lg sm:text-xl text-theme-fg-secondary">
                &ldquo;{MEDICAL_DIRECTOR.quote}&rdquo;
              </blockquote>

              <div className="space-y-3 text-theme-fg-muted text-xs sm:text-sm leading-relaxed">
                {MEDICAL_DIRECTOR.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-2 pt-2">
                {MEDICAL_DIRECTOR.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-theme-fg-muted">
                    <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Magnetic strength={0.2}>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => onOpenBooking()}
                  >
                    Consult Dr. Pruthvi Vaity
                  </Button>
                </Magnetic>
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
      <section className="py-20 sm:py-28 bg-theme-bg-alt border-t border-theme-border transition-colors duration-400">
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
                className="p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="font-serif text-lg text-theme-fg leading-relaxed italic">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-theme-fg">{t.patientName}</h4>
                    <span className="text-[11px] text-theme-fg-muted">{t.treatment}</span>
                  </div>
                  <span className="text-[11px] text-theme-accent font-medium px-2.5 py-1 bg-theme-accent-surface rounded-full border border-theme-border-highlight">
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
      <section className="py-20 sm:py-28 bg-theme-surface-elevated text-theme-fg border-t border-theme-border transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visit Details (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-widest-luxury text-theme-accent font-medium px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
                Visit HealRx Sion
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-theme-fg">
                CONVENIENTLY LOCATED IN SION EAST, MUMBAI
              </h2>

              <p className="text-theme-fg-muted text-sm sm:text-base leading-relaxed">
                {CLINIC_INFO.locationNote}
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-theme-fg-muted">
                <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-start space-x-3 shadow-luxury-sm">
                  <MapPin className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-theme-fg block font-medium">Exact Clinic Address:</strong>
                    <span>{CLINIC_INFO.address.full}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-start space-x-3 shadow-luxury-sm">
                  <Compass className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-theme-fg block font-medium">Landmarks:</strong>
                    <span>Directly Opposite Croma Store &amp; Ahead of PVR Cinema Sion Koliwada.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-start space-x-3 shadow-luxury-sm">
                  <Clock className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-theme-fg block font-medium">Operating Hours:</strong>
                    <span>{CLINIC_INFO.hours.days}: {CLINIC_INFO.hours.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={CLINIC_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-theme-btn-primary-bg text-theme-btn-primary-fg rounded-full font-medium text-xs uppercase tracking-widest hover:opacity-90 transition-colors inline-flex items-center shadow-luxury"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Google Maps Directions
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-6 py-3.5 bg-theme-surface border border-theme-border text-theme-fg rounded-full font-medium text-xs uppercase tracking-widest hover:bg-theme-surface-elevated transition-colors inline-flex items-center shadow-luxury-sm"
                >
                  <Phone className="w-4 h-4 mr-2 text-theme-accent" />
                  Call {CLINIC_INFO.displayPhone}
                </a>
              </div>
            </div>

            {/* Interactive Location Hub Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-theme-border aspect-[4/3] bg-theme-surface flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-theme-accent font-medium">
                    Sion East Map Hub
                  </span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="space-y-3 my-auto">
                  <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                    HealRx Aesthetics &amp; Laser Clinic
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-fg-muted">
                    C Wing 102, Shivkoliwada CHS, Opp. Croma Store, Sion, Mumbai
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-theme-fg-subtle">
                    <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border">📍 Opp Croma Store</span>
                    <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border">🎬 Ahead of PVR Cinema</span>
                    <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border">🚆 5 Mins from Sion Station</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                  <span className="text-xs text-theme-fg-muted">Open Today until 10:00 PM</span>
                  <a
                    href={CLINIC_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-theme-accent hover:underline font-semibold"
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
      <section className="py-20 sm:py-28 bg-theme-bg-alt border-t border-theme-border transition-colors duration-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest-luxury text-theme-accent font-semibold px-4 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
            Begin Your Skin Transformation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-theme-fg leading-tight text-balance">
            READY TO EXPERIENCE EVIDENCE-BASED AESTHETIC CARE?
          </h2>

          <p className="text-theme-fg-muted text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            Schedule a dedicated, confidential consultation with Medical Director Dr. Pruthvi Vaity at our Sion clinic today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic strength={0.25}>
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => onOpenBooking()}
              >
                Book A Consultation
              </Button>
            </Magnetic>
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

export default HomePage;
