export type TreatmentCategory = 
  | 'skin' 
  | 'laser' 
  | 'hair' 
  | 'face-aesthetics' 
  | 'body-wellness';

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface TreatmentProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TreatmentConcern {
  headline: string;
  points: string[];
  explanation: string;
}

export interface TreatmentReview {
  reviewer: string;
  location: string;
  rating: number;
  review: string;
  source: string;
  treatmentSpecific: boolean;
}

export interface TreatmentGalleryItem {
  image: string;
  title: string;
  caption: string;
}

export interface TreatmentAccent {
  primary: string;
  surface: string;
  border: string;
  glow: string;
  gradient: string;
  badgeText?: string;
}

export interface TreatmentConcernItem {
  id: string;
  title: string;
  description: string;
  whyRoutineFails: string;
  clinicalSolution: string;
}

export interface TreatmentHotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  title: string;
  explanation: string;
  benefit: string;
}

export interface TreatmentInteractiveDiscovery {
  headline: string;
  subtitle: string;
  deviceImage: string;
  hotspots: TreatmentHotspot[];
}

export interface TreatmentProcedureStepJourney {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalFocus: string;
  image: string;
}

export interface TreatmentMythFact {
  myth: string;
  reality: string;
  clinicalInsight: string;
}

export interface TreatmentVisualMetaphor {
  type: 'carbon-clear' | 'laser-beam' | 'hydra-vortex' | 'pigment-shatter' | 'collagen-matrix' | 'growth-factor' | 'contour-wave';
  caption: string;
  scientificNote: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: TreatmentCategory;
  categoryLabel: string;
  eyebrow?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  pullQuote?: string;
  concern: TreatmentConcern;
  whoItIsFor: string[];
  benefits: string[];
  process: TreatmentProcessStep[];
  whatToExpect: {
    duration: string;
    anesthesia: string;
    downtime: string;
    sensation?: string;
    primaryConcern?: string;
    resultsVisibility: string;
    sessionCount: string;
  };
  galleryImages?: TreatmentGalleryItem[];
  aftercare: string[];
  faqs: TreatmentFAQ[];
  reviews?: TreatmentReview[];
  ctaLabel?: string;
  formCtaLabel?: string;
  whatsappMessage?: string;
  beforeAfterId?: string;
  image: string;
  featured?: boolean;
  accent?: TreatmentAccent;
  interactiveConcerns?: TreatmentConcernItem[];
  interactiveDiscovery?: TreatmentInteractiveDiscovery;
  procedureJourney?: TreatmentProcedureStepJourney[];
  mythsVsFacts?: TreatmentMythFact[];
  visualMetaphor?: TreatmentVisualMetaphor;
  sourceIds?: string[];
  heroImage?: string;
  heroSecondaryImage?: string;
  heroEyebrow?: string;
  heroHeadline?: [string, string];
  heroStatement?: string;
  heroMetadata?: { label: string; value: string; icon?: string }[];
}

export interface ClinicInfo {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  hours: {
    days: string;
    time: string;
    note: string;
  };
  locationNote: string;
  mapDirectionsUrl: string;
}

export interface Doctor {
  name: string;
  role: string;
  designation: string;
  specialties: string[];
  bio: string[];
  highlights: string[];
  quote: string;
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  initials: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  location: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  treatmentName: string;
  category: string;
  description: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  disclaimer: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
