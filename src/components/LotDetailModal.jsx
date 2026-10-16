import React from 'react';
import { X, ShieldCheck, CheckCircle2, MapPin, Scale, FileText, Send, Building } from 'lucide-react';

export default function LotDetailModal({ lot, onClose, onAddToBasket }) {
  if (!lot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-[#082D20] via-[#062319] to-[#020B07] border-2 border-[#E5A93C]/40 shadow-2xl p-5 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#03140E] text-[#cadbd3] hover:text-[#E5A93C] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#E5A93C]/40 shrink-0">
            <img src={lot.image} alt={lot.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase">
                {lot.badge}
              </span>
              <span className="text-xs text-[#E5A93C] font-mono font-semibold">
                {lot.id}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-white mt-1">
              {lot.title}
            </h3>
            <p className="text-xs text-[#cadbd3]/80">
              {lot.breed}
            </p>
          </div>
        </div>

        {/* Full Specifications Grid (DLiciousMEAT detailed spec sheet) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Live Weight Class</span>
            <strong className="text-[#E5A93C] font-bold text-sm">{lot.avgWeight}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Dentition Maturity</span>
            <strong className="text-white font-bold">{lot.dentition}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Lot Volume</span>
            <strong className="text-white font-bold">{lot.lotSize}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39] sm:col-span-2">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Pastoral Origin & Mandi</span>
            <strong className="text-white">{lot.origin}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Quarantine State</span>
            <strong className="text-emerald-400">{lot.quarantineStatus}</strong>
          </div>
        </div>

        {/* Regulatory & Health Dossier Proof */}
        <div className="p-4 rounded-2xl bg-[#041A12] border border-[#144936] space-y-2 text-xs">
          <div className="flex items-center gap-2 text-[#E5A93C] font-bold uppercase text-[11px]">
            <FileText className="w-4 h-4" />
            <span>Veterinary Health Clearance & Negative Policy Certificate</span>
          </div>
          <p className="text-[#cadbd3] leading-relaxed">
            {lot.spec}
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-[10px]">
            <span className="px-2.5 py-1 rounded-md bg-[#082D20] border border-[#164E39] text-white">
              ✓ 100% Mature Adult Only
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#082D20] border border-[#164E39] text-white">
              ✓ Zero Calves / Buffalo Kids
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#082D20] border border-[#164E39] text-white">
              ✓ Zero Cow Cattle (Delhi Law Compliant)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#082D20] border border-[#164E39] text-[#E5A93C]">
              ✓ Pre-Transit Anti-Mortem Inspection
            </span>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-[#cadbd3]">
            Destination: <strong className="text-white">{lot.dispatchGate}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onAddToBasket(lot);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)]"
            >
              Add to Allocation Basket
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
