import React, { useState, useMemo } from 'react';
import DliciousHeader from './components/DliciousHeader';
import MeatHeroBillboard from './components/MeatHeroBillboard';
import TrustTicker from './components/TrustTicker';
import MeatCatalogGrid from './components/MeatCatalogGrid';
import PartyBulkMeatCalculator from './components/PartyBulkMeatCalculator';
import StorageGuideSection from './components/StorageGuideSection';
import AllanaMeatExportSection from './components/AllanaMeatExportSection';
import DliciousSynergy from './components/DliciousSynergy';
import DualLocationsSection from './components/DualLocationsSection';
import Footer from './components/Footer';
import MeatCartDrawer from './components/MeatCartDrawer';
import MeatDetailModal from './components/MeatDetailModal';
import ProcurementModal from './components/ProcurementModal';
import DliciousMobileBottomBar from './components/DliciousMobileBottomBar';
import { MEAT_PRODUCTS } from './data/meatProducts';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Basket stores items with their selected weight option and quantity
  const [basket, setBasket] = useState([
    {
      ...MEAT_PRODUCTS[0],
      selectedWeight: MEAT_PRODUCTS[0].weightOptions[1], // 1 kg pack default
      quantity: 1,
    },
    {
      ...MEAT_PRODUCTS[1],
      selectedWeight: MEAT_PRODUCTS[1].weightOptions[0], // 1 kg Biryani pack default
      quantity: 1,
    },
  ]);

  const [wishlist, setWishlist] = useState(['ALF-MEAT-01', 'ALF-MEAT-04']);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return MEAT_PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.cookingStyle.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Basket handlers
  const handleAddToBasket = (product, weightOption) => {
    const chosenWeight = weightOption || product.weightOptions[0];

    setBasket((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedWeight.label === chosenWeight.label
      );

      if (existingIndex > -1) {
        return prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, selectedWeight: chosenWeight, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const handleUpdateQuantity = (id, weightLabel, newQty) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedWeight.label === weightLabel
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, weightLabel) => {
    setBasket((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.selectedWeight.label === weightLabel)
      )
    );
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
      {/* DLiciousMEAT Style Top Header with Live Search & Basket */}
      <DliciousHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        basketCount={basket.length}
        onOpenBasket={() => setCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setActiveCategory('all')}
        onOpenInquiry={() => setInquiryModalOpen(true)}
      />

      <main className="pb-16 md:pb-0">
        {/* Fresh Meat Culinary Hero Billboard */}
        <MeatHeroBillboard onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Continuous Trust Marquee */}
        <TrustTicker />

        {/* Fresh Meat Cuts Catalog Grid with Category Tabs */}
        <MeatCatalogGrid
          products={filteredProducts}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          basket={basket}
          onAddToBasket={handleAddToBasket}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenDetails={setSelectedProduct}
        />

        {/* Party & Bulk Orders Meat Calculator (DLiciousMEAT bulk feature) */}
        <PartyBulkMeatCalculator />

        {/* Storage & Freshness Handling Guide (DLiciousMEAT storage guide) */}
        <StorageGuideSection />

        {/* Allana Pvt. Ltd. Institutional Carabeef Export Supply */}
        <AllanaMeatExportSection onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* DLiciousMEAT Group Synergy Section */}
        <DliciousSynergy />

        {/* Dual Locations (Ghazipur MCD + Quresh Nagar) & Contact Desk */}
        <DualLocationsSection />
      </main>

      {/* Corporate Certified Footer */}
      <Footer />

      {/* Slide-over Fresh Meat Basket Drawer */}
      <MeatCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        basket={basket}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBasket={handleClearBasket}
      />

      {/* Meat Cut Detail Dossier Modal */}
      <MeatDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToBasket={handleAddToBasket}
      />

      {/* Quick B2B Requisition Modal */}
      <ProcurementModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />

      {/* DLiciousMEAT Mobile Bottom App Bar */}
      <DliciousMobileBottomBar
        basketCount={basket.length}
        onOpenBasket={() => setCartOpen(true)}
      />
    </div>
  );
}

export default App;
