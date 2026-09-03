import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
}) => {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | HealRx Aesthetics & Laser Clinic Sion` 
      : 'HealRx Aesthetics & Laser Clinic | Sion, Mumbai | Advanced Medical Aesthetics';
    
    document.title = fullTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath]);

  return null;
};
