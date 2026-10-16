import React, { useState, useMemo } from 'react';
import DliciousHeader from './components/DliciousHeader';
import DliciousCategoryPills from './components/DliciousCategoryPills';
import DliciousHeroBanner from './components/DliciousHeroBanner';
import TrustTicker from './components/TrustTicker';
import LivestockCatalogGrid from './components/LivestockCatalogGrid';
import BulkOrderEstimator from './components/BulkOrderEstimator';
import ConsignmentTracker from './components/ConsignmentTracker';
import AllanaPartnership from './components/AllanaPartnership';
import DliciousSynergy from './components/DliciousSynergy';
import BiosecuritySection from './components/BiosecuritySection';
import DualLocationsSection from './components/DualLocationsSection';
import Footer from './components/Footer';
import AllocationBasketDrawer from './components/AllocationBasketDrawer';
import LotDetailModal from './components/LotDetailModal';
import ProcurementModal from './components/ProcurementModal';
import DliciousMobileBottomBar from './components/DliciousMobileBottomBar';
import { LIVESTOCK_LOTS } from './data/livestockLots';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [basket, setBasket] = useState([
    { ...LIVESTOCK_LOTS[0], heads: 50 },
  ]);
  const [wishlist, setWishlist] = useState(['ALF-LOT-101']);
  const [basketOpen, setBasketOpen] = useState(false);
  const [selectedLot, setSelectedLot] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  // Filter lots based on category and search query
  const filteredLots = useMemo(() => {
    return LIVESTOCK_LOTS.filter((lot) => {
      const matchesCategory =
        activeCategory === 'all' || lot.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        lot.title.toLowerCase().includes(q) ||
        lot.breed.toLowerCase().includes(q) ||
        lot.id.toLowerCase().includes(q) ||
        lot.origin.toLowerCase().includes(q) ||
        lot.spec.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Basket handlers
  const handleAddToBasket = (lot) => {
    setBasket((prev) => {
      const exists = prev.find((item) => item.id === lot.id);
      if (exists) {
        return prev.map((item) =>
          item.id === lot.id
            ? { ...item, heads: (item.heads || 50) + 10 }
            : item
        );
      }
      return [...prev, { ...lot, heads: 50 }];
    });
    setBasketOpen(true);
  };

  const handleUpdateQuantity = (id, heads) => {
    setBasket((prev) =>
      prev.map((item) => (item.id === id ? { ...item, heads } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearBasket = () => {
    setBasket([]);
  };

  // Wishlist handler
  const handleToggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#03140E] text-[#F9F8F4] overflow-x-hidden selection:bg-[#E5A93C] selection:text-[#03140E]">
      {/* DLiciousMEAT Style Top Header */}
      <DliciousHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        basketCount={basket.length}
        onOpenBasket={() => setBasketOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setActiveCategory('all')}
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      <main className="pb-16 md:pb-0">
        {/* DLiciousMEAT Category Filter Pills */}
        <div className="pt-20 sm:pt-24">
          <DliciousCategoryPills
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* DLiciousMEAT Promo Hero Billboard */}
        <DliciousHeroBanner onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Continuous Trust Marquee */}
        <TrustTicker />

        {/* Live Interactive Livestock Batch Catalog (DLiciousMEAT Shop Grid) */}
        <LivestockCatalogGrid
          lots={filteredLots}
          basket={basket}
          onAddToBasket={handleAddToBasket}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onSelectLot={setSelectedLot}
        />

        {/* Industrial Volume Planner (DLiciousMEAT "Party & Bulk Orders" equivalent) */}
        <BulkOrderEstimator />

        {/* Live Livestock Shipment GPS Tracker (DLiciousMEAT "Track Order" equivalent) */}
        <ConsignmentTracker />

        {/* Strategic Allana Pvt. Ltd. Partnership & Ghazipur Hub */}
        <AllanaPartnership onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* DLiciousMEAT Ecosystem Synergy Section */}
        <DliciousSynergy />

        {/* Biosecurity & Ante-Mortem Protocols */}
        <BiosecuritySection />

        {/* Verified Hubs (Ghazipur MCD + Quresh Nagar) & Contact Desk */}
        <DualLocationsSection />
      </main>

      {/* Corporate Certified Footer */}
      <Footer />

      {/* Allocation Basket Slide-Over Drawer */}
      <AllocationBasketDrawer
        isOpen={basketOpen}
        onClose={() => setBasketOpen(false)}
        basket={basket}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBasket={handleClearBasket}
      />

      {/* Lot Detail Dossier Modal */}
      <LotDetailModal
        lot={selectedLot}
        onClose={() => setSelectedLot(null)}
        onAddToBasket={handleAddToBasket}
      />

      {/* Quick B2B Allocation Request Modal */}
      <ProcurementModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />

      {/* DLiciousMEAT Mobile Bottom Bar */}
      <DliciousMobileBottomBar
        basketCount={basket.length}
        onOpenBasket={() => setBasketOpen(true)}
      />
    </div>
  );
}

export default App;
