import React from 'react';
import { ShieldCheck, Heart, Plus, Check, Eye, Scale, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function LivestockCatalogGrid({
  lots,
  basket,
  onAddToBasket,
  wishlist,
  onToggleWishlist,
  onSelectLot,
}) {
  return (
    <section id="catalog" className="py-12 bg-[#041A12] relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-6">
        
        {/* Section Heading Bar (DLiciousMEAT shop section style) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#144936]">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Live Verified Batches
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Institutional Livestock Lots
            </h2>
          </div>
          <div className="text-xs text-[#cadbd3]/80">
            Showing <strong className="text-[#E5A93C]">{lots.length}</strong> available adult buffalo lots for Allana Pvt. Ltd. & export processors
          </div>
        </div>

        {/* Catalog Grid (2 columns on mobile, 3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {lots.map((lot) => {
            const inBasket = basket.some((item) => item.id === lot.id);
            const inWishlist = wishlist.includes(lot.id);

            return (
              <div
                key={lot.id}
                className="rounded-2xl overflow-hidden bg-[#062319] border border-[#164E39] hover:border-[#E5A93C]/60 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Image Pod */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#03140E]">
                  <img
                    src={lot.image}
                    alt={lot.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062319] via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-extrabold uppercase shadow">
                      {lot.badge}
                    </span>

                    {/* Wishlist Heart Toggle */}
                    <button
                      onClick={() => onToggleWishlist(lot.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        inWishlist
                          ? 'bg-red-500 text-white shadow-md'
                          : 'bg-[#03140E]/80 backdrop-blur-md text-white/80 hover:text-red-400'
                      }`}
                      aria-label="Save to Wishlist"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Bottom Lot ID Tag */}
                  <div className="absolute bottom-2 left-3 z-10 flex items-center gap-1.5 text-[10px] text-[#E5A93C] font-mono font-bold">
                    <span>{lot.id}</span>
                    <span className="text-[#cadbd3]/60">•</span>
                    <span className="text-white font-sans">{lot.lotSize}</span>
                  </div>
                </div>

                {/* Content Pod */}
                <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Breed Tag */}
                    <div className="text-[10px] uppercase tracking-wider text-[#cadbd3]/70 font-semibold">
                      {lot.breed}
                    </div>

                    {/* Title in DM Serif */}
                    <h3 className="font-serif text-lg sm:text-xl text-white mt-0.5 group-hover:text-[#E5A93C] transition-colors leading-snug">
                      {lot.title}
                    </h3>

                    {/* Key Specs Pills (DLiciousMEAT item specs style) */}
                    <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
                      <div className="p-2 rounded-lg bg-[#03140E] border border-[#144936]">
                        <span className="text-[9px] uppercase tracking-wider text-[#cadbd3]/60 block">
                          Avg Live Weight
                        </span>
                        <strong className="text-[#E5A93C] font-sans font-bold">
                          {lot.avgWeight}
                        </strong>
                      </div>

                      <div className="p-2 rounded-lg bg-[#03140E] border border-[#144936]">
                        <span className="text-[9px] uppercase tracking-wider text-[#cadbd3]/60 block">
                          Dentition Age
                        </span>
                        <strong className="text-white font-sans font-semibold truncate block">
                          {lot.dentition}
                        </strong>
                      </div>
                    </div>

                    {/* Veterinary & Compliance Status */}
                    <div className="mt-2.5 flex items-center gap-2 text-[10px] text-[#cadbd3]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{lot.vetStatus}</span>
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-[10px] text-[#cadbd3]/80">
                      <MapPin className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                      <span className="truncate">{lot.dispatchGate}</span>
                    </div>
                  </div>

                  {/* Actions Row (DLiciousMEAT add-to-cart style) */}
                  <div className="pt-3 border-t border-[#144936] flex items-center gap-2">
                    <button
                      onClick={() => onSelectLot(lot)}
                      className="px-3 py-2 rounded-xl bg-[#03140E] hover:bg-[#0A3124] border border-[#164E39] text-[#cadbd3] hover:text-[#E5A93C] text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Dossier</span>
                    </button>

                    <button
                      onClick={() => onAddToBasket(lot)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow ${
                        inBasket
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gradient-to-r from-[#D4932B] to-[#E5A93C] hover:from-[#E5A93C] hover:to-[#F8D48D] text-[#03140E]'
                      }`}
                    >
                      {inBasket ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Basket</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Allocation</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
