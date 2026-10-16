import React from 'react';
import { Snowflake, Thermometer, ShieldCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function StorageGuideSection() {
  const steps = [
    {
      icon: Thermometer,
      title: 'Chilled Storage (0°C - 4°C)',
      subtitle: 'For Immediate Cooking within 48h',
      desc: 'Keep the vacuum-sealed pack unopened in the coldest section of your refrigerator (meat chiller tray). Cook within 24 to 48 hours to enjoy maximum tenderness and succulence.',
      badge: 'Best Flavor',
    },
    {
      icon: Snowflake,
      title: 'Deep Freezing (-18°C)',
      subtitle: 'For Long-Term Freshness up to 6 Months',
      desc: 'Place the unopened, airtight food-grade vacuum bag directly into your deep freezer. The lack of air exposure prevents freezer burn and locks in all natural juices.',
      badge: 'Extended Storage',
    },
    {
      icon: Clock,
      title: 'Safe Gentle Thawing',
      subtitle: 'Never Thaw in Hot Water or Microwave',
      desc: 'Transfer the frozen pack from the freezer to the refrigerator overnight (10-12 hours). Slow gentle thawing preserves the cellular meat structure and moisture.',
      badge: 'Pro Chef Tip',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Prep Standard',
      subtitle: 'Sanitized Stainless Counter Protocol',
      desc: 'Pat dry with clean food paper before marinating. We prepare every order on sanitized antimicrobial cutting boards so your meat arrives completely clean and kitchen-ready.',
      badge: '100% Halal Certified',
    },
  ];

  return (
    <section id="storage-guide" className="py-16 bg-[#041A12] border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-10">
        
        {/* Header (DLiciousMEAT Storage Guide style) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-wider text-[#E5A93C]">
            <Snowflake className="w-3.5 h-3.5" />
            DLiciousMEAT Freshness Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Storage & Handling Guide for Fresh Meat
          </h2>
          <p className="text-xs sm:text-sm text-[#cadbd3]/80">
            Because our halal buffalo meat is 100% natural and never treated with chemical preservatives, following these cold-chain guidelines ensures pure flavor.
          </p>
        </div>

        {/* 4 Storage Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#062319] border border-[#164E39] hover:border-[#E5A93C]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] border border-[#E5A93C]/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#03140E] text-[10px] text-[#E5A93C] font-semibold border border-[#E5A93C]/20">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-white mb-1">
                    {s.title}
                  </h3>
                  <div className="text-[11px] text-[#E5A93C] font-semibold mb-2">
                    {s.subtitle}
                  </div>
                  <p className="text-xs text-[#cadbd3] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#144936] flex items-center gap-2 text-[10px] text-[#cadbd3]/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>FSSAI & Halal Compliant</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
