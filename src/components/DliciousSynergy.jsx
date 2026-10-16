import React from 'react';
import { ExternalLink, ShoppingBag, ShieldCheck, Snowflake, Award } from 'lucide-react';

export default function DliciousSynergy() {
  return (
    <section id="dlicious-synergy" className="py-24 bg-[#03140E] relative border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#093525] via-[#062319] to-[#020E09] border-2 border-[#E5A93C]/40 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03140E] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-wider text-[#E5A93C]">
                <Award className="w-3.5 h-3.5" />
                Group Ecosystem & Synergy
              </div>

              <div className="space-y-2">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#cadbd3]">
                  A Proud Unit Of
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white">
                  DLiciousMEAT Ecosystem
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#cadbd3] leading-relaxed">
                Jamsee Trading Company (ALIEF) forms the institutional backbone of the <strong>DLiciousMEAT</strong> corporate family. While Alief manages large-scale upstream livestock procurement and supplies industrial behemoths like Allana Pvt. Ltd., <strong>DLiciousMEAT</strong> bridges this expertise to modern consumers with 100% halal, hygienic, antibiotic-free cold-chain meat delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#041A12] border border-[#164E39]">
                  <Snowflake className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase font-semibold text-white">Cold-Chain Protocol</div>
                    <div className="text-[11px] text-[#cadbd3]">Sanitized cut-to-order packaging and rapid chill technology.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#041A12] border border-[#164E39]">
                  <ShieldCheck className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase font-semibold text-white">FSSAI & Halal Certified</div>
                    <div className="text-[11px] text-[#cadbd3]">Full regulatory compliance across both retail and B2B streams.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.dliciousmeat.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E5A93C] hover:bg-[#F8D48D] text-[#03140E] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore DLiciousMEAT Retail Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Graphic Pod: Real Photo of State-of-the-Art Cold-Chain Room */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#E5A93C]/40 group shadow-xl">
                <img
                  src="/images/cold-chain-room.jpg"
                  alt="State-of-the-Art Cold-Chain Retail Preparation Room"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020E09] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs text-white">
                  <span className="font-semibold drop-shadow">Hygienic Retail Packaging Center</span>
                  <span className="px-2 py-0.5 rounded bg-[#E5A93C] text-[#03140E] font-bold text-[10px]">DLICIOUSMEAT.IN</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#03140E]/80 border border-[#164E39] text-center text-xs text-[#cadbd3]">
                Official Retail Delivery Portal: <a href="https://www.dliciousmeat.in" target="_blank" rel="noopener noreferrer" className="text-[#E5A93C] underline hover:text-white font-semibold">www.dliciousmeat.in</a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
