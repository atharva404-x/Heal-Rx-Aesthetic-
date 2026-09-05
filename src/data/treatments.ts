import { Treatment } from '../types';
import { TREATMENT_ASSETS } from './treatmentAssets';

export const TREATMENTS: Treatment[] = [
  // =========================================================================
  // 1. TRIPLE WAVELENGTH LASER HAIR REDUCTION
  // =========================================================================
  {
    id: 'laser-hair-reduction',
    slug: 'laser-hair-reduction',
    title: 'Triple Wavelength Laser Hair Reduction',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    eyebrow: 'LASER DERMATOLOGY • CLINICAL EXCELLENCE',
    heroHeadline: ['TRIPLE WAVELENGTH', 'Laser Hair Reduction'],
    heroStatement: 'Synchronized 755nm, 808nm, and 1064nm beam technology targeting deep follicular matrices with active sapphire contact cooling at 4°C.',
    heroMetadata: [
      { label: 'WAVELENGTHS', value: '755 / 808 / 1064nm' },
      { label: 'COOLING', value: 'Sapphire Chill (4°C)' },
      { label: 'PROTOCOL', value: 'Custom Indian Phototype' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Precision permanent reduction engineered for Indian skin and coarse follicles.',
    shortDescription: 'Safe, virtually painless triple-wavelength laser technology targeting deep follicles while protecting the surrounding epidermis with integrated contact cooling.',
    fullDescription: 'Our medical-grade Laser Hair Reduction protocol harnesses synchronized triple wavelengths (Alexandrite 755nm, Diode 808nm, and Nd:YAG 1064nm) to systematically disable active hair follicles across varied depths. Unlike traditional single-wavelength systems, this combined beam profile delivers superior safety for melanin-rich Indian skin tones, minimizing epidermal heat while ensuring maximum follicular thermal destruction.',
    pullQuote: 'Effective hair reduction on Indian skin isn’t about cranking up heat—it’s about matching three synchronized wavelengths to distinct follicle depths while keeping the epidermis chilled at 4°C.',
    accent: {
      primary: '#707f96',
      surface: 'rgba(112, 127, 150, 0.08)',
      border: 'rgba(112, 127, 150, 0.25)',
      glow: 'rgba(112, 127, 150, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(112, 127, 150, 0.15), transparent 70%)',
      badgeText: 'text-slate-400',
    },
    concern: {
      headline: "Could this be the treatment you're looking for?",
      points: [
        'Persistent or rapid hair regrowth requiring tedious shaving and waxing cycles',
        'Painful ingrown hairs, folliculitis, or razor bumps across sensitive skin zones',
        'Coarse or stubborn hair that failed to respond to single-wavelength laser machines',
        'Desire for consistently smooth, low-maintenance skin without recurring irritation'
      ],
      explanation: 'If traditional hair removal leaves your skin inflamed, bumpy, or darkened with post-inflammatory pigmentation, our doctor-calibrated triple-wavelength laser delivers a permanent reduction pathway tailored specifically for your follicle depth and skin phototype.'
    },
    interactiveConcerns: [
      {
        id: 'ingrown-folliculitis',
        title: 'Painful Ingrown Hairs & Bumps',
        description: 'Recurrent follicular inflammation and darkened spots caused by hair curling beneath the surface.',
        whyRoutineFails: 'Waxing and shaving rip or fracture the shaft, forcing sharp regrowth into the follicle wall.',
        clinicalSolution: 'The Nd:YAG 1064nm beam directly targets and deactivates the vascular root, preventing the physical formation of curved ingrown shafts.'
      },
      {
        id: 'rapid-regrowth',
        title: 'Exhausting Waxing & Shaving Cycles',
        description: 'Hair returning within 48 to 72 hours, leaving shadow or rough prickly stubble.',
        whyRoutineFails: 'Depilatory creams and razors sever hair only at the epidermal plane, leaving the active germinative matrix intact.',
        clinicalSolution: 'Triple-wave thermal absorption systematically damages follicular stem cells across cyclical anagen phases for lasting dormancy.'
      },
      {
        id: 'strawberry-skin',
        title: 'Strawberry Legs & Dark Follicle Pores',
        description: 'Visible dark dots across legs and underarms where coarse roots show through translucent skin.',
        whyRoutineFails: 'Topical scrubs cannot dissolve the deeply rooted pigmented follicle bulb beneath the dermis.',
        clinicalSolution: 'By shrinking follicle diameter over 6–8 sessions, surrounding dermal pores contract and the dark dot appearance disappears.'
      },
      {
        id: 'wax-pigmentation',
        title: 'Post-Wax Darkening & Burns',
        description: 'Skin discoloration on underarms or bikini lines triggered by repeated hot wax trauma.',
        whyRoutineFails: 'Mechanical skin pulling causes micro-tears that signal melanocytes to deposit protective melanin.',
        clinicalSolution: 'Sapphire contact cooling maintains skin at 4°C, preventing thermal trauma while laser energy targets only the root.'
      }
    ],
    interactiveDiscovery: {
      headline: 'What This Laser Actually Does Beneath The Surface',
      subtitle: 'Synchronized light energy penetrates three anatomical layers without harming epidermal melanin.',
      deviceImage: TREATMENT_ASSETS['laser-hair-reduction'].procedureImage,
      hotspots: [
        {
          id: 'hs-cooling',
          x: 48,
          y: 28,
          label: 'Chill Tip',
          title: 'Sapphire Active Contact Cooling (4°C)',
          explanation: 'Continuous contact chill numbs sensory nerve endings and guards the epidermis from thermal accumulation before, during, and after each laser pulse.',
          benefit: 'Virtually pain-free delivery and zero post-treatment burning.'
        },
        {
          id: 'hs-alex',
          x: 32,
          y: 62,
          label: '755nm Beam',
          title: 'Alexandrite Superficial Follicular Sweep',
          explanation: 'High melanin absorption specifically calibrated for finer, lighter hairs located near the upper follicular infundibulum (brows, upper lip).',
          benefit: 'Catches fine hair that diode lasers routinely miss.'
        },
        {
          id: 'hs-diode',
          x: 52,
          y: 72,
          label: '808nm Beam',
          title: 'Classic Diode Deep Follicle Target',
          explanation: 'High repetition rate with moderate melanin absorption penetrates directly into the dermal follicle bulb (arms, legs, back).',
          benefit: 'Rapid glides over large body areas with high efficacy.'
        },
        {
          id: 'hs-yag',
          x: 70,
          y: 84,
          label: '1064nm Beam',
          title: 'Nd:YAG Subcutaneous Follicle Safety',
          explanation: 'Lowest epidermal melanin absorption allows maximum energy penetration deep into coarse roots without pigment disruption in dark skin tones.',
          benefit: 'Uncompromising safety for Indian Fitzpatrick phototypes IV–VI.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Skin Phototype & Follicle Mapping',
        subtitle: 'Consultation & Parameter Calibration',
        description: 'Dr. Pruthvi Vaity evaluates your skin melanin level, hair diameter, and growth density to set customized joule fluences.',
        clinicalFocus: 'Zero generic machine presets; parameters tailored to individual phototype.',
        image: TREATMENT_ASSETS['laser-hair-reduction'].hero
      },
      {
        step: '02',
        title: 'Skin Preparation & Grid Marking',
        subtitle: 'Clean Mapping & Protective Barrier',
        description: 'The treatment zone is cleanly shaved flush to the epidermal surface and demarcated into precise anatomical grids to ensure zero overlap or missed patches.',
        clinicalFocus: 'Surface hair is removed to avoid thermal burn on the skin surface.',
        image: TREATMENT_ASSETS['laser-hair-reduction'].procedureImage
      },
      {
        step: '03',
        title: 'Sapphire Glide Laser Delivery',
        subtitle: 'Continuous Contact Cooling & Pulses',
        description: 'A sterile chilled coupling gel is applied, and the laser handpiece glides smoothly across each grid with active 4°C sapphire cooling.',
        clinicalFocus: 'Follicular thermolysis occurs while the outer skin remains pleasantly chilled.',
        image: TREATMENT_ASSETS['laser-hair-reduction'].detailImage
      },
      {
        step: '04',
        title: 'Soothing Barrier Restoration',
        subtitle: 'Post-Laser Thermal Relief & SPF',
        description: 'Gel is cleansed away with thermal spring water, followed by an application of doctor-formulated calming emulsion and broad-spectrum SPF 50+.',
        clinicalFocus: 'Immediate suppression of transient erythema for effortless return to routine.',
        image: TREATMENT_ASSETS['laser-hair-reduction'].textureImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Laser hair reduction is unsafe or burns darker Indian skin tones.',
        reality: 'Single-wavelength older lasers did pose risks, but our 1064nm Nd:YAG wavelength safely bypasses epidermal melanin to deliver heat only to the deep follicle bulb.',
        clinicalInsight: 'We calibrate pulse durations to exceed the epidermal thermal relaxation time, ensuring absolute skin safety.'
      },
      {
        myth: 'One session gives permanent hair removal forever.',
        reality: 'Hair follicles grow in three asynchronous phases. Only follicles in the active Anagen phase absorb laser heat, which is why 6 to 8 sessions are essential to treat all follicles.',
        clinicalInsight: 'After a full series, clients experience 85–95% permanent reduction, with residual hair turning fine and vellus.'
      },
      {
        myth: 'You cannot shave between scheduled laser appointments.',
        reality: 'Shaving is actually encouraged! You must only avoid waxing, threading, or epilating, which yank the follicle root needed for the laser to work.',
        clinicalInsight: 'Shaving leaves the subsurface root intact while protecting surface skin from thermal conductivity.'
      }
    ],
    visualMetaphor: {
      type: 'laser-beam',
      caption: 'Synchronized Triple Wavelength Follicular Action',
      scientificNote: '755nm, 808nm, and 1064nm wavelengths simultaneously disable superficial, mid-dermal, and deep follicle roots under continuous 4°C sapphire chill.'
    },
    whoItIsFor: [
      'Individuals seeking long-term reduction of unwanted facial or body hair',
      'Patients prone to painful ingrown hairs, folliculitis, or razor bumps',
      'Those desiring smooth, low-maintenance skin without wax irritation',
      'Suitable for all skin Fitzpatrick types (Type I through VI)'
    ],
    benefits: [
      'Substantial permanent hair density reduction across 6–8 sessions',
      'Active Sapphire contact cooling system ensures high patient comfort',
      'Eliminates strawberry legs, ingrown hairs, and post-wax pigmentation',
      'Fast session turnaround with dynamic glide-mode technology'
    ],
    process: [
      {
        step: '01',
        title: 'Skin & Follicle Assessment',
        description: 'Doctor examination of hair thickness, density, skin phototype, and medical history to calibrate laser energy parameters.'
      },
      {
        step: '02',
        title: 'Preparation & Grid Marking',
        description: 'The target area is cleaned, shaved flush with the skin surface, and mapped into treatment zones for uniform laser coverage.'
      },
      {
        step: '03',
        title: 'Cooling Gel & Laser Delivery',
        description: 'A soothing coupling gel is applied, followed by continuous-motion laser pulses with active chill-tip cooling for zero discomfort.'
      },
      {
        step: '04',
        title: 'Post-Laser Soothing & SPF',
        description: 'Skin is cleansed with pure thermal water, infused with aloe-based post-laser cream, and protected with broad-spectrum physical sunscreen.'
      }
    ],
    whatToExpect: {
      duration: '15 – 45 mins (depending on area)',
      anesthesia: 'None required (integrated sapphire cooling tip)',
      downtime: 'Zero downtime (mild transient pinkness for 1-2 hours)',
      sensation: 'Soothing cold contact with gentle tingling warmth',
      primaryConcern: 'Unwanted Hair & Chronic Folliculitis',
      resultsVisibility: 'Noticeable thinning within 2–3 weeks following first session',
      sessionCount: '6 to 8 sessions spaced 4–6 weeks apart for optimal reduction'
    },
    aftercare: [
      'Avoid direct sun exposure and apply broad-spectrum SPF 50+ daily',
      'Do not pluck, wax, or bleach between laser sessions (shaving only)',
      'Avoid hot saunas, steam rooms, or vigorous gym workouts for 24 hours',
      'Keep the treated zone moisturized with fragrance-free soothing creams'
    ],
    faqs: [
      {
        question: 'Is laser hair reduction painful at HealRx?',
        answer: 'Our advanced triple-wavelength platform features an active sapphire contact cooling tip that chills the skin down to 4°C, creating a comfortable warm tingling sensation rather than pain.'
      },
      {
        question: 'How many sessions will I need for permanent results?',
        answer: 'Because hair grows in cyclical phases (Anagen, Catagen, Telogen), only follicles in the active Anagen phase absorb laser energy. A series of 6 to 8 sessions is recommended to catch all hair cycles.'
      },
      {
        question: 'Is it safe for dusky or sensitive skin?',
        answer: 'Yes. The Nd:YAG 1064nm component of our laser safely bypasses surface melanin to target the follicle bulb directly, preventing pigmentation changes in darker skin.'
      },
      {
        question: 'How should I prepare before my session?',
        answer: 'Shave the treatment area 12–24 hours before your appointment. Avoid waxing, threading, or chemical bleaches for at least 3 weeks prior, as the hair root must remain intact for the laser to work.'
      }
    ],
    reviews: [
      {
        reviewer: 'Ananya S.',
        location: 'Sion, Mumbai',
        rating: 5,
        review: 'The laser experience at HealRx Sion is completely painless compared to other clinics I have visited in Mumbai. The cooling tip makes a huge difference. By session 4, hair growth was almost nonexistent and my skin feels so smooth.',
        source: 'Google Business Review',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Your Smoother Skin Starts Here →',
    formCtaLabel: 'Take Me One Step Closer →',
    whatsappMessage: 'Hello HealRx Team, I would like to explore Triple Wavelength Laser Hair Reduction with Dr. Pruthvi Vaity.',
    beforeAfterId: 'laser-hair',
    galleryImages: TREATMENT_ASSETS['laser-hair-reduction'].gallery,
    image: TREATMENT_ASSETS['laser-hair-reduction'].hero,
    featured: true,
    sourceIds: ['laser-hair-reduction']
  },

  // =========================================================================
  // 2. CARBON LASER PEEL (HOLLYWOOD FACIAL)
  // =========================================================================
  {
    id: 'carbon-laser-peel',
    slug: 'carbon-laser-peel',
    title: 'Carbon Laser Peel (Hollywood Glow)',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    eyebrow: 'PHOTOACOUSTIC EXFOLIATION • HOLLYWOOD GLOW',
    heroHeadline: ['CARBON LASER PEEL', 'Hollywood Glow'],
    heroStatement: 'Activated medical carbon emulsion met with nanosecond Nd:YAG photoacoustic pulses. Porcelain pore refinement and luminous event-ready radiance with zero downtime.',
    heroMetadata: [
      { label: 'LASER SYSTEM', value: 'Q-Switched Nd:YAG' },
      { label: 'SESSION TIME', value: '45 Minutes' },
      { label: 'DOWNTIME', value: 'Zero Recovery' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'The glow, with a little more science.',
    shortDescription: 'Instant clarifying and collagen-boosting protocol combining activated medical carbon with nanosecond laser vaporization for radiant, oil-balanced skin.',
    fullDescription: 'Often celebrated as the "Hollywood Facial," our Carbon Laser Peel delivers immediate luminous refinement without peeling or social downtime. A micronized carbon suspension is massaged onto the skin, penetrating into dilated pores and binding excess sebum and cellular debris. A specialized Q-switched Nd:YAG laser then pulses across the treatment plane; the nanosecond acoustic energy shatters the carbon particles, vaporizing deep impurities while stimulating fresh collagen synthesis.',
    pullQuote: 'A carbon peel is photomechanical, not thermal. It shatters trapped sebum and polishes the stratum corneum in nanoseconds, creating instant radiance without chemical peeling redness.',
    accent: {
      primary: '#d4af37',
      surface: 'rgba(212, 175, 55, 0.08)',
      border: 'rgba(212, 175, 55, 0.25)',
      glow: 'rgba(212, 175, 55, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.15), transparent 70%)',
      badgeText: 'text-amber-500',
    },
    concern: {
      headline: "Could this be the treatment your skin is asking for?",
      points: [
        'Congested T-zone pores and recurrent blackheads resistant to standard face washes',
        'Excessive sebum production leaving skin visibly greasy within hours',
        'Dull, tired-looking complexion ahead of major events, weddings, or photoshoots',
        'Uneven textural roughness without wanting chemical peeling downtime'
      ],
      explanation: 'When sebum and dead cells harden inside the follicular infundibulum, home scrubs only scratch the surface. Medical carbon acts as an absorbable magnetic sponge that the laser vaporizes cleanly away in nanoseconds.'
    },
    interactiveConcerns: [
      {
        id: 'congested-pores',
        title: 'Enlarged Congested Pores',
        description: 'Dilated follicular openings packed with oxidized sebum and micro-pollution particles.',
        whyRoutineFails: 'Salicylic cleansers rinse over the pore opening without penetrating compacted deeper plugs.',
        clinicalSolution: 'Micronized carbon slurry flows into the pore depths; laser energy instantly shatters both the carbon and the plug.'
      },
      {
        id: 'oily-shine',
        title: 'Uncontrollable Mid-Day Shine',
        description: 'Sebaceous glands producing excess oil, leading to makeup sliding and patchy skin texture.',
        whyRoutineFails: 'Alcohol-based toners strip the outer barrier, triggering compensatory rebound oiliness.',
        clinicalSolution: 'Photothermal laser passes gently warm the sebaceous glands, down-regulating sebum production without drying skin.'
      },
      {
        id: 'dull-tone',
        title: 'Dull, Flat Skin Ahead of Events',
        description: 'Stratum corneum buildup absorbing ambient light rather than reflecting it.',
        whyRoutineFails: 'Physical walnut/apricot scrubs cause micro-fissures and inflammation without uniform cell renewal.',
        clinicalSolution: 'Photoacoustic exfoliation vaporizes dead cells uniformly, instantly unveiling natural luminous bounce.'
      },
      {
        id: 'mild-pigment',
        title: 'Uneven Surface Roughness & Marks',
        description: 'Mild superficial post-acne pigmentation and rough micro-texture.',
        whyRoutineFails: 'Brightening serums require months of continuous use to demonstrate faint textural change.',
        clinicalSolution: 'Laser micro-pulses stimulate subtle collagen contraction, leaving skin remarkably soft and refined within hours.'
      }
    ],
    interactiveDiscovery: {
      headline: 'The Dual Photomechanical Action of the Carbon Peel',
      subtitle: 'See how activated carbon particles and 1064nm acoustic energy interact in real time.',
      deviceImage: TREATMENT_ASSETS['carbon-laser-peel'].procedureImage,
      hotspots: [
        {
          id: 'hs-carbon-layer',
          x: 42,
          y: 45,
          label: 'Carbon Slurry',
          title: 'Liquid Carbon Nanoparticle Suspension',
          explanation: 'Medical-grade carbon particles possess immense surface area, naturally binding to trapped lipid debris, dead keratinocytes, and toxins inside pores.',
          benefit: 'Acts as an exogenous chromophore, sparing natural skin pigment.'
        },
        {
          id: 'hs-photoacoustic',
          x: 58,
          y: 65,
          label: 'Acoustic Snap',
          title: 'Q-Switched 1064nm Photoacoustic Blast',
          explanation: 'Nanosecond pulses create acoustic shockwaves that shatter the carbon into microscopic smoke, taking embedded pore oil and debris with it.',
          benefit: 'Clears deep debris without epidermal heat injury or peeling.'
        },
        {
          id: 'hs-subsurface',
          x: 75,
          y: 35,
          label: 'Dermal Heat',
          title: 'Sub-Thermal Collagen Stimulation',
          explanation: 'A secondary defocussed laser pass delivers gentle heat into the papillary dermis to tighten pore margins and stimulate fibroblasts.',
          benefit: 'Long-term pore tightening and smooth skin elasticity.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Deep Clinical Cleansing & Degreasing',
        subtitle: 'Preparing the Dermal Surface',
        description: 'Skin is cleansed of all surface lipids, makeup, and pollution using a physiological enzymatic cleanser to ensure carbon penetration.',
        clinicalFocus: 'Pore openings are unblocked so carbon particles reach the deep follicular base.',
        image: TREATMENT_ASSETS['carbon-laser-peel'].hero
      },
      {
        step: '02',
        title: 'Medical Carbon Suspension Application',
        subtitle: '10-Minute Binding Period',
        description: 'A thin, uniform coat of black carbon liquid is gently massaged across the face and allowed to dry for 10 minutes, locking onto sebum deposits.',
        clinicalFocus: 'Ensures 100% surface contact with enlarged pore margins.',
        image: TREATMENT_ASSETS['carbon-laser-peel'].textureImage
      },
      {
        step: '03',
        title: 'Q-Switched Laser Vaporization',
        subtitle: 'Photoacoustic Clearing Pass',
        description: 'The Nd:YAG handpiece moves over the face with a rhythmic acoustic snapping sound, cleanly vaporizing every trace of carbon alongside dead cellular debris.',
        clinicalFocus: 'Zero burning sensation; patient feels a warm, satisfying micro-snap.',
        image: TREATMENT_ASSETS['carbon-laser-peel'].procedureImage
      },
      {
        step: '04',
        title: 'Calming Hydration & Radiant SPF',
        subtitle: 'Immediate Event-Ready Glow',
        description: 'Residual particles are cleansed away, followed by an application of hyaluronic acid serum, calming peptide mist, and broad-spectrum sunscreen.',
        clinicalFocus: 'Instant radiant luminosity with zero flaking, redness, or downtime.',
        image: TREATMENT_ASSETS['carbon-laser-peel'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'The carbon laser peel causes visible flaking or skin shedding like chemical peels.',
        reality: 'It does not! The exfoliation is photoacoustic and occurs in nanoseconds. Your skin does not peel off over subsequent days; it is immediately smooth and radiant.',
        clinicalInsight: 'This makes the Carbon Peel the premier choice for brides and event attendees 24–48 hours prior to occasions.'
      },
      {
        myth: 'It stains or leaves residual black carbon in your pores.',
        reality: 'The laser completely disintegrates the carbon into harmless sub-micron particles, which are suctioned away with medical air evacuation.',
        clinicalInsight: 'Pores appear significantly cleaner and smaller immediately post-treatment.'
      }
    ],
    visualMetaphor: {
      type: 'carbon-clear',
      caption: 'The Nanosecond Carbon Vaporization Metaphor',
      scientificNote: 'Drag the slider to visualize how the dark carbon suspension binds impurities and is cleanly vaporized by photoacoustic laser pulses to reveal luminous skin.'
    },
    whoItIsFor: [
      'Individuals with congested, enlarged pores and persistent blackheads',
      'Patients struggling with excessive oiliness and frequent breakouts',
      'Anyone seeking an instant radiant glow before an important event or wedding',
      'Safe for all skin types and requires absolutely zero recovery downtime'
    ],
    benefits: [
      'Immediate porcelain-like glow and luminous skin clarity',
      'Deep thermal pore purification and sebum reduction',
      'Gentle mechanical exfoliation without chemical peeling or flaking',
      'Stimulates dermal collagen to refine micro-texture over time'
    ],
    process: [
      {
        step: '01',
        title: 'Double Cleansing & Degreasing',
        description: 'Skin is cleansed thoroughly to remove surface makeup, oils, and environmental pollutants.'
      },
      {
        step: '02',
        title: 'Medical Carbon Application',
        description: 'A thin layer of liquid carbon is massaged into the skin, penetrating deep into pores and micro-crevices.'
      },
      {
        step: '03',
        title: 'Laser Vaporization',
        description: 'Q-switched Nd:YAG laser energy targets the carbon, vaporizing it along with dead cells and trapped impurities.'
      },
      {
        step: '04',
        title: 'Calming Serum & Shield',
        description: 'Skin is treated with soothing hyaluronic acid serums, cold rollers, and broad-spectrum sun protection.'
      }
    ],
    whatToExpect: {
      duration: '45 mins',
      anesthesia: 'None required (completely comfortable)',
      downtime: 'Zero downtime (instant event-ready glow)',
      sensation: 'Gentle warmth with a light snapping sensation',
      primaryConcern: 'Dull Skin, Congested Pores & Excess Sebum',
      resultsVisibility: 'Immediate radiant glow right after the procedure',
      sessionCount: 'Single session for events; 4–6 sessions for sustained oil control'
    },
    aftercare: [
      'Keep skin hydrated with non-comedogenic moisturizers',
      'Apply SPF 50+ sunscreen diligently every 3–4 hours outdoors',
      'Avoid heavy retinoids or exfoliating AHA/BHA acids for 48 hours',
      'Enjoy your natural glow—makeup can be applied the same evening'
    ],
    faqs: [
      {
        question: 'Will my face peel or flake after a Carbon Laser Peel?',
        answer: 'No. Despite being called a "peel", the exfoliation happens instantaneously during the laser pulse via photoacoustic energy. There is no visible skin shedding or peeling in the days that follow.'
      },
      {
        question: 'How long does the Hollywood Glow last?',
        answer: 'The luminous event glow is most pronounced for 1 to 2 weeks following a single session. For long-term oil balance and refined pores, a course of 4 to 6 sessions spaced monthly is ideal.'
      },
      {
        question: 'Can I get this done right before a wedding or party?',
        answer: 'Yes! It is one of the most popular pre-event treatments in aesthetic medicine. We recommend scheduling it 1 to 2 days prior to your occasion for optimal luminosity.'
      }
    ],
    reviews: [
      {
        reviewer: 'Pooja M.',
        location: 'Matunga, Mumbai',
        rating: 5,
        review: 'I booked the Carbon Laser Peel before my brother’s wedding at HealRx Sion. The glow was unbelievable! My makeup sat so smoothly and my skin did not get oily even after 8 hours of dancing.',
        source: 'Practo Verified Patient',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Ready for That Fresh Glow? →',
    formCtaLabel: 'Let’s Start the Conversation →',
    whatsappMessage: 'Hello HealRx Team, I am interested in scheduling a Carbon Laser Peel (Hollywood Facial).',
    beforeAfterId: 'skin-radiance',
    galleryImages: TREATMENT_ASSETS['carbon-laser-peel'].gallery,
    image: TREATMENT_ASSETS['carbon-laser-peel'].hero,
    featured: true,
    sourceIds: ['carbon-laser-peel']
  },

  // =========================================================================
  // 3. HYDRA MEDI-FACIAL & DERMAL INFUSION
  // =========================================================================
  {
    id: 'hydra-medi-facial',
    slug: 'hydra-medi-facial',
    title: 'Hydra Medi-Facial & Dermal Infusion',
    category: 'skin',
    categoryLabel: 'Advanced Skin Science',
    eyebrow: 'VORTEX DERMAL INFUSION • CELLULAR HYDRATION',
    heroHeadline: ['HYDRA-INFUSION', 'Clinical Medi-Facial'],
    heroStatement: 'Pneumatic vortex extraction with active hyaluronic acid, multi-peptides, and antioxidant infusions. Immediate cellular plumpness and barrier replenishment.',
    heroMetadata: [
      { label: 'DELIVERY', value: 'Vortex Dermal Infusion' },
      { label: 'SESSION TIME', value: '60 Minutes' },
      { label: 'POST-CARE', value: 'Medical LED Lounge' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Deep cellular hydration meets clinical pore purification.',
    shortDescription: 'Multi-step vortex dermal infusion that cleanses, painlessly extracts blackheads, and floods parched skin with medical hyaluronic acid, peptides, and antioxidants.',
    fullDescription: 'Unlike conventional salon facials that rely on manual pinching and superficial creams, the HealRx Hydra Medi-Facial utilizes pneumatic vortex infusion technology. A patented spiral tip creates a fluid vortex that dissolves hardened sebum, vacuums blackheads painlessly, and simultaneously delivers pharmaceutical-grade hyaluronic acid, peptides, and botanical antioxidants deep into the dermal matrix.',
    pullQuote: 'Salons pinch pores with metal extractors causing broken capillaries. We use pneumatic vortex suction that softens impurities with salicylic acid before gently lifting them away.',
    accent: {
      primary: '#2a9d8f',
      surface: 'rgba(42, 157, 143, 0.08)',
      border: 'rgba(42, 157, 143, 0.25)',
      glow: 'rgba(42, 157, 143, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(42, 157, 143, 0.15), transparent 70%)',
      badgeText: 'text-teal-500',
    },
    concern: {
      headline: "Could this be the reset your skin needs?",
      points: [
        'Persistent dehydration lines and dull skin that resists rich moisturizers',
        'Stubborn blackheads and whiteheads around the nose, chin, and forehead',
        'Congested pores combined with sensitive, reactive skin that hates harsh scrubs',
        'Desire for an immediate plump, dewy, deeply refreshed complexion'
      ],
      explanation: 'When skin barrier lipids deplete, moisture evaporates rapidly while dead cells build up. Hydra-infusion simultaneously clears dead cells and floods dehydrated dermal layers with cross-linked hyaluronic acid.'
    },
    interactiveConcerns: [
      {
        id: 'stubborn-blackheads',
        title: 'Painful Blackheads & Nose Clogs',
        description: 'Dark sebum plugs oxidized in pore openings that resist facial washes.',
        whyRoutineFails: 'Metal extractor tools tear surrounding skin tissue, causing post-inflammatory hyperpigmentation.',
        clinicalSolution: 'Gentle salicylic vortex liquefies the keratin plug before pneumatic negative pressure vacuums it away.'
      },
      {
        id: 'dehydration-texture',
        title: 'Flaky, Parched Texture & Tightness',
        description: 'Skin feeling tight after washing with visible fine creping lines.',
        whyRoutineFails: 'Regular lotions sit on top of dead stratum corneum cells without dermal penetration.',
        clinicalSolution: 'Simultaneous lactic acid desquamation opens pathways for immediate deep hyaluronic saturation.'
      },
      {
        id: 'dull-fatigue',
        title: 'Pollution-Induced Skin Fatigue',
        description: 'Mumbai urban dust and humidity leaving skin gray, tired, and dull.',
        whyRoutineFails: 'Surface wipes cannot extract micro-particulate pollution trapped in dermal folds.',
        clinicalSolution: 'Antioxidant infusion with Vitamin E and green tea neutralizes free radicals and restores skin vitality.'
      }
    ],
    interactiveDiscovery: {
      headline: 'The Pneumatic Vortex Infusion Engine',
      subtitle: 'See how simultaneous vacuum suction and serum delivery operate at the nozzle tip.',
      deviceImage: TREATMENT_ASSETS['hydra-medi-facial'].procedureImage,
      hotspots: [
        {
          id: 'hs-vortex-tip',
          x: 48,
          y: 40,
          label: 'Spiral Tip',
          title: 'Patented Spiral Vortex Abrasion',
          explanation: 'Rotational fluid vortex gently dislodges dead surface cells without abrasive crystals or scratch marks.',
          benefit: 'Smooth polishing safe for sensitive skin.'
        },
        {
          id: 'hs-salicylic',
          x: 35,
          y: 65,
          label: 'AHA / BHA',
          title: 'Beta-Hydrox Acid Liquefaction',
          explanation: 'Lipophilic salicylic acid penetrates sebum-filled pores to dissolve stubborn blackheads before suction.',
          benefit: 'Painless blackhead extraction without redness.'
        },
        {
          id: 'hs-hyaluronic',
          x: 65,
          y: 60,
          label: 'Peptides',
          title: 'Low-Molecular Hyaluronic & Peptide Flooding',
          explanation: 'Under continuous negative pressure, skin cells absorb high-concentration hyaluronic acid and collagen-stimulating peptides.',
          benefit: 'Immediate 72-hour dewy, glass-skin hydration bounce.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Vortex Cleansing & Lactic Acid Exfoliation',
        subtitle: 'Smoothing the Surface Barrier',
        description: 'A soothing lactic acid solution loosens dead cells, preparing the surface for frictionless extraction.',
        clinicalFocus: 'Non-irritating desquamation suitable even for rosacea-prone skin.',
        image: TREATMENT_ASSETS['hydra-medi-facial'].hero
      },
      {
        step: '02',
        title: 'Salicylic Pore Softening & Extraction',
        subtitle: 'Painless Vacuuming of Impurities',
        description: 'Targeted salicylic vortex clears out blackheads, sebum plugs, and dead debris from the T-zone without any pinching.',
        clinicalFocus: 'Pain-free extraction leaves zero marks or red dents.',
        image: TREATMENT_ASSETS['hydra-medi-facial'].procedureImage
      },
      {
        step: '03',
        title: 'Antioxidant & Hyaluronic Infusion',
        subtitle: 'Cellular Nourishment & Plumping',
        description: 'Parched skin is saturated with a customized cocktail of low-molecular hyaluronic acid, peptides, and botanical antioxidants.',
        clinicalFocus: 'Restores skin barrier integrity and halts trans-epidermal water loss.',
        image: TREATMENT_ASSETS['hydra-medi-facial'].detailImage
      },
      {
        step: '04',
        title: 'Medical LED Phototherapy & Barrier Shield',
        subtitle: 'Soothing Calming Session',
        description: '15 minutes of medical LED phototherapy stimulates mitochondrial ATP, followed by doctor-formulated barrier cream and broad-spectrum sunscreen.',
        clinicalFocus: 'Seals active nutrients deep inside the dermis for lasting bounce.',
        image: TREATMENT_ASSETS['hydra-medi-facial'].textureImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Hydra facials are just regular salon facials with a fancy machine.',
        reality: 'Salon facials use manual pinching, steaming, and generic creams. A Medi-Facial at HealRx uses pneumatic vortex technology, medical-grade active solutions, and is overseen by Dr. Pruthvi Vaity.',
        clinicalInsight: 'We use clinical-strength salicylic and hyaluronic acids calibrated to skin pH, preventing inflammation.'
      },
      {
        myth: 'Vacuum extraction stretches pores and makes them larger.',
        reality: 'The vortex suction cleans compacted sebum that was actively stretching the pore walls. Once cleared and hydrated, elastic fibers contract, making pores appear smaller.',
        clinicalInsight: 'Clean pores reflect light uniformly, creating the coveted "glass skin" effect.'
      }
    ],
    visualMetaphor: {
      type: 'hydra-vortex',
      caption: 'The Pneumatic Vortex Hydration Metaphor',
      scientificNote: 'Concentric vortex waves painlessly lift cellular impurities while infusing low-molecular peptides and hyaluronic acid deep into the dermal matrix.'
    },
    whoItIsFor: [
      'Anyone experiencing dull, parched, or air-conditioned dehydrated skin',
      'Patients with persistent blackheads, whiteheads, and congested T-zones',
      'Brides, grooms, and event attendees seeking an immediate glowing refresh',
      'Suitable for all skin phototypes and sensitive skin prone to redness'
    ],
    benefits: [
      'Painless vortex extraction of blackheads without red pinch marks',
      'Intense, long-lasting dermal hydration and bouncy glass-skin finish',
      'Visibly tightened pores and smooth makeup application',
      'Restores the protective skin barrier against urban pollution'
    ],
    process: [
      {
        step: '01',
        title: 'Vortex Exfoliation',
        description: 'Dead skin cells are gently swept away with a lactic acid solution to reveal healthy new skin underneath.'
      },
      {
        step: '02',
        title: 'Pore Extraction',
        description: 'Painless suction clears out blackheads, sebum, and environmental debris from deep within the follicles.'
      },
      {
        step: '03',
        title: 'Nutrient Infusion',
        description: 'Potent peptides, hyaluronic acid, and botanical antioxidants are infused under negative pneumatic pressure.'
      },
      {
        step: '04',
        title: 'LED Phototherapy',
        description: 'Medical LED light calms the skin, stimulates cellular repair, and seals in deep hydration.'
      }
    ],
    whatToExpect: {
      duration: '60 mins',
      anesthesia: 'None required (wonderfully relaxing and soothing)',
      downtime: 'Zero downtime (skin is immediately luminous and hydrated)',
      sensation: 'Cool, soothing liquid contact with gentle vacuum sensation',
      primaryConcern: 'Dehydration, Congestion & Dull Texture',
      resultsVisibility: 'Immediate plump, dewy radiance right off the treatment bed',
      sessionCount: 'Monthly maintenance recommended for peak dermal health'
    },
    aftercare: [
      'Avoid washing face with hot water for 12 hours to retain infused serums',
      'Apply SPF 50+ sunscreen daily to safeguard fresh, hydrated skin',
      'Avoid harsh exfoliants or active chemical scrubs for 48 hours',
      'Maintain hydration by drinking plenty of water over the next 3 days'
    ],
    faqs: [
      {
        question: 'How is this different from a salon facial?',
        answer: 'Salon facials use steam, manual fingernail or comedone metal pinching, and perfumed creams that often trigger breakouts. Our Hydra Medi-Facial uses pneumatic vortex technology, sterile medical solutions, and physician calibration for pure clinical skin health.'
      },
      {
        question: 'Will extraction hurt my nose or leave red marks?',
        answer: 'Not at all. The suction is fluid-based and completely painless. It liquefies blackheads before pulling them out, leaving zero redness, bruising, or indentations.'
      },
      {
        question: 'Can I do this if I have active acne?',
        answer: 'Yes. We adjust the tip and swap the solutions to salicylic and antimicrobial formulations that calm active pustules without spreading bacteria.'
      }
    ],
    reviews: [
      {
        reviewer: 'Dr. Sneha R.',
        location: 'Sion East, Mumbai',
        rating: 5,
        review: 'The Hydra Medi-Facial at HealRx is by far the cleanest, most medically sound facial I have had in Mumbai. My blackheads were extracted with zero pain and my skin stayed radiant for weeks.',
        source: 'Google Business Review',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Let’s Talk About That Fresh-Skin Feeling →',
    formCtaLabel: 'Reserve My Medi-Facial Experience →',
    whatsappMessage: 'Hello HealRx Team, I would like to book a Hydra Medi-Facial appointment.',
    galleryImages: TREATMENT_ASSETS['hydra-medi-facial'].gallery,
    image: TREATMENT_ASSETS['hydra-medi-facial'].hero,
    featured: true,
    sourceIds: ['hydra-medi-facial']
  },

  // =========================================================================
  // 4. HAIR REGROWTH PRP & GFC THERAPY
  // =========================================================================
  {
    id: 'hair-prp-gfc-therapy',
    slug: 'hair-prp-gfc-therapy',
    title: 'Hair Regrowth PRP & GFC Therapy',
    category: 'hair',
    categoryLabel: 'Regenerative Hair',
    eyebrow: 'BIO-CELLULAR TRICHOLOGY • REGENERATIVE MEDICINE',
    heroHeadline: ['HAIR PRP & GFC', 'Growth Factor Therapy'],
    heroStatement: 'Autologous high-yield growth factor concentrate and platelet-rich plasma micro-infused to re-energize dormant miniaturized hair follicles.',
    heroMetadata: [
      { label: 'EXTRACTION', value: 'High-Yield Centrifugation' },
      { label: 'BIOMARKERS', value: 'PDGF, VEGF & EGF' },
      { label: 'DOWNTIME', value: 'Zero Prolonged Disruption' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Revitalize miniaturized hair follicles with autologous growth factors.',
    shortDescription: 'Advanced autologous platelet and growth factor concentrate (GFC) therapy stimulating dormant hair roots, arresting excessive fall, and improving hair shaft caliber.',
    fullDescription: 'Our Hair Regrowth protocol represents the cutting edge of regenerative trichology. Utilizing your body’s own healing biology, a small blood sample is processed in a specialized centrifuge to isolate high-yield Platelet-Rich Plasma (PRP) or acellular Growth Factor Concentrate (GFC). Enriched with concentrated PDGF, VEGF, and bFGF, this biological elixir is delivered via micro-injections directly to the dermal papilla, stimulating blood micro-circulation and extending the active anagen growth cycle.',
    pullQuote: 'Follicles do not simply vanish; they miniaturize over years under hormonal and circulatory stress. Autologous growth factors re-vascularize the papilla to thicken thinning shafts before they are permanently lost.',
    accent: {
      primary: '#52796f',
      surface: 'rgba(82, 121, 111, 0.08)',
      border: 'rgba(82, 121, 111, 0.25)',
      glow: 'rgba(82, 121, 111, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(82, 121, 111, 0.15), transparent 70%)',
      badgeText: 'text-emerald-500',
    },
    concern: {
      headline: "Noticeable hair shedding on your pillow or comb?",
      points: [
        'Excessive daily hair fall exceeding 100 strands per day',
        'Visible widening of the central parting line or receding frontal temples',
        'Thinning, wispy hair strands lacking density and volume',
        'Sluggish regrowth following seasonal shedding, dengue, or viral illness'
      ],
      explanation: 'Follicular miniaturization begins long before bald patches appear. Biological growth factors provide targeted nutrition directly to the root matrix where topical serums cannot reach.'
    },
    interactiveConcerns: [
      {
        id: 'widening-parting',
        title: 'Widening Parting & Visible Scalp',
        description: 'Scalp skin becoming visible through thinning hair under bright lighting.',
        whyRoutineFails: 'Biotin gummies and oils cannot reverse genetic DHT sensitivity at the follicle base.',
        clinicalSolution: 'GFC delivers concentrated VEGF and PDGF directly into the miniaturized dermal papilla to thicken caliber.'
      },
      {
        id: 'receding-hairline',
        title: 'Receding Temples & Forehead Thinning',
        description: 'Temporal hair roots thinning and receding backwards.',
        whyRoutineFails: 'Shampoos rinse down the drain in 60 seconds without crossing the scalp stratum corneum.',
        clinicalSolution: 'Doctor micro-injections target the exact follicular depth (2.5mm) with zero biological dilution.'
      },
      {
        id: 'post-illness-fall',
        title: 'Sudden Heavy Fall (Telogen Effluvium)',
        description: 'Clumps of hair falling out months after high stress, COVID, or dengue fever.',
        whyRoutineFails: 'Follicles are stuck in the resting telogen phase and lack signaling to restart anagen.',
        clinicalSolution: 'Autologous signaling proteins kickstart the biological clock, shifting dormant follicles back into active growth.'
      }
    ],
    interactiveDiscovery: {
      headline: 'The Bio-Cellular Growth Factor Cascade',
      subtitle: 'Understand how concentrated autologous platelets awaken dormant hair roots.',
      deviceImage: TREATMENT_ASSETS['hair-prp-gfc-therapy'].procedureImage,
      hotspots: [
        {
          id: 'hs-centrifuge',
          x: 40,
          y: 35,
          label: 'Separation',
          title: 'Acellular Growth Factor Isolation',
          explanation: 'Centrifugal separation extracts platelet concentrate while filtering out non-therapeutic red blood cells.',
          benefit: 'Virtually painless micro-injections with minimal inflammation.'
        },
        {
          id: 'hs-vegf',
          x: 55,
          y: 65,
          label: 'VEGF Infusion',
          title: 'Vascular Endothelial Growth Factor (VEGF)',
          explanation: 'Stimulates angiogenesis (new micro-capillary formation) around dormant hair bulbs to restore blood and nutrient supply.',
          benefit: 'Strengthens weak follicle anchors to immediately arrest shedding.'
        },
        {
          id: 'hs-anagen',
          x: 70,
          y: 50,
          label: 'Stem Cells',
          title: 'Anagen Phase Reactivation',
          explanation: 'Platelet-Derived Growth Factor (PDGF) signals follicle stem cells to enter the active growing cycle.',
          benefit: 'Converts fine, wispy strands into thicker, pigmented terminal hairs.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Digital Scalp Trichoscopy Examination',
        subtitle: 'Magnified Follicle Health Check',
        description: 'Dr. Pruthvi Vaity uses high-magnification polarized trichoscopy to assess hair count per follicular unit and rule out scarring alopecias.',
        clinicalFocus: 'Identifies active miniaturization before irreversible root atrophy.',
        image: TREATMENT_ASSETS['hair-prp-gfc-therapy'].hero
      },
      {
        step: '02',
        title: 'Gentle Blood Collection & GFC Isolation',
        subtitle: 'Sterile Centrifugal Extraction',
        description: 'A small sample (10–20ml) of blood is drawn using butterfly needles and spun in specialized separation tubes to isolate concentrated growth factor proteins.',
        clinicalFocus: '100% autologous biological material—zero risk of allergic reaction.',
        image: TREATMENT_ASSETS['hair-prp-gfc-therapy'].textureImage
      },
      {
        step: '03',
        title: 'Scalp Numbing & Precision Micro-Dosing',
        subtitle: 'Targeted Dermal Administration',
        description: 'A cooling spray or topical anesthetic is applied. The enriched growth factor solution is micro-injected at 2mm depth using ultra-fine 32G nano-needles.',
        clinicalFocus: 'Gentle, rapid delivery with minimal discomfort.',
        image: TREATMENT_ASSETS['hair-prp-gfc-therapy'].procedureImage
      },
      {
        step: '04',
        title: 'Scalp Sanitization & Protocol Guidance',
        subtitle: 'Immediate Return to Routine',
        description: 'The scalp is cleansed with antiseptic solution and high-frequency thermal stimulation, followed by guidance on post-procedure care and nutrition.',
        clinicalFocus: 'Clients return to work or daily activities the very same day.',
        image: TREATMENT_ASSETS['hair-prp-gfc-therapy'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'PRP/GFC therapy is only for completely bald men.',
        reality: 'PRP/GFC requires living, miniaturized follicles to stimulate. It is most potent for early-to-moderate thinning in both men and women.',
        clinicalInsight: 'Once a follicle has been completely lost for years, surgical restoration is required. Early biological intervention preserves natural hair.'
      },
      {
        myth: 'PRP injections are intensely painful.',
        reality: 'At HealRx Sion, we use topical numbing, vibration anesthesia devices, and ultra-fine 32G needles (thinner than an eyelash), making the session very tolerable.',
        clinicalInsight: 'Our patients describe it as a series of mild, quick pinpricks.'
      }
    ],
    visualMetaphor: {
      type: 'growth-factor',
      caption: 'The Bio-Cellular Growth Factor Metaphor',
      scientificNote: 'Autologous growth factors re-vascularize the follicular papilla, prolonging the active anagen phase and restoring hair shaft caliber.'
    },
    whoItIsFor: [
      'Men and women with early-to-moderate androgenetic alopecia (pattern hair loss)',
      'Patients experiencing severe post-fever, post-pregnancy, or stress-related hair fall',
      'Individuals noticing a widening hair parting or diffuse thinning across the scalp',
      'Those seeking an all-natural, autologous treatment without chemical side effects'
    ],
    benefits: [
      'Noticeable reduction in hair fall within 3 to 4 weeks of first session',
      'Thickens the diameter of miniaturized, wispy hair shafts',
      'Stimulates dormant roots into the active anagen growing phase',
      '100% natural, autologous procedure utilizing your own biological growth factors'
    ],
    process: [
      {
        step: '01',
        title: 'Trichoscopy Assessment',
        description: 'High-magnification digital camera imaging of the scalp to map follicle density, hair caliber, and miniaturization grade.'
      },
      {
        step: '02',
        title: 'Blood Draw & Centrifuge',
        description: 'A standard blood sample is collected and centrifuged in specialized medical tubes to separate growth factors.'
      },
      {
        step: '03',
        title: 'Scalp Numbing & Injection',
        description: 'The scalp is sanitized and pre-treated with topical numbing, followed by doctor micro-injections using ultra-fine needles.'
      },
      {
        step: '04',
        title: 'High-Frequency Stimulation',
        description: 'High-frequency treatment improves microcirculation, soothes the scalp, and ensures rapid absorption.'
      }
    ],
    whatToExpect: {
      duration: '60 mins',
      anesthesia: 'Topical numbing spray / cream applied prior to injection',
      downtime: 'Zero downtime (mild scalp tenderness for a few hours)',
      sensation: 'Gentle pressure and minor pinpricks well-tolerated by patients',
      primaryConcern: 'Hair Thinning, Shedding & Loss of Density',
      resultsVisibility: 'Reduced hair fall by month 1; new hair density by months 3–4',
      sessionCount: '4 to 6 sessions spaced 4 weeks apart for optimal hair density'
    },
    aftercare: [
      'Avoid washing hair or shampooing for 24 hours post-procedure',
      'Avoid heavy sweaty workouts, swimming, or saunas for 48 hours',
      'Do not apply hair oils, gels, or topical minoxidil for 24 hours',
      'Gently comb hair and follow Dr. Vaity’s nutritional and supplement advice'
    ],
    faqs: [
      {
        question: 'What is the difference between PRP and GFC?',
        answer: 'GFC (Growth Factor Concentrate) is an advanced evolution of PRP. While PRP contains platelets, GFC extracts the concentrated active growth factor proteins directly from the platelets, eliminating red and white blood cells for higher stability and virtually zero post-injection inflammation.'
      },
      {
        question: 'Are hair injections painful?',
        answer: 'We prioritize patient comfort by applying topical anesthetic sprays and utilizing vibration distraction tools alongside microscopic 32G needles. Most patients feel only minor, easily manageable pinpricks.'
      },
      {
        question: 'When will I see new hair growth?',
        answer: 'Hair fall stabilization is typically observed within 3 to 4 weeks. Visible improvement in hair thickness, reduced scalp visibility, and new baby hair growth become apparent between months 3 and 4 as hair progresses through its natural growth cycle.'
      }
    ],
    reviews: [
      {
        reviewer: 'Karan D.',
        location: 'Sion Koliwada, Mumbai',
        rating: 5,
        review: 'I started GFC sessions with Dr. Pruthvi Vaity after experiencing severe hair fall. By the third session, my shedding had completely stopped and my crown area looks visibly thicker. Very reassuring doctor and clean clinic.',
        source: 'Google Business Review',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Start Your Hair Journey →',
    formCtaLabel: 'Request My Scalp Assessment →',
    whatsappMessage: 'Hello HealRx Team, I would like to schedule a Hair PRP/GFC Consultation.',
    galleryImages: TREATMENT_ASSETS['hair-prp-gfc-therapy'].gallery,
    image: TREATMENT_ASSETS['hair-prp-gfc-therapy'].hero,
    featured: true,
    sourceIds: ['hair-prp-gfc-therapy']
  },

  // =========================================================================
  // 5. ACNE SCAR FRACTIONAL RESURFACING
  // =========================================================================
  {
    id: 'acne-scar-laser-resurfacing',
    slug: 'acne-scar-laser-resurfacing',
    title: 'Acne Scar Fractional Resurfacing',
    category: 'skin',
    categoryLabel: 'Advanced Skin Science',
    eyebrow: 'MICROTHERMAL REMODELING • COLLAGEN INDUCTION',
    heroHeadline: ['FRACTIONAL LASER', 'Acne Scar Resurfacing'],
    heroStatement: 'Microscopic thermal column arrays stimulating neocollagenesis while keeping epidermal bridges intact for accelerated healing of rolling, boxcar, and icepick scars.',
    heroMetadata: [
      { label: 'SCANNER', value: 'Computerized Micro-Array' },
      { label: 'EPIDERMAL CARE', value: 'Preserved Thermal Bridges' },
      { label: 'REPAIR CYCLE', value: 'Progressive Neocollagen' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Smooth rolling, boxcar, and textured scars from the deep dermal layer.',
    shortDescription: 'Precision fractional laser technology that creates controlled microthermal treatment zones, stimulating massive neocollagenesis to elevate depressed atrophic scars.',
    fullDescription: 'Atrophic acne scars are tethered by rigid fibrotic bands in the deep reticular dermis. Our Acne Scar Fractional Resurfacing protocol employs computerized fractional micro-beams that penetrate past the superficial epidermis into the scarred dermal plane. Each laser micro-column induces targeted thermal coagulation, triggering the body’s natural wound-healing cascade to synthesize fresh, resilient Type I and III collagen fibers.',
    pullQuote: 'Atrophic acne scars are tethered down by fibrotic bands in the deep dermis. Creams cannot lift them. Fractional laser breaks those tethered fibers and forces new collagen to rebuild the floor of the scar.',
    accent: {
      primary: '#bc6c25',
      surface: 'rgba(188, 108, 37, 0.08)',
      border: 'rgba(188, 108, 37, 0.25)',
      glow: 'rgba(188, 108, 37, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(188, 108, 37, 0.15), transparent 70%)',
      badgeText: 'text-orange-500',
    },
    concern: {
      headline: "Struggling with post-acne indentations and texture?",
      points: [
        'Depressed boxcar or rolling scar indentations left behind by cystic acne',
        'Uneven dermal surface casting visible shadows under side lighting',
        'Large, stubborn icepick pores resistant to micro-needling and peels',
        'Desire for real, structural scar remodeling without months of social downtime'
      ],
      explanation: 'Atrophic scars are architectural defects in deep collagen. Topical serums cannot rebuild sunken dermal craters. Controlled fractional thermal columns stimulate real neocollagenesis from beneath the scar.'
    },
    interactiveConcerns: [
      {
        id: 'rolling-scars',
        title: 'Rolling Scars & Shadowing',
        description: 'Wavy, undulating skin depressions anchored by deep subcutaneous fibrotic bands.',
        whyRoutineFails: 'Topical retinoids cannot reach or detach deep fibrotic tethers.',
        clinicalSolution: 'Fractional microthermal columns thermally disrupt the tethering bands and stimulate fresh collagen bed formation.'
      },
      {
        id: 'boxcar-scars',
        title: 'Boxcar Scars & Angular Edges',
        description: 'Round or oval depressions with sharp, vertical cliff-like borders.',
        whyRoutineFails: 'Chemical peels only soften the rim without lifting the floor of the crater.',
        clinicalSolution: 'Precision fractional ablative pulses remodel the sharp scar borders and induce dermal filling.'
      },
      {
        id: 'post-acne-roughness',
        title: 'Textured Surface Roughness',
        description: 'Skin feeling coarse with micro-pitting across cheeks and temples.',
        whyRoutineFails: 'Micro-dermabrasion only scuffs the dead surface without deeper remodeling.',
        clinicalSolution: 'Surrounding healthy microthermal bridges rapidly re-epithelialize, providing smooth skin contour in 5–7 days.'
      }
    ],
    interactiveDiscovery: {
      headline: 'The Fractional Microthermal Remodeling Mechanism',
      subtitle: 'See how microthermal treatment columns stimulate dermal collagen synthesis.',
      deviceImage: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].procedureImage,
      hotspots: [
        {
          id: 'hs-micro-column',
          x: 45,
          y: 50,
          label: 'Microthermal Column',
          title: 'Microscopic Treatment Zones (MTZs)',
          explanation: 'Laser creates microscopic columns of thermal coagulative energy extending deep into the reticular dermis while leaving intervening skin intact.',
          benefit: 'Rapid 5-day healing with minimal downtime.'
        },
        {
          id: 'hs-collagen-floor',
          x: 60,
          y: 75,
          label: 'Collagen Lift',
          title: 'Neocollagenesis at the Scar Floor',
          explanation: 'Thermal heat triggers heat-shock proteins, forcing fibroblasts to produce fresh structural collagen that elevates the depressed scar base.',
          benefit: 'Permanent architectural lift of atrophic scar depth.'
        },
        {
          id: 'hs-epidermal-bridge',
          x: 35,
          y: 30,
          label: 'Healthy Bridge',
          title: 'Preserved Epidermal Bridges',
          explanation: 'Surrounding untouched skin cells migrate into the micro-columns within 24–48 hours to seal the surface barrier.',
          benefit: 'Low risk of infection and minimal crusting.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Scar Morphology Classification & Mapping',
        subtitle: 'Consultation with Dr. Pruthvi Vaity',
        description: 'Scars are categorized into rolling, boxcar, and icepick types to select tailored fractional density and depth parameters.',
        clinicalFocus: 'Tailoring settings prevents hyperpigmentation in melanin-rich Indian skin.',
        image: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].hero
      },
      {
        step: '02',
        title: 'Medical Topical Anesthetic Application',
        subtitle: '45-Minute Numbing Protocol',
        description: 'A compounded medical numbing cream is applied under occlusion, ensuring the procedural passes remain comfortable.',
        clinicalFocus: 'Comprehensive comfort for relaxed, precise delivery.',
        image: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].textureImage
      },
      {
        step: '03',
        title: 'Precision Fractional Laser Delivery',
        subtitle: 'Multi-Pass Microthermal Delivery',
        description: 'The laser handpiece delivers computer-scanned microthermal pulses across scarred zones, accompanied by continuous cold air cryo-cooling.',
        clinicalFocus: 'Even, feathered passes prevent sharp contrast borders.',
        image: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].procedureImage
      },
      {
        step: '04',
        title: 'Bio-Cellular Calming Mask & Healing Shield',
        subtitle: 'Post-Procedure Recovery Protocol',
        description: 'Chilled healing peptides and pure medical zinc barriers are applied to calm transient heat and accelerate epidermal regeneration.',
        clinicalFocus: 'Accelerated barrier restoration to prevent PIH.',
        image: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Fractional laser will ruin dusky skin with permanent black marks.',
        reality: 'When performed with conservative fluences and adequate pre- and post-procedure conditioning, fractional laser is safe and effective for Indian skin phototypes.',
        clinicalInsight: 'Dr. Vaity calibrates pulse duration and density specifically for Indian Fitzpatrick IV–VI skin.'
      },
      {
        myth: 'All scars vanish completely in just one treatment.',
        reality: 'Collagen remodeling is a biological process taking 3 to 6 months per session. A 50–80% improvement is achievable across a structured 3 to 5 session course.',
        clinicalInsight: 'We set honest, realistic dermatological expectations rather than commercial promises.'
      }
    ],
    visualMetaphor: {
      type: 'collagen-matrix',
      caption: 'The Microthermal Remodeling Metaphor',
      scientificNote: 'Fractional columns trigger deep dermal fibroblast proliferation, synthesizing new collagen fibers that progressively elevate the floor of atrophic scars.'
    },
    whoItIsFor: [
      'Individuals with atrophic acne scars (rolling, boxcar, or mixed scar types)',
      'Patients with persistent enlarged pore texture and post-acne dermal damage',
      'Those desiring permanent architectural skin smoothing rather than temporary fixes',
      'Suitable for all skin phototypes under customized doctor calibration'
    ],
    benefits: [
      'Permanent lifting and filling of depressed atrophic scar craters',
      'Smoother overall dermal light reflection and refined pore texture',
      'Stimulates long-term collagen remodeling lasting months post-treatment',
      'Computerized scanning ensures uniform, safe energy distribution'
    ],
    process: [
      {
        step: '01',
        title: 'Scar Mapping & Depth Analysis',
        description: 'Dr. Vaity evaluates scar morphology under tangential lighting to formulate a multi-modality treatment plan.'
      },
      {
        step: '02',
        title: 'Topical Numbing Protocol',
        description: 'High-strength clinical numbing cream is applied for 45 minutes to ensure high procedure comfort.'
      },
      {
        step: '03',
        title: 'Fractional Laser Delivery',
        description: 'Precision fractional pulses are delivered across the scarred zones alongside active cold air cryo-cooling.'
      },
      {
        step: '04',
        title: 'Post-Laser Soothing & Shield',
        description: 'A cooling biomimetic mask, regenerative epidermal growth factors, and barrier repair creams are applied.'
      }
    ],
    whatToExpect: {
      duration: '75 mins (including 45 mins numbing)',
      anesthesia: 'High-potency topical numbing cream applied prior to procedure',
      downtime: '3 to 5 days of mild pinkness and micro-crusting (easily concealed)',
      sensation: 'Warm prickling sensation; well-managed by topical numbing & cooling',
      primaryConcern: 'Atrophic Acne Scars, Pitted Texture & Enlarged Pores',
      resultsVisibility: 'Progressive skin smoothing starting week 3, peaking at months 3–6',
      sessionCount: '3 to 5 sessions spaced 4–6 weeks apart for significant scar remodeling'
    },
    aftercare: [
      'Keep the treated skin moisturized with doctor-prescribed barrier creams',
      'Do not pick, scratch, or scrub micro-crusts; let them slough off naturally',
      'Strict sun avoidance and mandatory daily broad-spectrum SPF 50+ usage',
      'Avoid active acids (glycolic, salicylic) or retinoids for at least 7 days'
    ],
    faqs: [
      {
        question: 'Is fractional laser safe for darker Indian skin tones?',
        answer: 'Yes, when calibrated correctly. At HealRx, Dr. Pruthvi Vaity uses conservative fractional density settings and customized pulse widths that protect epidermal melanin while delivering therapeutic heat deep into the scarred dermis.'
      },
      {
        question: 'How much downtime should I plan for?',
        answer: 'Expect mild redness and warmth similar to a sunburn for 24 to 48 hours, followed by microscopic bronzing that naturally exfoliates within 3 to 5 days. Most patients return to desk work within 48 hours.'
      },
      {
        question: 'Are acne scar results permanent?',
        answer: 'Yes. The new collagen fibers synthesized by your body to lift depressed scars remain permanent. Maintaining healthy skin habits and preventing new cystic acne preserves your results long-term.'
      }
    ],
    reviews: [
      {
        reviewer: 'Varun T.',
        location: 'Chembur, Mumbai',
        rating: 5,
        review: 'I had deep boxcar scars on both cheeks from teenage acne. After 3 sessions of fractional laser at HealRx Sion, the depth of my scars has softened dramatically. The texture under direct sunlight is so much smoother.',
        source: 'Google Business Review',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Take the First Step Toward Smoother Skin →',
    formCtaLabel: 'Request My Scar Assessment →',
    whatsappMessage: 'Hello HealRx Team, I would like to schedule an Acne Scar Assessment with Dr. Pruthvi Vaity.',
    beforeAfterId: 'acne-pigmentation',
    galleryImages: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].gallery,
    image: TREATMENT_ASSETS['acne-scar-laser-resurfacing'].hero,
    featured: true,
    sourceIds: ['acne-scar-laser-resurfacing']
  },

  // =========================================================================
  // 6. PIGMENTATION & MELASMA LASER TONING
  // =========================================================================
  {
    id: 'pigmentation-q-switch-laser',
    slug: 'pigmentation-q-switch-laser',
    title: 'Pigmentation & Melasma Laser Toning',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    eyebrow: 'SELECTIVE PHOTOTHERMOLYSIS • MELANIN SHATTERING',
    heroHeadline: ['Q-SWITCH Nd:YAG', 'Pigmentation & Melasma'],
    heroStatement: 'Photoacoustic nanosecond shockwaves shattering dermal melanosomes into sub-cellular particles without thermal melanin stimulation in Indian skin tones.',
    heroMetadata: [
      { label: 'WAVELENGTH', value: 'Dual 1064nm / 532nm' },
      { label: 'MECHANISM', value: 'Acoustic Fragmentation' },
      { label: 'SAFETY PROFILE', value: 'Melanin-Safe Low Fluence' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Target stubborn melasma, sun spots, and dark marks without dermal rebound.',
    shortDescription: 'Subcellular selective photothermolysis with low-fluence Q-switched Nd:YAG laser gently fragmenting pigment clusters without triggering inflammatory rebound.',
    fullDescription: 'Pigmentation in Indian skin is notoriously reactive; aggressive peels or intense lasers often trigger post-inflammatory hyperpigmentation (PIH). At HealRx, our Laser Toning protocol utilizes low-fluence, multi-pass Q-switched Nd:YAG 1064nm technology. The nanosecond acoustic pulses selectively shatter melanosomes into sub-cellular fragments without heating surrounding melanocytes, allowing the body’s lymphatic macrophages to naturally clear away discoloration.',
    pullQuote: 'Treating melasma is about whispering to melanocytes, not screaming at them. High heat causes rebound darkening. Low-fluence acoustic toning gently shatters pigment clusters while keeping melanocytes calm.',
    accent: {
      primary: '#c97a56',
      surface: 'rgba(201, 122, 86, 0.08)',
      border: 'rgba(201, 122, 86, 0.25)',
      glow: 'rgba(201, 122, 86, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(201, 122, 86, 0.15), transparent 70%)',
      badgeText: 'text-amber-600',
    },
    concern: {
      headline: "Frustrated by patches that return despite de-pigmenting creams?",
      points: [
        'Stubborn melasma patches across cheekbones, nose bridge, and forehead',
        'Post-inflammatory hyperpigmentation (PIH) left behind by old acne lesions',
        'Sun-induced tanning, freckles, and localized dermal pigmentation',
        'Fear of harsh bleach treatments that cause rebound darkening'
      ],
      explanation: 'Melasma is a chronic pigment disorder fueled by UV and hormonal triggers. Our doctor-led protocol uses low-fluence photoacoustic toning to clear accumulated pigment without inflammatory heat rebound.'
    },
    interactiveConcerns: [
      {
        id: 'melasma-butterfly',
        title: 'Melasma Butterfly Patches',
        description: 'Symmetrical brownish patches across the cheekbones and nose.',
        whyRoutineFails: 'Hydroquinone creams carry risk of ochronosis and rebound darkening upon cessation.',
        clinicalSolution: 'Subcellular selective photothermolysis gently disperses melanin packets without triggering melanocyte hyperactivity.'
      },
      {
        id: 'acne-pih',
        title: 'Dark Acne Marks (PIH)',
        description: 'Persistent brown and purple marks lingering months after pimples resolve.',
        whyRoutineFails: 'Vitamin C serums act slowly on dermal-level post-inflammatory pigment.',
        clinicalSolution: '1064nm acoustic wave targets melanin in both the epidermis and upper dermis simultaneously.'
      },
      {
        id: 'sun-tanning',
        title: 'Stubborn Uneven Sun Damage',
        description: 'Mottled skin tone and solar lentigines from chronic sun exposure.',
        whyRoutineFails: 'Standard parlor bleach uses harsh ammonia that sensitizes the skin barrier.',
        clinicalSolution: 'Non-invasive laser toning clarifies tone and refines dermal texture with zero peeling.'
      }
    ],
    interactiveDiscovery: {
      headline: 'Subcellular Selective Photothermolysis in Action',
      subtitle: 'See how acoustic energy fragments melanosomes without damaging melanocytes.',
      deviceImage: TREATMENT_ASSETS['pigmentation-q-switch-laser'].procedureImage,
      hotspots: [
        {
          id: 'hs-melanosome',
          x: 45,
          y: 45,
          label: 'Acoustic Shock',
          title: 'Nanosecond Melanosome Fragmentation',
          explanation: 'Low-fluence pulses deliver photoacoustic shocks that fracture melanin granules into microscopic particles without destroying the melanocyte cell.',
          benefit: 'Prevents the hypopigmentation or rebound darkening common with harsh lasers.'
        },
        {
          id: 'hs-phagocytosis',
          x: 65,
          y: 65,
          label: 'Lymphatic Clearance',
          title: 'Macrophage Phagocytosis & Clearance',
          explanation: 'Once shattered, the body’s lymphatic scavenger cells (macrophages) engulf the melanin debris and naturally eliminate it.',
          benefit: 'Gradual, authentic, and sustained tone clarification.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Wood’s Lamp & Pigment Depth Analysis',
        subtitle: 'Consultation with Dr. Pruthvi Vaity',
        description: 'Diagnostic UV Wood’s lamp imaging differentiates between epidermal (superficial) and dermal (deep) pigment components.',
        clinicalFocus: 'Accurate depth diagnosis dictates laser fluence and pulse frequency.',
        image: TREATMENT_ASSETS['pigmentation-q-switch-laser'].hero
      },
      {
        step: '02',
        title: 'Double Cleansing & Eye Protection',
        subtitle: 'Preparing the Treatment Plane',
        description: 'Skin is cleansed with gentle micellar solutions, and medical optical metal goggles are secured over the eyes.',
        clinicalFocus: 'Absolute ocular and corneal safety in clinical laser suites.',
        image: TREATMENT_ASSETS['pigmentation-q-switch-laser'].textureImage
      },
      {
        step: '03',
        title: 'Low-Fluence Multi-Pass Laser Toning',
        subtitle: 'Gentle Acoustic Laser Scanning',
        description: 'Dr. Vaity performs 3 to 4 feathered passes across pigmented patches, listening to acoustic feedback to confirm melanosome disruption.',
        clinicalFocus: 'Zero excessive heat accumulation; client feels mild warm tingling.',
        image: TREATMENT_ASSETS['pigmentation-q-switch-laser'].procedureImage
      },
      {
        step: '04',
        title: 'Tranexamic Acid & Zinc Physical Shield',
        subtitle: 'Melanin Down-Regulation & SPF',
        description: 'Skin is infused with pharmaceutical-grade topical tranexamic acid and zinc oxide broad-spectrum SPF 50+ to prevent UV reactivation.',
        clinicalFocus: 'Long-term suppression of melanocyte signaling.',
        image: TREATMENT_ASSETS['pigmentation-q-switch-laser'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Strong laser burns are required to peel off melasma.',
        reality: 'Strong thermal lasers trigger massive inflammation, which causes severe rebound melasma on Indian skin. Low-fluence gentle toning is the gold-standard medical approach.',
        clinicalInsight: 'Patience and gentle acoustic passes preserve long-term skin health.'
      },
      {
        myth: 'Once cleared, melasma will never return even in strong sun.',
        reality: 'Melanocytes have biological memory. Unprotected sun exposure or hormonal shifts can re-stimulate pigment, which is why strict daily SPF is essential.',
        clinicalInsight: 'We provide comprehensive homecare maintenance to ensure lasting results.'
      }
    ],
    visualMetaphor: {
      type: 'pigment-shatter',
      caption: 'The Subcellular Melanosome Fragmentation Metaphor',
      scientificNote: 'Acoustic shockwaves selectively fracture dense melanosomes into tiny particles for natural lymphatic clearance without thermal injury.'
    },
    whoItIsFor: [
      'Individuals with recalcitrant melasma, chloasma, or pregnancy masks',
      'Patients with stubborn post-inflammatory hyperpigmentation (PIH)',
      'Those with solar lentigines, freckles, or sun-induced dullness',
      'Safe for Indian Fitzpatrick phototypes III through VI'
    ],
    benefits: [
      'Gradual, safe clearance of deep dermal and superficial epidermal pigment',
      'Zero thermal skin peeling, crusting, or socially disruptive downtime',
      'Down-regulates melanocyte activity to prevent inflammatory rebound',
      'Improves overall facial clarity, tone uniformity, and natural radiance'
    ],
    process: [
      {
        step: '01',
        title: 'Pigment Depth Mapping',
        description: 'Wood’s lamp and trichoscopy evaluation to distinguish epidermal, dermal, and mixed pigmentation.'
      },
      {
        step: '02',
        title: 'Skin Cleansing & Protective Shielding',
        description: 'Medical cleansing and eye shielding in a sanitized laser room.'
      },
      {
        step: '03',
        title: 'Multi-Pass Laser Toning',
        description: 'Low-fluence Q-switched pulses delivered in multiple light passes across the pigmented areas.'
      },
      {
        step: '04',
        title: 'Depigmenting Serum & Physical SPF',
        description: 'Application of clinical tranexamic acid serum and tinted mineral physical sunscreen.'
      }
    ],
    whatToExpect: {
      duration: '40 mins',
      anesthesia: 'None required (mild, comfortable tingling sensation)',
      downtime: 'Zero downtime (mild transient warmth for 30–60 minutes)',
      sensation: 'Gentle warmth with a light tingling sensation',
      primaryConcern: 'Melasma, Sun Spots & Post-Acne Pigmentation',
      resultsVisibility: 'Progressive lightening visible from session 3 onwards',
      sessionCount: '6 to 8 sessions spaced 2–3 weeks apart for stable pigment clearance'
    },
    aftercare: [
      'Strict daily broad-spectrum SPF 50+ application every 3–4 hours',
      'Avoid direct intense sun exposure and wear protective wide-brim hats',
      'Use doctor-recommended gentle barrier-repair moisturizers',
      'Avoid harsh bleach, facial waxing, or abrasive scrubs on treated areas'
    ],
    faqs: [
      {
        question: 'Will the pigmentation come back after treatment?',
        answer: 'Melasma is influenced by ultraviolet light and hormonal triggers. While laser toning clears existing pigment clusters, maintaining strict daily sunscreen habits and following Dr. Vaity’s homecare protocol prevents reactivation.'
      },
      {
        question: 'Can laser toning burn or darken my skin?',
        answer: 'No. We utilize low-fluence toning specifically designed for Indian skin phototypes to ensure safe, sub-cellular acoustic energy delivery without the thermal heat that causes hyperpigmentation.'
      }
    ],
    reviews: [
      {
        reviewer: 'Meera N.',
        location: 'Dadar, Mumbai',
        rating: 5,
        review: 'I had melasma on my cheeks for 3 years after pregnancy. Creams never worked. Dr. Pruthvi Vaity’s laser toning protocol cleared almost 80% of the pigment over 6 sessions. So grateful for the honest care.',
        source: 'Verified Sion Patient',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Let’s Talk About Your Skin Goals →',
    formCtaLabel: 'Request My Pigmentation Assessment →',
    whatsappMessage: 'Hello HealRx Team, I would like to schedule a Pigmentation & Melasma Consultation.',
    beforeAfterId: 'acne-pigmentation',
    galleryImages: TREATMENT_ASSETS['pigmentation-q-switch-laser'].gallery,
    image: TREATMENT_ASSETS['pigmentation-q-switch-laser'].hero,
    featured: true,
    sourceIds: ['pigmentation-q-switch-laser']
  },

  // =========================================================================
  // 7. ANTI-AGING INJECTABLES & MICRO-DOSING
  // =========================================================================
  {
    id: 'anti-aging-botox-fillers',
    slug: 'anti-aging-botox-fillers',
    title: 'Anti-Aging Injectables & Micro-Dosing',
    category: 'face-aesthetics',
    categoryLabel: 'Face & Aesthetics',
    eyebrow: 'DOCTOR-LED AESTHETICS • NATURAL REFINEMENT',
    heroHeadline: ['ANATOMICAL CONTOURING', 'Botox & Dermal Fillers'],
    heroStatement: 'Physician-administered facial mapping and micro-dosing preserving natural dynamic expressions while restoring structural mid-face volume and youthful firmness.',
    heroMetadata: [
      { label: 'FORMULATION', value: 'US FDA-Approved Matrices' },
      { label: 'PHILOSOPHY', value: 'Dynamic Expression Restored' },
      { label: 'COMFORT', value: 'Integrated Micro-Anesthesia' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Subtle, expression-preserving facial rejuvenation by Dr. Pruthvi Vaity.',
    shortDescription: 'Doctor-administered neuromodulator micro-dosing and hyaluronic dermal contouring designed to soften dynamic lines and restore volume while preserving natural emotion.',
    fullDescription: 'At HealRx Sion, facial aesthetics is practiced as an art of anatomical subtlety. We strictly avoid the frozen, overfilled look seen in commercial clinics. Dr. Pruthvi Vaity employs micro-dosing techniques with US FDA-approved neuromodulators to soften dynamic forehead lines, crow’s feet, and frown furrows while maintaining expressive facial movement. Cohesive hyaluronic acid dermal matrices are placed precisely along structural support vectors to restore youthful cheek contour and jawline definition.',
    pullQuote: 'The highest compliment in aesthetic medicine is when friends ask if you’ve been sleeping well or got back from vacation—not what work you had done.',
    accent: {
      primary: '#c5a059',
      surface: 'rgba(197, 160, 89, 0.08)',
      border: 'rgba(197, 160, 89, 0.25)',
      glow: 'rgba(197, 160, 89, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(197, 160, 89, 0.15), transparent 70%)',
      badgeText: 'text-amber-400',
    },
    concern: {
      headline: "Looking in the mirror and seeing tired expressions?",
      points: [
        'Dynamic forehead furrows, frown lines, or crow’s feet that linger at rest',
        'Loss of youthful cheek volume and deepening nasolabial smile folds',
        'Mild jawline jowling and structural contour laxity',
        'Fear of looking stiff, unnatural, or overfilled'
      ],
      explanation: 'Facial aging involves deep fat pad resorption and hyperactive dynamic muscles. Physician micro-dosing gently balances muscle pull while replenishing structural volume along natural bone vectors.'
    },
    interactiveConcerns: [
      {
        id: 'frown-lines',
        title: 'Forehead Lines & Frown Furrows',
        description: 'Deep horizontal lines and "11" creases between the eyebrows caused by habitual expression.',
        whyRoutineFails: 'Creams cannot relax the underlying mimetic facial muscles beneath the skin.',
        clinicalSolution: 'Micro-dosed neuromodulators relax hyperactive muscle fibers while preserving natural eyebrow animation.'
      },
      {
        id: 'cheek-volume',
        title: 'Sunken Cheeks & Smile Lines',
        description: 'Mid-face volume descent leading to pronounced nasolabial folds.',
        whyRoutineFails: 'Collagen supplements are digested in the stomach and do not deposit in cheek fat pads.',
        clinicalSolution: 'Structural placement of cohesive hyaluronic matrices on the zygomatic arch naturally elevates the mid-face.'
      },
      {
        id: 'tired-look',
        title: 'Under-Eye Hollows & Fatigue',
        description: 'Tear trough hollows casting dark shadows beneath the eyes.',
        whyRoutineFails: 'Eye creams cannot restore the migrated infraorbital fat pad.',
        clinicalSolution: 'Micro-cannula micro-aliquots of soft hyaluronic gel smooth the transition from cheek to lower eyelid.'
      }
    ],
    interactiveDiscovery: {
      headline: 'Physician Facial Vector Architecture',
      subtitle: 'Explore Dr. Pruthvi Vaity’s anatomical approach to facial harmony.',
      deviceImage: TREATMENT_ASSETS['anti-aging-botox-fillers'].procedureImage,
      hotspots: [
        {
          id: 'hs-forehead',
          x: 50,
          y: 20,
          label: 'Frontalis',
          title: 'Micro-Dosed Forehead Modulation',
          explanation: 'Conservative micro-droplet injection softens horizontal lines while preserving full eyebrow elevation and emotional expression.',
          benefit: 'No frozen or shiny unnatural appearance.'
        },
        {
          id: 'hs-cheek',
          x: 35,
          y: 50,
          label: 'Malar Vector',
          title: 'Deep Zygomatic Structural Support',
          explanation: 'Cohesive hyaluronic acid placed directly on the periosteum restores youthful mid-face projection and softens nasolabial folds.',
          benefit: 'Lifts the lower face naturally without puffiness.'
        },
        {
          id: 'hs-crows',
          x: 70,
          y: 40,
          label: 'Orbicularis',
          title: 'Lateral Canthal Micro-Dosing (Crow’s Feet)',
          explanation: 'Gentle relaxation of lateral eye sphincter fibers softens squint creases while keeping genuine smile crinkles intact.',
          benefit: 'Refreshed, youthful, rested eye area.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Dynamic Facial Animation Mapping',
        subtitle: 'Comprehensive Assessment by Dr. Vaity',
        description: 'Dr. Vaity evaluates your face during conversation, smiling, and resting to identify exact muscle contraction dynamics.',
        clinicalFocus: 'Custom anatomical map drawn for your unique facial balance.',
        image: TREATMENT_ASSETS['anti-aging-botox-fillers'].hero
      },
      {
        step: '02',
        title: 'Antiseptic Cleansing & Topical Comfort',
        subtitle: 'Sterile Clinical Environment',
        description: 'The face is disinfected with clinical chlorhexidine, and ice or topical numbing is applied to target points.',
        clinicalFocus: 'Strict medical sterility in dedicated consultation rooms.',
        image: TREATMENT_ASSETS['anti-aging-botox-fillers'].textureImage
      },
      {
        step: '03',
        title: 'Ultra-Fine Micro-Dosing Delivery',
        subtitle: 'Subtle Precision Injections',
        description: 'Using microscopic 32G needles or blunt micro-cannulas, micro-aliquots are placed precisely into target muscle or structural layers.',
        clinicalFocus: 'Zero overfilling; natural expression conservation.',
        image: TREATMENT_ASSETS['anti-aging-botox-fillers'].procedureImage
      },
      {
        step: '04',
        title: 'Post-Procedure Guidance & 14-Day Review',
        subtitle: 'Ongoing Physician Oversight',
        description: 'A soothing arnica cream is applied, and a complimentary 14-day follow-up review is scheduled to fine-tune results if desired.',
        clinicalFocus: 'Guaranteed ongoing physician commitment to your results.',
        image: TREATMENT_ASSETS['anti-aging-botox-fillers'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Botox will freeze my face and make me look artificial.',
        reality: 'The "frozen" look is the result of over-dosing by untrained practitioners. In Dr. Vaity’s hands, micro-dosing leaves full emotional movement while softening unwanted wrinkles.',
        clinicalInsight: 'You can still smile, frown, and express yourself naturally.'
      },
      {
        myth: 'Once you start injectables, you can never stop or your face will sag.',
        reality: 'If you choose not to continue, your muscles and skin gradually return to their pre-treatment baseline. Your skin will actually be smoother than if you had never had treatment.',
        clinicalInsight: 'Temporary relaxation prevents dynamic lines from etching permanently into the dermis.'
      }
    ],
    visualMetaphor: {
      type: 'collagen-matrix',
      caption: 'The Anatomical Vector Balance Metaphor',
      scientificNote: 'Physician-administered micro-dosing and cohesive hyaluronic matrices balance dynamic muscle vectors while restoring youthful structural support.'
    },
    whoItIsFor: [
      'Individuals noticing persistent dynamic lines on forehead, glabella, or crow’s feet',
      'Patients experiencing mid-face volume loss, tear troughs, or deepening smile lines',
      'Anyone seeking subtle, natural, physician-administered facial refinement',
      'All procedures performed exclusively by Dr. Pruthvi Vaity'
    ],
    benefits: [
      'Softens dynamic lines while preserving natural facial expressions',
      'Restores youthful volume and cheekbone contour definition',
      'Doctor-administered using US FDA-approved biological formulations',
      'Zero surgical incisions, general anesthesia, or extended downtime'
    ],
    process: [
      {
        step: '01',
        title: 'Facial Anatomy Consultation',
        description: 'Comprehensive static and dynamic evaluation by Dr. Pruthvi Vaity to map treatment vectors.'
      },
      {
        step: '02',
        title: 'Topical Numbing & Marking',
        description: 'Surface numbing cream application and anatomical micro-point marking.'
      },
      {
        step: '03',
        title: 'Doctor Administration',
        description: 'Precise micro-injections using ultra-fine needles or blunt micro-cannulas for maximal comfort.'
      },
      {
        step: '04',
        title: 'Review & Follow-Up',
        description: 'Post-procedure instructions and complimentary 14-day review session.'
      }
    ],
    whatToExpect: {
      duration: '45 mins',
      anesthesia: 'Topical numbing cream & ice distraction (comfortable)',
      downtime: 'Zero downtime (minor swelling or pinprick marks resolving in 24–48h)',
      sensation: 'Brief, mild pinprick sensation lasting only seconds',
      primaryConcern: 'Fine Lines, Wrinkles & Volume Depletion',
      resultsVisibility: 'Botox visible in 4–7 days; fillers deliver immediate structural lift',
      sessionCount: 'Maintained every 4–6 months (Botox) or 12–18 months (Fillers)'
    },
    aftercare: [
      'Keep upright for 4 hours post-procedure; do not lie flat',
      'Avoid strenuous workouts, saunas, and alcohol for 24 hours',
      'Do not rub or massage the treated areas for 48 hours',
      'Attend your scheduled 14-day clinical review with Dr. Vaity'
    ],
    faqs: [
      {
        question: 'Will I look frozen or fake?',
        answer: 'Never at HealRx. Dr. Pruthvi Vaity practices conservative micro-dosing. Our philosophy is that the best injectable work is completely undetectable—you will simply look refreshed, rested, and naturally youthful.'
      },
      {
        question: 'How long do results last?',
        answer: 'Neuromodulators (Botox) typically last 3 to 5 months as muscle function gradually returns. Hyaluronic acid dermal fillers last between 9 and 18 months depending on the formulation and placement area.'
      }
    ],
    reviews: [
      {
        reviewer: 'Anita S.',
        location: 'Sion West, Mumbai',
        rating: 5,
        review: 'Dr. Pruthvi Vaity is an exceptional aesthetic physician. She took time to study my face before suggesting just a few micro-units for my forehead lines. I look completely natural, just like I took a 2-week vacation!',
        source: 'Google Business Review',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Consult With Dr. Pruthvi Vaity →',
    formCtaLabel: 'Request Private Facial Assessment →',
    whatsappMessage: 'Hello HealRx Team, I would like to schedule a Facial Aesthetics Consultation with Dr. Pruthvi Vaity.',
    galleryImages: TREATMENT_ASSETS['anti-aging-botox-fillers'].gallery,
    image: TREATMENT_ASSETS['anti-aging-botox-fillers'].hero,
    featured: false,
    sourceIds: ['anti-aging-botox-fillers']
  },

  // =========================================================================
  // 8. BODY CONTOURING & RF TIGHTENING
  // =========================================================================
  {
    id: 'body-sculpting-contouring',
    slug: 'body-sculpting-contouring',
    title: 'Body Contouring & RF Tightening',
    category: 'body-wellness',
    categoryLabel: 'Body & Wellness',
    eyebrow: 'RADIOFREQUENCY BODY REMODELING • DERMAL FIRMING',
    heroHeadline: ['RADIOFREQUENCY & DRAINAGE', 'Body Sculpting & Contouring'],
    heroStatement: 'Multi-polar subcutaneous thermal tightening paired with pneumatic lymphatic drainage to contour stubborn localized deposits and improve skin elasticity.',
    heroMetadata: [
      { label: 'TECHNOLOGY', value: 'Multi-Polar Radiofrequency' },
      { label: 'DRAINAGE', value: 'Pulsed Lymphatic Flush' },
      { label: 'SENSATION', value: 'Comfortable Warm Sensation' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Non-surgical circumferential reduction and skin tightening.',
    shortDescription: 'Multi-polar radiofrequency combined with mechanical lymphatic stimulation to break down stubborn subcutaneous fat pockets and firm lax skin.',
    fullDescription: 'Stubborn subcutaneous fat on the abdomen, love handles, thighs, and arms often resists strict diet and gym routines. Our Body Contouring protocol utilizes dual-frequency radiofrequency (RF) combined with pulsed mechanical lymphatic activation. Controlled thermal energy heats deep subcutaneous tissue to 41–43°C, stimulating adipocyte apoptosis and contracting dermal collagen fibers to visibly tighten loose skin and smooth contour irregularities.',
    pullQuote: 'Diet and gym shrink fat cells uniformly throughout the body, but they cannot spot-reduce or tighten lax skin. Radiofrequency delivers localized deep thermal energy to contract loose dermal fibers and sculpt problem zones.',
    accent: {
      primary: '#0077b6',
      surface: 'rgba(0, 119, 182, 0.08)',
      border: 'rgba(0, 119, 182, 0.25)',
      glow: 'rgba(0, 119, 182, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(0, 119, 182, 0.15), transparent 70%)',
      badgeText: 'text-sky-500',
    },
    concern: {
      headline: "Stubborn pockets resisting your workout routine?",
      points: [
        'Persistent lower belly pouch, love handles, or back bra rolls',
        'Post-pregnancy skin laxity and loose abdominal tone',
        'Mild cellulite dimpling across upper thighs and buttocks',
        'Desire for non-surgical sculpting with zero incisions or recovery time'
      ],
      explanation: 'Subcutaneous fat pockets and lax skin require therapeutic dermal heating. Controlled multi-polar radiofrequency firms collagen while pulsed lymphatic drainage flushes cellular metabolites.'
    },
    interactiveConcerns: [
      {
        id: 'post-pregnancy-laxity',
        title: 'Post-Pregnancy Abdominal Laxity',
        description: 'Loose, crepey skin on the abdomen that feels separated from the muscle wall.',
        whyRoutineFails: 'Crunches strengthen muscle underneath but cannot contract stretched skin fibers.',
        clinicalSolution: '42°C radiofrequency heating denatures loose collagen triple-helices, triggering neocollagenesis and tighter tone.'
      },
      {
        id: 'stubborn-love-handles',
        title: 'Stubborn Flanks & Love Handles',
        description: 'Localized fat bulges spilling over waistbands despite healthy diet.',
        whyRoutineFails: 'Hormonal receptors in flank fat cells make them resistant to systemic fat burning.',
        clinicalSolution: 'Targeted deep thermal heating accelerates local lipid metabolism and cellular apoptosis.'
      },
      {
        id: 'cellulite-dimpling',
        title: 'Cellulite Dimples & Uneven Contour',
        description: 'Orange-peel dimpling caused by fibrous septae pulling skin down over fat lobules.',
        whyRoutineFails: 'Cellulite lotions only hydrate the surface without altering connective septae.',
        clinicalSolution: 'Radiofrequency softens rigid septae while mechanical suction smoothes out surface contour.'
      }
    ],
    interactiveDiscovery: {
      headline: 'Dual-Action Radiofrequency & Lymphatic Drainage',
      subtitle: 'See how subcutaneous heating and mechanical massage work synergistically.',
      deviceImage: TREATMENT_ASSETS['body-sculpting-contouring'].procedureImage,
      hotspots: [
        {
          id: 'hs-rf-thermal',
          x: 48,
          y: 45,
          label: 'Thermal Depth',
          title: 'Deep Multi-Polar Radiofrequency (41–43°C)',
          explanation: 'Volumetric heating penetrates up to 20mm beneath the skin surface, stimulating collagen contraction and fat cell metabolic breakdown.',
          benefit: 'Noticeable firming and skin tightening without surgical scars.'
        },
        {
          id: 'hs-lymphatic',
          x: 62,
          y: 65,
          label: 'Drainage',
          title: 'Pulsed Vacuum Lymphatic Activation',
          explanation: 'Rhythmic mechanical massage accelerates the transport of broken-down lipids through the lymphatic system for natural clearance.',
          benefit: 'Smooths cellulite dimples and reduces fluid retention.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Target Zone Measurement & Mapping',
        subtitle: 'Consultation & Body Analysis',
        description: 'Circumference measurements and skin elasticity checks document baseline metrics ahead of the session.',
        clinicalFocus: 'Identifies areas of true fat volume vs. superficial skin laxity.',
        image: TREATMENT_ASSETS['body-sculpting-contouring'].hero
      },
      {
        step: '02',
        title: 'Conductive Thermal Gel Application',
        subtitle: 'Smooth Glide Barrier',
        description: 'A pure glycerin-based conductive medium is applied to ensure uniform thermal transmission and smooth handpiece gliding.',
        clinicalFocus: 'Prevents localized hot spots for uniform heating.',
        image: TREATMENT_ASSETS['body-sculpting-contouring'].textureImage
      },
      {
        step: '03',
        title: 'Multi-Polar Radiofrequency Sculpting',
        subtitle: 'Controlled Volumetric Heating',
        description: 'The applicator moves in continuous circular motions, raising tissue temperature to therapeutic 42°C with infrared thermal monitoring.',
        clinicalFocus: 'Sensation feels like a soothing hot stone massage.',
        image: TREATMENT_ASSETS['body-sculpting-contouring'].procedureImage
      },
      {
        step: '04',
        title: 'Pulsed Mechanical Lymphatic Drainage',
        subtitle: 'Metabolic Flush & Firming',
        description: 'A secondary specialized handpiece delivers rhythmic suction to stimulate lymphatic channels and flush mobilized fluids.',
        clinicalFocus: 'Immediate lightness and smoother surface contour.',
        image: TREATMENT_ASSETS['body-sculpting-contouring'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Body contouring is a replacement for weight loss surgery.',
        reality: 'It is not a major weight loss procedure. It is designed for spot-reducing stubborn contour bulges and firming lax skin in individuals close to their target weight.',
        clinicalInsight: 'Best suited for body sculpting and inch loss rather than systemic obesity.'
      },
      {
        myth: 'The fat comes back immediately after stopping sessions.',
        reality: 'Fat cells targeted by therapeutic heat are permanently cleared. Maintaining a stable lifestyle prevents remaining cells from expanding.',
        clinicalInsight: 'Collagen tightening results continue improving for months post-course.'
      }
    ],
    visualMetaphor: {
      type: 'contour-wave',
      caption: 'The Subcutaneous Radiofrequency Remodeling Metaphor',
      scientificNote: 'Controlled 41–43°C volumetric thermal energy contracts dermal collagen fibers while mechanical lymphatic drainage clears mobilized metabolites.'
    },
    whoItIsFor: [
      'Individuals with stubborn localized fat pockets on abdomen, flanks, arms, or thighs',
      'Women seeking post-pregnancy abdominal skin firming and toning',
      'Patients with mild to moderate cellulite dimpling and skin laxity',
      'Anyone desiring non-surgical body sculpting with zero downtime'
    ],
    benefits: [
      'Non-surgical inch loss and targeted circumferential reduction',
      'Visibly tightens loose, crepey skin following weight changes or pregnancy',
      'Smoothes cellulite dimpling through deep lymphatic drainage',
      'Painless, comfortable procedure that feels like a warm hot stone massage'
    ],
    process: [
      {
        step: '01',
        title: 'Circumferential Measurement',
        description: 'Accurate baseline measurements and photographic documentation of the target treatment zones.'
      },
      {
        step: '02',
        title: 'Conductive Medium Application',
        description: 'Glycerin gel application to facilitate smooth handpiece movement and uniform RF energy flow.'
      },
      {
        step: '03',
        title: 'Dual-Frequency RF Heating',
        description: 'Controlled multi-polar radiofrequency heating to therapeutic 42°C temperature monitored with infrared sensors.'
      },
      {
        step: '04',
        title: 'Lymphatic Drainage Massage',
        description: 'Pulsed mechanical drainage to accelerate the elimination of liquefied fat metabolites.'
      }
    ],
    whatToExpect: {
      duration: '45 – 60 mins per zone',
      anesthesia: 'None required (soothing, warm sensation)',
      downtime: 'Zero downtime (immediate return to normal activities)',
      sensation: 'Comfortable, warm sensation comparable to a hot-stone massage',
      primaryConcern: 'Stubborn Fat Pockets, Cellulite & Skin Laxity',
      resultsVisibility: 'Noticeable firming from session 3; progressive inch loss over 6–8 sessions',
      sessionCount: '6 to 8 sessions spaced weekly for significant body sculpting'
    },
    aftercare: [
      'Drink 2 to 3 liters of water daily to assist lymphatic metabolic elimination',
      'Engage in 20 minutes of light cardio or walking post-treatment',
      'Avoid high-sugar meals on the day of treatment to optimize fat breakdown',
      'Maintain regular appointments for cumulative collagen tightening'
    ],
    faqs: [
      {
        question: 'Is this treatment painful?',
        answer: 'Not at all. In fact, most patients find it very relaxing. The handpiece glides smoothly with a warm sensation similar to a deep tissue hot-stone massage.'
      },
      {
        question: 'How many inches can I expect to lose?',
        answer: 'Results vary based on initial tissue density and protocol adherence. Typically, patients experience 1 to 3 inches of circumferential reduction across a full 6 to 8 session package alongside improved skin firmness.'
      }
    ],
    reviews: [
      {
        reviewer: 'Deepika P.',
        location: 'Wadala, Mumbai',
        rating: 5,
        review: 'After having my second baby, my tummy skin was loose. The RF tightening sessions at HealRx Sion made a huge difference to my skin elasticity. The treatments are relaxing and completely painless.',
        source: 'Google Business Review',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'Start Your Body Transformation →',
    formCtaLabel: 'Request Body Contouring Plan →',
    whatsappMessage: 'Hello HealRx Team, I would like to book a Body Contouring Assessment.',
    galleryImages: TREATMENT_ASSETS['body-sculpting-contouring'].gallery,
    image: TREATMENT_ASSETS['body-sculpting-contouring'].hero,
    featured: false,
    sourceIds: ['body-sculpting-contouring']
  },

  // =========================================================================
  // 9. PRECISION LASER TATTOO REMOVAL
  // =========================================================================
  {
    id: 'tattoo-removal-laser',
    slug: 'tattoo-removal-laser',
    title: 'Precision Laser Tattoo Removal',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    eyebrow: 'PHOTOACOUSTIC INK SHATTERING • SCAR-FREE FADING',
    heroHeadline: ['PICOSECOND Q-SWITCH', 'Tattoo Removal Laser'],
    heroStatement: 'Nanosecond photoacoustic fragmentation fracturing dense synthetic tattoo pigments with active -30°C cryogenic airflow for epidermal cooling.',
    heroMetadata: [
      { label: 'LASER TYPE', value: 'Photoacoustic Q-Switched' },
      { label: 'COOLING', value: '-30°C Cryogenic Airflow' },
      { label: 'INK CLEARANCE', value: 'Targeted Phagocytosis' },
      { label: 'CLINICAL SUITE', value: 'Sion • Mumbai' },
    ],
    tagline: 'Clear unwanted ink with targeted nanosecond acoustic energy.',
    shortDescription: 'Medical Q-switched laser technology delivering high-peak acoustic pulses that shatter synthetic tattoo pigments into microscopic particles without scarring surrounding tissue.',
    fullDescription: 'Unwanted tattoos require precision physics to eliminate safely. Older lasers burned surrounding skin, leaving ghost scars. At HealRx, our Laser Tattoo Removal system utilizes dual-wavelength (1064nm and 532nm) Q-switched nanosecond technology. The concentrated beam delivers high-peak acoustic pulses that specifically target exogenous ink particles, shattering them into microscopic dust without heating or scarring surrounding healthy skin.',
    pullQuote: 'Tattoo removal is not about burning the ink out. It is photoacoustic: the laser shatters the ink crystals into microscopic dust, allowing your body’s lymphatic scavenger cells to naturally carry them away.',
    accent: {
      primary: '#00b4d8',
      surface: 'rgba(0, 180, 216, 0.08)',
      border: 'rgba(0, 180, 216, 0.25)',
      glow: 'rgba(0, 180, 216, 0.35)',
      gradient: 'radial-gradient(ellipse at 50% 0%, rgba(0, 180, 216, 0.15), transparent 70%)',
      badgeText: 'text-cyan-400',
    },
    concern: {
      headline: "Regretting an old tattoo or preparing for a clean cover-up?",
      points: [
        'Faded, blurred, or poorly executed amateur or professional tattoos',
        'Tattoos conflicting with career, armed forces, or personal lifestyle milestones',
        'Desire to lighten dark black ink ahead of a vibrant cover-up piece',
        'Fear of permanent scarring, keloids, or burns from non-medical studios'
      ],
      explanation: 'Tattoo ink particles are too large for white blood cells to clear naturally. Q-switched nanosecond pulses fracture these large ink clusters into sub-micron dust for natural lymphatic clearance.'
    },
    interactiveConcerns: [
      {
        id: 'dark-black-ink',
        title: 'Dense Black & Blue Inks',
        description: 'Dark carbon pigments deeply embedded in the reticular dermis.',
        whyRoutineFails: 'Salabrasion or acid creams cause severe chemical burns and permanent keloids.',
        clinicalSolution: '1064nm laser energy is strongly absorbed by black pigment, shattering it safely beneath intact skin.'
      },
      {
        id: 'coverup-fading',
        title: 'Lightening Ahead of a Cover-Up',
        description: 'Fading an old dark piece so a tattoo artist can ink a colorful new design.',
        whyRoutineFails: 'Inking over dense black ink leads to muddy, dark color bleed.',
        clinicalSolution: '3 to 4 laser sessions fade ink by 70%, giving artists a clean canvas.'
      },
      {
        id: 'amateur-tattoos',
        title: 'Amateur & Stick-and-Poke Inks',
        description: 'Unevenly placed ink at variable dermal depths.',
        whyRoutineFails: 'Irregular ink depths require customized pulse fluences to avoid surface scarring.',
        clinicalSolution: 'Doctor-calibrated energy titration treats varied depths safely across scheduled sessions.'
      }
    ],
    interactiveDiscovery: {
      headline: 'The Photoacoustic Shockwave Fragmentation',
      subtitle: 'See how acoustic energy shatters dense ink crystals into microscopic dust.',
      deviceImage: TREATMENT_ASSETS['tattoo-removal-laser'].procedureImage,
      hotspots: [
        {
          id: 'hs-ink-shatter',
          x: 50,
          y: 45,
          label: 'Acoustic Snap',
          title: 'Photoacoustic Ink Fragmentation',
          explanation: 'Nanosecond pulses create extreme mechanical acoustic pressure that shatters ink globules into microscopic dust without burning the skin.',
          benefit: 'Scar-free fading without textured burns.'
        },
        {
          id: 'hs-cryo-cool',
          x: 65,
          y: 30,
          label: 'Cryo-Chill',
          title: 'Continuous -30°C Cryo-Air Chilling',
          explanation: 'A continuous jet of sub-zero chilled air numbs surface pain and dissipates thermal energy throughout the treatment.',
          benefit: 'Significantly enhanced patient comfort and minimal swelling.'
        }
      ]
    },
    procedureJourney: [
      {
        step: '01',
        title: 'Kirby-Desai Score Assessment',
        subtitle: 'Scientific Session Estimate',
        description: 'Dr. Pruthvi Vaity evaluates ink color, location, skin phototype, and layering to estimate session numbers scientifically.',
        clinicalFocus: 'Realistic, transparent timelines rather than false promises.',
        image: TREATMENT_ASSETS['tattoo-removal-laser'].hero
      },
      {
        step: '02',
        title: 'Topical Anesthetic & Cryo-Pre-Cooling',
        subtitle: 'Comfort Preparation',
        description: 'High-strength numbing cream is applied for 45 minutes, supplemented with active cryogenic cold air chilling.',
        clinicalFocus: 'Minimizes discomfort for sensitive anatomical areas.',
        image: TREATMENT_ASSETS['tattoo-removal-laser'].textureImage
      },
      {
        step: '03',
        title: 'Targeted Q-Switched Laser Pulses',
        subtitle: 'Instant Clinical Frosting',
        description: 'The laser pulses across the tattoo; an immediate clinical "frosting" appears as ink vaporizes microscopic steam, confirming energy absorption.',
        clinicalFocus: 'Precise spot sizes ensure zero energy spillover to clear skin.',
        image: TREATMENT_ASSETS['tattoo-removal-laser'].procedureImage
      },
      {
        step: '04',
        title: 'Antibacterial Dressing & Ice Pack',
        subtitle: 'Post-Laser Healing Care',
        description: 'A sterile soothing ointment and non-stick dressing are applied, along with detailed aftercare instructions.',
        clinicalFocus: 'Prevents infection and supports rapid epidermal recovery.',
        image: TREATMENT_ASSETS['tattoo-removal-laser'].detailImage
      }
    ],
    mythsVsFacts: [
      {
        myth: 'Laser tattoo removal always leaves an ugly scar shaped like the tattoo.',
        reality: 'Old CO2 lasers burned skin and left scars. Our medical Q-switched acoustic laser targets only the synthetic pigment, leaving surrounding skin and texture intact.',
        clinicalInsight: 'Proper spacing (6–8 weeks) allows the skin to heal completely between passes.'
      },
      {
        myth: 'Tattoo removal creams can fade tattoos just as well.',
        reality: 'Tattoo ink sits deep in the reticular dermis. Creams only burn the surface epidermis, causing chemical burns without removing deep ink.',
        clinicalInsight: 'Laser photomechanical energy is the only medical technology proven to reach the dermal ink layer.'
      }
    ],
    visualMetaphor: {
      type: 'pigment-shatter',
      caption: 'The Photoacoustic Ink Fragmentation Metaphor',
      scientificNote: 'Acoustic shockwaves shatter dense synthetic pigment clusters into microscopic fragments, allowing lymphatic macrophages to permanently clear the ink.'
    },
    whoItIsFor: [
      'Individuals with unwanted amateur or professional tattoos of any age',
      'Patients preparing for military, police, aviation, or corporate career clearances',
      'Those seeking to fade dark tattoos to prepare a clean canvas for a cover-up',
      'Performed with medical safety in our sterile clinical laser suite in Sion'
    ],
    benefits: [
      'Targeted acoustic fragmentation of dark black and colored ink pigments',
      'Significantly reduced risk of scarring compared to acid creams or non-medical methods',
      'Integrated cold air cooling ensures high procedural comfort',
      'Medical assessment by Dr. Pruthvi Vaity utilizing the validated Kirby-Desai scale'
    ],
    process: [
      {
        step: '01',
        title: 'Tattoo & Skin Assessment',
        description: 'Evaluation using the Kirby-Desai clinical scale to assess ink density, depth, and estimated sessions.'
      },
      {
        step: '02',
        title: 'Numbing & Active Cooling',
        description: 'Application of high-strength topical numbing and continuous chilled cold airflow.'
      },
      {
        step: '03',
        title: 'Q-Switched Laser Passes',
        description: 'Precise acoustic pulses directed at the ink particles, creating transient clinical frosting.'
      },
      {
        step: '04',
        title: 'Antibiotic Dressing & Shield',
        description: 'Application of soothing post-laser ointment and sterile protective dressing.'
      }
    ],
    whatToExpect: {
      duration: '30 – 45 mins',
      anesthesia: 'High-strength topical numbing cream & cryo-cooling',
      downtime: 'Mild frosting and redness for 24–48 hours; dressing worn for 3 days',
      sensation: 'Quick snapping sensation, significantly buffered by active cold air cooling',
      primaryConcern: 'Unwanted Tattoos, Inking Regret & Cover-Up Fading',
      resultsVisibility: 'Progressive fading noticed between weeks 4 and 8 post-session',
      sessionCount: '4 to 8 sessions spaced 6–8 weeks apart depending on ink depth'
    },
    aftercare: [
      'Keep the treated area clean, dry, and protected with ointment for 3–5 days',
      'Do not pick, scratch, or pop any transient micro-blisters',
      'Avoid swimming pools, hot tubs, and direct sun exposure for 10 days',
      'Allow full 6–8 weeks between sessions for your lymphatic system to flush ink'
    ],
    faqs: [
      {
        question: 'How many sessions will my tattoo take to fade completely?',
        answer: 'Tattoo removal speed depends on ink depth, density, amateur vs professional ink, and your immune system. Most black ink tattoos require 4 to 8 sessions spaced 6 to 8 weeks apart for complete clearance or cover-up preparation.'
      },
      {
        question: 'Does tattoo removal leave a scar?',
        answer: 'When performed by a trained physician using Q-switched photoacoustic lasers, the risk of scarring is very low (under 3%). The laser energy shatters pigment without thermal burn to surrounding dermal tissue.'
      }
    ],
    reviews: [
      {
        reviewer: 'Rohit K.',
        location: 'Dadar, Mumbai',
        rating: 5,
        review: 'I had an old arm tattoo lightened at HealRx ahead of a cover-up piece. The laser cleared the dark black pigment significantly over 4 sessions without any scars. Dr. Vaity and the clinic staff were very transparent.',
        source: 'Verified Sion Patient',
        treatmentSpecific: true
      }
    ],
    ctaLabel: 'See If This Is Right for You →',
    formCtaLabel: 'Send My Tattoo Assessment Request →',
    whatsappMessage: 'Hello HealRx Team, I would like to book an assessment for Laser Tattoo Removal.',
    galleryImages: TREATMENT_ASSETS['tattoo-removal-laser'].gallery,
    image: TREATMENT_ASSETS['tattoo-removal-laser'].hero,
    featured: false,
    sourceIds: ['tattoo-removal-laser']
  }
];

export const TREATMENT_CATEGORIES: { id: string; label: string; description: string }[] = [
  { id: 'all', label: 'All Treatments', description: 'Comprehensive aesthetic and laser medical treatments' },
  { id: 'laser', label: 'Laser Dermatology', description: 'Triple-wavelength hair reduction, carbon peel, and pigmentation lasers' },
  { id: 'skin', label: 'Advanced Skin Science', description: 'Hydra medi-facials, chemical peels, and acne scar collagen induction' },
  { id: 'hair', label: 'Regenerative Hair', description: 'Bio-cellular PRP and GFC therapy to revive dormant follicles' },
  { id: 'face-aesthetics', label: 'Face & Aesthetics', description: 'Doctor-led neuromodulators, facial contouring, and dermal fillers' },
  { id: 'body-wellness', label: 'Body & Wellness', description: 'Non-surgical body sculpting, skin firming, and longevity care' },
];
