import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Sparkles, Clock, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../../data/treatments';
import { Treatment } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FadeIn, ImageReveal, usePrefersReducedMotion } from '../motion/MotionPrimitives';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentsHorizontalSequenceProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentsHorizontalSequence: React.FC<TreatmentsHorizontalSequenceProps> = ({
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 1024;
  });

  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  // Track responsive breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop GSAP horizontal editorial scroll timeline
  useEffect(() => {
    if (!isDesktop || prefersReducedMotion || !sectionRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        return Math.max(0, trackWidth - windowWidth + 120);
      };

      const scrollTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount() + 300}`,
          pin: true,
          scrub: 0.9,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const count = filteredTreatments.length;
            if (count > 0) {
              const current = Math.min(Math.floor(self.progress * count), count - 1);
              setActiveIndex(current);
            }
          },
        },
      });

      return () => {
        scrollTween.kill();
      };
    }, sectionRef);

    // Refresh ScrollTrigger when category filter changes layout
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [isDesktop, selectedCategory, filteredTreatments.length, prefersReducedMotion]);

  return (
    <section
      id="treatments-section"
      className="relative bg-theme-bg-alt border-t border-theme-border transition-colors duration-400"
    >
      {/* Category Filter Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
        <SectionHeading
          label="Medical Treatment Menu"
          title="PRECISION AESTHETIC & LASER PROCEDURES"
          subtitle="Explore our physician-formulated clinical protocols across laser dermatology, regenerative hair therapy, and specialized skin resurfacing."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-10 sm:my-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-theme-btn-primary-bg text-theme-btn-primary-fg shadow-luxury scale-105'
                : 'bg-theme-surface text-theme-fg-muted hover:text-theme-fg border border-theme-border'
            }`}
          >
            All Procedures ({TREATMENTS.length})
          </button>
          {TREATMENT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-theme-btn-primary-bg text-theme-btn-primary-fg shadow-luxury scale-105'
                  : 'bg-theme-surface text-theme-fg-muted hover:text-theme-fg border border-theme-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW: Pinned Controlled Horizontal Editorial Sequence */}
      {isDesktop && !prefersReducedMotion ? (
        <div ref={sectionRef} className="h-screen w-full overflow-hidden flex flex-col justify-center relative">
          {/* Header indicator bar */}
          <div className="max-w-7xl w-full mx-auto px-8 mb-6 flex items-center justify-between text-xs text-theme-fg-muted">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-medium text-theme-fg">
                Horizontal Editorial Gallery
              </span>
            </div>
            <div className="flex items-center space-x-3 font-mono text-[11px]">
              <span className="text-theme-accent font-semibold">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-theme-fg-subtle">/</span>
              <span>{String(filteredTreatments.length).padStart(2, '0')} Procedures</span>
            </div>
          </div>

          {/* Horizontal Sliding Track */}
          <div
            ref={trackRef}
            className="flex items-stretch gap-8 px-8 sm:px-12 w-max"
            style={{ willChange: 'transform' }}
          >
            {filteredTreatments.map((treatment, idx) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                isActive={idx === activeIndex}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>

          {/* Bottom Progress Hairline */}
          <div className="max-w-7xl w-full mx-auto px-8 mt-8">
            <div className="w-full h-[2px] bg-theme-border rounded-full overflow-hidden">
              <div
                className="h-full bg-theme-accent transition-all duration-300 ease-out"
                style={{
                  width: `${((activeIndex + 1) / filteredTreatments.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* MOBILE & REDUCED MOTION VIEW: Natural Vertical Stack (Zero touch hijacking) */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTreatments.map((treatment) => (
              <FadeIn key={treatment.id} delay={0.05}>
                <div className="group rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent/50 shadow-luxury-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div>
                    <ImageReveal
                      src={treatment.image}
                      alt={treatment.title}
                      aspectRatio="aspect-[16/10]"
                      direction="up"
                      overlay={
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute top-4 left-4 px-3 py-1 bg-theme-surface/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-semibold text-theme-accent border border-theme-border">
                            {treatment.categoryLabel}
                          </span>
                        </>
                      }
                    />

                    <div className="p-6 space-y-3">
                      <h3 className="font-serif text-xl sm:text-2xl text-theme-fg group-hover:text-theme-accent transition-colors leading-snug">
                        {treatment.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed line-clamp-2">
                        {treatment.shortDescription}
                      </p>

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
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      {/* Complete Menu Button Footer */}
      <div className="text-center py-12 border-t border-theme-border">
        <Button
          as="a"
          href="/treatments"
          variant="outline"
          size="lg"
          showArrow
        >
          View Complete Medical Treatment Menu ({TREATMENTS.length} Procedures)
        </Button>
      </div>
    </section>
  );
};

interface TreatmentCardProps {
  treatment: Treatment;
  isActive: boolean;
  onOpenBooking: (slug?: string) => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, isActive, onOpenBooking }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Extremely subtle 3D tilt (max 2.2 degrees) to keep it completely stable and luxurious
    const rotateY = ((x - centerX) / centerX) * 2.2;
    const rotateX = -((y - centerY) / centerY) * 2.2;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease',
      }}
      className={`w-[360px] sm:w-[410px] shrink-0 rounded-3xl bg-theme-surface border transition-all duration-500 flex flex-col justify-between overflow-hidden group select-none ${
        isActive
          ? 'border-theme-accent/60 shadow-luxury ring-1 ring-theme-accent/30'
          : 'border-theme-border shadow-luxury-sm hover:border-theme-border-highlight'
      }`}
    >
      <div>
        {/* Card Visual with smooth hover scale */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/20 to-transparent pointer-events-none" />

          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-theme-surface/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-semibold text-theme-accent border border-theme-border">
            {treatment.categoryLabel}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl text-theme-fg group-hover:text-theme-accent transition-colors duration-300 leading-snug">
            {treatment.title}
          </h3>
          <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed line-clamp-2">
            {treatment.shortDescription}
          </p>

          {/* Metadata Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-theme-fg-subtle">
            <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border inline-flex items-center">
              <Clock className="w-3 h-3 mr-1 text-theme-accent" />
              {treatment.whatToExpect.duration}
            </span>
            <span className="px-2.5 py-1 bg-theme-surface-elevated rounded-lg border border-theme-border inline-flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-theme-accent" />
              {treatment.whatToExpect.downtime}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-theme-border mt-4">
        <Link
          to={`/treatments/${treatment.slug}`}
          className="text-xs uppercase tracking-widest font-semibold text-theme-fg hover:text-theme-accent flex items-center transition-colors group/link"
        >
          <span>Treatment Details</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1 text-theme-accent" />
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
  );
};

export default TreatmentsHorizontalSequence;
