import React from 'react';
import { History, Award, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import AliefLogo from './AliefLogo';

export default function AboutSection({ onOpenInquiry }) {
  return (
    <section id="about" className="py-24 bg-[#041912] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5A93C]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0A3124]/40 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/30 text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
            <History className="w-3.5 h-3.5" />
            Institutional Pedigree & Heritage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Rooted in Delhi's Historic Trade Heartland,{' '}
            <span className="gold-gradient-text block mt-1">
              Engineered for Global Export Standards
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#cadbd3] leading-relaxed">
            From our founding roots in <strong>Quresh Nagar, Sadar Bazar</strong> to our modern procurement facility directly opposite <strong>Masjid Allana at the Ghazipur MCD complex</strong>, Jamsee Trading Company under the brand <strong>ALIEF</strong> stands as a paragon of disciplined livestock commerce.
          </p>
        </div>

        {/* Pastoral Sourcing Feature Banner with Real Photo */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A93C]/30 shadow-2xl group">
          <div className="relative h-72 sm:h-96 w-full">
            <img
              src="/images/pastoral-ranch.jpg"
              alt="Pastoral ranch and verified sourcing belt across Northern India"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03140E]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 z-10">
              <div className="max-w-xl space-y-1">
                <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase tracking-wider">
                  Pastoral Sourcing Tracts
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white drop-shadow-md">
                  Northern India's Prime Pastoral Belts
                </h3>
                <p className="text-xs sm:text-sm text-[#cadbd3] drop-shadow">
                  Direct farm-gate sourcing across vetted breeding tracts in Haryana, Western UP, and Punjab, guaranteeing ethical grazing and disease-free mature buffalo herds.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-[#03140E]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E5A93C]/40 text-xs text-[#E5A93C] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Ethical Grazing Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Story & Corporate Governance Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: The Philosophy of 'ALIEF' & Real Boardroom Emblem */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082D20] via-[#062319] to-[#03140E] border-2 border-[#E5A93C]/35 shadow-xl relative overflow-hidden space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-4 border-b border-[#E5A93C]/20">
                {/* Photo: Real Boardroom Emblem */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#E5A93C] shadow-lg shrink-0">
                  <img
                    src="/images/boardroom-emblem.jpg"
                    alt="Alief corporate boardroom embossed emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    The Meaning Behind 'ALIEF' (الف)
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold">
                    First In Rank • Upright Integrity • Absolute Truth
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#cadbd3] leading-relaxed">
                The letter <strong>Alif (الف)</strong> is the foundational origin of the alphabet — completely vertical, upright, and unwavering. In our trade, it signifies our pledge of total transparency, veterinary compliance, and top-tier standing in livestock sourcing.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#cadbd3]">
                    <strong className="text-white">Generational Mastery:</strong> Decades of hands-on livestock appraisal across Haryana, Punjab, and Uttar Pradesh pastoral clusters.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#cadbd3]">
                    <strong className="text-white">Direct Industrial Alignment:</strong> Supplying the high-volume requirements of <strong>Allana Pvt. Ltd.</strong> with zero supply latency.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#cadbd3]">
                    <strong className="text-white">Complete Group Synergy:</strong> Backed by <strong>DLiciousMEAT</strong> to guarantee sanitary farm-to-table hygiene across consumer and B2B streams.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Operational Metrics */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl bg-[#062319]/90 border border-[#164E39] hover:border-[#E5A93C]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] mb-4 border border-[#E5A93C]/30">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl text-white">Tier-1</div>
              <div className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold mt-1">
                Allana Approved Vendor
              </div>
              <p className="text-xs text-[#cadbd3] mt-2 leading-relaxed">
                Seamless daily intake and pre-inspection protocols tailored specifically for Allana's modern processing standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#062319]/90 border border-[#164E39] hover:border-[#E5A93C]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] mb-4 border border-[#E5A93C]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl text-white">100%</div>
              <div className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold mt-1">
                Adult Buffalo Focus
              </div>
              <p className="text-xs text-[#cadbd3] mt-2 leading-relaxed">
                Zero calves, zero young kids, zero cow cattle. Strictly compliant with MCD Delhi and APEDA regulations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#062319]/90 border border-[#164E39] hover:border-[#E5A93C]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] mb-4 border border-[#E5A93C]/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl text-white">2 Prime</div>
              <div className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold mt-1">
                Strategic Delhi Hubs
              </div>
              <p className="text-xs text-[#cadbd3] mt-2 leading-relaxed">
                Central corporate headquarters at Sadar Bazar with real-time dispatch office at Ghazipur MCD complex.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#062319]/90 border border-[#164E39] hover:border-[#E5A93C]/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] mb-4 border border-[#E5A93C]/30">
                <History className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl text-white">3+ Decades</div>
              <div className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold mt-1">
                Trade Longevity
              </div>
              <p className="text-xs text-[#cadbd3] mt-2 leading-relaxed">
                Deep, multi-generational relationships with verified pastoralists, village mandis, and veterinary boards.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
