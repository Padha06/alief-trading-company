import React from 'react';
import { ShieldCheck, Award, CheckCircle, Building2, Truck, Sparkles } from 'lucide-react';

export default function TrustTicker() {
  const items = [
    { icon: Award, text: "APPROVED TIER-1 LIVESTOCK VENDOR TO ALLANA PVT. LTD." },
    { icon: Sparkles, text: "A UNIT OF DLICIOUSMEAT (DLICIOUSMEAT.IN)" },
    { icon: ShieldCheck, text: "100% ADULT WATER BUFFALO SPECIFICATION (BUBALUS BUBALIS)" },
    { icon: CheckCircle, text: "STRICT NEGATIVE PROTOCOL: ZERO CALVES • ZERO BUFFALO KIDS" },
    { icon: ShieldCheck, text: "100% LEGAL COMPLIANCE: ZERO COW CATTLE" },
    { icon: Building2, text: "OPERATIONAL FACILITY: OPP. MASJID ALLANA, GHAZIPUR MCD SLAUGHTER HOUSE" },
    { icon: Building2, text: "CORPORATE HEAD OFFICE: 7524 QURESH NAGAR, SADAR BAZAR, DELHI" },
    { icon: Truck, text: "CLIMATE-CONTROLLED BIOMONITORED HUMANE LIVESTOCK TRANSIT" },
  ];

  return (
    <div className="relative py-4 bg-[#020E09] border-y border-[#E5A93C]/30 overflow-hidden shadow-inner">
      <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="inline-flex items-center gap-3 text-xs tracking-[0.2em] font-semibold">
              <Icon className="w-4 h-4 text-[#E5A93C] shrink-0" />
              <span className="text-[#F9F8F4]">{item.text}</span>
              <span className="text-[#E5A93C]/40 mx-2">◆</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
