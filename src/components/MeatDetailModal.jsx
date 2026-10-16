import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Utensils, Snowflake, Plus, Check, ShoppingBag } from 'lucide-react';

export default function MeatDetailModal({ product, onClose, onAddToBasket }) {
  if (!product) return null;

  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToBasket(product, selectedWeight);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

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
          <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[#E5A93C]/40 shrink-0 bg-[#03140E]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase">
                {product.badge}
              </span>
              <span className="text-xs text-[#E5A93C] font-mono font-semibold">
                {product.id}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-white mt-1">
              {product.name}
            </h3>
            <p className="text-xs text-[#cadbd3]/80">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#cadbd3] leading-relaxed">
          {product.description}
        </p>

        {/* Cut Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Lean vs Fat Ratio</span>
            <strong className="text-[#E5A93C] font-bold">{product.fatContent}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Halal Verification</span>
            <strong className="text-emerald-400 font-bold">{product.halalCert}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Storage Standard</span>
            <strong className="text-white truncate block">{product.storageTemp}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39] sm:col-span-2">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Recommended Recipes</span>
            <strong className="text-white">{product.cookingStyle}</strong>
          </div>

          <div className="p-3 rounded-xl bg-[#03140E] border border-[#164E39]">
            <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Allana Export Tier</span>
            <strong className="text-[#E5A93C]">{product.allanaGrade}</strong>
          </div>
        </div>

        {/* Weight Selector */}
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-wider text-[#cadbd3] font-semibold">
            Select Your Package Weight:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {product.weightOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelectedWeight(opt)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedWeight.label === opt.label
                    ? 'bg-[#0A3124] border-[#E5A93C] text-white shadow-md'
                    : 'bg-[#03140E] border-[#164E39] text-[#cadbd3]/70 hover:border-[#E5A93C]/40'
                }`}
              >
                <div className="text-[11px] font-bold truncate">{opt.label}</div>
                <div className="text-xs font-mono text-[#E5A93C] font-bold mt-0.5">₹{opt.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Regulatory & Negative Policy Statement */}
        <div className="p-3.5 rounded-xl bg-[#03140E] border border-[#144936] text-[11px] text-[#cadbd3] space-y-1">
          <div className="flex items-center gap-2 text-[#E5A93C] font-semibold uppercase text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Authenticity & Legal Compliance Guarantee</span>
          </div>
          <p>
            100% natural adult water buffalo meat (*Bubalus bubalis*). Strictly zero veal/calves/buffalo kids meat. Strictly zero cow beef. Sourced, carved, and packed under MCD Ghazipur veterinary inspection.
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-sm font-serif text-white">
            Selected Price: <strong className="font-mono text-xl text-[#E5A93C] font-bold">₹{selectedWeight.price}</strong>
          </div>

          <button
            onClick={handleAdd}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] hover:from-[#E5A93C] hover:to-[#F8D48D]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Basket!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add {selectedWeight.label.split(' ')[0]} to Basket</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
