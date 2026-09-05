import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, User, Sparkles, MessageSquare, Clock, ArrowRight, Copy, Check } from 'lucide-react';
import { CLINIC_INFO } from '../../data/site';
import { TREATMENTS } from '../../data/treatments';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentSlug?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentSlug,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatmentSlug || 'general-consultation',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync initial treatment slug whenever it changes
  const [prevSlug, setPrevSlug] = useState(initialTreatmentSlug);
  if (initialTreatmentSlug !== prevSlug) {
    setPrevSlug(initialTreatmentSlug);
    if (initialTreatmentSlug) {
      setFormData(prev => ({ ...prev, treatment: initialTreatmentSlug }));
    }
  }

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTreatment = TREATMENTS.find(t => t.slug === formData.treatment);
  const treatmentTitle = currentTreatment ? currentTreatment.title : 'General Aesthetic Consultation';
  const submitButtonLabel = currentTreatment?.formCtaLabel || "Let's Start the Conversation →";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please enter your name and phone number so our team can reach you.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 450);
  };

  const formatWhatsAppText = () => {
    return (
      `Hello HealRx Team,\n\n` +
      `I’m interested in:\n` +
      `${treatmentTitle}\n\n` +
      `Name:\n` +
      `${formData.name}\n\n` +
      `Phone:\n` +
      `${formData.phone}\n\n` +
      `Preferred contact time:\n` +
      `${formData.preferredTime}\n\n` +
      (formData.message.trim() ? `Message:\n${formData.message.trim()}\n\n` : '') +
      `I’d like to know the next steps for a consultation.\n\n` +
      `Thank you.`
    );
  };

  const generateWhatsAppLink = () => {
    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(formatWhatsAppText())}`;
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formatWhatsAppText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/75 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-theme-bg rounded-3xl shadow-luxury-lg border border-theme-border overflow-hidden my-8 transition-colors duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-theme-surface-elevated px-6 sm:px-8 py-5 border-b border-theme-border flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-theme-accent font-semibold">
              HealRx Clinic • Sion East, Mumbai
            </span>
            <h3 id="modal-title" className="font-serif text-2xl font-normal text-theme-fg">
              {status === 'success' ? "You're One Step Closer" : 'Start Your Skin Journey'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-theme-fg-muted hover:text-theme-fg hover:bg-theme-surface transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-theme-fg">
          {status === 'success' ? (
            /* STEP 2: SUCCESS STATE & WHATSAPP HANDOFF */
            <div className="text-center py-4 sm:py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-theme-accent-surface text-theme-accent rounded-full flex items-center justify-center mx-auto border border-theme-border-highlight shadow-glow">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                  You’re one step closer.
                </h4>
                <p className="text-theme-fg-muted text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                  Your enquiry is ready to continue directly on WhatsApp with our clinical coordinator at HealRx Sion.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 bg-theme-surface rounded-2xl border border-theme-border text-left space-y-2.5 text-xs sm:text-sm text-theme-fg-muted shadow-luxury-sm">
                <div className="flex justify-between border-b border-theme-border/60 pb-2">
                  <span className="text-theme-fg-subtle">Treatment:</span>
                  <strong className="text-theme-fg text-right font-serif">{treatmentTitle}</strong>
                </div>
                <div className="flex justify-between border-b border-theme-border/60 pb-2">
                  <span className="text-theme-fg-subtle">Contact Name:</span>
                  <strong className="text-theme-fg">{formData.name}</strong>
                </div>
                <div className="flex justify-between border-b border-theme-border/60 pb-2">
                  <span className="text-theme-fg-subtle">Phone:</span>
                  <span className="text-theme-fg font-mono">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-theme-fg-subtle">Preferred Time:</span>
                  <span className="text-theme-fg">{formData.preferredTime}</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all shadow-luxury active:scale-[0.98]"
                >
                  <span>Continue to WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-center gap-3 text-xs text-theme-fg-muted pt-1">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center text-[11px] uppercase tracking-wider text-theme-fg hover:text-theme-accent py-1 px-2.5 rounded-lg border border-theme-border hover:bg-theme-surface transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                    <span>{copied ? 'Copied Message' : 'Copy Message Text'}</span>
                  </button>
                  <span>•</span>
                  <span>
                    Prefer to call?{' '}
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-theme-accent font-semibold underline underline-offset-4">
                      {CLINIC_INFO.displayPhone}
                    </a>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="ghost" size="sm" onClick={onClose}>
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            /* STEP 1: LOW-FRICTION CONSULTATION FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-theme-accent-surface p-4 rounded-2xl border border-theme-border-highlight">
                <p className="text-xs text-theme-fg-muted leading-relaxed">
                  Tell us a little about what you&apos;re looking for. Our medical team led by <strong>Dr. Pruthvi Vaity</strong> will guide you with the next step.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aarti Sharma"
                    className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number (WhatsApp) */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Phone Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 93721 64224"
                    className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                  />
                </div>
              </div>

              {/* Treatment of Interest (Pre-selected) */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Treatment / Procedure of Interest
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                  >
                    <option value="general-consultation">General Aesthetic & Skin Consultation</option>
                    {TREATMENTS.map(t => (
                      <option key={t.slug} value={t.slug}>
                        {t.title} ({t.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Contact Time */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Preferred Contact Window
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    <option value="Anytime during clinic hours">Anytime during clinic hours</option>
                  </select>
                </div>
              </div>

              {/* Optional Skin Goals / Message */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Tell Us About Your Skin or Hair Goals (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Interested in treatment timeline, skin texture concerns, or upcoming event dates..."
                    className="w-full pl-10 pr-4 py-2.5 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Reassuring Microcopy & Dynamic CTA Button */}
              <div className="pt-2 space-y-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Preparing Your Enquiry...' : submitButtonLabel}
                </Button>

                <p className="text-[11px] text-theme-fg-subtle leading-relaxed text-center">
                  Your details are strictly used to help the HealRx medical team respond to your enquiry. We never share your data.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
