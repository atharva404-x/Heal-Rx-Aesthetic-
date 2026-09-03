import React from 'react';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-36 pb-20 flex items-center justify-center">
      <SEOHead title="Page Not Found | HealRx Aesthetics" />
      
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <span className="font-serif text-7xl sm:text-8xl text-gold-500/70 font-light block">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
          Page Not Found
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed">
          The aesthetic procedure or page you are searching for does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Button as="a" href="/" variant="primary" size="md">
            Return to Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};
