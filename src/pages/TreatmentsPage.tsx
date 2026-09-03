import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';

interface TreatmentsPageProps {
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTreatments = TREATMENTS.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.whoItIsFor.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title="Clinical Treatments Menu | Laser, Skin, Hair & Aesthetics"
        description="Explore the full menu of doctor-led aesthetic treatments at HealRx Clinic Sion: Triple Wavelength Laser Hair Reduction, Carbon Peel, Hydra Medi-Facials, Hair PRP, and Botox/Fillers."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block mb-4">
            Procedural Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal-900">
            ADVANCED AESTHETIC & LASER TREATMENTS.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Every procedure at HealRx is performed under strict medical protocols, calibrated for safety on Indian skin, and personalized to your individual anatomy.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-10 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search treatments by condition (e.g. laser, acne, glow, hair)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-full border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 shadow-sm transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 pt-2">
            {TREATMENT_CATEGORIES.map(category => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                    isActive
                      ? 'bg-charcoal-900 text-ivory-50 shadow-md'
                      : 'bg-white text-charcoal-700 hover:bg-stone-50 hover:text-gold-700 border border-stone-200/80'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-charcoal-900">No treatments matched your search</h3>
            <p className="text-stone-500 text-sm mt-1">
              Try searching with another keyword or reset the category filter.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTreatments.map(treatment => (
              <div
                key={treatment.slug}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-luxury hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
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

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 group-hover:text-gold-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {treatment.shortDescription}
                    </p>

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

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-charcoal-900 hover:text-gold-600 flex items-center transition-colors"
                  >
                    <span>Full Medical Specs</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(treatment.slug)}
                    className="p-2.5 rounded-full bg-gold-50 text-gold-700 hover:bg-gold-500 hover:text-white transition-colors"
                    title={`Book consultation for ${treatment.title}`}
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-charcoal-950 text-ivory-50 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Unsure Which Treatment Is Right For You?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-lg mx-auto">
            Book an in-person clinical assessment at our Sion clinic. Dr. Pruthvi Vaity will analyze your skin type and recommend the safest protocol.
          </p>
          <div className="pt-2">
            <Button variant="gold" size="lg" onClick={() => onOpenBooking()}>
              Book Diagnostic Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
