import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../../data/assets';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Consultation & Skin Analysis Suite',
    category: 'Doctor Suite',
    image: ASSETS.clinic.consultationSuite,
    caption: 'Private consultation lounge with trichoscopy and Wood’s lamp diagnostic systems.'
  },
  {
    id: 'g-2',
    title: 'Triple-Wavelength Laser Treatment Suite',
    category: 'Laser Room',
    image: ASSETS.clinic.laserSuite,
    caption: 'US FDA-compliant laser room equipped with continuous sapphire contact cooling.'
  },
  {
    id: 'g-3',
    title: 'Medi-Facial & Hydra-Infusion Lounge',
    category: 'Aesthetic Suite',
    image: ASSETS.clinic.treatmentRoom1,
    caption: 'Sterile clinical aesthetic environment with medical LED phototherapy.'
  },
  {
    id: 'g-4',
    title: 'HealRx Reception & Lounge',
    category: 'Reception Area',
    image: ASSETS.clinic.reception,
    caption: 'Warm, understated luxury atmosphere situated in Sion Koliwada, Mumbai.'
  },
];

export const LightboxGallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((activeImageIndex + 1) % CLINIC_GALLERY.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((activeImageIndex - 1 + CLINIC_GALLERY.length) % CLINIC_GALLERY.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <div className="space-y-6">
      {/* Editorial Grid: 1 Primary Image + 2 Stacked Images */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        {/* Large Primary Image */}
        <div 
          onClick={() => setActiveImageIndex(0)}
          data-cursor="VIEW"
          className="md:col-span-7 relative group rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] cursor-pointer shadow-luxury border border-theme-border"
        >
          <img
            src={CLINIC_GALLERY[0].image}
            alt={CLINIC_GALLERY[0].title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-gold-300 font-medium">
                {CLINIC_GALLERY[0].category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
                {CLINIC_GALLERY[0].title}
              </h3>
            </div>
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-gold-500 transition-colors shadow-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 2 Stacked Images */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 lg:gap-6">
          {CLINIC_GALLERY.slice(1, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx + 1)}
              data-cursor="VIEW"
              className="relative group rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-auto sm:h-full cursor-pointer shadow-luxury border border-theme-border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold-300 font-medium">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-white mt-0.5">
                    {item.title}
                  </h4>
                </div>
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-gold-500 transition-colors shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-charcoal-950/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous image */}
            <button
              onClick={() => setActiveImageIndex((activeImageIndex - 1 + CLINIC_GALLERY.length) % CLINIC_GALLERY.length)}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next image */}
            <button
              onClick={() => setActiveImageIndex((activeImageIndex + 1) % CLINIC_GALLERY.length)}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption Display */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={CLINIC_GALLERY[activeImageIndex].image}
                alt={CLINIC_GALLERY[activeImageIndex].title}
                className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center text-white max-w-lg">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-medium">
                  {CLINIC_GALLERY[activeImageIndex].category}
                </span>
                <h3 className="font-serif text-2xl mt-1">
                  {CLINIC_GALLERY[activeImageIndex].title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  {CLINIC_GALLERY[activeImageIndex].caption}
                </p>
                <div className="flex items-center justify-center text-stone-400 text-xs mt-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 mr-1" />
                  <span>HealRx Clinic • Sion, Mumbai</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LightboxGallery;
