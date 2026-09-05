import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Info, CheckCircle2 } from 'lucide-react';
import { TreatmentInteractiveDiscovery, TreatmentAccent } from '../../types';

interface TreatmentDiscoveryHotspotsProps {
  discovery: TreatmentInteractiveDiscovery;
  accent?: TreatmentAccent;
}

export const TreatmentDiscoveryHotspots: React.FC<TreatmentDiscoveryHotspotsProps> = ({
  discovery,
  accent,
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>(
    discovery.hotspots[0]?.id || ''
  );

  const activeHotspot = discovery.hotspots.find(h => h.id === activeHotspotId) || discovery.hotspots[0];

  const primaryColor = accent?.primary || '#c5a059';

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span 
          className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest-luxury font-semibold px-3.5 py-1.5 rounded-full border transition-colors"
          style={{
            backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
            borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
            color: primaryColor,
          }}
        >
          <Sparkles className="w-3 h-3" />
          <span>Mechanistic Science &bull; Interactive Discovery</span>
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-theme-fg font-normal leading-tight">
          {discovery.headline}
        </h2>

        <p className="text-sm sm:text-base text-theme-fg-muted leading-relaxed max-w-xl mx-auto">
          {discovery.subtitle}
        </p>

        <p className="text-[11px] uppercase tracking-wider text-theme-fg-subtle">
          Tap or hover the numbered coordinates to explore device physics &amp; tissue interaction.
        </p>
      </div>

      {/* Interactive Canvas & Callout Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Device & Target Visual with Hotspots (7 cols) */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-luxury border border-theme-border bg-theme-surface-elevated aspect-[4/3] sm:aspect-[16/11]">
            <img
              src={discovery.deviceImage}
              alt={discovery.headline}
              className="w-full h-full object-cover select-none"
            />
            {/* Subtle dark vignette overlay for hotspot contrast */}
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />

            {/* Hotspot Pulsing Markers */}
            {discovery.hotspots.map((hotspot, index) => {
              const isActive = hotspot.id === activeHotspotId;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                  aria-label={`Inspect ${hotspot.title}`}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                  }}
                >
                  {/* Pulse Ring */}
                  <span
                    className={`absolute inset-0 rounded-full animate-ping opacity-70 transition-all duration-300 ${
                      isActive ? 'scale-150 opacity-100' : 'scale-100 group-hover:scale-125'
                    }`}
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  />

                  {/* Core Button Badge */}
                  <span
                    className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-serif text-xs sm:text-sm font-semibold text-white shadow-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: isActive ? primaryColor : 'rgba(20, 24, 28, 0.85)',
                      border: `2px solid ${isActive ? '#ffffff' : primaryColor}`,
                      boxShadow: isActive ? `0 0 20px ${accent?.glow || 'rgba(197, 160, 89, 0.5)'}` : 'none',
                    }}
                  >
                    0{index + 1}
                  </span>

                  {/* Micro label chip below marker */}
                  <span className="hidden sm:block absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/80 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {hotspot.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Hotspot Explanation Card (5 cols) */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {activeHotspot && (
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury space-y-6"
              >
                {/* Hotspot Header */}
                <div className="flex items-center justify-between border-b border-theme-border pb-4">
                  <span 
                    className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.08)',
                      borderColor: accent?.border || 'rgba(197, 160, 89, 0.25)',
                      color: primaryColor,
                    }}
                  >
                    Feature {activeHotspot.label}
                  </span>

                  <div className="flex items-center space-x-1 text-xs text-theme-fg-subtle">
                    <Info className="w-3.5 h-3.5" />
                    <span>Clinical Spec</span>
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg font-normal">
                    {activeHotspot.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed">
                    {activeHotspot.explanation}
                  </p>
                </div>

                {/* Direct Benefit Box */}
                <div 
                  className="p-4 rounded-2xl border flex items-start space-x-3 transition-colors"
                  style={{
                    backgroundColor: accent?.surface || 'rgba(197, 160, 89, 0.05)',
                    borderColor: accent?.border || 'rgba(197, 160, 89, 0.2)',
                  }}
                >
                  <CheckCircle2 
                    className="w-4 h-4 flex-shrink-0 mt-0.5" 
                    style={{ color: primaryColor }}
                  />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold block text-theme-fg">
                      Clinical Patient Benefit:
                    </span>
                    <span className="text-xs text-theme-fg-secondary mt-0.5 block">
                      {activeHotspot.benefit}
                    </span>
                  </div>
                </div>

                {/* Hotspot quick selector pills */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle block mb-2 font-medium">
                    Select Mechanism:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {discovery.hotspots.map((h, i) => (
                      <button
                        key={h.id}
                        onClick={() => setActiveHotspotId(h.id)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                          h.id === activeHotspotId
                            ? 'font-semibold text-white shadow-luxury-sm'
                            : 'bg-theme-surface text-theme-fg-muted border-theme-border hover:border-theme-border-highlight'
                        }`}
                        style={{
                          backgroundColor: h.id === activeHotspotId ? primaryColor : undefined,
                          borderColor: h.id === activeHotspotId ? primaryColor : undefined,
                        }}
                      >
                        0{i + 1}. {h.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TreatmentDiscoveryHotspots;
