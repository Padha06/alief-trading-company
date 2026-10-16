import React, { useState, useEffect } from 'react';
import AliefLogo from './AliefLogo';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Alief', href: '#about' },
    { label: 'Buffalo Standards', href: '#standards' },
    { label: 'Allana Partnership', href: '#allana-partner' },
    { label: 'DLicious Synergy', href: '#dlicious-synergy' },
    { label: 'Biosecurity', href: '#biosecurity' },
    { label: 'Locations', href: '#locations' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Credential Micro-Bar */}
      <div className="bg-[#03140E] border-b border-[#E5A93C]/20 text-[11px] py-1.5 px-4 sm:px-8 text-[#cadbd3]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#E5A93C] font-semibold tracking-wider uppercase text-[10px] bg-[#0A3124] px-2.5 py-0.5 rounded-full border border-[#E5A93C]/30">
              <ShieldCheck className="w-3 h-3 text-[#E5A93C]" />
              Approved Tier-1 Vendor
            </span>
            <span className="hidden md:inline text-[#E5A93C]/60">•</span>
            <span className="hidden md:inline font-medium text-white/90">
              Direct Livestock Supplier to <strong className="text-[#E5A93C]">Allana Pvt. Ltd.</strong>
            </span>
            <span className="text-[#E5A93C]/60">•</span>
            <a
              href="https://www.dliciousmeat.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#cadbd3] hover:text-[#E5A93C] transition-colors"
            >
              <span>A Unit of <strong className="text-white">DLiciousMEAT</strong></span>
              <ExternalLink className="w-2.5 h-2.5 text-[#E5A93C]" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:+919711310319"
              className="flex items-center gap-1.5 text-[#E5A93C] hover:text-[#FFF2B2] transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>+91 9711310319</span>
            </a>
            <span className="text-[#E5A93C]/40">|</span>
            <span className="text-[#cadbd3] hidden lg:inline">
              Ghazipur MCD Modern Complex & Sadar Bazar
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#062319]/95 backdrop-blur-md py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-[#E5A93C]/25'
            : 'bg-gradient-to-b from-[#062319]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <AliefLogo />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-[#cadbd3] hover:text-[#E5A93C] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E5A93C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={onOpenInquiry}
              className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#D4932B] via-[#E5A93C] to-[#F8D48D] p-[1px] shadow-[0_4px_20px_rgba(229,169,60,0.25)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(229,169,60,0.45)] hover:scale-[1.02]"
            >
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#062319] group-hover:bg-[#082D20] transition-colors text-xs font-semibold uppercase tracking-wider text-[#E5A93C] group-hover:text-white">
                <span>Supply Allocation</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0A3124] border border-[#E5A93C]/30 text-[#E5A93C]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#041912] border-b border-[#E5A93C]/30 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider font-medium text-[#cadbd3] hover:text-[#E5A93C] py-2 border-b border-[#144936]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#041912] font-semibold text-xs uppercase tracking-wider shadow-lg"
              >
                <span>Request B2B Supply Allocation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
