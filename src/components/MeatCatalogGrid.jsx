import React from 'react';
import MeatProductCard from './MeatProductCard';
import { Award, ShieldCheck, Flame, Scale, CheckCircle2 } from 'lucide-react';

export default function MeatCatalogGrid({
  products,
  activeCategory,
  onSelectCategory,
  basket,
  onAddToBasket,
  wishlist,
  onToggleWishlist,
  onOpenDetails,
}) {
  const categories = [
    { id: 'all', label: 'All Meat Cuts' },
    { id: 'boneless', label: 'Boneless Cubes (Boti)' },
    { id: 'biryani', label: 'Biryani Cuts' },
    { id: 'keema', label: 'Fresh Keema (Mince)' },
    { id: 'nihari', label: 'Nalli Nihari Shank' },
    { id: 'steaks', label: 'Steaks & Chops' },
    { id: 'export', label: 'Allana Export Blocks' },
  ];

  return (
    <section id="cuts-catalog" className="py-12 bg-[#041A12] relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-6">
        
        {/* Category Filter Pills (DLiciousMEAT category bar) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] border-[#E5A93C] shadow-md scale-[1.02]'
                    : 'bg-[#062319] hover:bg-[#0A3124] text-[#cadbd3] border-[#164E39]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Section Heading Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#144936]">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Farm-Fresh • Cut to Order • 100% Halal
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Fresh Buffalo Meat Cuts (Carabeef)
            </h2>
          </div>
          <div className="text-xs text-[#cadbd3]/80">
            Showing <strong className="text-[#E5A93C]">{products.length}</strong> cuts • Vacuum-sealed with ice-gel packs
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => {
            const isInBasket = basket.some((item) => item.id === product.id);
            const isWishlisted = wishlist.includes(product.id);

            return (
              <MeatProductCard
                key={product.id}
                product={product}
                isInBasket={isInBasket}
                isWishlisted={isWishlisted}
                onAddToBasket={onAddToBasket}
                onToggleWishlist={onToggleWishlist}
                onOpenDetails={onOpenDetails}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
