import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyCTA } from './components/layout/MobileStickyCTA';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BookingModal } from './components/ui/BookingModal';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage').then(m => ({ default: m.TreatmentsPage })));
const TreatmentDetailPage = lazy(() => import('./pages/TreatmentDetailPage').then(m => ({ default: m.TreatmentDetailPage })));
const ResultsPage = lazy(() => import('./pages/ResultsPage').then(m => ({ default: m.ResultsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Route loading fallback with theme tokens
const RouteLoader: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-theme-accent border-t-transparent animate-spin" />
  </div>
);

// Scroll restoration component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTreatmentSlug, setBookingTreatmentSlug] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentSlug?: string) => {
    setBookingTreatmentSlug(treatmentSlug);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingTreatmentSlug(undefined);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <CustomCursor />
        
        <div className="flex flex-col min-h-screen bg-theme-bg text-theme-fg selection:bg-theme-accent selection:text-white transition-colors duration-400">
          <Navbar onOpenBooking={handleOpenBooking} />

          <main className="flex-grow">
            <Suspense fallback={<RouteLoader />}>
              <Routes>
                <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
                <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
                <Route path="/treatments" element={<TreatmentsPage onOpenBooking={handleOpenBooking} />} />
                <Route path="/treatments/:slug" element={<TreatmentDetailPage onOpenBooking={handleOpenBooking} />} />
                <Route path="/results" element={<ResultsPage onOpenBooking={handleOpenBooking} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <MobileStickyCTA onOpenBooking={() => handleOpenBooking()} />

          {/* Global Consultation Booking Modal */}
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            initialTreatmentSlug={bookingTreatmentSlug}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
