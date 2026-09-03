import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title="Terms of Service & Medical Disclaimer | HealRx Aesthetics"
        description="Terms of service, appointment booking terms, and medical disclaimers for HealRx Aesthetics & Laser Clinic, Sion, Mumbai."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block mb-4">
            Legal & Medical Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900">
            Terms of Service & Medical Disclaimer
          </h1>
          <p className="text-xs text-stone-400 mt-2">
            Last Updated: September 2026 • HealRx Aesthetics & Laser Clinic
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-luxury space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-gold-50/70 border border-gold-200 text-stone-800">
            <h2 className="font-serif text-lg text-charcoal-900 font-semibold mb-1">
              ⚠️ Medical Disclaimer Notice
            </h2>
            <p>
              The content provided on this website is for informational and educational purposes regarding aesthetic and laser treatments. It does not constitute formal medical diagnosis or personalized prescription. An in-person clinical assessment by Medical Director Dr. Pruthvi Vaity is mandatory prior to any procedure.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">1. Treatment Outcomes & Variability</h2>
            <p>
              Aesthetic and dermatological results vary significantly between individuals based on physiological response, skin type, follicle density, hormonal levels, and adherence to prescribed aftercare regimens. HealRx does not guarantee identical results across different patients.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">2. Consultation & Appointment Policy</h2>
            <p>
              Appointments booked online represent consultation requests and will be confirmed by our clinical coordinator. We appreciate at least 24 hours notice for rescheduling or cancellation of appointment slots.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">3. Pre- and Post-Procedure Compliance</h2>
            <p>
              Patients are required to disclose comprehensive medical history, current medications (including blood thinners, retinoids, or photosensitizing drugs), and recent sun exposure during consultation. Adhering to doctor-prescribed SPF and aftercare is critical for safety.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-charcoal-900 mb-2">4. Jurisdiction</h2>
            <p>
              Any disputes or legal inquiries are governed exclusively by the laws of Maharashtra, India, and subject to the jurisdiction of courts in Mumbai.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
