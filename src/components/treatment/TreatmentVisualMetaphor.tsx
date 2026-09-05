import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';
import { TreatmentVisualMetaphor as VisualMetaphorType, TreatmentAccent } from '../../types';

interface TreatmentVisualMetaphorProps {
  metaphor: VisualMetaphorType;
  accent?: TreatmentAccent;
  treatmentTitle: string;
}

export const TreatmentVisualMetaphor: React.FC<TreatmentVisualMetaphorProps> = ({
  metaphor,
  accent,
  treatmentTitle,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const primaryColor = accent?.primary || '#c5a059';

  const renderVisualContent = () => {
    switch (metaphor.type) {
      case 'carbon-clear':
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-stone-950 flex items-center justify-center select-none">
            {/* Base Luminous Skin Surface */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/40 via-stone-900 to-amber-900/30 flex items-center justify-center">
              <div 
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-70 animate-pulse"
                style={{ backgroundColor: primaryColor }}
              />
              <span className="font-serif text-lg sm:text-xl text-amber-200/90 font-medium tracking-wide z-10">
                Purified &bull; Luminous Epidermis
              </span>
            </div>

            {/* Top Carbon Nanoparticle Layer with Mask based on slider */}
            <div 
              className="absolute inset-y-0 left-0 bg-neutral-900/95 border-r border-amber-500/50 flex items-center justify-center overflow-hidden transition-all duration-75"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900 to-neutral-800" />
              <div className="relative z-10 text-center px-4">
                <span className="text-xs uppercase tracking-widest text-neutral-400 block font-semibold">
                  Carbon Nanoparticles
                </span>
                <span className="text-[11px] text-neutral-500 block mt-1">
                  Binding Excess Sebum &amp; Follicular Impurities
                </span>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute inset-y-0 -ml-3 flex items-center justify-center z-30 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div 
                className="w-6 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[10px] font-bold text-neutral-900 border border-neutral-300"
              >
                &harr;
              </div>
            </div>

            {/* Interactive Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Adjust carbon clearance slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            />
          </div>
        );

      case 'laser-beam':
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center justify-between p-6 select-none">
            {/* Surface Cooling Bar */}
            <div className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Sapphire Tip Active Chill</span>
              </span>
              <span>4.0&deg;C Epidermal Protection</span>
            </div>

            {/* Triple Wavelength Beams */}
            <div className="w-full grid grid-cols-3 gap-3 py-4">
              {/* 755nm Alexandrite */}
              <div className="flex flex-col items-center space-y-2">
                <div className="h-28 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse" />
                <span className="text-[10px] font-mono text-purple-300 font-semibold">755nm</span>
                <span className="text-[9px] text-neutral-400 text-center">Superficial Follicles</span>
              </div>

              {/* 808nm Diode */}
              <div className="flex flex-col items-center space-y-2">
                <div className="h-32 w-2 rounded-full bg-gradient-to-b from-rose-400 to-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-pulse [animation-delay:200ms]" />
                <span className="text-[10px] font-mono text-rose-300 font-semibold">808nm</span>
                <span className="text-[9px] text-neutral-400 text-center">Deep Bulb Melanin</span>
              </div>

              {/* 1064nm Nd:YAG */}
              <div className="flex flex-col items-center space-y-2">
                <div className="h-36 w-2.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse [animation-delay:400ms]" />
                <span className="text-[10px] font-mono text-amber-300 font-semibold">1064nm</span>
                <span className="text-[9px] text-neutral-400 text-center">Sub-Dermal Papilla</span>
              </div>
            </div>

            {/* Deep Target Follicle Bed */}
            <div className="w-full text-center py-2 border-t border-white/10 text-[11px] text-neutral-400">
              Follicular stem cells disabled across all three anatomical depths simultaneously.
            </div>
          </div>
        );

      case 'hydra-vortex':
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-6 select-none">
            {/* Concentric Vortex Infusion Rings */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-teal-500/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-teal-400/40"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-teal-500/30 to-emerald-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center p-2 shadow-[0_0_30px_rgba(20,184,166,0.3)]"
              >
                <span className="text-[10px] uppercase font-bold text-teal-300">Pneumatic</span>
                <span className="font-serif text-sm font-medium text-white">Vortex Infusion</span>
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] text-teal-200/80">
              <span>Step 1: Negative Extraction</span>
              <span>&bull;</span>
              <span>Step 2: Hyaluronic Peptide Saturation</span>
            </div>
          </div>
        );

      case 'pigment-shatter':
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center justify-center p-6 select-none">
            <div className="flex items-center justify-center space-x-6 sm:space-x-12 my-auto">
              {/* Dense Melanin Cluster */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-950 border border-amber-800/80 flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-700/60" />
                </div>
                <span className="text-[10px] uppercase font-mono text-amber-500">Compact Melanosome</span>
              </div>

              {/* Acoustic Laser Pulse Wave */}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xs font-mono text-cyan-400 font-bold">&gt;&gt; 1064nm &gt;&gt;</span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400">Nanosecond Shock</span>
              </div>

              {/* Shattered Micro-Particles */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-900 border border-neutral-700 flex flex-wrap items-center justify-center p-3 gap-1.5">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-amber-500/70" />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-mono text-emerald-400">Cellular Phagocytosis</span>
              </div>
            </div>

            <div className="w-full text-center pt-2 border-t border-white/10 text-[11px] text-neutral-400">
              Photomechanical acoustic energy fragments pigment clusters without thermal damage to surrounding tissue.
            </div>
          </div>
        );

      default:
        // Generic / Collagen remodeling visual
        return (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center justify-center p-6 select-none">
            <div className="grid grid-cols-4 gap-3 my-auto w-full max-w-sm">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-16 rounded-xl border flex flex-col items-center justify-center p-2 transition-all"
                  style={{
                    backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
                    borderColor: accent?.border || 'rgba(197, 160, 89, 0.3)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: primaryColor }} />
                  <span className="text-[9px] text-neutral-300 font-mono mt-2">Zone 0{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="w-full text-center pt-2 border-t border-white/10 text-[11px] text-neutral-400">
              Precision thermal stimulation inducing healthy fibroblasts and collagen synthesis.
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-theme-border pb-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
            <span 
              className="text-[11px] uppercase tracking-widest font-semibold"
              style={{ color: primaryColor }}
            >
              Biological Mechanism &bull; Visual Metaphor
            </span>
          </div>

          <span className="text-xs text-theme-fg-subtle">
            {treatmentTitle}
          </span>
        </div>

        {/* Interactive / Animated Visual Engine */}
        {renderVisualContent()}

        {/* Scientific Note & Caption */}
        <div className="space-y-2 pt-2">
          <h4 className="font-serif text-lg text-theme-fg font-medium">
            {metaphor.caption}
          </h4>
          <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed flex items-start space-x-2">
            <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-theme-fg-subtle" />
            <span>{metaphor.scientificNote}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentVisualMetaphor;
