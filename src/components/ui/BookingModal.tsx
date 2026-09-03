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
    }, 800);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-ivory-50 rounded-3xl shadow-2xl border border-gold-300/30 overflow-hidden my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-charcoal-900 px-6 sm:px-8 py-5 text-ivory-50 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-medium">
              Sion • Mumbai Clinic
            </span>
            <h3 id="modal-title" className="font-serif text-2xl font-normal text-ivory-50">
              Schedule a Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-charcoal-300 hover:text-white hover:bg-charcoal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="text-center py-6 sm:py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto border border-gold-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                Consultation Request Received
              </h4>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-charcoal-900">{formData.name}</strong>. Our clinical coordinator at HealRx Sion will call you shortly at <strong className="text-charcoal-900">{formData.phone}</strong> to confirm your appointment time.
              </p>

              <div className="p-4 bg-gold-50/60 rounded-2xl border border-gold-200/60 text-left space-y-2 text-xs sm:text-sm text-stone-700">
                <p><strong>Clinic:</strong> HealRx Aesthetics & Laser Clinic, Sion Koliwada (Opp. Croma)</p>
                <p><strong>Direct Helpline:</strong> <a href={`tel:${CLINIC_INFO.phone}`} className="text-gold-700 font-semibold underline">{CLINIC_INFO.displayPhone}</a></p>
                <p><strong>Operating Hours:</strong> 10:00 AM – 10:00 PM (Monday – Sunday)</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] text-white rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#20ba5a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Instant WhatsApp Confirm
                </a>
                <Button variant="outline" size="md" onClick={onClose} className="flex-1">
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <p className="text-xs sm:text-sm text-stone-600">
                Meet with our Medical Director Dr. Pruthvi Vaity for an evidence-based clinical assessment and tailored aesthetic treatment roadmap.
              </p>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aarti Sharma"
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="aarti@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Treatment / Concern of Interest
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
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
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    >
                      <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="evening">Evening (5:00 PM – 10:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Specific Questions or Skin Concerns (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Inquiring about laser hair reduction sessions for underarms or dark spots..."
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-stone-200 text-sm text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting Request...' : 'Confirm Consultation Request'}
                </Button>
                <p className="text-[11px] text-center text-stone-400 mt-2">
                  🔒 Strictly confidential. Your details are never shared.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
