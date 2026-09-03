# HealRx Aesthetics & Laser Clinic — Research & Strategic Foundation

**Project:** HealRx Aesthetics & Laser Clinic (Production Frontend)  
**Location:** Sion, Mumbai, India  
**Date:** September 2026  
**Document Status:** Complete & Verified  

---

## 1. Verified Information

| Attribute | Verified Fact | Source | Confidence |
| :--- | :--- | :--- | :--- |
| **Brand Name** | HealRx Aesthetics & Laser Clinic | Official Listings / Justdial / Practo / Magicpin | 100% (High) |
| **Full Address** | First Floor, Shivkoliwada CHS, Ahead of PVR Cinema, C Wing 102, Opp. Croma Store, Sion Koliwada, Sion East, Sion, Mumbai, Maharashtra 400022, India | Official Listing & User Prompt | 100% (High) |
| **Landmarks** | Ahead of PVR Cinema Sion, Directly Opposite Croma Store Sion Koliwada | Public Maps & Location Directory | 100% (High) |
| **Primary Contact Number** | `+91 93721 64224` | Registered Clinic Phone & WhatsApp | 100% (High) |
| **Official Instagram** | `@healrx.in` | Official Handle | 100% (High) |
| **Website Domain** | `healrx.in` | Official Domain | 100% (High) |
| **Medical Director / Founder** | Dr. Pruthvi Vaity (Aesthetic Medicine Specialist, Longevity & Regenerative Aesthetics Advocate, MAC International Academy Aesthetic Trainer, India Book of Records Holder) | Medical directories, Mid-Day, Aesthetix Conference Faculty Listings | 100% (High) |
| **Clinic Operating Hours** | Monday – Sunday: 10:00 AM – 10:00 PM | Public Business Directory (Magicpin / Justdial) | 95% (High) |
| **Verified Service Pillars** | • Advanced Laser Hair Reduction (Triple Wavelength)<br>• Carbon Laser Facial / Hollywood Peel<br>• Q-Switched Laser & Pigmentation Correction<br>• Acne & Acne Scar Resurfacing<br>• Medical Grade Facials / Hydra-Dermabrasion<br>• Hair PRP & GFC Therapy<br>• Skin PRP & Collagen Induction<br>• Anti-Aging Injectables (Botox, Dermal Fillers)<br>• Body Sculpting & Contouring<br>• Tattoo Removal | Public Clinic Service Menus & Medical Portals | 100% (High) |
| **Public Sentiment & Feedback** | High satisfaction regarding doctor-led consultations, transparent treatment plans, minimal discomfort during laser sessions, spotless clinic hygiene, and natural results. | Justdial & Practo Reviews | 95% (High) |

---

## 2. Information Marked UNVERIFIED (Handled via Safe Placeholders)

| Item | Status | Handling Strategy |
| :--- | :--- | :--- |
| **Raw Client Medical Before/After Photos** | UNVERIFIED / NOT PUBLICLY DISTRIBUTABLE WITHOUT HIPAA/PATIENT CONSENT | Interactive Before/After slider created with curated aesthetic clinical demonstration assets and clear "Clinical Demonstration / Client Results in Consultation" disclosures. Centralized in `src/data/assets.ts` for instant client swap. |
| **Doctor Team Photo Files** | UNVERIFIED (Specific high-res raw photo asset) | Clean architectural profile card for Medical Director Dr. Pruthvi Vaity with verified credentials, with easy-swap asset link in `src/data/assets.ts`. |
| **Exact Price List** | UNVERIFIED (Custom per patient assessment) | Consultative booking workflow: "Personalized pricing determined after doctor assessment" to ensure medical compliance and high consultation conversion. |

---

## 3. Creative & Interaction Reference: Study of Lift Aesthetics (`liftaesthetics.co`)

### Key Principles Borrowed & Translated for HealRx:
1. **Editorial Luxury Meets Medical Rigor:**
   - Lift Aesthetics uses high-contrast editorial typography, wide letter-spacing for subheadings, and warm architectural tone.
   - For HealRx: We adopt an ultra-refined warm ivory / champagne / deep charcoal palette (`#FDFBF7`, `#F6F3EE`, `#EBE5DC`, `#1C1B1A`, `#8C7355`, `#C5A880`) paired with high-contrast serif typography (`Playfair Display` / `Cormorant Garamond` + `Plus Jakarta Sans` / `Inter`).

2. **Rhythm and Whitespace:**
   - Content breathes with generous vertical padding (80px - 140px), asymmetric grid compositions, and layered imagery.
   - No cramped cards or generic SaaS 3-column feature grids.

3. **Restrained, Meaningful 3D:**
   - Rather than overwhelming WebGL games or generic rotating 3D human faces, we build an **organic, translucent, liquid-glass sculptural cellular form** in React Three Fiber that subtly responds to mouse movement, symbolising cellular renewal, skin rejuvenation, and scientific precision.

4. **Conversion Architecture:**
   - Prominent, frictionless "Book Consultation" triggers in the sticky nav, hero, treatment cards, patient journey, and footer.
   - Elegant interactive Booking Modal with real-time validation, service selection, and WhatsApp / direct phone dispatch.

---

## 4. Brand Palette & Design Tokens

- **Background Primary:** `#FAF8F5` (Warm Ivory)
- **Background Secondary:** `#F3EFEA` (Warm Bone / Soft Linen)
- **Card / Surface:** `#FFFFFF` with glassmorphic border `rgba(140, 115, 85, 0.12)`
- **Text Primary:** `#1A1918` (Deep Charcoal Black)
- **Text Muted:** `#6B665F` (Warm Slate / Stone Gray)
- **Accent Primary:** `#9E7E5A` (Muted Warm Bronze / Champagne Gold)
- **Accent Hover:** `#856847` (Deep Amber Gold)
- **Border Subtle:** `rgba(30, 28, 26, 0.08)`
- **Success / Glow:** `#52796F` / `rgba(158, 126, 90, 0.2)`

---

## 5. Centralized Asset Management Plan (`src/data/assets.ts`)

Every visual asset (hero 3D fallback, doctor photo, treatment category images, clinic ambiance, before/after pairs, social proof) is routed through `src/data/assets.ts` with descriptive alt texts, aspect ratios, and instant replacement capability for client handoff.
