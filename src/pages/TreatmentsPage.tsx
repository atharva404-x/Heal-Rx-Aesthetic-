import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { TREATMENTS, TREATMENT_CATEGORIES } from '../data/treatments';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { FadeIn, TextReveal } from '../components/motion/MotionPrimitives';

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
    <div className="min-h-screen bg-theme-bg text-theme-fg pt-28 sm:pt-36 pb-20 transition-colors duration-400">
      <SEOHead
        title="Clinical Treatments Menu | Laser, Skin, Hair & Aesthetics"
        description="Explore the full menu of doctor-led aesthetic treatments at HealRx Clinic Sion: Triple Wavelength Laser Hair Reduction, Carbon Peel, Hydra Medi-Facials, Hair PRP, and Botox/Fillers."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl space-y-4">
          <FadeIn delay={0.05}>
            <span className="text-xs uppercase tracking-widest-luxury text-theme-accent font-semibold px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
              Procedural Menu
            </span>
          </FadeIn>
          
          <TextReveal delay={0.1} as="h1" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-theme-fg">
            ADVANCED AESTHETIC &amp; LASER TREATMENTS.
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="mt-4 text-base sm:text-lg text-theme-fg-muted leading-relaxed">
              Every procedure at HealRx is performed under strict medical protocols, calibrated for safety on Indian skin, and personalized to your individual anatomy.
            </p>
          </FadeIn>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-10 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-theme-fg-subtle" />
            <input
              type="text"
              placeholder="Search treatments by condition (e.g. laser, acne, glow, hair)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-theme-surface rounded-full border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent shadow-luxury-sm transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-theme-btn-primary-bg text-theme-btn-primary-fg shadow-luxury'
                  : 'bg-theme-surface text-theme-fg-muted hover:text-theme-fg border border-theme-border'
              }`}
            >
              All ({TREATMENTS.length})
            </button>
            {TREATMENT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-theme-btn-primary-bg text-theme-btn-primary-fg shadow-luxury'
                    : 'bg-theme-surface text-theme-fg-muted hover:text-theme-fg border border-theme-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTreatments.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-theme-surface rounded-3xl border border-theme-border">
            <Sparkles className="w-8 h-8 text-theme-accent mx-auto" />
            <h3 className="font-serif text-2xl text-theme-fg">No matching procedures found</h3>
            <p className="text-sm text-theme-fg-muted max-w-md mx-auto">
              We could not find any treatments matching your search term. Clear your search or contact our team for a personalized recommendation.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="p-6 sm:p-7 space-y-3">
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

                    {/* Who it is for */}
                    <div className="pt-3 border-t border-theme-border">
                      <span className="text-[10px] uppercase tracking-wider text-theme-fg-subtle block mb-1 font-medium">
                        Ideal for:
                      </span>
                      <ul className="text-xs text-theme-fg-muted space-y-1">
                        {treatment.whoItIsFor.slice(0, 2).map((item, i) => (
                          <li key={i} className="line-clamp-1">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-theme-border mt-4">
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="text-xs uppercase tracking-widest font-semibold text-theme-fg hover:text-theme-accent flex items-center transition-colors"
                  >
                    <span>View Protocol</span>
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
        )}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-theme-surface-elevated text-theme-fg border border-theme-border shadow-luxury text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-theme-fg">
            Unsure Which Treatment Fits Your Skin Goals?
          </h2>
          <p className="text-theme-fg-muted text-sm sm:text-base max-w-lg mx-auto">
            Schedule a diagnostic assessment with Medical Director Dr. Pruthvi Vaity for an honest evaluation and tailored treatment roadmap.
          </p>
          <div className="pt-2">
            <Button variant="primary" size="lg" onClick={() => onOpenBooking()}>
              Book Diagnostic Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
