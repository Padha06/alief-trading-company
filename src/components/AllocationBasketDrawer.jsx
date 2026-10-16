import React from 'react';
import { X, Trash2, ShieldCheck, Scale, Send, Plus, Minus, ArrowRight, Building } from 'lucide-react';

export default function AllocationBasketDrawer({
  isOpen,
  onClose,
  basket,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket,
}) {
  if (!isOpen) return null;

  // Calculate totals
  const totalHeads = basket.reduce((sum, item) => sum + (item.heads || item.availableHeads || 50), 0);
  const totalEstimatedWeightKg = totalHeads * 450;
  const totalWeightTonnes = (totalEstimatedWeightKg / 1000).toFixed(1);
  const totalDressedYieldKg = Math.round(totalEstimatedWeightKg * 0.52).toLocaleString();

  const handleCheckoutWhatsApp = () => {
    let orderSummary = `*ALIEF / JAMSEE TRADING CO. - LIVESTOCK ALLOCATION REQUEST*\n`;
    orderSummary += `*Client / Institutional Buyer Requisition*\n`;
    orderSummary += `------------------------------------\n`;
    basket.forEach((item, idx) => {
      orderSummary += `${idx + 1}. *${item.title}* (${item.id})\n`;
      orderSummary += `   - Quantity: ${item.heads || item.availableHeads} Heads\n`;
      orderSummary += `   - Breed/Spec: ${item.breed}\n`;
      orderSummary += `   - Target Intake: ${item.dispatchGate}\n\n`;
    });
    orderSummary += `------------------------------------\n`;
    orderSummary += `*TOTAL ALLOCATION:* ${totalHeads} Heads (~${totalWeightTonnes} Metric Tonnes)\n`;
    orderSummary += `*EST. DRESSED CARCASS YIELD:* ~${totalDressedYieldKg} KG\n`;
    orderSummary += `*COMPLIANCE:* Strictly Adult Buffalo Only (No Calves, No Cow)\n`;
    orderSummary += `*FACILITY:* Ghazipur MCD Allana Supply Complex\n\n`;
    orderSummary += `Please confirm dispatch slot and commercial quotation.`;

    const encoded = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/919711310319?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md h-full bg-gradient-to-b from-[#062319] to-[#020B07] border-l border-[#E5A93C]/30 shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Drawer Header (DLiciousMEAT cart header style) */}
        <div className="p-4 sm:p-5 border-b border-[#144936] bg-[#03140E] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl text-white">Allocation Basket</span>
            <span className="px-2 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold">
              {basket.length} Lots
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#062319] text-[#cadbd3] hover:text-[#E5A93C] hover:bg-[#0A3124] transition-colors"
            aria-label="Close Basket"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {basket.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#0A3124] border border-[#164E39] flex items-center justify-center text-[#E5A93C]">
                <Scale className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg text-white">Your Basket is Empty</h4>
              <p className="text-xs text-[#cadbd3]/70 max-w-xs">
                Browse our live verified Murrah and pastoral buffalo lots and add batches to plan your institutional allocation.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#E5A93C] text-[#03140E] text-xs font-bold uppercase tracking-wider"
              >
                Browse Batches
              </button>
            </div>
          ) : (
            basket.map((item) => {
              const currentHeads = item.heads || item.availableHeads || 50;

              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#082D20] border border-[#164E39] space-y-2.5"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] text-[#E5A93C] font-mono font-bold block">
                        {item.id}
                      </span>
                      <h4 className="font-serif text-base text-white leading-tight">
                        {item.title}
                      </h4>
                      <div className="text-[10px] text-[#cadbd3]/70 mt-0.5">
                        {item.avgWeight} • {item.dentition}
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#144936] text-xs">
                    <span className="text-[11px] text-[#cadbd3]">Heads Required:</span>

                    <div className="flex items-center gap-2 bg-[#03140E] px-2 py-1 rounded-lg border border-[#164E39]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(10, currentHeads - 10))}
                        className="text-[#E5A93C] hover:text-white p-0.5"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-white min-w-8 text-center">
                        {currentHeads}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, currentHeads + 10)}
                        className="text-[#E5A93C] hover:text-white p-0.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Summary & WhatsApp Checkout (DLiciousMEAT checkout style) */}
        {basket.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#144936] bg-[#03140E] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#cadbd3]">
                <span>Total Requisition:</span>
                <strong className="text-white font-bold">{totalHeads} Heads</strong>
              </div>
              <div className="flex justify-between text-[#cadbd3]">
                <span>Estimated Live Weight:</span>
                <strong className="text-[#E5A93C] font-bold">~{totalWeightTonnes} Metric Tonnes</strong>
              </div>
              <div className="flex justify-between text-[#cadbd3]">
                <span>Est. Boneless Dressed Yield:</span>
                <strong className="text-white font-bold">~{totalDressedYieldKg} KG</strong>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-400 font-semibold pt-1">
                <span>Facility Intake:</span>
                <span>Ghazipur MCD (Opp. Masjid Allana)</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(229,169,60,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Batch Requisition via WhatsApp</span>
            </button>

            <button
              onClick={onClearBasket}
              className="w-full text-center text-[10px] text-red-400 hover:text-red-300 py-1"
            >
              Clear Allocation Basket
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
