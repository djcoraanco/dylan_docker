import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookPage from './pages/BookPage';
import PortfolioPage from './pages/PortfolioPage';
import PressPage from './pages/PressPage';
import ContactPage from './pages/ContactPage';
import ConsultingPage from './pages/ConsultingPage';
import MarketingConsultingPage from './pages/MarketingConsultingPage';
import BusinessSetupConsultingPage from './pages/BusinessSetupConsultingPage';
import BusinessOptimizationConsultingPage from './pages/BusinessOptimizationConsultingPage';
import SupplyChainConsultingPage from './pages/SupplyChainConsultingPage';
import CybersecurityConsultingPage from './pages/CybersecurityConsultingPage';
import EducationConsultingPage from './pages/EducationConsultingPage';
import FractionalExecutiveRolesPage from './pages/FractionalExecutiveRolesPage';
import IntakePage from './pages/IntakePage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Isolated routes without standard Header/Footer */}
        <Route path="/intake-dq7k2m" element={<IntakePage />} />

        {/* Standard layout routes */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="consulting" element={<ConsultingPage />} />
          <Route path="consulting/marketing" element={<MarketingConsultingPage />} />
          <Route path="consulting/business-setup" element={<BusinessSetupConsultingPage />} />
          <Route path="consulting/business-optimization" element={<BusinessOptimizationConsultingPage />} />
          <Route path="consulting/supply-chain" element={<SupplyChainConsultingPage />} />
          <Route path="consulting/cybersecurity" element={<CybersecurityConsultingPage />} />
          <Route path="consulting/education" element={<EducationConsultingPage />} />
          <Route path="consulting/fractional" element={<FractionalExecutiveRolesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="press" element={<PressPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;