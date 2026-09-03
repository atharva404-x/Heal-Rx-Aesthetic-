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

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: TreatmentCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  whoItIsFor: string[];
  benefits: string[];
  process: TreatmentProcessStep[];
  whatToExpect: {
    duration: string;
    anesthesia: string;
    downtime: string;
    resultsVisibility: string;
    sessionCount: string;
  };
  aftercare: string[];
  faqs: TreatmentFAQ[];
  image: string;
  featured?: boolean;
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
