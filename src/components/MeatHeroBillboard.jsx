import React from 'react';
import { ShieldCheck, Award, ArrowRight, Snowflake, CheckCircle2, Utensils, Scale, Sparkles } from 'lucide-react';

export default function MeatHeroBillboard({ onOpenInquiry }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 bg-gradient-to-b from-[#03140E] via-[#062319] to-[#041A12] border-b border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Main Billboard Card (DLiciousMEAT app hero style) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#093525] via-[#062319] to-[#020B07] border-2 border-[#E5A93C]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-5 sm:p-12">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow">
                  <Award className="w-3.5 h-3.5" />
                  Official Meat Vendor to Allana Pvt. Ltd.
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#03140E]/80 border border-[#E5A93C]/40 text-[#E5A93C] text-[10px] font-semibold">
                  <Snowflake className="w-3.5 h-3.5" />
                  Chilled at 0°C to 4°C • Never Open-Air Display
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12]">
                  Fresh Halal Adult Buffalo Meat{' '}
                  <span className="gold-gradient-text block mt-1">
                    Trimmed Fresh to Order
                  </span>
                </h1>
                <p className="text-xs sm:text-base text-[#cadbd3] leading-relaxed pt-1">
                  <strong>Jamsee Trading Company (Brand: ALIEF)</strong> delivers farm-fresh, sanitized, premium buffalo meat cuts (carabeef). We supply industrial export blocks directly to <strong>Allana Pvt. Ltd.</strong> and custom-portion fresh biryani cuts, boneless cubes, and fine keema as <strong>A Unit of DLiciousMEAT</strong>.
                </p>
              </div>

              {/* Crucial Negative & Positive Mandate Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-[#03140E] border border-[#164E39] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] text-white font-medium">100% Adult Buffalo Only</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#03140E] border border-red-500/30 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span>
                  <span className="text-[11px] text-red-300 font-medium">Zero Calves / Kids (No Veal)</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#03140E] border border-red-500/30 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span>
                  <span className="text-[11px] text-red-300 font-medium">Zero Cow Beef (100% Compliant)</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#cuts-catalog"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4932B] via-[#E5A93C] to-[#F8D48D] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(229,169,60,0.4)] transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Shop Fresh Meat Cuts</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#bulk-estimator"
                  className="px-5 py-3.5 rounded-xl bg-[#03140E] hover:bg-[#0A3124] border border-[#E5A93C]/40 text-[#cadbd3] hover:text-[#E5A93C] font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <Scale className="w-4 h-4 text-[#E5A93C]" />
                  <span>Party & Bulk Order Calculator</span>
                </a>
              </div>

            </div>

            {/* Right Culinary Meat Display Card (DLiciousMEAT featured item style) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E5A93C]/40 bg-[#03140E] shadow-2xl group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80"
                    alt="Fresh Raw Halal Buffalo Meat Cuts"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/20 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase shadow">
                      Daily Fresh Slicing
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#03140E]/85 backdrop-blur-md border border-[#E5A93C]/30 text-white text-[10px] font-mono">
                      APEDA Ghazipur Base
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-between items-end">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#E5A93C] font-semibold">
                        Signature Cut
                      </div>
                      <div className="font-serif text-xl text-white font-bold">
                        Prime Boneless Boti
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-[#E5A93C] text-[#03140E] text-xs font-extrabold uppercase shadow">
                      ₹380 / KG
                    </span>
                  </div>
                </div>

                {/* Hygiene & Storage Pill Strip */}
                <div className="p-3 bg-[#062319] border-t border-[#164E39] grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div>
                    <span className="text-[#cadbd3]/60 block">Hygiene Counter</span>
                    <strong className="text-white">Sanitized Stainless</strong>
                  </div>
                  <div>
                    <span className="text-[#cadbd3]/60 block">Packaging</span>
                    <strong className="text-[#E5A93C]">Vacuum Sealed</strong>
                  </div>
                  <div>
                    <span className="text-[#cadbd3]/60 block">Delivery</span>
                    <strong className="text-emerald-400">Cold-Chain Insulated</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
