import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Compass, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/site';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 pt-28 sm:pt-36 pb-20">
      <SEOHead
        title="Contact & Visit Us | HealRx Clinic Sion East, Mumbai"
        description="Contact HealRx Aesthetics & Laser Clinic in Sion Koliwada, Mumbai (Ahead of PVR Cinema, Opp. Croma Store). Call +91 93721 64224 or visit daily 10 AM - 10 PM."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-200/60 inline-block mb-4">
            Connect With HealRx
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal-900">
            VISIT OUR CLINIC IN SION, MUMBAI.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            We welcome consultations, inquiries, and appointments at our private aesthetic clinic in Sion East.
          </p>
        </div>
      </section>

      {/* Contact Grid & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-luxury space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center border border-gold-200/60">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900">
                Clinic Address
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {CLINIC_INFO.address.full}
              </p>
              <div className="pt-2">
                <a
                  href={CLINIC_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-gold-700 hover:text-gold-900 underline underline-offset-4"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-luxury space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-900 block">
                    Helpline & WhatsApp
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm text-gold-700 hover:underline font-medium"
                  >
                    {CLINIC_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2 border-t border-stone-100">
                <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-900 block">
                    Operating Hours
                  </span>
                  <span className="text-xs sm:text-sm text-stone-600 block">
                    {CLINIC_INFO.hours.days}: {CLINIC_INFO.hours.time}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2 border-t border-stone-100">
                <Compass className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-900 block">
                    Key Landmarks
                  </span>
                  <span className="text-xs sm:text-sm text-stone-600 block">
                    Ahead of PVR Cinema, Directly Opposite Croma Store Sion Koliwada.
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-[#25D366] text-white flex items-center justify-between shadow-md hover:bg-[#20ba5a] transition-all group"
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold text-sm">Chat on WhatsApp</h4>
                  <p className="text-xs text-white/90">Instant replies from our clinic team</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">Connect →</span>
            </a>
          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-luxury">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto border border-gold-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-charcoal-900">Message Received</h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out to HealRx Clinic Sion. Our team will contact you shortly via call or WhatsApp.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  }}
                  className="mt-4"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest-luxury text-gold-600 font-semibold block mb-1">
                    Inquiry Form
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                    Send Us A Direct Message
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohini Deshmukh"
                    className="w-full px-4 py-3 bg-ivory-50 rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 93721 64224"
                      className="w-full px-4 py-3 bg-ivory-50 rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rohini@example.com"
                      className="w-full px-4 py-3 bg-ivory-50 rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                    How Can We Help You?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the skin or laser treatment you are interested in..."
                    className="w-full px-4 py-3 bg-ivory-50 rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message To Clinic
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
