import React, { useState } from 'react';
import AliefLogo from './AliefLogo';
import { Search, Mic, ShoppingBag, Heart, Phone, Menu, X, ShieldCheck, ExternalLink, ChevronDown } from 'lucide-react';

export default function DliciousHeader({
  searchQuery,
  onSearchChange,
  basketCount,
  onOpenBasket,
  wishlistCount,
  onOpenWishlist,
  onOpenInquiry,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#041A12]/95 backdrop-blur-md border-b border-[#E5A93C]/20 text-[#cadbd3]">
      {/* Top Announcement Bar (DLiciousMEAT style) */}
      <div className="bg-[#020B07] border-b border-[#144936] text-[10px] sm:text-[11px] py-1 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1 text-[#E5A93C] font-bold uppercase text-[9px] sm:text-[10px] bg-[#0A3124] px-2 py-0.5 rounded-full border border-[#E5A93C]/30">
              <ShieldCheck className="w-3 h-3 text-[#E5A93C]" />
              100% Halal & Adult Buffalo Only
            </span>
            <span className="hidden md:inline text-[#E5A93C]/40">•</span>
            <span className="hidden md:inline text-white/90">
              Approved Tier-1 Vendor to <strong className="text-[#E5A93C]">Allana Pvt. Ltd.</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.dliciousmeat.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-[#E5A93C] transition-colors"
            >
              <span>A Unit of <strong className="text-[#E5A93C]">DLiciousMEAT</strong></span>
              <ExternalLink className="w-2.5 h-2.5 text-[#E5A93C]" />
            </a>
            <span className="text-[#E5A93C]/40 hidden sm:inline">|</span>
            <a
              href="tel:+919711310319"
              className="hidden sm:inline-flex items-center gap-1 text-[#E5A93C] hover:text-[#FFF2B2] font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>+91 9711310319</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Actions Navigation Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        {/* Brand Logo with 100% Halal pill */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <a href="#" className="flex items-center">
            <AliefLogo />
          </a>
          <span className="hidden xl:inline-flex flex-col items-center justify-center rounded-xl border border-[#E5A93C]/30 bg-[#082D20] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#E5A93C]">
            <span>100% Halal</span>
            <span className="text-[8px] text-[#cadbd3]">No Calves • No Cow</span>
          </span>
        </div>

        {/* Center Search Input Bar (DLiciousMEAT search bar style) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-2 sm:mx-6">
          <div className="relative w-full flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-[#E5A93C] pointer-events-none" />
            <input
              type="text"
              placeholder="Search adult Murrah lots, weight class, Ghazipur dispatch dates..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-11 pl-11 pr-24 rounded-full bg-[#03140E] border border-[#164E39] focus:border-[#E5A93C] text-xs text-white placeholder:text-[#cadbd3]/50 outline-none transition-all shadow-inner"
            />
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 px-3 py-1.5 rounded-full bg-[#E5A93C] hover:bg-[#F8D48D] text-[#03140E] text-[10px] font-bold uppercase tracking-wider transition-colors shadow"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Navigation & Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold uppercase tracking-wider mr-2">
            <a href="#catalog" className="text-[#cadbd3] hover:text-[#E5A93C] transition-colors">
              Batches
            </a>
            <a href="#bulk-planner" className="text-[#cadbd3] hover:text-[#E5A93C] transition-colors">
              Bulk Planner
            </a>
            <a href="#track-dispatch" className="text-[#cadbd3] hover:text-[#E5A93C] transition-colors">
              Track Dispatch
            </a>
            <a href="#allana-partner" className="text-[#cadbd3] hover:text-[#E5A93C] transition-colors">
              Allana Hub
            </a>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#164E39] bg-[#062319] hover:bg-[#0A3124] flex items-center justify-center text-[#cadbd3] hover:text-[#E5A93C] transition-all"
            aria-label="Saved Lots"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E5A93C] text-[#03140E] text-[9px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Allocation Basket Button (DLiciousMEAT Basket Style) */}
          <button
            onClick={onOpenBasket}
            className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 h-9 sm:h-10 rounded-full border border-[#E5A93C]/40 bg-[#0A3124] hover:bg-[#0D3D2C] text-xs font-bold text-white transition-all shadow-[0_4px_15px_rgba(229,169,60,0.15)]"
            aria-label="View Allocation Basket"
          >
            <ShoppingBag className="w-4 h-4 text-[#E5A93C]" />
            <span className="hidden sm:inline text-xs font-medium">Basket</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-extrabold">
              {basketCount}
            </span>
          </button>

          {/* Direct WhatsApp / Instant Quote Button */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 h-10 rounded-full bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)] transition-all"
          >
            <span>B2B Quote</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full border border-[#164E39] bg-[#062319] flex items-center justify-center text-[#E5A93C]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Input Sub-bar (DLiciousMEAT mobile search) */}
      <div className="md:hidden px-3 pb-2.5">
        <div className="relative w-full flex items-center">
          <Search className="absolute left-3.5 w-3.5 h-3.5 text-[#E5A93C] pointer-events-none" />
          <input
            type="text"
            placeholder="Search Murrah lots, weight class, dispatch dates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-9 pl-9 pr-4 rounded-full bg-[#03140E] border border-[#164E39] text-xs text-white placeholder:text-[#cadbd3]/50 outline-none"
          />
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#03140E] border-b border-[#E5A93C]/30 px-5 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col space-y-2 text-xs uppercase tracking-wider font-semibold">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#144936] text-[#cadbd3] hover:text-[#E5A93C]"
            >
              Live Livestock Batches
            </a>
            <a
              href="#bulk-planner"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#144936] text-[#cadbd3] hover:text-[#E5A93C]"
            >
              Bulk Sourcing & Yield Planner
            </a>
            <a
              href="#track-dispatch"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#144936] text-[#cadbd3] hover:text-[#E5A93C]"
            >
              Track Live Consignments
            </a>
            <a
              href="#allana-partner"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#144936] text-[#cadbd3] hover:text-[#E5A93C]"
            >
              Allana Pvt. Ltd. Partnership
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#144936] text-[#cadbd3] hover:text-[#E5A93C]"
            >
              Ghazipur MCD & Sadar Bazar Hubs
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase"
            >
              Instant Supply Allocation Request
            </button>
            <a
              href="tel:+919711310319"
              className="w-full py-2.5 rounded-lg bg-[#0A3124] border border-[#E5A93C]/40 text-[#E5A93C] font-bold text-xs uppercase text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch Desk: 9711310319</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
