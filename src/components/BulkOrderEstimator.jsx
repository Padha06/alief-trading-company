import React, { useState } from 'react';
import { Scale, Truck, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export default function BulkOrderEstimator() {
  const [headCount, setHeadCount] = useState(150);
  const [avgWeight, setAvgWeight] = useState(450);

  const totalLiveWeightKg = headCount * avgWeight;
  const totalTonnes = (totalLiveWeightKg / 1000).toFixed(1);
  const estimatedDressedYieldKg = Math.round(totalLiveWeightKg * 0.52).toLocaleString();
  const trucksRequired = Math.ceil(headCount / 28); // ~28 heads per specialized transport truck

  const handleSendBulkQuote = () => {
    const text = encodeURIComponent(
      `ALIEF / JAMSEE TRADING CO. - Bulk Allocation Planner:\nTarget Quantity: ${headCount} Heads\nAverage Live Weight: ${avgWeight} kg\nTotal Estimated Tonnage: ~${totalTonnes} MT\nEst. Dressed Yield: ~${estimatedDressedYieldKg} KG\nTrucks Required: ~${trucksRequired} Vehicles\nIntake Hub: Ghazipur MCD Facility (Opp. Masjid Allana)\nPlease provide delivery slot and commercial quote.`
    );
    window.open(`https://wa.me/919711310319?text=${text}`, '_blank');
  };

  return (
    <section id="bulk-planner" className="py-16 bg-[#03140E] border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Header (DLiciousMEAT bulk order banner style) */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-wider text-[#E5A93C]">
            <Scale className="w-3.5 h-3.5" />
            Institutional Volume Planner
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Industrial Sourcing & Yield Estimator
          </h2>
          <p className="text-xs sm:text-sm text-[#cadbd3]/80">
            Engineered for meat plant managers and Allana Pvt. Ltd. processing teams to schedule monthly and weekly livestock requirements.
          </p>
        </div>

        {/* Interactive Estimator Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#062319] border-2 border-[#E5A93C]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-white">Required Adult Buffalo Heads:</span>
                  <span className="text-base font-serif font-bold text-[#E5A93C] bg-[#03140E] px-3 py-1 rounded-lg border border-[#E5A93C]/30">
                    {headCount} Heads
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={headCount}
                  onChange={(e) => setHeadCount(Number(e.target.value))}
                  className="w-full accent-[#E5A93C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#cadbd3]/60 mt-1">
                  <span>30 Heads (Single Truck)</span>
                  <span>500 Heads (Weekly Volume)</span>
                  <span>1,000 Heads (Monthly Contract)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-white">Average Live Weight Class:</span>
                  <span className="text-base font-serif font-bold text-[#E5A93C] bg-[#03140E] px-3 py-1 rounded-lg border border-[#E5A93C]/30">
                    {avgWeight} kg / head
                  </span>
                </div>
                <input
                  type="range"
                  min="380"
                  max="520"
                  step="10"
                  value={avgWeight}
                  onChange={(e) => setAvgWeight(Number(e.target.value))}
                  className="w-full accent-[#E5A93C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#cadbd3]/60 mt-1">
                  <span>380 kg (Standard)</span>
                  <span>450 kg (Prime Murrah)</span>
                  <span>520 kg (Heavy Export)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#03140E] border border-[#144936] text-xs text-[#cadbd3] space-y-1.5">
                <div className="flex items-center gap-2 text-[#E5A93C] font-semibold text-[11px] uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Compliance Guarantee</span>
                </div>
                <p className="text-[11px]">
                  All {headCount} heads will be 100% verified adult water buffaloes (*Bubalus bubalis*). Strictly zero calves, zero buffalo kids, and zero cow cattle. Accompanied by official veterinary ante-mortem transit dossiers.
                </p>
              </div>

            </div>

            {/* Live Results Pod */}
            <div className="lg:col-span-5 bg-[#03140E] p-6 rounded-2xl border border-[#164E39] space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#E5A93C] font-semibold block">
                Calculated Consignment Output
              </span>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#082D20] border border-[#E5A93C]/20">
                  <span className="text-[9px] uppercase tracking-wider text-[#cadbd3]/70 block">
                    Total Live Weight
                  </span>
                  <strong className="font-serif text-2xl text-white block mt-0.5">
                    ~{totalTonnes} <span className="text-xs text-[#E5A93C] font-sans">MT</span>
                  </strong>
                  <span className="text-[9px] text-[#cadbd3]/60">
                    ({(totalLiveWeightKg).toLocaleString()} KG)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#082D20] border border-[#E5A93C]/20">
                  <span className="text-[9px] uppercase tracking-wider text-[#cadbd3]/70 block">
                    Dressed Carcass
                  </span>
                  <strong className="font-serif text-2xl gold-gradient-text block mt-0.5">
                    ~{estimatedDressedYieldKg} <span className="text-xs text-white font-sans">KG</span>
                  </strong>
                  <span className="text-[9px] text-[#cadbd3]/60">
                    (At ~52% dressing ratio)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#082D20] border border-[#164E39]">
                  <span className="text-[9px] uppercase tracking-wider text-[#cadbd3]/70 block">
                    Fleet Requirement
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-white font-bold text-base">
                    <Truck className="w-4 h-4 text-[#E5A93C]" />
                    <span>~{trucksRequired} Trucks</span>
                  </div>
                  <span className="text-[9px] text-[#cadbd3]/60">Specialized Ventilated</span>
                </div>

                <div className="p-3 rounded-xl bg-[#082D20] border border-[#164E39]">
                  <span className="text-[9px] uppercase tracking-wider text-[#cadbd3]/70 block">
                    Lairage Rest Slot
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-white font-bold text-base">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>12-24 Hrs</span>
                  </div>
                  <span className="text-[9px] text-[#cadbd3]/60">Ghazipur MCD Pens</span>
                </div>
              </div>

              <button
                onClick={handleSendBulkQuote}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Lock In {headCount} Heads Schedule via WhatsApp</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
