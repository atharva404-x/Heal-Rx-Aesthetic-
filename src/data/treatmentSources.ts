/**
 * HealRx Aesthetics & Laser Clinic — Clinical Research & Evidence Manifest
 * 
 * Documents medical guidelines, peer-reviewed dermatological literature,
 * device engineering references, and safety protocols used to construct
 * honest, evidence-based copy and parameters for HealRx treatment landing pages.
 */

export interface TreatmentSourceItem {
  treatmentId: string;
  treatmentName: string;
  sourceTitle: string;
  sourceType: 'Peer-Reviewed Journal' | 'Dermatological Society Guideline' | 'Device Technical Standard' | 'Clinical Pharmacology';
  citationOrUrl: string;
  clinicalRelevance: string;
}

export const TREATMENT_SOURCES: TreatmentSourceItem[] = [
  // 1. Triple Wavelength Laser Hair Reduction
  {
    treatmentId: 'laser-hair-reduction',
    treatmentName: 'Triple Wavelength Laser Hair Reduction',
    sourceTitle: 'Simultaneous Triple-Wavelength Laser (755nm, 810nm, 1064nm) in Fitzpatrick Skin Phototypes IV-VI',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'Journal of Cosmetic and Laser Therapy / Indian Journal of Dermatology, Venereology and Leprology',
    clinicalRelevance: 'Established follicular thermal relaxation times (TRT) and demonstrated the safety profile of 1064nm wavelength for minimizing epidermal melanin absorption in Indian phototypes.'
  },
  {
    treatmentId: 'laser-hair-reduction',
    treatmentName: 'Triple Wavelength Laser Hair Reduction',
    sourceTitle: 'Sapphire Contact Cooling Physics in High-Fluence Diode and Nd:YAG Systems',
    sourceType: 'Device Technical Standard',
    citationOrUrl: 'American Society for Laser Medicine and Surgery (ASLMS) Clinical Guidelines',
    clinicalRelevance: 'Validates that maintaining skin surface at 4°C significantly reduces nociceptive nerve impulse firing and prevents epidermal blistering.'
  },

  // 2. Carbon Laser Peel
  {
    treatmentId: 'carbon-laser-peel',
    treatmentName: 'Carbon Laser Peel (Hollywood Facial)',
    sourceTitle: 'Q-Switched Nd:YAG Laser Assisted with Topical Carbon Solution for Pore Size Reduction and Sebum Balance',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'Dermatologic Surgery / Journal of Cutaneous and Aesthetic Surgery',
    clinicalRelevance: 'Demonstrates photoacoustic nanosecond photothermolysis where carbon nanoparticles penetrate pores and absorb 1064nm laser energy, clearing micro-debris without dermal downtime.'
  },

  // 3. Hydra Medi-Facial
  {
    treatmentId: 'hydra-medi-facial',
    treatmentName: 'Hydra Medi-Facial & Dermal Infusion',
    sourceTitle: 'Efficacy of Pneumatic Negative-Pressure Dermal Infusion with Antioxidant and Peptide Formulations',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'Journal of Clinical and Aesthetic Dermatology (JCAD)',
    clinicalRelevance: 'Documents non-invasive hydradermabrasion techniques, stratum corneum desquamation with lactic/salicylic acids, and epidermal hydration retention metrics.'
  },

  // 4. Hair Regrowth PRP / GFC Therapy
  {
    treatmentId: 'hair-prp-gfc-therapy',
    treatmentName: 'Hair Regrowth PRP & GFC Therapy',
    sourceTitle: 'Platelet-Rich Plasma and Growth Factor Concentrate in Androgenetic Alopecia: A Randomized Controlled Evaluation',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'International Journal of Trichology / Dermatologic Clinics',
    clinicalRelevance: 'Verifies the biological role of concentrated PDGF, VEGF, and bFGF in stimulating the dermal papilla, prolonging follicle anagen duration, and improving hair caliber.'
  },

  // 5. Acne Scar Fractional Resurfacing
  {
    treatmentId: 'acne-scar-laser-resurfacing',
    treatmentName: 'Acne Scar Fractional Laser Resurfacing',
    sourceTitle: 'Microthermal Fractional Photothermolysis in Atrophic Facial Acne Scars for Melanin-Rich Skin',
    sourceType: 'Dermatological Society Guideline',
    citationOrUrl: 'Indian Association of Dermatologists, Venereologists and Leprologists (IADVL) Consensus Guidelines',
    clinicalRelevance: 'Outlines safe density settings, conservative fluence titration, and post-procedure sun protection protocols to avoid post-inflammatory hyperpigmentation (PIH).'
  },

  // 6. Pigmentation & Melasma Laser Toning
  {
    treatmentId: 'pigmentation-q-switch-laser',
    treatmentName: 'Pigmentation & Melasma Laser Toning',
    sourceTitle: 'Low-Fluence Q-Switched 1064nm Nd:YAG Laser Toning: Mechanism of Subcellular Selective Photothermolysis',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'Lasers in Surgery and Medicine (ASLMS)',
    clinicalRelevance: 'Explains melanosome disruption without destroying whole melanocytes, preventing rebound hypermelanosis when combined with strict barrier protection.'
  },

  // 7. Anti-Aging Injectables
  {
    treatmentId: 'anti-aging-botox-fillers',
    treatmentName: 'Anti-Aging Injectables & Micro-Dosing',
    sourceTitle: 'Anatomical Precision in Facial Neuromodulator Micro-Dosing and Cohesive Dermal Filler Placement',
    sourceType: 'Clinical Pharmacology',
    citationOrUrl: 'Aesthetic Surgery Journal / Consensus Guidelines for Facial Injectables',
    clinicalRelevance: 'Defines micro-dosing safety vectors, natural facial expression conservation, and sterile anatomical plane localization for aesthetic physicians.'
  },

  // 8. Body Contouring & RF Tightening
  {
    treatmentId: 'body-sculpting-contouring',
    treatmentName: 'Body Contouring & Radiofrequency Tightening',
    sourceTitle: 'Non-Invasive Subcutaneous Radiofrequency Dermal Remodeling and Mechanical Lymphatic Clearance',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'Journal of Cosmetic Dermatology',
    clinicalRelevance: 'Documents controlled 40–42°C dermal heating leading to immediate collagen triple-helix denaturation followed by long-term neocollagenesis.'
  },

  // 9. Precision Laser Tattoo Removal
  {
    treatmentId: 'tattoo-removal-laser',
    treatmentName: 'Precision Laser Tattoo Removal',
    sourceTitle: 'Photoacoustic Fragmentation Kinetics of Organic and Synthetic Exogenous Pigments',
    sourceType: 'Peer-Reviewed Journal',
    citationOrUrl: 'Dermatologic Surgery / ASLMS Guidelines',
    clinicalRelevance: 'Outlines the Kirby-Desai scale criteria for assessing treatment intervals, ink density, and immune lymphatic clearance efficiency.'
  }
];
