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
import { FadeIn, TextReveal, Magnetic } from '../components/motion/MotionPrimitives';

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
    <div className="min-h-screen bg-theme-bg text-theme-fg pt-28 sm:pt-36 pb-20 transition-colors duration-400">
      <SEOHead
        title="Contact & Visit Us | HealRx Clinic Sion East, Mumbai"
        description="Contact HealRx Aesthetics & Laser Clinic in Sion Koliwada, Mumbai (Ahead of PVR Cinema, Opp. Croma Store). Call +91 93721 64224 or visit daily 10 AM - 10 PM."
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl space-y-4">
          <FadeIn delay={0.05}>
            <span className="text-xs uppercase tracking-widest-luxury text-theme-accent font-semibold px-3.5 py-1.5 rounded-full bg-theme-accent-surface border border-theme-border-highlight inline-block">
              Connect With HealRx
            </span>
          </FadeIn>

          <TextReveal delay={0.1} as="h1" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-theme-fg">
            VISIT OUR CLINIC IN SION, MUMBAI.
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="mt-4 text-base sm:text-lg text-theme-fg-muted leading-relaxed">
              We welcome consultations, inquiries, and appointments at our private aesthetic clinic in Sion East.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-theme-accent-surface text-theme-accent flex items-center justify-center border border-theme-border-highlight">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-theme-fg">
                Clinic Address
              </h3>
              <p className="text-theme-fg-muted text-xs sm:text-sm leading-relaxed">
                {CLINIC_INFO.address.full}
              </p>
              <div className="pt-2">
                <a
                  href={CLINIC_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-theme-accent hover:underline underline-offset-4"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-luxury space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-theme-fg block">
                    Helpline &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm text-theme-accent hover:underline font-medium"
                  >
                    {CLINIC_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-theme-border">
                <Clock className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-theme-fg block">
                    Operating Hours
                  </span>
                  <span className="text-xs sm:text-sm text-theme-fg-muted block">
                    {CLINIC_INFO.hours.days}: {CLINIC_INFO.hours.time}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-theme-border">
                <Compass className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-theme-fg block">
                    Key Landmarks
                  </span>
                  <span className="text-xs sm:text-sm text-theme-fg-muted block">
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
              className="p-5 rounded-3xl bg-[#25D366] text-white flex items-center justify-between shadow-luxury hover:bg-[#20ba5a] transition-all group"
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
          <div className="lg:col-span-7 bg-theme-surface p-6 sm:p-10 rounded-3xl border border-theme-border shadow-luxury">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-theme-accent-surface text-theme-accent rounded-full flex items-center justify-center mx-auto border border-theme-border-highlight shadow-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-theme-fg">Message Received</h3>
                <p className="text-theme-fg-muted text-sm max-w-md mx-auto">
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
                  <span className="text-xs uppercase tracking-widest-luxury text-theme-accent font-semibold block mb-1">
                    Inquiry Form
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                    Send Us A Direct Message
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohini Deshmukh"
                    className="w-full px-4 py-3 bg-theme-surface-elevated rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 93721 64224"
                      className="w-full px-4 py-3 bg-theme-surface-elevated rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rohini@example.com"
                      className="w-full px-4 py-3 bg-theme-surface-elevated rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                    How Can We Help You?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the skin or laser treatment you are interested in..."
                    className="w-full px-4 py-3 bg-theme-surface-elevated rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors resize-none"
                  />
                </div>

                <Magnetic strength={0.2}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message To Clinic
                  </Button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
