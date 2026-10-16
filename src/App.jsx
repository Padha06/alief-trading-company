import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustTicker from './components/TrustTicker';
import AboutSection from './components/AboutSection';
import LivestockStandards from './components/LivestockStandards';
import AllanaPartnership from './components/AllanaPartnership';
import DliciousSynergy from './components/DliciousSynergy';
import BiosecuritySection from './components/BiosecuritySection';
import DualLocationsSection from './components/DualLocationsSection';
import Footer from './components/Footer';
import ProcurementModal from './components/ProcurementModal';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03140E] text-[#F9F8F4] overflow-x-hidden selection:bg-[#E5A93C] selection:text-[#03140E]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenInquiry={() => setModalOpen(true)} />

      <main className="pb-16 md:pb-0">
        {/* Standout Hero Section */}
        <Hero onOpenInquiry={() => setModalOpen(true)} />

        {/* Continuous Gold & Emerald Trust Marquee */}
        <TrustTicker />

        {/* Heritage, Meaning of 'ALIEF' & Sadar Bazar Roots */}
        <AboutSection onOpenInquiry={() => setModalOpen(true)} />

        {/* The Adult Buffalo Only Mandate & Batch Calculator */}
        <LivestockStandards onOpenInquiry={() => setModalOpen(true)} />

        {/* Allana Pvt. Ltd. Partnership & Supply Chain Flow */}
        <AllanaPartnership onOpenInquiry={() => setModalOpen(true)} />

        {/* A Unit of DLiciousMEAT Synergy Section */}
        <DliciousSynergy />

        {/* Biosecurity & Ante-Mortem Welfare Verification */}
        <BiosecuritySection />

        {/* Dual Locations (Ghazipur MCD + Quresh Nagar) & Live Request Desk */}
        <DualLocationsSection />
      </main>

      {/* Corporate Certified Footer */}
      <Footer />

      {/* Mobile Bottom Dock Navigation Bar */}
      <MobileBottomNav onOpenInquiry={() => setModalOpen(true)} />

      {/* Quick Supply Allocation Modal */}
      <ProcurementModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
