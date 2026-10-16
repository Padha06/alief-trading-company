import React, { useState } from 'react';
import { ShieldCheck, AlertOctagon, CheckCircle2, XCircle, Scale, Stethoscope } from 'lucide-react';

export default function LivestockStandards({ onOpenInquiry }) {
  const [headCount, setHeadCount] = useState(100);
  const [avgWeight, setAvgWeight] = useState(420); // in kg

  // Estimated stats
  const totalLiveWeight = (headCount * avgWeight).toLocaleString();
  const estimatedDressedYield = Math.round(headCount * avgWeight * 0.52).toLocaleString();

  return (
    <section id="standards" className="py-24 bg-[#03140E] relative border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A3124] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Uncompromising Procurement Policy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            The Adult Buffalo-Only Mandate:{' '}
            <span className="gold-gradient-text block mt-1">
              Purely Bubalus Bubalis, Zero Exception
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#cadbd3] leading-relaxed">
            Our procurement criteria are strictly defined by regulatory mandate, ethical animal husbandry, and the demanding export specifications of industrial clients like <strong>Allana Pvt. Ltd.</strong>
          </p>
        </div>

        {/* The Two Distinct Pillars: What We Source vs. What We Never Source (With Real Verification Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Positive Specification (Mature Buffalo Only) with Real Profile Photo */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082D20] to-[#041A12] border-2 border-[#E5A93C]/40 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#E5A93C]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E5A93C] text-[#03140E] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    100% Approved Specification
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold">
                    Adult Water Buffaloes (*Bubalus bubalis*)
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#0A3124] text-[11px] font-bold text-[#E5A93C] border border-[#E5A93C]/30">
                ACTIVE
              </span>
            </div>

            {/* Embedded Prime Murrah Photo */}
            <div className="relative h-56 rounded-2xl overflow-hidden border border-[#E5A93C]/30 group">
              <img
                src="/images/prime-buffalo-profile.jpg"
                alt="Prime Adult Murrah Buffalo Profile showing curled horns and muscular build"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041A12] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs text-white">
                <span className="font-semibold drop-shadow">Murrah Breed Specimen Profile</span>
                <span className="px-2 py-0.5 rounded bg-[#E5A93C] text-[#03140E] font-bold text-[10px]">VERIFIED</span>
              </div>
            </div>

            <div className="space-y-3.5 text-sm text-[#cadbd3]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Strict Mature Dentition:</strong> Verified adult age via permanent incisor examination by certified veterinary inspectors prior to loading.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Prime Murrah & Riverine Breeds:</strong> High bone-to-muscle ratio, rich conformation, and optimal marbling suitable for export carabeef packaging.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Target Live Weight Range:</strong> Carefully sorted 380 kg to 540 kg mature buffaloes ensuring uniform throughput at industrial processing plants.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">100% Halal & Fit-for-Slaughter:</strong> Comprehensive ante-mortem health clearance and anti-stress resting protocols at MCD Ghazipur holding pens.
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Negative Specification (No Calves, No Kids, No Cow) with Real Dentition Verification Photo */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1C0F0B] via-[#120704] to-[#080302] border-2 border-red-500/30 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/90 text-white flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    Strict Negative Policy
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-red-400 font-semibold">
                    Absolute Zero Tolerance Protocol
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-950/80 text-[11px] font-bold text-red-300 border border-red-500/30">
                PROHIBITED
              </span>
            </div>

            {/* Embedded Dental Verification Inspection Photo */}
            <div className="relative h-56 rounded-2xl overflow-hidden border border-red-500/30 group">
              <img
                src="/images/dental-verification.jpg"
                alt="Veterinary dental age and health verification ensuring mature livestock only"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120704] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs text-white">
                <span className="font-semibold drop-shadow">Ante-Mortem Dentition Screening</span>
                <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">NO CALVES</span>
              </div>
            </div>

            <div className="space-y-3.5 text-sm text-[#e2c7c2]">
              <div className="flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">NO Calves / Buffalo Kids:</strong> We strictly reject any juvenile buffaloes, calves, or immature livestock. Every single animal must be fully grown and mature.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">NO Cow Cattle (*Bos indicus* / *Bos taurus*):</strong> We strictly observe all statutory prohibitions under Delhi animal protection laws. Zero cow, zero bullock, zero bovine cattle of cow lineage.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">No Emaciated or Unfit Animals:</strong> Animals showing lameness, pyrexia, or infectious indications are barred at the farm-gate before transit begins.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Rigorous Multi-Tier Verification:</strong> Double physical audits at village collection points and upon arrival at the Ghazipur facility gates.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive B2B Live Batch Calculator for Procurement Managers */}
        <div className="p-8 rounded-3xl bg-[#062319] border border-[#E5A93C]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                <Scale className="w-4 h-4" />
                Interactive Procurement Calculator
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Estimate Your Batch Throughput & Yield
              </h3>
              <p className="text-xs sm:text-sm text-[#cadbd3] leading-relaxed">
                Calculate estimated total live weight and dressed boneless carabeef yield based on standard Murrah adult buffalo metrics.
              </p>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#cadbd3] mb-1">
                    <span>Target Head Count:</span>
                    <span className="text-[#E5A93C] font-bold text-sm">{headCount} Heads</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={headCount}
                    onChange={(e) => setHeadCount(Number(e.target.value))}
                    className="w-full accent-[#E5A93C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#cadbd3]/60">
                    <span>20 heads</span>
                    <span>250 heads</span>
                    <span>500 heads</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#cadbd3] mb-1">
                    <span>Average Mature Live Weight:</span>
                    <span className="text-[#E5A93C] font-bold text-sm">{avgWeight} kg / head</span>
                  </div>
                  <input
                    type="range"
                    min="360"
                    max="520"
                    step="10"
                    value={avgWeight}
                    onChange={(e) => setAvgWeight(Number(e.target.value))}
                    className="w-full accent-[#E5A93C] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#cadbd3]/60">
                    <span>360 kg (Standard)</span>
                    <span>440 kg (Prime)</span>
                    <span>520 kg (Heavy)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Results Panel */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#03140E] p-6 rounded-2xl border border-[#164E39]">
              
              <div className="p-4 rounded-xl bg-[#082D20] border border-[#E5A93C]/20">
                <span className="text-[11px] uppercase tracking-wider text-[#cadbd3] block">
                  Total Live Sourcing Weight
                </span>
                <span className="font-serif text-3xl gold-gradient-text font-bold block mt-1">
                  {totalLiveWeight} <span className="text-sm text-white/80 font-sans">KG</span>
                </span>
                <span className="text-[10px] text-[#cadbd3]/70 block mt-1">
                  Approx. {(headCount * avgWeight / 1000).toFixed(1)} Metric Tonnes
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#082D20] border border-[#E5A93C]/20">
                <span className="text-[11px] uppercase tracking-wider text-[#cadbd3] block">
                  Est. Dressed Carcass Yield
                </span>
                <span className="font-serif text-3xl text-white font-bold block mt-1">
                  ~{estimatedDressedYield} <span className="text-sm text-[#E5A93C] font-sans">KG</span>
                </span>
                <span className="text-[10px] text-[#cadbd3]/70 block mt-1">
                  At ~52% dressing ratio
                </span>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_8px_25px_rgba(229,169,60,0.35)] transition-all"
                >
                  Inquire Batch Allocation for {headCount} Heads →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
