import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Phone
} from 'lucide-react';
import { Treatment } from '../../types';
import { CLINIC_INFO } from '../../data/site';
import { TREATMENT_ASSETS } from '../../data/treatmentAssets';
import { LUXURY_EASE, usePrefersReducedMotion } from '../motion/MotionPrimitives';

interface TreatmentHeroCampaignProps {
  treatment: Treatment;
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentHeroCampaign: React.FC<TreatmentHeroCampaignProps> = ({
  treatment,
  onOpenBooking,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Assets & Colors
  const treatmentAssets = TREATMENT_ASSETS[treatment.slug] || {
    hero: treatment.image,
    procedureImage: treatment.image,
    detailImage: treatment.image,
    textureImage: treatment.image,
    reviewImage: '',
    gallery: [],
    source: 'HealRx Registry',
    licenseNote: 'Licensed Clinical Asset',
  };

  const accent = treatment.accent;
  const primaryColor = accent?.primary || '#c5a059';

  // Desktop Mouse Tilt / Interactive Depth
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mousePosition.x, springConfig);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  // Derived Title and Subtitle
  const headlineParts = treatment.heroHeadline || [
    treatment.title.includes('(') ? treatment.title.split('(')[0].trim() : treatment.title,
    treatment.title.includes('(') ? `(${treatment.title.split('(')[1]}` : ''
  ];

  const titleLine1 = headlineParts[0];
  const titleLine2 = headlineParts[1] || '';

  const statement = treatment.heroStatement || treatment.tagline || treatment.shortDescription;
  const ctaLabel = treatment.ctaLabel || 'Book Doctor Consultation →';

  // Floating Metadata Items
  const metadataItems = treatment.heroMetadata || [
    { label: 'SESSION TIME', value: treatment.whatToExpect.duration },
    { label: 'RECOVERY', value: treatment.whatToExpect.downtime },
    { label: 'TECHNOLOGY', value: treatment.categoryLabel },
    { label: 'CLINICAL SUITE', value: 'Sion East • Mumbai' },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white select-none transition-colors duration-500"
      aria-label={`${treatment.title} Campaign Hero`}
    >
      {/* =====================================================================
          1. FULL-BLEED CINEMATIC HERO BACKGROUND WITH PARALLAX & SUBTLE MOUSE TILT
      ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="relative w-full h-[115%] -top-[7.5%]"
          style={prefersReducedMotion ? {} : {
            y: imageY,
            scale: imageScale,
            x: isHovering ? smoothX.get() * -20 : 0,
          }}
        >
          <img
            src={treatmentAssets.hero}
            alt={`${treatment.title} campaign visual`}
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
            loading="eager"
            fetchPriority="high"
          />

          {/* Treatment-Aware Atmospheric Color Washes */}
          {accent?.gradient && (
            <div 
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
              style={{ background: accent.gradient }}
            />
          )}

          {/* Sophisticated Cinematic Vignette & Localized Readability Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-neutral-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/50 to-transparent" />
          
          {/* Subtle Film Grain Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />
        </motion.div>
      </div>

      {/* =====================================================================
          2. TOP EDITORIAL NAVIGATION & LOCATION BAR
      ===================================================================== */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            to="/treatments"
            className="inline-flex items-center text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" style={{ color: primaryColor }} />
            <span className="font-medium">Explore All Treatments</span>
          </Link>

          <div className="flex items-center space-x-3 text-[11px] uppercase tracking-widest text-neutral-300">
            <MapPin className="w-3 h-3" style={{ color: primaryColor }} />
            <span>Sion East &bull; Mumbai</span>
            <span className="hidden sm:inline-block text-neutral-600">&bull;</span>
            <span className="hidden sm:inline-block text-neutral-400">Doctor-Led Aesthetics</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. MAIN HERO COMPOSITION (OVERSIZED TYPOGRAPHY + EDITORIAL CARDS)
      ===================================================================== */}
      <motion.div 
        className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-center"
        style={prefersReducedMotion ? {} : { y: contentY, opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left / Main Typography Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Category / Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <span 
                className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-4 py-1.5 rounded-full border backdrop-blur-md shadow-lg"
                style={{
                  backgroundColor: 'rgba(20, 19, 18, 0.6)',
                  borderColor: accent?.border || 'rgba(197, 160, 89, 0.4)',
                  color: primaryColor,
                }}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full animate-pulse" 
                  style={{ backgroundColor: primaryColor }}
                />
                <span>{treatment.heroEyebrow || treatment.eyebrow || treatment.categoryLabel}</span>
              </span>

              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 font-mono">
                Clinical Protocol No. {treatment.id.slice(0, 4).toUpperCase()}
              </span>
            </motion.div>

            {/* Oversized Editorial Treatment Title */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
              className="space-y-1"
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.94] text-white tracking-tight drop-shadow-md">
                {titleLine1}
              </h1>
              {titleLine2 && (
                <h2 
                  className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.04] text-neutral-300 drop-shadow-sm"
                  style={{ color: primaryColor }}
                >
                  {titleLine2}
                </h2>
              )}
            </motion.div>

            {/* Editorial Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
              className="text-sm sm:text-base md:text-lg text-neutral-200 font-normal leading-relaxed max-w-2xl drop-shadow"
            >
              {statement}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onOpenBooking(treatment.slug)}
                className="px-8 py-4 rounded-full font-medium text-xs uppercase tracking-widest text-neutral-950 bg-white hover:bg-neutral-100 active:scale-[0.98] transition-all flex items-center space-x-2.5 shadow-2xl group"
                style={{
                  boxShadow: `0 12px 36px ${accent?.glow || 'rgba(197, 160, 89, 0.4)'}`,
                }}
              >
                <span className="font-semibold">{ctaLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-4 rounded-full border border-white/20 bg-neutral-900/60 backdrop-blur-md text-xs uppercase tracking-widest font-medium text-neutral-200 hover:text-white hover:border-white/40 transition-all inline-flex items-center shadow-lg active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 mr-2" style={{ color: primaryColor }} />
                <span>Call Clinic</span>
              </a>

              <span className="text-xs text-neutral-400 pl-2 hidden sm:inline-block">
                Doctor-led &bull; US FDA Safety Standards
              </span>
            </motion.div>
          </div>

          {/* Right Column: Floating Editorial Detail Card + Clinical Metadata (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: LUXURY_EASE }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Secondary Floating Close-up Detail Visual */}
            <div className="relative group hidden sm:block">
              <div 
                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[16/10] bg-neutral-900/80 backdrop-blur-md transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  boxShadow: `0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px ${accent?.glow || 'rgba(197, 160, 89, 0.15)'}`
                }}
              >
                <img
                  src={treatmentAssets.detailImage || treatmentAssets.procedureImage}
                  alt={`${treatment.title} detail`}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3.5">
                  <div>
                    <span 
                      className="text-[9px] uppercase tracking-wider block font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Precision Detail
                    </span>
                    <span className="text-xs font-serif text-white block">
                      Targeted Clinical Application
                    </span>
                  </div>
                  <div 
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    style={{ color: primaryColor }}
                  >
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Editorial Metadata Matrix */}
            <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-neutral-900/70 backdrop-blur-lg border border-white/10 shadow-2xl">
              {metadataItems.slice(0, 4).map((meta, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] space-y-0.5">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 block font-mono">
                    {meta.label}
                  </span>
                  <span className="font-serif text-sm text-white font-medium block truncate">
                    {meta.value}
                  </span>
                </div>
              ))}

              {/* Lead Physician Badge */}
              <div className="col-span-2 p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: primaryColor }} />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">
                      Clinical Delivery
                    </span>
                    <span className="font-serif text-sm text-white font-medium block">
                      Dr. Pruthvi Vaity
                    </span>
                  </div>
                </div>
                <span 
                  className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md border"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: accent?.border || 'rgba(197, 160, 89, 0.3)',
                    color: primaryColor,
                  }}
                >
                  Lead Physician
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================================
          4. SEAMLESS TRANSITION GRADIENT FADING INTO STAGE 02
      ===================================================================== */}
      <div className="relative z-20 w-full h-14 bg-gradient-to-b from-transparent to-theme-bg pointer-events-none" />
    </section>
  );
};
