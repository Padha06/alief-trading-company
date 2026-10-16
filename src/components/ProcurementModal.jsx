import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import AliefLogo from './AliefLogo';

export default function ProcurementModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '100 heads',
    urgency: 'Within 7 Days',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `ALIEF / JAMSEE TRADING CO. - Instant Supply Request:\nRepresentative: ${formData.name}\nContact: ${formData.phone}\nQuantity: ${formData.quantity}\nTimeline: ${formData.urgency}\nNotes: ${formData.notes}`
    );
    window.open(`https://wa.me/919711310319?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#082D20] via-[#062319] to-[#03140E] border-2 border-[#E5A93C]/50 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-4 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-full bg-[#0A3124] text-[#E5A93C] hover:bg-[#E5A93C] hover:text-[#03140E] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 pr-8">
          <AliefLogo variant="mark-only" />
          <div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E5A93C] font-semibold">
              Official Allocation Desk
            </div>
            <h3 className="font-serif text-lg sm:text-2xl text-white">
              Request Buffalo Allocation
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#E5A93C] mx-auto" />
            <h4 className="font-serif text-lg sm:text-xl text-white">Allocation Request Routed</h4>
            <p className="text-xs text-[#cadbd3]">
              Your inquiry has been forwarded to our Ghazipur dispatch desk. You can also call us directly at <strong>+91 9711310319</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#E5A93C] text-[#03140E] text-xs font-bold uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#041A12] border border-[#164E39] text-[10px] sm:text-[11px] text-[#cadbd3] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E5A93C] shrink-0" />
              <span>Strict adult buffalo policy (Bubalus bubalis). No calves/kids. No cows.</span>
            </div>

            <div>
              <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-semibold">
                Your Name & Company
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Export Buyer / Meat Plant"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#03140E] border border-[#164E39] text-white text-xs outline-none focus:border-[#E5A93C]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-semibold">
                  Direct Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#03140E] border border-[#164E39] text-white text-xs outline-none focus:border-[#E5A93C]"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-semibold">
                  Required Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#03140E] border border-[#164E39] text-white text-xs outline-none focus:border-[#E5A93C]"
                >
                  <option value="50 heads">50 Heads (Initial Batch)</option>
                  <option value="100 heads">100 Heads (Standard)</option>
                  <option value="250 heads">250 Heads (Export Load)</option>
                  <option value="500+ heads">500+ Heads (Contract)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-semibold">
                Special Specifications / Notes
              </label>
              <textarea
                rows={2}
                placeholder="Target date or destination parameters..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#03140E] border border-[#164E39] text-white text-xs outline-none focus:border-[#E5A93C]"
              ></textarea>
            </div>

            <div className="pt-1 sm:pt-2 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5">
              <a
                href="tel:+919711310319"
                className="flex items-center justify-center gap-1.5 text-xs text-[#E5A93C] hover:underline py-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: 9711310319</span>
              </a>

              <button
                type="submit"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Confirm Inquiry</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
