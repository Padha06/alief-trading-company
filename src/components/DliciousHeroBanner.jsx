import React from 'react';
import { ShieldCheck, Award, ArrowRight, Zap, CheckCircle2, Factory, Scale } from 'lucide-react';

export default function DliciousHeroBanner({ onOpenInquiry }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-8 bg-gradient-to-b from-[#03140E] via-[#062319] to-[#041A12] border-b border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Main Promo Billboard Card (DLiciousMEAT app hero style) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#093525] via-[#062319] to-[#020B07] border-2 border-[#E5A93C]/40 shadow-[0_15px_50px_rgba(0,0,0,0.7)] p-4 sm:p-10">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#E5A93C]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow">
                  <Award className="w-3.5 h-3.5" />
                  Official Vendor to Allana Pvt. Ltd.
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#03140E]/80 border border-[#E5A93C]/40 text-[#E5A93C] text-[10px] font-semibold">
                  <Zap className="w-3 h-3" />
                  Today's Ghazipur Intake Ready
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-white leading-[1.15]">
                Premium Institutional{' '}
                <span className="gold-gradient-text block">
                  Adult Buffalo Procurement
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-[#cadbd3] leading-relaxed max-w-xl">
                Precision B2B livestock sourcing for industrial export plants. We supply strictly certified adult Murrah water buffaloes directly to <strong>Allana Pvt. Ltd.</strong> at the MCD Ghazipur modern slaughterhouse complex.
              </p>

              {/* Crucial Negative Policy Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#03140E] border border-[#164E39] text-[#cadbd3]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>100% Mature Adult Only</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#03140E] border border-red-500/30 text-red-300">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Strictly No Calves / Kids</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#03140E] border border-red-500/30 text-red-300">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Strictly No Cow Cattle</span>
                </span>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#catalog"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(229,169,60,0.4)] transition-all flex items-center gap-2"
                >
                  <span>Browse Live Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenInquiry}
                  className="px-5 py-3 rounded-xl bg-[#03140E] hover:bg-[#0A3124] border border-[#E5A93C]/40 text-[#cadbd3] hover:text-[#E5A93C] font-semibold text-xs transition-colors"
                >
                  Instant B2B Quote
                </button>
              </div>

            </div>

            {/* Right Featured Lot Card (DLiciousMEAT featured item style) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E5A93C]/40 bg-[#03140E] shadow-2xl group">
                <div className="relative h-56 sm:h-64 w-full">
                  <img
                    src="/images/hero-buffalo.jpg"
                    alt="Prime Murrah Buffalo Lot"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase">
                      Featured Lot #ALF-101
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#03140E]/80 backdrop-blur-md text-[#cadbd3] border border-[#E5A93C]/30 text-[10px]">
                      50 Heads Available
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#E5A93C] font-semibold">
                        Murrah Prime Breed
                      </div>
                      <div className="font-serif text-lg text-white font-bold">
                        Avg. 460 kg Live Weight
                      </div>
                    </div>
                    <a
                      href="#catalog"
                      className="px-3 py-1.5 rounded-lg bg-[#0A3124] border border-[#E5A93C]/50 text-[#E5A93C] text-xs font-bold hover:bg-[#E5A93C] hover:text-[#03140E] transition-all"
                    >
                      View Specs →
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-[#062319] border-t border-[#164E39] grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div>
                    <span className="text-[#cadbd3]/60 block">Dressing Yield</span>
                    <strong className="text-white">~52% Export Grade</strong>
                  </div>
                  <div>
                    <span className="text-[#cadbd3]/60 block">Dentition</span>
                    <strong className="text-[#E5A93C]">Verified Adult</strong>
                  </div>
                  <div>
                    <span className="text-[#cadbd3]/60 block">Facility</span>
                    <strong className="text-white">Ghazipur MCD</strong>
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
