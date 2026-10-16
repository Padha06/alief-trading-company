import React from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2, Factory, Scale, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenInquiry }) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 sm:pt-36 pb-12 sm:pb-20 overflow-hidden flex items-center bg-[#03140E]">
      {/* Background Ambience & Atmospheric Imagery */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity scale-105"
          style={{ backgroundImage: `url('/images/hero-buffalo.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03140E] via-[#03140E]/90 to-[#03140E]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-transparent to-[#03140E]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[600px] bg-gradient-to-b from-[#0F4733]/40 via-[#0A3124]/20 to-transparent blur-[80px] sm:blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-2 sm:right-24 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#E5A93C]/15 blur-[100px] sm:blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Top Credential Capsule */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 p-1 pr-3 rounded-full bg-[#0A3124]/90 border border-[#E5A93C]/40 backdrop-blur-md shadow-lg text-[10px] sm:text-xs">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E5A93C] text-[#03140E]">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 font-bold" />
              </span>
              <span className="uppercase tracking-wider font-semibold text-[#E5A93C]">
                Allana Pvt. Ltd. Vendor
              </span>
              <span className="text-[#cadbd3]/60 hidden xs:inline">•</span>
              <span className="text-[#cadbd3] font-medium hidden xs:inline">
                A Unit of DLiciousMEAT
              </span>
            </div>

            {/* Main Headline in DM Serif Display */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#F9F8F4] leading-[1.12] tracking-tight">
                The Gold Standard in{' '}
                <span className="gold-gradient-text block mt-0.5 sm:mt-1">
                  Institutional Buffalo
                </span>{' '}
                Livestock Procurement
              </h1>
              <p className="font-sans text-xs xs:text-sm sm:text-base text-[#cadbd3] max-w-2xl font-normal leading-relaxed">
                <strong>Jamsee Trading Company (Brand: ALIEF)</strong> is an approved Tier-1 supply partner to industrial agro-processing titans including <strong>Allana Pvt. Ltd.</strong> We specialize solely in strictly compliant, high-yield mature water buffaloes sourced across prime pastoral belts of Northern India.
              </p>
            </div>

            {/* Crucial Negative & Positive Mandate Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-start gap-2.5 p-2.5 sm:p-3.5 rounded-xl bg-[#082D20]/80 border border-[#164E39] shadow-sm backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#F8D48D]">
                    100% Mature Buffaloes Only
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#cadbd3] mt-0.5 leading-snug">
                    Prime Murrah & pastoral riverine breeds. Verified dentition age, optimal live weight, and peak health.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 sm:p-3.5 rounded-xl bg-[#082D20]/80 border border-[#E5A93C]/30 shadow-sm backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#E5A93C]">
                    Zero-Calf & Zero-Cow Policy
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#cadbd3] mt-0.5 leading-snug">
                    Strict non-inclusion of calves/kids. Strictly 100% compliant with Delhi & national animal welfare laws.
                  </div>
                </div>
              </div>
            </div>

            {/* Dual CTAs & Trust Badges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenInquiry}
                className="group flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#D4932B] via-[#E5A93C] to-[#F8D48D] text-[#03140E] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(229,169,60,0.3)] hover:shadow-[0_12px_40px_rgba(229,169,60,0.5)] active:scale-95 transition-all duration-300"
              >
                <span>Request Supply Allocation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#standards"
                className="flex items-center justify-center gap-1.5 px-5 py-3 sm:px-6 sm:py-4 rounded-xl bg-[#0A3124]/90 hover:bg-[#0D3D2C] border border-[#E5A93C]/40 text-[#cadbd3] hover:text-[#E5A93C] font-semibold text-xs sm:text-sm transition-all duration-300"
              >
                <span>Explore Sourcing Protocols</span>
                <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A93C]" />
              </a>
            </div>

            {/* Sourcing Hubs Verification Note */}
            <div className="pt-1 flex items-center gap-2 text-[11px] sm:text-xs text-[#cadbd3]/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="truncate">
                Hubs at <strong className="text-white">Ghazipur MCD Complex</strong> & <strong className="text-white">Sadar Bazar</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Real Generated Master Image */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B3B2B] via-[#062319] to-[#03140E] border border-[#E5A93C]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-3.5 sm:p-6 space-y-3.5 sm:space-y-4">
              
              {/* Photo Showcase Container */}
              <div className="relative h-56 xs:h-64 sm:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5A93C]/40 group shadow-inner">
                <img
                  src="/images/hero-buffalo.jpg"
                  alt="Majestic adult Indian Murrah water buffalo at golden hour"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#03140E]/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex justify-between items-center z-10">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#03140E]/85 backdrop-blur-md border border-[#E5A93C]/50 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#E5A93C]">
                    Murrah Breed
                  </span>
                  <div className="flex items-center gap-1.5 bg-[#0A3124]/90 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#E5A93C]/30 text-[9px] sm:text-[10px] text-[#cadbd3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>100% Halal Verified</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex justify-between items-end">
                  <div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E5A93C] font-semibold">
                      Species: Bubalus bubalis
                    </div>
                    <div className="font-serif text-base sm:text-lg text-white font-bold drop-shadow-md">
                      Prime Mature Specimen
                    </div>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#E5A93C] text-[#03140E] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow">
                    Export Grade
                  </span>
                </div>
              </div>

              {/* Real-Time Institutional Trust Cards */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#082D20]/90 border border-[#E5A93C]/25 shadow-md">
                  <div className="flex items-center gap-1.5 text-[#E5A93C]">
                    <Factory className="w-3.5 h-3.5" />
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold">Allana Pvt Ltd</span>
                  </div>
                  <div className="font-serif text-xl sm:text-2xl text-white mt-0.5">Tier-1</div>
                  <div className="text-[9px] sm:text-[10px] text-[#cadbd3]">Approved Vendor</div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#082D20]/90 border border-[#E5A93C]/25 shadow-md">
                  <div className="flex items-center gap-1.5 text-[#E5A93C]">
                    <Scale className="w-3.5 h-3.5" />
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold">Throughput</span>
                  </div>
                  <div className="font-serif text-xl sm:text-2xl text-white mt-0.5">50,000+</div>
                  <div className="text-[9px] sm:text-[10px] text-[#cadbd3]">Heads Annual</div>
                </div>
              </div>

              {/* Sub-Card: Link to DLiciousMEAT */}
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#07241A] to-[#0A3124] border border-[#E5A93C]/30 flex items-center justify-between gap-2">
                <div className="truncate">
                  <div className="text-[9px] uppercase tracking-widest text-[#E5A93C] font-semibold">
                    Synergy Ecosystem
                  </div>
                  <div className="text-xs font-bold text-white">
                    A Unit of DLiciousMEAT
                  </div>
                </div>
                <a
                  href="https://www.dliciousmeat.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#E5A93C]/20 hover:bg-[#E5A93C] text-[#E5A93C] hover:text-[#03140E] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all shrink-0 border border-[#E5A93C]/40"
                >
                  Visit Portal ↗
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
