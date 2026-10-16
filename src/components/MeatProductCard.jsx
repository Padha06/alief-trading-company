import React, { useState } from 'react';
import { Heart, Plus, Check, Eye, ShieldCheck, Flame, Utensils } from 'lucide-react';

export default function MeatProductCard({
  product,
  onAddToBasket,
  isInBasket,
  isWishlisted,
  onToggleWishlist,
  onOpenDetails,
}) {
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]);

  return (
    <div className="rounded-2xl overflow-hidden bg-[#062319] border border-[#164E39] hover:border-[#E5A93C]/70 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1">
      
      {/* Product Image & Badges */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#03140E]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062319] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-extrabold uppercase shadow">
            {product.badge}
          </span>

          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? 'bg-red-500 text-white shadow-md'
                : 'bg-[#03140E]/80 backdrop-blur-md text-white/80 hover:text-red-400'
            }`}
            aria-label="Save to Wishlist"
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Bottom Tag */}
        <div className="absolute bottom-2 left-3 right-3 z-10 flex justify-between items-center text-[10px]">
          <span className="text-[#E5A93C] font-semibold bg-[#03140E]/80 px-2 py-0.5 rounded backdrop-blur-sm">
            {product.halalCert}
          </span>
          <span className="text-white font-mono bg-[#0A3124]/90 px-2 py-0.5 rounded border border-[#E5A93C]/30">
            ₹{product.pricePerKg} / kg
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          <div>
            <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-[#E5A93C] transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-[11px] text-[#E5A93C]/90 font-medium mt-0.5">
              {product.tagline}
            </p>
          </div>

          <p className="text-xs text-[#cadbd3]/80 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Culinary Pairings */}
          <div className="p-2 rounded-xl bg-[#03140E] border border-[#144936] flex items-start gap-1.5 text-[10px] text-[#cadbd3]">
            <Utensils className="w-3.5 h-3.5 text-[#E5A93C] shrink-0 mt-0.5" />
            <span className="truncate">
              <strong>Best For:</strong> {product.cookingStyle}
            </span>
          </div>

          {/* Weight Option Selector (DLiciousMEAT style) */}
          <div className="space-y-1 pt-1">
            <span className="text-[10px] uppercase tracking-wider text-[#cadbd3]/60 font-semibold block">
              Choose Pack Weight:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {product.weightOptions.slice(0, 4).map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setSelectedWeight(opt)}
                  className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all border text-left flex justify-between items-center ${
                    selectedWeight.label === opt.label
                      ? 'bg-[#0A3124] border-[#E5A93C] text-white shadow-sm'
                      : 'bg-[#03140E] border-[#144936] text-[#cadbd3]/70 hover:border-[#E5A93C]/40'
                  }`}
                >
                  <span className="truncate">{opt.label.split(' ')[0]}</span>
                  <span className="text-[#E5A93C] font-bold">₹{opt.price}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-[#144936] flex items-center gap-2">
          <button
            onClick={() => onOpenDetails(product)}
            className="p-2.5 rounded-xl bg-[#03140E] hover:bg-[#0A3124] border border-[#164E39] text-[#cadbd3] hover:text-[#E5A93C] transition-colors"
            aria-label="View Cut Details"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={() => onAddToBasket(product, selectedWeight)}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow ${
              isInBasket
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-gradient-to-r from-[#D4932B] to-[#E5A93C] hover:from-[#E5A93C] hover:to-[#F8D48D] text-[#03140E]'
            }`}
          >
            {isInBasket ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added • Add More (₹{selectedWeight.price})</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Basket • ₹{selectedWeight.price}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
