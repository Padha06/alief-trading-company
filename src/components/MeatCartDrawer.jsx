import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ShieldCheck, Snowflake, MapPin } from 'lucide-react';

export default function MeatCartDrawer({
  isOpen,
  onClose,
  basket,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket,
}) {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('Immediate Express Slot (2-3 Hours)');

  if (!isOpen) return null;

  // Calculate totals
  const subtotal = basket.reduce((sum, item) => sum + (item.selectedWeight.price * item.quantity), 0);
  const totalWeightKg = basket.reduce((sum, item) => sum + (item.selectedWeight.value * item.quantity), 0);

  const handleCheckoutWhatsApp = () => {
    let msg = `*ALIEF (JAMSEE TRADING CO.) - FRESH MEAT ORDER*\n`;
    msg += `*A Unit of DLiciousMEAT | Supplier to Allana Pvt. Ltd.*\n`;
    msg += `------------------------------------\n`;
    msg += `*Customer:* ${customerName || 'Direct Customer'}\n`;
    msg += `*Address:* ${deliveryAddress || 'Standard Delivery'}\n`;
    msg += `*Slot:* ${deliverySlot}\n`;
    msg += `------------------------------------\n`;
    msg += `*ORDERED MEAT CUTS:*\n`;
    basket.forEach((item, idx) => {
      const lineTotal = item.selectedWeight.price * item.quantity;
      msg += `${idx + 1}. *${item.name}*\n`;
      msg += `   - Pack: ${item.selectedWeight.label} x ${item.quantity} Qty = ₹${lineTotal}\n`;
      msg += `   - Cut Type: ${item.tagline}\n`;
    });
    msg += `------------------------------------\n`;
    msg += `*TOTAL NET WEIGHT:* ${totalWeightKg.toFixed(1)} KG\n`;
    msg += `*TOTAL AMOUNT:* ₹${subtotal}\n`;
    msg += `*PACKAGING:* Sealed Vacuum Chilled Bag (0°C - 4°C)\n`;
    msg += `*COMPLIANCE:* 100% Halal Adult Buffalo Meat (No Calves, No Cow)\n\n`;
    msg += `Please confirm dispatch from Ghazipur MCD facility.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919711310319?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md h-full bg-gradient-to-b from-[#062319] to-[#020B07] border-l border-[#E5A93C]/30 shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Drawer Header (DLiciousMEAT cart header) */}
        <div className="p-4 sm:p-5 border-b border-[#144936] bg-[#03140E] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#E5A93C]" />
            <span className="font-serif text-xl text-white">Your Fresh Meat Basket</span>
            <span className="px-2 py-0.5 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-extrabold">
              {basket.length} Items
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

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {basket.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#0A3124] border border-[#164E39] flex items-center justify-center text-[#E5A93C]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg text-white">Your Basket is Empty</h4>
              <p className="text-xs text-[#cadbd3]/70 max-w-xs">
                Explore our fresh chilled boneless cubes, biryani cuts, fine keema, and nihari shank cuts.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#E5A93C] text-[#03140E] text-xs font-bold uppercase tracking-wider"
              >
                Shop Cuts Now
              </button>
            </div>
          ) : (
            basket.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight.label}`}
                className="p-3.5 rounded-xl bg-[#082D20] border border-[#164E39] space-y-2.5"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-start gap-2.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover border border-[#144936] shrink-0"
                    />
                    <div>
                      <h4 className="font-serif text-sm text-white font-semibold leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-[#E5A93C] font-semibold block mt-0.5">
                        Pack: {item.selectedWeight.label} (₹{item.selectedWeight.price})
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id, item.selectedWeight.label)}
                    className="text-red-400 hover:text-red-300 p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Quantity Stepper & Line Total */}
                <div className="flex items-center justify-between pt-2 border-t border-[#144936] text-xs">
                  <div className="flex items-center gap-2 bg-[#03140E] px-2 py-1 rounded-lg border border-[#164E39]">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.selectedWeight.label, Math.max(1, item.quantity - 1))}
                      className="text-[#E5A93C] hover:text-white p-0.5"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-white min-w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.selectedWeight.label, item.quantity + 1)}
                      className="text-[#E5A93C] hover:text-white p-0.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-mono font-bold text-sm text-white">
                    ₹{item.selectedWeight.price * item.quantity}
                  </span>
                </div>
              </div>
            ))
          )}

          {/* Customer Delivery Details in Cart */}
          {basket.length > 0 && (
            <div className="p-3.5 rounded-xl bg-[#03140E] border border-[#164E39] space-y-2.5 pt-3">
              <span className="text-[10px] uppercase tracking-wider text-[#E5A93C] font-bold block">
                Delivery Details
              </span>
              <input
                type="text"
                placeholder="Your Name (e.g. Tariq Khan)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#062319] border border-[#144936] text-white text-xs outline-none focus:border-[#E5A93C]"
              />
              <input
                type="text"
                placeholder="Delivery Address / Landmark (Delhi NCR / Ghazipur Pickup)"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#062319] border border-[#144936] text-white text-xs outline-none focus:border-[#E5A93C]"
              />
              <select
                value={deliverySlot}
                onChange={(e) => setDeliverySlot(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#062319] border border-[#144936] text-white text-xs outline-none focus:border-[#E5A93C]"
              >
                <option value="Express Chilled Slot (Same Day)">Express Chilled Slot (Same Day Delivery)</option>
                <option value="Morning Slot (08:00 AM - 11:00 AM)">Morning Slot (08:00 AM - 11:00 AM)</option>
                <option value="Evening Slot (04:00 PM - 07:00 PM)">Evening Slot (04:00 PM - 07:00 PM)</option>
                <option value="Direct Ghazipur MCD Complex Pickup">Direct Ghazipur MCD Complex Pickup</option>
              </select>
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {basket.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#144936] bg-[#03140E] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#cadbd3]">
                <span>Total Net Meat:</span>
                <strong className="text-white font-bold">{totalWeightKg.toFixed(1)} KG</strong>
              </div>
              <div className="flex justify-between text-[#cadbd3]">
                <span>Chilled Packaging & Ice Pack:</span>
                <span className="text-emerald-400 font-semibold">FREE (Food Grade)</span>
              </div>
              <div className="flex justify-between text-sm pt-1 border-t border-[#144936]">
                <span className="font-serif text-white">Estimated Subtotal:</span>
                <strong className="font-mono text-xl text-[#E5A93C] font-bold">₹{subtotal}</strong>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_25px_rgba(229,169,60,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Fresh Meat Order via WhatsApp</span>
            </button>

            <button
              onClick={onClearBasket}
              className="w-full text-center text-[10px] text-red-400 hover:text-red-300 py-1"
            >
              Clear Basket
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
