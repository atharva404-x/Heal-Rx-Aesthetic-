import { Treatment } from '../types';
import { ASSETS } from './assets';

export const TREATMENTS: Treatment[] = [
  {
    id: 'laser-hair-reduction',
    slug: 'laser-hair-reduction',
    title: 'Triple Wavelength Laser Hair Reduction',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    tagline: 'Precision permanent reduction engineered for Indian skin and coarse follicles.',
    shortDescription: 'Safe, virtually painless triple-wavelength laser technology targeting deep follicles while protecting the surrounding epidermis with integrated contact cooling.',
    fullDescription: 'Our medical-grade Laser Hair Reduction protocol harnesses synchronized triple wavelengths (Alexandrite 755nm, Diode 808nm, and Nd:YAG 1064nm) to systematically disable active hair follicles across varied depths. Unlike traditional single-wavelength systems, this combined beam profile delivers superior safety for melanin-rich Indian skin tones, minimizing epidermal heat while ensuring maximum follicular thermal destruction.',
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
      anesthesia: 'None required (integrated cooling tip)',
      downtime: 'Zero downtime (mild transient pinkness for 1-2 hours)',
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
      }
    ],
    image: ASSETS.treatments.laserHairReduction,
    featured: true
  },
  {
    id: 'carbon-laser-peel',
    slug: 'carbon-laser-peel',
    title: 'Carbon Laser Peel (Hollywood Glow)',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    tagline: 'Deep pore purification, instant radiance, and sebum balancing with Q-Switched laser.',
    shortDescription: 'A non-invasive laser facial using medical carbon paste to absorb impurities and gently vaporize dead cells, revealing immediate luminosity.',
    fullDescription: 'The Carbon Laser Peel—frequently celebrated as the "Hollywood Laser Facial"—is an advanced laser resurfacing treatment combining medical-grade liquid carbon with Q-switched Nd:YAG laser pulses. The liquid carbon penetrates micro-pores, binding to sebum, debris, and dead keratinocytes. When targeted with specialized 1064nm laser energy, the carbon particles gently vaporize, removing impurities and stimulating dermal collagen remodeling.',
    whoItIsFor: [
      'Individuals dealing with oily, congested, or enlarged pores',
      'Patients preparing for special events, weddings, or photoshoots needing instant glow',
      'Those battling mild acne, blackheads, and uneven skin texture',
      'Anyone seeking radiant skin without peeling or flaking downtime'
    ],
    benefits: [
      'Instant glass-skin luminosity and porcelain skin texture',
      'Deep thermal sterilization of acne-causing bacteria (P. acnes)',
      'Tightens dilated pores and regulates excessive oil production',
      'Painless with immediate resumption of social activities'
    ],
    process: [
      {
        step: '01',
        title: 'Deep Double Cleanse',
        description: 'Purification of skin surface to remove makeup, lipids, and daily environmental pollutants.'
      },
      {
        step: '02',
        title: 'Medical Carbon Mask Application',
        description: 'Thin application of mineral carbon suspension that binds to pore debris over 10–15 minutes.'
      },
      {
        step: '03',
        title: 'Targeted Q-Switched Laser Passes',
        description: 'Laser energy breaks down carbon nanoparticles, exfoliating dead skin cells and clearing pore walls.'
      },
      {
        step: '04',
        title: 'Hydrating Peptide Finish',
        description: 'Application of hyaluronic acid and antioxidant serums sealed with clinical SPF.'
      }
    ],
    whatToExpect: {
      duration: '45 mins',
      anesthesia: 'None needed',
      downtime: 'Zero downtime',
      resultsVisibility: 'Immediate luminous glow with progressive collagen tightening',
      sessionCount: 'Single event glow or 3–5 sessions for long-term oil control'
    },
    aftercare: [
      'Apply SPF 50+ generously for 7 days post-treatment',
      'Avoid retinol, AHA/BHA acids, or physical scrubs for 48 hours',
      'Hydrate skin thoroughly with gentle hyaluronic moisture formulas'
    ],
    faqs: [
      {
        question: 'Does the carbon peel make your skin peel off visibly?',
        answer: 'No. Despite being called a "peel", the exfoliation is microscopic and vaporized instantly by laser light. You will not experience peeling, flaking, or redness.'
      },
      {
        question: 'Can I do this treatment before a major event?',
        answer: 'Yes! It is ideal 24 to 48 hours prior to an event, leaving your skin plump, radiant, and smooth for seamless makeup application.'
      }
    ],
    image: ASSETS.treatments.carbonLaserPeel,
    featured: true
  },
  {
    id: 'hydra-medi-facial',
    slug: 'hydra-medi-facial',
    title: 'Hydra-Infusion Clinical Medi-Facial',
    category: 'skin',
    categoryLabel: 'Advanced Skin Science',
    tagline: 'Multi-step clinical dermal infusion: vortex suction, salicylic purification, and hyaluronic plumping.',
    shortDescription: 'A medical-grade vortex treatment that exfoliates, extracts impurities, and saturates the skin with antioxidants, peptides, and deep hydration.',
    fullDescription: 'Our Hydra-Infusion Clinical Medi-Facial is an evidence-based dermatological treatment engineered to restore skin barrier health. Utilizing specialized vortex technology, the device simultaneously suctions out deep-seated blackheads and keratin plugs while infusing clinical-grade glycolic, salicylic, and hyaluronic acid solutions. Finished with medical LED light therapy for cellular rejuvenation.',
    whoItIsFor: [
      'Dehydrated, dull, or fatigued skin lacking radiance',
      'Congested T-zones with stubborn blackheads and whiteheads',
      'Sensitive skin types needing gentle, non-irritating exfoliation',
      'Patients maintaining healthy skin barrier function monthly'
    ],
    benefits: [
      'Unclogs pores completely without painful manual pinching',
      'Dramatically elevates skin moisture levels and elasticity',
      'Smooths dry patches and fine dehydration lines',
      'Customizable serum boosters tailored to pigmentation or acne'
    ],
    process: [
      {
        step: '01',
        title: 'Vortex Dermal Exfoliation',
        description: 'Removes surface dead skin cells and reveals a fresh, receptive epidermal layer.'
      },
      {
        step: '02',
        title: 'Acid Peel Blend Infusion',
        description: 'Gentle glycolic/salicylic solution softens stubborn debris without harsh stinging.'
      },
      {
        step: '03',
        title: 'Automated Vortex Extraction',
        description: 'Painlessly extracts blackheads, whiteheads, and sebum from congested pores.'
      },
      {
        step: '04',
        title: 'Antioxidant & Peptide Saturation',
        description: 'Floods newly cleaned pores with collagen peptides, hyaluronic acid, and vitamins.'
      }
    ],
    whatToExpect: {
      duration: '50 – 60 mins',
      anesthesia: 'None required',
      downtime: 'Zero downtime',
      resultsVisibility: 'Immediate dewy glass glow and refreshed skin texture',
      sessionCount: 'Recommended monthly for sustained skin radiance'
    },
    aftercare: [
      'Avoid washing face for 4–6 hours to allow active serums to absorb',
      'Wear daily sunscreen to protect freshly exfoliated skin',
      'Drink plenty of water to support cellular hydration'
    ],
    faqs: [
      {
        question: 'How is this different from a regular salon facial?',
        answer: 'Salon facials use generic cosmetic creams and steam. HealRx Medi-Facials use US FDA-compliant vortex technology and dermatological-grade active ingredients prescribed by our medical director.'
      }
    ],
    image: ASSETS.treatments.hydraMediFacial,
    featured: true
  },
  {
    id: 'hair-prp-gfc-therapy',
    slug: 'hair-prp-gfc-therapy',
    title: 'Autologous Hair PRP & GFC Therapy',
    category: 'hair',
    categoryLabel: 'Regenerative Hair Restoration',
    tagline: 'Bio-cellular growth factor concentrate to reactivate dormant hair follicles and reverse thinning.',
    shortDescription: 'Harnessing your own blood’s concentrated platelets and growth factors to stimulate micro-vascularization around weakening hair roots.',
    fullDescription: 'Platelet-Rich Plasma (PRP) and advanced Growth Factor Concentrate (GFC) therapies are groundbreaking regenerative medical treatments for androgenetic alopecia and telogen effluvium. A small sample of blood is drawn and processed in a specialized medical centrifuge to isolate concentrated platelet growth factors (VEGF, PDGF, EGF). These biostimulatory factors are micro-injected into the scalp dermis, nourishing shrinking hair follicles and accelerating hair diameter thickening.',
    whoItIsFor: [
      'Men and women experiencing early to moderate hair thinning',
      'Patients noticing widening partitions or receding hairlines',
      'Post-illness or stress-induced acute hair shedding',
      'Individuals looking for non-surgical natural hair preservation'
    ],
    benefits: [
      'Stimulates microcirculation and cellular mitosis in hair roots',
      'Reduces excessive daily hair loss within 3–4 sessions',
      'Increases hair shaft thickness and overall scalp density',
      '100% autologous and biocompatible with zero risk of allergic rejection'
    ],
    process: [
      {
        step: '01',
        title: 'Trichoscopic Scalp Scan',
        description: 'Microscopic examination of scalp density, follicle miniaturization, and scalp sebum health.'
      },
      {
        step: '02',
        title: 'Blood Draw & Centrifugation',
        description: 'A sterile blood sample is processed in calibrated medical centrifuge kits to separate enriched growth factors.'
      },
      {
        step: '03',
        title: 'Scalp Numbing & Disinfection',
        description: 'Topical anesthetic cream is applied to ensure a completely comfortable micro-injection experience.'
      },
      {
        step: '04',
        title: 'Targeted Micro-Delivery',
        description: 'Micro-injections deliver active growth factors directly into the dermal papilla layer of thinning zones.'
      }
    ],
    whatToExpect: {
      duration: '60 mins',
      anesthesia: 'Topical numbing cream applied 30 mins prior',
      downtime: 'Minimal (mild scalp tenderness for 12–24 hours)',
      resultsVisibility: 'Hair fall reduction in 4–6 weeks; new baby hair growth in 3–4 months',
      sessionCount: 'Initial series of 4 to 6 sessions spaced 1 month apart'
    },
    aftercare: [
      'Do not wash hair or apply hair oils for 24 hours post-session',
      'Avoid heavy workouts and excessive scalp sweating for 24 hours',
      'Continue prescribed nutritional supplements and hair serums'
    ],
    faqs: [
      {
        question: 'What is the difference between PRP and GFC?',
        answer: 'While PRP contains whole platelets in plasma, GFC (Growth Factor Concentrate) utilizes an advanced preparation kit that lyses the platelets in vitro, providing a cell-free suspension with up to 3x higher concentration of key regenerative growth factors and zero pain.'
      }
    ],
    image: ASSETS.treatments.hairPrpGfc,
    featured: true
  },
  {
    id: 'acne-scar-laser-resurfacing',
    slug: 'acne-scar-laser-resurfacing',
    title: 'Acne Scar Laser Resurfacing & Collagen Induction',
    category: 'skin',
    categoryLabel: 'Advanced Skin Science',
    tagline: 'Multi-modality dermal remodeling for rolling, boxcar, and post-acne textured scars.',
    shortDescription: 'Advanced fractional laser therapy combined with subcision and microneedling to break fibrotic scar bands and stimulate new dermal collagen.',
    fullDescription: 'Acne scarring results from abnormal collagen deposition during severe inflammatory breakouts. Our comprehensive Acne Scar Protocol combines fractional resurfacing lasers, targeted subcision for tethered scars, and collagen induction. Microthermal treatment zones trigger neocollagenesis deep within the dermis, elevating depressed scar floors and smoothing the overall skin topology.',
    whoItIsFor: [
      'Post-acne rolling, boxcar, or ice-pick scars',
      'Uneven skin texture and enlarged pores',
      'Persistent post-inflammatory hyperpigmentation (PIH)'
    ],
    benefits: [
      'Permanent structural elevation of depressed acne scars',
      'Refines rough skin texture and shrinks dilated pores',
      'Stimulates long-term collagen and elastin synthesis over 6 months'
    ],
    process: [
      {
        step: '01',
        title: 'Doctor Scar Mapping',
        description: 'Classification of scar morphology (rolling, boxcar, icepick) under angled clinical lighting.'
      },
      {
        step: '02',
        title: 'Topical Anesthetic Application',
        description: 'Hospital-grade numbing cream applied for 45 minutes to ensure patient comfort.'
      },
      {
        step: '03',
        title: 'Fractional Laser Delivery',
        description: 'Precision laser pulses create microscopic thermal columns to trigger vigorous collagen synthesis.'
      },
      {
        step: '04',
        title: 'Soothing Bio-Cellulose Mask',
        description: 'Cools the skin and infuses restorative growth factors to accelerate healing.'
      }
    ],
    whatToExpect: {
      duration: '60 mins',
      anesthesia: 'Topical anesthetic cream',
      downtime: '2 to 4 days of mild redness and micro-crusting',
      resultsVisibility: 'Progressive textural improvements visible over 3 to 6 months',
      sessionCount: '3 to 5 sessions spaced 4 to 6 weeks apart'
    },
    aftercare: [
      'Apply post-procedure barrier cream and do not pick at micro-crusts',
      'Avoid sun exposure completely for 72 hours; use SPF 50+ diligently',
      'Avoid active ingredients (Retinol, Vitamin C, AHA) until fully healed'
    ],
    faqs: [
      {
        question: 'Are acne scar results permanent?',
        answer: 'Yes! The collagen remodeled and synthesized by fractional laser therapy becomes permanent dermal architecture.'
      }
    ],
    image: ASSETS.treatments.acneScarResurfacing,
  },
  {
    id: 'pigmentation-q-switch-laser',
    slug: 'pigmentation-q-switch-laser',
    title: 'Q-Switched Laser for Melasma & Pigmentation',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    tagline: 'Nanosecond photo-acoustic breakdown of deep dermal and epidermal pigmentation.',
    shortDescription: 'Advanced nanosecond laser pulses that shatter excess melanin deposits into microscopic fragments naturally eliminated by your lymphatic system.',
    fullDescription: 'Stubborn hyperpigmentation, sun damage, melasma, and age spots require precise wavelength targeting. Our Q-switched Nd:YAG laser emits ultra-short nanosecond pulses that shatter melanin chromophores via photo-acoustic impact rather than purely thermal injury. This minimizes the risk of rebound pigmentation in Indian skin tones while clearing uneven pigmentation.',
    whoItIsFor: [
      'Persistent melasma and hormonal pigmentation',
      'Sun spots, freckles, and age spots',
      'Post-inflammatory dark spots from past breakouts or trauma',
      'Dark under-eye circles and lip hyperpigmentation'
    ],
    benefits: [
      'Targeted melanin fragmentation without burning surface tissue',
      'Noticeably more even, clear, and uniform skin complexion',
      'Safe protocol tailored specifically for darker skin phototypes'
    ],
    process: [
      {
        step: '01',
        title: 'Wood’s Lamp & Dermatoscopy Exam',
        description: 'Delineation of pigment depth (epidermal vs. dermal melasma).'
      },
      {
        step: '02',
        title: 'Targeted Laser Passes',
        description: 'Calibrated nanosecond laser energy fragments melanin without thermal collateral damage.'
      },
      {
        step: '03',
        title: 'Antioxidant & Brightening Infusion',
        description: 'Glutathione and Vitamin C serum infusion to inhibit future tyrosinase activity.'
      }
    ],
    whatToExpect: {
      duration: '30 – 40 mins',
      anesthesia: 'None required',
      downtime: 'Zero downtime; minor transient erythema for 30 minutes',
      resultsVisibility: 'Gradual lightening observed across 3 to 6 sessions',
      sessionCount: '4 to 6 sessions recommended'
    },
    aftercare: [
      'Strict daily broad-spectrum sun protection with 3-hour reapplication',
      'Avoid direct thermal heat and aggressive facial scrubbing',
      'Use doctor-prescribed depigmenting creams as advised'
    ],
    faqs: [
      {
        question: 'Will pigmentation return after laser?',
        answer: 'Laser shatters existing pigment. However, melasma is stimulated by UV light and hormones. Regular sunscreen use and our doctor-guided maintenance routine prevent recurrences.'
      }
    ],
    image: ASSETS.treatments.pigmentationLaser,
  },
  {
    id: 'anti-aging-botox-fillers',
    slug: 'anti-aging-botox-fillers',
    title: 'Doctor-Led Neuromodulators & Dermal Fillers',
    category: 'face-aesthetics',
    categoryLabel: 'Medical Facial Aesthetics',
    tagline: 'Artistic facial rejuvenation: softening dynamic expression lines and restoring volume harmony.',
    shortDescription: 'Understated, natural facial enhancements performed exclusively by our Medical Director to smooth expression lines and restore youthful contours.',
    fullDescription: 'At HealRx, aesthetic injectables are guided by anatomical precision and restraint. Dr. Pruthvi Vaity focuses on natural micro-dosing to soften dynamic wrinkles (crow’s feet, forehead furrows, frown lines) and restore structural volume loss (cheek elevation, jawline definition, nasolabial folds, lip hydration) without creating a frozen or overfilled appearance.',
    whoItIsFor: [
      'Dynamic expression lines on forehead, glabella, and eyes',
      'Age-related volume loss in mid-face, temples, or cheeks',
      'Gummy smile correction, masseter slimming, or lip definition',
      'Patients demanding undetectable, natural facial refinement'
    ],
    benefits: [
      'Smooths existing expression lines and prevents new crease formation',
      'Restores youthful structural shadows and anatomical balance',
      'Conducted exclusively with US FDA-approved brands',
      'Results look refreshed and natural, never artificial or tight'
    ],
    process: [
      {
        step: '01',
        title: '3D Facial Dynamic Analysis',
        description: 'Assessment of muscle movement dynamics, resting facial vectors, and symmetry balance.'
      },
      {
        step: '02',
        title: 'Sterile Micro-Mapping',
        description: 'Precise marking of anatomical injection vectors and vessel mapping.'
      },
      {
        step: '03',
        title: 'Ultra-Fine Micro-Injections',
        description: 'Gentle delivery using ultra-thin microneedles or blunt-tip micro-cannulas for minimal bruising.'
      }
    ],
    whatToExpect: {
      duration: '30 – 45 mins',
      anesthesia: 'Topical numbing and ice application',
      downtime: 'Zero to minimal (tiny pinpoint marks resolving in 24 hours)',
      resultsVisibility: 'Botox takes effect in 4–7 days; Dermal fillers are visible immediately',
      sessionCount: 'Maintenance every 4 to 6 months (Botox) / 12 to 18 months (Fillers)'
    },
    aftercare: [
      'Remain upright for 4 hours following facial injections',
      'Do not massage or apply heavy pressure to treated areas for 48 hours',
      'Avoid strenuous exercise, alcohol, and saunas for 24 hours'
    ],
    faqs: [
      {
        question: 'Will my face look frozen or unnatural?',
        answer: 'Never. Our philosophy is natural micro-dosing. We relax muscle hyperactivity just enough to erase deep wrinkles while preserving all your natural emotional expressions.'
      }
    ],
    image: ASSETS.treatments.antiAgingInjectables,
  },
  {
    id: 'body-sculpting-contouring',
    slug: 'body-sculpting-contouring',
    title: 'Non-Surgical Body Sculpting & Contouring',
    category: 'body-wellness',
    categoryLabel: 'Body & Longevity Wellness',
    tagline: 'Targeted non-invasive localized fat reduction and tissue firming.',
    shortDescription: 'Advanced non-surgical technologies that target stubborn subcutaneous fat deposits and tighten lax skin on the abdomen, flanks, arms, and thighs.',
    fullDescription: 'Our body contouring protocols are designed to target diet-resistant localized fat deposits and improve skin tightness. Combining radiofrequency tissue tightening with acoustic shockwave and thermal lipolysis, this non-invasive program promotes lymphatic drainage, stimulates collagen contraction, and sculpts natural body contours without surgery.',
    whoItIsFor: [
      'Individuals near their goal weight with stubborn pockets of fat',
      'Post-pregnancy or post-weight loss skin laxity',
      'Cellulite smoothing on thighs and buttocks'
    ],
    benefits: [
      'Non-surgical with zero anesthesia or recovery time',
      'Simultaneously tightens dermal collagen while sculpting tissue',
      'Improves microcirculation and localized lymphatic drainage'
    ],
    process: [
      {
        step: '01',
        title: 'Body Composition & Circumference Mapping',
        description: 'Measurement of target localized areas and assessment of skin elasticity.'
      },
      {
        step: '02',
        title: 'Thermal & Acoustic Sculpting',
        description: 'Application of radiofrequency and lipolytic energy over treatment grid.'
      },
      {
        step: '03',
        title: 'Lymphatic Drainage Massage',
        description: 'Gentle post-treatment drainage to expedite natural metabolic clearance.'
      }
    ],
    whatToExpect: {
      duration: '45 – 60 mins per zone',
      anesthesia: 'None required (feels like a warm deep-tissue massage)',
      downtime: 'Zero downtime',
      resultsVisibility: 'Progressive contour refinement over 6 to 10 weeks',
      sessionCount: 'Course of 4 to 8 weekly sessions'
    },
    aftercare: [
      'Drink 2–3 liters of water daily to support lymphatic elimination',
      'Engage in 20 minutes of light cardiovascular activity daily',
      'Maintain a balanced, nutrient-rich diet'
    ],
    faqs: [
      {
        question: 'Is body sculpting a substitute for weight loss?',
        answer: 'No, body sculpting is designed for localized body contouring and stubborn fat reduction, not general weight reduction. It works best when combined with healthy lifestyle habits.'
      }
    ],
    image: ASSETS.treatments.bodyContouring,
  },
  {
    id: 'tattoo-removal-laser',
    slug: 'tattoo-removal-laser',
    title: 'Advanced Q-Switched Tattoo Removal',
    category: 'laser',
    categoryLabel: 'Laser Dermatology',
    tagline: 'Safe, progressive pigment clearance for amateur and professional tattoos.',
    shortDescription: 'High-precision laser energy pulses that break tattoo ink particles into microscopic fragments without scarring the skin.',
    fullDescription: 'HealRx offers medical tattoo removal using dual-wavelength Q-switched laser technology. The laser delivers intense acoustic shockwaves in billionths of a second, shattering complex ink pigment trapped in the deep dermis while sparing surrounding tissue. Over subsequent weeks, the body’s immune macrophage cells safely metabolize and clear the fragmented pigment.',
    whoItIsFor: [
      'Individuals seeking complete tattoo removal or partial fading for cover-ups',
      'Traumatic tattooing or stubborn cosmetic tattoo ink corrections'
    ],
    benefits: [
      'Dual 1064nm and 532nm wavelengths target dark and red ink pigments',
      'Minimal risk of scarring or textural changes under doctor protocols',
      'Gradual, natural fading with every progressive treatment session'
    ],
    process: [
      {
        step: '01',
        title: 'Ink Depth & Color Analysis',
        description: 'Evaluation of ink composition, age of tattoo, and skin phototype.'
      },
      {
        step: '02',
        title: 'Topical Numbing & Cryo-Cooling',
        description: 'Application of anesthetic cream and continuous cold air flow.'
      },
      {
        step: '03',
        title: 'Targeted Laser Shattering',
        description: 'Rapid photo-acoustic pulses fragment the tattoo ink.'
      }
    ],
    whatToExpect: {
      duration: '15 – 30 mins',
      anesthesia: 'Topical anesthetic and forced cold air cooling',
      downtime: 'Mild frosting and redness for 24–48 hours',
      resultsVisibility: 'Progressive fading over 6–8 weeks between sessions',
      sessionCount: '4 to 8 sessions depending on ink depth, age, and colors'
    },
    aftercare: [
      'Keep the treated area clean and apply antibiotic soothing ointment',
      'Do not pick, scratch, or scrub any tiny scabs that form',
      'Protect from direct sunlight and use SPF 50+'
    ],
    faqs: [
      {
        question: 'Can all tattoo colors be removed?',
        answer: 'Black, dark blue, and red inks respond most rapidly. Lighter colors like yellow and green require specialized customized laser settings.'
      }
    ],
    image: ASSETS.treatments.tattooRemoval,
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
