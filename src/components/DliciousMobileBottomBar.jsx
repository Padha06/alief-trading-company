import React from 'react';
import { Home, Layers, Scale, Truck, ShoppingBag } from 'lucide-react';

export default function DliciousMobileBottomBar({
  basketCount,
  onOpenBasket,
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe">
      <div className="absolute inset-0 -top-4 bg-gradient-to-t from-[#020B07] via-[#020B07]/95 to-transparent pointer-events-none" />

      <div className="relative mx-2 mb-2 rounded-2xl bg-[#062319]/95 backdrop-blur-xl border border-[#E5A93C]/35 shadow-[0_10px_35px_rgba(0,0,0,0.8)] px-1.5 py-1.5 flex items-center justify-around">
        
        {/* Home */}
        <a
          href="#"
          className="flex flex-col items-center justify-center py-1 px-2 text-[#cadbd3]/80 hover:text-[#E5A93C] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Home</span>
        </a>

        {/* Batches / Catalog */}
        <a
          href="#catalog"
          className="flex flex-col items-center justify-center py-1 px-2 text-[#cadbd3]/80 hover:text-[#E5A93C] transition-colors"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Batches</span>
        </a>

        {/* Center Floating Basket Button (DLiciousMEAT app style) */}
        <button
          onClick={onOpenBasket}
          className="relative -top-3 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#B37517] via-[#E5A93C] to-[#FFF2B2] text-[#03140E] shadow-[0_4px_20px_rgba(229,169,60,0.5)] border-2 border-[#03140E] active:scale-95 transition-transform"
          aria-label="View Allocation Basket"
        >
          <ShoppingBag className="w-5 h-5 font-bold" />
          {basketCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 rounded-full bg-red-600 border border-[#03140E] text-white text-[9px] font-extrabold flex items-center justify-center px-1">
              {basketCount}
            </span>
          )}
        </button>

        {/* Bulk Planner */}
        <a
          href="#bulk-planner"
          className="flex flex-col items-center justify-center py-1 px-2 text-[#cadbd3]/80 hover:text-[#E5A93C] transition-colors"
        >
          <Scale className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Bulk</span>
        </a>

        {/* Track Dispatch */}
        <a
          href="#track-dispatch"
          className="flex flex-col items-center justify-center py-1 px-2 text-[#cadbd3]/80 hover:text-[#E5A93C] transition-colors"
        >
          <Truck className="w-4 h-4" />
          <span className="text-[9px] font-medium uppercase tracking-wider mt-0.5">Track</span>
        </a>

      </div>
    </div>
  );
}
