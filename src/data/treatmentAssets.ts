/**
 * HealRx Aesthetics & Laser Clinic — Treatment Visual Asset Registry
 * 
 * Provides dedicated, high-resolution, licensed editorial and clinical photography
 * for each treatment campaign landing page.
 * 
 * Every asset is structured for straightforward client replacement with authentic
 * in-clinic photography when available.
 */

export interface TreatmentAssetBundle {
  hero: string;
  procedureImage: string;
  detailImage: string;
  textureImage: string;
  reviewImage: string;
  gallery: {
    image: string;
    title: string;
    caption: string;
  }[];
  source: string;
  licenseNote: string;
}

export const TREATMENT_ASSETS: Record<string, TreatmentAssetBundle> = {
  'laser-hair-reduction': {
    hero: '/images/treatments/hero_laser_hair.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_laser_hair.jpg',
        title: 'Triple Wavelength Laser Delivery',
        caption: 'Integrated 755nm, 808nm, and 1064nm glide delivery with active sapphire contact chill.'
      },
      {
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
        title: 'Sterile Laser Suite',
        caption: 'Dedicated medical laser suite located at HealRx Sion Koliwada.'
      },
      {
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
        title: 'Sanitized Treatment Lounge',
        caption: 'Private patient suite with HEPA air purification and medical hygiene protocols.'
      }
    ],
    source: 'HealRx Clinical Laser Registry / Conceptual Editorial Campaign',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'carbon-laser-peel': {
    hero: '/images/treatments/hero_carbon_peel.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_carbon_peel.jpg',
        title: 'Activated Carbon Emulsion Application',
        caption: 'Medical carbon nanoparticles penetrate deep into follicular infundibulum to bind sebum debris.'
      },
      {
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
        title: 'Q-Switched Laser Photoacoustic Pass',
        caption: 'Nanosecond 1064nm acoustic wave vaporizes carbon particles while gently stimulating dermal collagen.'
      },
      {
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
        title: 'Purified Treatment Environment',
        caption: 'Dedicated smoke evacuation and clean air exchange for high-safety laser vaporization.'
      }
    ],
    source: 'HealRx Aesthetic Dermatology Collection / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'hydra-medi-facial': {
    hero: '/images/treatments/hero_hydra_facial.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_hydra_facial.jpg',
        title: 'Vortex Dermal Extraction Tip',
        caption: 'Pneumatic spiral tip gently loosens and extracts sebum without mechanical skin trauma.'
      },
      {
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
        title: 'Active Peptide & Hyaluronic Infusion',
        caption: 'Targeted botanical and low-molecular hyaluronic serums infused under negative pressure.'
      },
      {
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
        title: 'Medical LED Calming Lounge',
        caption: 'Post-infusion red & near-infrared LED therapy calming transient redness.'
      }
    ],
    source: 'HealRx Aesthetic Dermatology Collection / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'hair-prp-gfc-therapy': {
    hero: '/images/treatments/hero_hair_prp.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_hair_prp.jpg',
        title: 'Centrifugal Growth Factor Concentration',
        caption: 'Sterile high-yield centrifuge isolating concentrated PDGF, VEGF, and EGF proteins.'
      },
      {
        image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80',
        title: 'Digital Scalp Trichoscopy',
        caption: 'Polarized micro-camera documenting baseline follicular density and caliber.'
      },
      {
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
        title: 'Sterile Clinical Procedure Suite',
        caption: 'Physician-administered micro-injections using sterile 32G nano-needles.'
      }
    ],
    source: 'HealRx Clinical Trichology Registry / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'acne-scar-laser-resurfacing': {
    hero: '/images/treatments/hero_acne_scar.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_acne_scar.jpg',
        title: 'Fractional Microthermal Column Array',
        caption: 'Controlled thermal microscopic injury columns stimulate neocollagenesis while leaving surrounding bridges intact.'
      },
      {
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
        title: 'Precision Scanner Calibration',
        caption: 'Computerized laser scan patterns customized to scar morphology (rolling, boxcar, icepick).'
      }
    ],
    source: 'HealRx Clinical Laser Registry / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'pigmentation-q-switch-laser': {
    hero: '/images/treatments/hero_pigmentation.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1512290900672-1f55b9a4c160?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_pigmentation.jpg',
        title: 'Low-Fluence Photoacoustic Toning',
        caption: 'Acoustic shockwaves gently shatter melanosomes without heating surrounding melanocytes.'
      },
      {
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
        title: 'Calibrated Laser Suite',
        caption: 'Laser wavelength calibrated to 1064nm and 532nm for multi-depth epidermal and dermal pigment.'
      }
    ],
    source: 'HealRx Clinical Laser Registry / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'anti-aging-botox-fillers': {
    hero: '/images/treatments/hero_anti_aging.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_anti_aging.jpg',
        title: 'Anatomical Facial Mapping',
        caption: 'Pre-procedure dynamic expression analysis ensuring natural movement preservation.'
      },
      {
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',
        title: 'Sterile Micro-Dosing Suite',
        caption: 'US FDA-approved botulinum and cohesive hyaluronic acid dermal matrices.'
      }
    ],
    source: 'HealRx Aesthetic Medicine Registry / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'body-sculpting-contouring': {
    hero: '/images/treatments/hero_body_sculpting.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_body_sculpting.jpg',
        title: 'Multi-Polar Radiofrequency Heating',
        caption: 'Safe deep subcutaneous thermal heating stimulating collagen contraction and skin tightening.'
      },
      {
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
        title: 'Lymphatic Drainage Integration',
        caption: 'Pulsed mechanical drainage accelerating local metabolic clearance of cell metabolites.'
      }
    ],
    source: 'HealRx Body Wellness Collection / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  },

  'tattoo-removal-laser': {
    hero: '/images/treatments/hero_tattoo_removal.jpg',
    procedureImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    detailImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
    textureImage: 'https://images.unsplash.com/photo-1512290900672-1f55b9a4c160?auto=format&fit=crop&w=800&q=80',
    reviewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80',
    gallery: [
      {
        image: '/images/treatments/hero_tattoo_removal.jpg',
        title: 'Photoacoustic Ink Fragmentation',
        caption: 'Nanosecond pulses break synthetic pigment molecules into microscopic particles for phagocytosis.'
      },
      {
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
        title: 'Cold Air Cryo-Cooling',
        caption: 'Active -30°C cryogenic chilled airflow maintains thermal protection during ink clearing.'
      }
    ],
    source: 'HealRx Clinical Laser Collection / Conceptual Editorial Artwork',
    licenseNote: 'HealRx Aesthetic Campaign Artwork. Doctor-supervised protocol.'
  }
};
