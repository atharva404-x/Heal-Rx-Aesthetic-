import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, Mail, User, Sparkles, MessageSquare, Clock } from 'lucide-react';
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
    email: '',
    treatment: initialTreatmentSlug || 'general-consultation',
    preferredDate: '',
    preferredTime: 'morning',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone number so our medical team can contact you.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const generateWhatsAppLink = () => {
    const selectedTreatmentObj = TREATMENTS.find(t => t.slug === formData.treatment);
    const treatmentTitle = selectedTreatmentObj ? selectedTreatmentObj.title : 'Comprehensive Consultation';
    
    const text = encodeURIComponent(
      `Hello HealRx Clinic Sion! I would like to schedule a consultation.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Treatment Interest:* ${treatmentTitle}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Earliest Available'}\n` +
      `*Time Slot:* ${formData.preferredTime}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '')
    );

    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${text}`;
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
            <span className="text-[10px] uppercase tracking-widest text-theme-accent font-medium">
              Sion • Mumbai Clinic
            </span>
            <h3 id="modal-title" className="font-serif text-2xl font-normal text-theme-fg">
              Schedule a Consultation
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
            <div className="text-center py-6 sm:py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-theme-accent-surface text-theme-accent rounded-full flex items-center justify-center mx-auto border border-theme-border-highlight shadow-glow">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-theme-fg">
                Consultation Request Received
              </h4>
              <p className="text-theme-fg-muted text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-theme-fg">{formData.name}</strong>. Our clinical coordinator at HealRx Sion will call you shortly at <strong className="text-theme-fg">{formData.phone}</strong> to confirm your appointment time.
              </p>

              <div className="p-4 bg-theme-surface rounded-2xl border border-theme-border text-left space-y-2 text-xs sm:text-sm text-theme-fg-muted shadow-luxury-sm">
                <p><strong>Clinic:</strong> HealRx Aesthetics &amp; Laser Clinic, Sion Koliwada (Opp. Croma)</p>
                <p><strong>Direct Helpline:</strong> <a href={`tel:${CLINIC_INFO.phone}`} className="text-theme-accent font-semibold underline">{CLINIC_INFO.displayPhone}</a></p>
                <p><strong>Operating Hours:</strong> 10:00 AM – 10:00 PM (Monday – Sunday)</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs uppercase tracking-widest font-medium text-center transition-colors shadow-sm"
                >
                  Send Details on WhatsApp
                </a>
                <Button variant="secondary" size="md" onClick={onClose}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-theme-fg-muted leading-relaxed pb-2">
                Complete your details below for a dedicated consultation with Medical Director <strong>Dr. Pruthvi Vaity</strong>.
              </p>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs">
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

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="aarti@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Treatment / Concern of Interest
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                  >
                    <option value="general-consultation">General Aesthetic Consultation</option>
                    {TREATMENTS.map(t => (
                      <option key={t.slug} value={t.slug}>
                        {t.title} ({t.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors"
                    >
                      <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="evening">Evening (5:00 PM – 10:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Consultation Notes */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-theme-fg-secondary mb-1.5">
                  Skin or Aesthetic Goals (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-theme-fg-subtle" />
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Briefly describe your skin goals or concerns..."
                    className="w-full pl-10 pr-4 py-2.5 bg-theme-surface rounded-xl border border-theme-border text-sm text-theme-fg placeholder:text-theme-fg-subtle focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Privacy Notice & Submit Button */}
              <div className="pt-2">
                <p className="text-[11px] text-theme-fg-subtle leading-relaxed mb-4">
                  By submitting, you agree to receive appointment confirmations from HealRx Clinic via WhatsApp/Phone. Zero spam guaranteed.
                </p>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Confirming Availability...' : 'Request Consultation'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
