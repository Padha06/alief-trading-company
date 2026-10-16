import React from 'react';
import { ShieldCheck, Award, CheckCircle, Snowflake, Utensils, Building2 } from 'lucide-react';

export default function TrustTicker() {
  const items = [
    { icon: Award, text: "APPROVED TIER-1 MEAT VENDOR TO ALLANA PVT. LTD." },
    { icon: ShieldCheck, text: "100% HALAL FRESH ADULT BUFFALO MEAT (CARABEEF)" },
    { icon: CheckCircle, text: "STRICT ZERO-CALF / ZERO-KID (NO VEAL) • ZERO COW BEEF POLICY" },
    { icon: Snowflake, text: "VACUUM SEALED FOOD-GRADE CHILLED PACKAGING (0°C TO 4°C)" },
    { icon: Utensils, text: "CUT FRESH TO ORDER ON SANITIZED ANTIMICROBIAL COUNTERS" },
    { icon: Building2, text: "PRIMARY PROCESSING BASE: OPP. MASJID ALLANA, GHAZIPUR MCD COMPLEX" },
    { icon: Award, text: "A PROUD UNIT OF DLICIOUSMEAT (DLICIOUSMEAT.IN)" },
    { icon: Building2, text: "CORPORATE REGISTERED OFFICE: 7524 QURESH NAGAR, SADAR BAZAR, DELHI" },
  ];

  return (
    <div className="relative py-3.5 bg-[#020B07] border-y border-[#E5A93C]/30 overflow-hidden shadow-inner">
      <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="inline-flex items-center gap-2.5 text-xs tracking-[0.18em] font-semibold">
              <Icon className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
              <span className="text-[#F9F8F4]">{item.text}</span>
              <span className="text-[#E5A93C]/40 mx-2">◆</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
