/**
 * Centralized Visual Assets Registry for HealRx Aesthetics & Laser Clinic
 * 
 * All media URLs and visual placeholders are defined here to enable instantaneous
 * client asset updates without modifying any React components.
 */

export const ASSETS = {
  // Brand & Identity
  brand: {
    logoText: 'HealRx',
    logoSubtext: 'AESTHETICS & LASER CLINIC',
    monogram: 'H',
    favicon: '/favicon.svg',
  },

  // 3D / Hero Section
  hero: {
    // Elegant fallback image if WebGL / 3D is disabled or on reduced-motion devices
    fallbackPoster: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
    badgeText: 'SION • MUMBAI',
  },

  // Doctor / Medical Leadership
  doctor: {
    // Dr. Pruthvi Vaity aesthetic portrait
    portrait: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80',
    consultation: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    signature: 'Dr. Pruthvi Vaity',
  },

  // Clinic Ambiance & Architecture (Sion Clinic)
  clinic: {
    exteriorOrEntrance: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    reception: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    treatmentRoom1: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    laserSuite: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    consultationSuite: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80',
  },

  // Treatment Visuals (Categorized)
  treatments: {
    // Laser
    laserHairReduction: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    carbonLaserPeel: 'https://images.unsplash.com/photo-1512290900672-1f55b9a4c160?auto=format&fit=crop&w=1000&q=80',
    pigmentationLaser: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
    tattooRemoval: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=1000&q=80',
    
    // Skin & Medi-Facials
    hydraMediFacial: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
    acneScarResurfacing: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    chemicalPeels: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
    skinPrpCollagen: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',

    // Hair
    hairPrpGfc: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
    scalpMesotherapy: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80',

    // Face & Aesthetics (Injectables)
    antiAgingInjectables: 'https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?auto=format&fit=crop&w=1000&q=80',
    dermalFillers: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',

    // Body & Wellness
    bodyContouring: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
  },

  // Before & After Interactive Demonstration Sets
  beforeAfter: [
    {
      id: 'laser-hair',
      title: 'Laser Hair Reduction (Underarm Area)',
      treatment: 'Triple Wavelength Laser',
      timeframe: '6 Sessions Protocol',
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      notes: 'Significant reduction in hair density and smoothing of follicular texture.',
    },
    {
      id: 'acne-pigmentation',
      title: 'Acne Scars & Post-Inflammatory Erythema',
      treatment: 'Laser Resurfacing & Hydra-Infusion',
      timeframe: '4 Months Treatment Plan',
      before: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
      notes: 'Smoothed dermal contour, refined pore matrix, reduced pigmentation marks.',
    },
    {
      id: 'skin-radiance',
      title: 'Carbon Laser Peel & Skin Rejuvenation',
      treatment: 'Hollywood Laser Glow Protocol',
      timeframe: 'Post 2 Sessions',
      before: 'https://images.unsplash.com/photo-1512290900672-1f55b9a4c160?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
      notes: 'Clarified tone, sebum balance restored, natural luminous hydration.',
    }
  ]
};
