import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article';
}

const DEFAULT_TITLE = 'HealRx Aesthetics & Laser Clinic | Sion, Mumbai | Advanced Medical Aesthetics';
const DEFAULT_DESCRIPTION = 'HealRx Aesthetics & Laser Clinic in Sion, Mumbai. Doctor-led aesthetic treatments, laser hair reduction, carbon laser peel, Hydra medi-facials, hair PRP, and skin rejuvenation under Medical Director Dr. Pruthvi Vaity.';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80';
const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://healrx.in').replace(/\/$/, '');

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  image = DEFAULT_IMAGE,
  type = 'website',
}) => {
  useEffect(() => {
    // 1. Document Title
    const fullTitle = title 
      ? `${title} | HealRx Aesthetics & Laser Clinic Sion` 
      : DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper to safely set or create meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper to set or create link tags (e.g. canonical)
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description);

    // 3. Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
    setLinkTag('canonical', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'HealRx Aesthetics & Laser Clinic');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath, image, type]);

  return null;
};
