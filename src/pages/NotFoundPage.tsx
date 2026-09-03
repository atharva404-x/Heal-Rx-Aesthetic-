import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { CLINIC_INFO } from '../data/site';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-32 sm:pt-40 pb-20 flex items-center justify-center">
      <SEOHead 
        title="Page Not Found (404) | HealRx Aesthetics Sion" 
        description="The requested page could not be found. Return to HealRx Aesthetics & Laser Clinic, Sion Mumbai."
      />
      
      <div className="max-w-xl mx-auto px-4 text-center space-y-8">
        <div className="relative inline-block">
          <span className="font-serif text-8xl sm:text-9xl text-gold-400/40 font-light select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-12 h-12 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 shadow-luxury-sm">
              <Sparkles className="w-6 h-6" />
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest-luxury text-gold-700 font-semibold block">
            Navigation Error
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
            Page Not Found
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The treatment page or resource you are looking for has been relocated or is temporarily unavailable.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button to="/" variant="primary" size="md" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Home</span>
          </Button>
          <Button to="/treatments" variant="secondary" size="md" className="w-full sm:w-auto">
            <span>Explore Treatments</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Quick Help Links */}
        <div className="pt-8 border-t border-gold-200/50">
          <p className="text-xs uppercase tracking-wider text-stone-500 mb-4">
            Need immediate assistance or direct appointment booking?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 transition-colors px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              <span>WhatsApp Doctor Assistant</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center text-stone-600 hover:text-gold-700 transition-colors px-3 py-1.5 rounded-full bg-white border border-stone-200"
            >
              <span>Clinic Address &amp; Map</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
