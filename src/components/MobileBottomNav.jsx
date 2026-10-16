import React, { useState, useEffect } from 'react';
import { Home, ShieldCheck, Factory, MapPin, Send, Phone, MessageSquare } from 'lucide-react';

export default function MobileBottomNav({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const standards = document.getElementById('standards')?.offsetTop || 0;
      const allana = document.getElementById('allana-partner')?.offsetTop || 0;
      const locations = document.getElementById('locations')?.offsetTop || 0;

      if (scrollPos >= locations) {
        setActiveTab('locations');
      } else if (scrollPos >= allana) {
        setActiveTab('allana');
      } else if (scrollPos >= standards) {
        setActiveTab('standards');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe">
      {/* Ambient shadow gradient */}
      <div className="absolute inset-0 -top-4 bg-gradient-to-t from-[#020B07] via-[#020B07]/90 to-transparent pointer-events-none" />

      {/* Glassmorphic Dock Container */}
      <div className="relative mx-3 mb-2.5 rounded-2xl bg-[#062319]/95 backdrop-blur-xl border border-[#E5A93C]/35 shadow-[0_10px_35px_rgba(0,0,0,0.8)] px-2 py-1.5 flex items-center justify-around">
        
        {/* Home */}
        <a
          href="#"
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === 'home'
              ? 'text-[#E5A93C] bg-[#0A3124] border border-[#E5A93C]/30'
              : 'text-[#cadbd3]/75 hover:text-[#E5A93C]'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Home</span>
        </a>

        {/* Standards */}
        <a
          href="#standards"
          onClick={() => setActiveTab('standards')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'standards'
              ? 'text-[#E5A93C] bg-[#0A3124] border border-[#E5A93C]/30'
              : 'text-[#cadbd3]/75 hover:text-[#E5A93C]'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Specs</span>
        </a>

        {/* Center Primary Action: Inquiry Button */}
        <button
          onClick={onOpenInquiry}
          className="relative -top-3 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#B37517] via-[#E5A93C] to-[#FFF2B2] text-[#03140E] shadow-[0_4px_20px_rgba(229,169,60,0.5)] border-2 border-[#03140E] active:scale-95 transition-transform"
          aria-label="Request Supply Allocation"
        >
          <MessageSquare className="w-5 h-5 font-bold" />
        </button>

        {/* Allana Partner */}
        <a
          href="#allana-partner"
          onClick={() => setActiveTab('allana')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'allana'
              ? 'text-[#E5A93C] bg-[#0A3124] border border-[#E5A93C]/30'
              : 'text-[#cadbd3]/75 hover:text-[#E5A93C]'
          }`}
        >
          <Factory className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Allana</span>
        </a>

        {/* Locations */}
        <a
          href="#locations"
          onClick={() => setActiveTab('locations')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            activeTab === 'locations'
              ? 'text-[#E5A93C] bg-[#0A3124] border border-[#E5A93C]/30'
              : 'text-[#cadbd3]/75 hover:text-[#E5A93C]'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Hubs</span>
        </a>

      </div>
    </div>
  );
}
