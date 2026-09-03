# HealRx Aesthetics & Laser Clinic — Asset Audit Report

**Date:** September 2026  
**Auditor:** Automated Engineering & Quality Validation System  
**Repository:** `d:\Heal`  
**Registry File:** `src/data/assets.ts`

---

## 1. Asset Registry Overview

All visual and multimedia assets for the HealRx website are decoupled and centralized inside `src/data/assets.ts`. This architecture guarantees that the clinic owner or incoming developers can replace or update clinic photography, doctor headshots, treatment visuals, and before/after pairs from a single configuration file without modifying any UI components or layouts.

---

## 2. Granular Asset Inventory & Verification Status

| Category | Asset Key | Resource / URL | Type | Status | Replacement Required? | Notes / Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Brand Identity** | `brand.monogram` | Vector SVG Favicon (`data:image/svg+xml`) | Local / Inline | **VERIFIED** | Optional Custom SVG | Embedded luxury H monogram in gold `#9E7E5A` |
| **Hero 3D Fallback** | `hero.fallbackPoster` | Unsplash (`photo-1616394584738`) | External | **CURATED DEMO** | Optional Client Asset | Displayed when WebGL is unavailable or user has `prefers-reduced-motion` |
| **Doctor Leadership** | `doctor.portrait` | Unsplash (`photo-1622253692010`) | External | **UNVERIFIED (Placeholder)** | **YES (Client Asset)** | Placeholder portrait for Medical Director Dr. Pruthvi Vaity. Replace with authentic clinic photoshoot |
| **Doctor Leadership** | `doctor.consultation` | Unsplash (`photo-1579684385127`) | External | **CURATED DEMO** | **YES (Client Asset)** | Clinical consultation in progress |
| **Clinic Architecture** | `clinic.exteriorOrEntrance` | Unsplash (`photo-1629909613654`) | External | **CURATED DEMO** | **YES (Client Asset)** | High-end medical entrance ambiance |
| **Clinic Architecture** | `clinic.reception` | Unsplash (`photo-1519494026892`) | External | **CURATED DEMO** | **YES (Client Asset)** | Sion clinic reception lounge |
| **Clinic Architecture** | `clinic.treatmentRoom1` | Unsplash (`photo-1584515979956`) | External | **CURATED DEMO** | **YES (Client Asset)** | Medi-facial and aesthetic treatment suite |
| **Clinic Architecture** | `clinic.laserSuite` | Unsplash (`photo-1516549655169`) | External | **CURATED DEMO** | **YES (Client Asset)** | Medical laser hair reduction suite |
| **Clinic Architecture** | `clinic.consultationSuite`| Unsplash (`photo-1631217868264`) | External | **CURATED DEMO** | **YES (Client Asset)** | Private consultation & trichoscopy room |
| **Treatment Visual** | `treatments.laserHairReduction` | Unsplash (`photo-1570172619644`) | External | **CURATED DEMO** | Optional | Triple-wavelength laser treatment demonstration |
| **Treatment Visual** | `treatments.carbonLaserPeel` | Unsplash (`photo-1512290900672`) | External | **CURATED DEMO** | Optional | Hollywood Carbon Laser Peel session |
| **Treatment Visual** | `treatments.pigmentationLaser`| Unsplash (`photo-1598440947619`) | External | **CURATED DEMO** | Optional | Q-Switched laser pigmentation treatment |
| **Treatment Visual** | `treatments.tattooRemoval` | Unsplash (`photo-1590439471364`) | External | **CURATED DEMO** | Optional | Laser tattoo pigment fragmentation |
| **Treatment Visual** | `treatments.hydraMediFacial` | Unsplash (`photo-1515377905703`) | External | **CURATED DEMO** | Optional | Hydra-infusion clinical facial |
| **Treatment Visual** | `treatments.acneScarResurfacing` | Unsplash (`photo-1522337360788`) | External | **CURATED DEMO** | Optional | Fractional acne scar remodeling |
| **Treatment Visual** | `treatments.chemicalPeels` | Unsplash (`photo-1509967419530`) | External | **CURATED DEMO** | Optional | Dermatological chemical peels |
| **Treatment Visual** | `treatments.skinPrpCollagen` | Unsplash (`photo-1527799820374`) | External | **CURATED DEMO** | Optional | Skin PRP & collagen biostimulation |
| **Treatment Visual** | `treatments.hairPrpGfc` | Unsplash (`photo-1580618672591`) | External | **CURATED DEMO** | Optional | Scalp PRP & Growth Factor Concentrate therapy |
| **Treatment Visual** | `treatments.scalpMesotherapy`| Unsplash (`photo-1607613009820`) | External | **CURATED DEMO** | Optional | Scalp micro-nutrient mesotherapy |
| **Treatment Visual** | `treatments.antiAgingInjectables` | Unsplash (`photo-1513759565286`) | External | **CURATED DEMO** | Optional | Facial anti-aging neuromodulator consultation |
| **Treatment Visual** | `treatments.dermalFillers` | Unsplash (`photo-1508214751196`) | External | **CURATED DEMO** | Optional | Hyaluronic dermal filler contouring |
| **Treatment Visual** | `treatments.bodyContouring` | Unsplash (`photo-1518611012118`) | External | **CURATED DEMO** | Optional | Non-invasive body contouring & skin tightening |
| **Before / After 01** | `beforeAfter[0]` (Laser Hair) | Unsplash (`photo-1515377905703` / `photo-1522337360788`) | External | **CURATED DEMO** | **YES (Real Patient Case)** | Underarm laser hair reduction protocol comparison |
| **Before / After 02** | `beforeAfter[1]` (Acne Scars) | Unsplash (`photo-1598440947619` / `photo-1509967419530`) | External | **CURATED DEMO** | **YES (Real Patient Case)** | Acne scar & PIH dermal resurfacing comparison |
| **Before / After 03** | `beforeAfter[2]` (Skin Glow) | Unsplash (`photo-1512290900672` / `photo-1616394584738`) | External | **CURATED DEMO** | **YES (Real Patient Case)** | Carbon laser peel pore refinement comparison |
| **Typography Fonts** | Google Fonts (Cormorant Garamond, Playfair Display, Plus Jakarta Sans) | `fonts.googleapis.com` & `fonts.gstatic.com` | External CDN | **VERIFIED** | No (Standard Webfonts) | High-contrast editorial serif & clean sans typography |

---

## 3. Findings & Replacement Strategy

1. **Zero Broken Local Paths:** All asset references are managed centrally without scattered relative paths across components.
2. **Clinical Authenticity Commitment:** In strict accordance with medical advertising ethics and the master directive, placeholder demonstration images are explicitly labeled as "Clinical Demonstrations" on the frontend. No fabricated patient stories or simulated doctor personas are presented as authentic.
3. **Client Asset Handoff Instructions:**
   - To replace any photo with real HealRx Sion clinic photographs or Dr. Pruthvi Vaity's studio portraits, simply place the image file in `public/assets/` or provide a CDN URL and update the corresponding key in `src/data/assets.ts`.
