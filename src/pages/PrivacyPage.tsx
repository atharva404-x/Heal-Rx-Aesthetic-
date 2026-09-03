import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { CLINIC_INFO } from '../data/site';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title="Privacy Policy | HealRx Aesthetics"
        description="Privacy policy and patient health data protection policies at HealRx Aesthetics & Laser Clinic, Sion, Mumbai."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block mb-4">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-stone-400 mt-2">
            Last Updated: September 2026 • HealRx Aesthetics & Laser Clinic
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-luxury space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">1. Patient Confidentiality & Data Security</h2>
            <p>
              At HealRx Aesthetics & Laser Clinic, safeguarding your personal, contact, and medical information is of utmost priority. We adhere to high ethical and medical privacy standards. Your clinical notes, consultation photographs (if taken with explicit consent), and treatment history remain strictly confidential.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">2. Information We Collect</h2>
            <p>
              When you submit a consultation request via our website or in-clinic intake forms, we may collect your name, phone number, email address, preferred appointment time, and relevant dermatological concerns to facilitate scheduling and clinical evaluation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">3. How Your Information Is Used</h2>
            <p>
              Your contact details are used solely to confirm your appointments, provide aftercare instructions, respond to clinical inquiries, and communicate relevant clinic updates. We never sell, rent, or distribute your private information to third-party marketing entities.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">4. Medical Records & Consent</h2>
            <p>
              Clinical photographs taken for baseline diagnostic comparison are stored securely and will never be published or shared without your signed written consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">5. Inquiries & Contact</h2>
            <p>
              For privacy-related questions, contact us at: <br />
              <strong>HealRx Aesthetics & Laser Clinic</strong><br />
              {CLINIC_INFO.address.full}<br />
              Email: {CLINIC_INFO.email} | Phone: {CLINIC_INFO.displayPhone}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
