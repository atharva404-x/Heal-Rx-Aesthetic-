import { ClinicInfo, Doctor } from '../types';
import { ASSETS } from './assets';

export const CLINIC_INFO: ClinicInfo = {
  name: 'HealRx Aesthetics & Laser Clinic',
  legalName: 'HealRx Aesthetics & Laser Clinic',
  tagline: 'Science for your skin. Confidence for you.',
  subTagline: 'Personalized aesthetic and skin care guided by modern technology, thoughtful consultation and an approach designed around you.',
  phone: '+919372164224',
  displayPhone: '+91 93721 64224',
  whatsapp: '919372164224',
  whatsappMessage: 'Hello HealRx Aesthetics! I would like to book a consultation at your Sion clinic.',
  email: 'contact@healrx.in',
  instagram: 'https://instagram.com/healrx.in',
  instagramHandle: '@healrx.in',
  address: {
    line1: 'First Floor, C Wing 102, Shivkoliwada CHS',
    line2: 'Ahead of PVR Cinema, Opp. Croma Store',
    landmark: 'Opposite Croma Store & Ahead of PVR Cinema',
    area: 'Sion Koliwada, Sion East',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400022',
    country: 'India',
    full: 'First Floor, C Wing 102, Shivkoliwada CHS, Ahead of PVR Cinema, Opp. Croma Store, Sion Koliwada, Sion East, Sion, Mumbai, Maharashtra 400022, India',
  },
  hours: {
    days: 'Monday – Sunday',
    time: '10:00 AM – 10:00 PM',
    note: 'Consultations by appointment & walk-in inquiries welcome',
  },
  locationNote: 'Centrally situated in Sion East, just minutes from Sion Railway Station, GTB Nagar Monorail, and Eastern Express Highway.',
  mapDirectionsUrl: 'https://maps.google.com/?q=HealRx+Aesthetics+Laser+Clinic+Sion+Mumbai',
};

export const MEDICAL_DIRECTOR: Doctor = {
  name: 'Dr. Pruthvi Vaity',
  role: 'Founder & Medical Director',
  designation: 'Aesthetic Medicine Physician & Regenerative Aesthetics Specialist',
  specialties: [
    'Advanced Laser Dermatology',
    'Facial Injectables & Contouring',
    'Regenerative Hair & Skin Therapies (PRP/GFC)',
    'Preventive Aesthetics & Longevity Medicine'
  ],
  bio: [
    'Dr. Pruthvi Vaity serves as the Medical Director of HealRx Aesthetics & Laser Clinic, Sion, Mumbai. With extensive clinical training in aesthetic dermatology, medical lasers, and regenerative medicine, Dr. Vaity advocates for an individualized, science-first approach that respects each client’s unique facial harmony.',
    'As a distinguished faculty trainer at MAC International Academy, Dr. Vaity trains medical professionals in clinical cosmetology and aesthetic techniques. Dr. Vaity is also an India Book of Records holder and a frequent speaker at national aesthetic congresses, championing safety, evidence-based protocols, and natural longevity-focused outcomes.'
  ],
  highlights: [
    'Medical Director & Founder of HealRx Aesthetics',
    'Faculty Aesthetic Trainer at MAC International Academy',
    'India Book of Records Award Holder for Academic Seminars',
    'Speaker at Aesthetix Congress & Clinical Cosmetology Forums',
    'Focus on Natural Refinement, Zero Over-Correction & Patient Safety'
  ],
  quote: 'Aesthetic medicine is not about altering who you are. It is the science of cellular restoration and subtle refinement so you feel empowered in your own skin.',
  image: ASSETS.doctor.portrait,
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Results', path: '/results' },
  { label: 'Contact', path: '/contact' },
];

export const TRUST_PILLARS = [
  { label: 'Doctor-Led Protocols', description: 'Every treatment designed and supervised under medical guidance' },
  { label: 'Triple-Wavelength Laser Tech', description: 'Safe, precision-calibrated technology for Indian skin tones' },
  { label: 'Personalized Care Plans', description: 'Customized regimens tailored to your specific skin biology' },
  { label: 'Sion • Mumbai Clinic', description: 'Centrally located luxury clinic ahead of PVR Cinema, Opp. Croma' },
];
