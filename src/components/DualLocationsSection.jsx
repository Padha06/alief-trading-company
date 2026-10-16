import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function DualLocationsSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    headCount: '100 heads',
    destination: 'MCD Ghazipur Facility',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp direct link generator
    const text = encodeURIComponent(
      `Hello Jamsee Trading Co. (ALIEF),\nI would like to inquire about Buffalo Livestock Procurement:\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nQuantity: ${formData.headCount}\nFacility: ${formData.destination}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/919711310319?text=${text}`, '_blank');
  };

  return (
    <section id="locations" className="py-24 bg-[#03140E] relative border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
            <MapPin className="w-3.5 h-3.5" />
            Verified Operational Footprint
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Dual Operational Headquarters &{' '}
            <span className="gold-gradient-text block mt-1">
              Procurement Desk
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#cadbd3] leading-relaxed">
            Strategically located at the intersection of Delhi's historic meat trade epicenter and the capital's modern automated slaughterhouse complex.
          </p>
        </div>

        {/* Real Operational Facility Office Banner */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A93C]/35 shadow-2xl group">
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src="/images/ghazipur-office.jpg"
              alt="Ghazipur MCD Facility Office Exterior"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 z-10">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase tracking-wider">
                  Operational Facility Gate
                </span>
                <h3 className="font-serif text-2xl text-white mt-1 drop-shadow-md">
                  Ghazipur MCD Slaughterhouse Complex
                </h3>
                <p className="text-xs text-[#cadbd3] drop-shadow">
                  Directly opposite Masjid Allana, handling daily intake and live weight inspections for Allana Pvt. Ltd. consignments.
                </p>
              </div>
              <a
                href="tel:+919711310319"
                className="px-4 py-2 rounded-xl bg-[#082D20]/90 backdrop-blur-md border border-[#E5A93C]/40 text-xs font-bold text-[#E5A93C] hover:bg-[#E5A93C] hover:text-[#03140E] transition-all"
              >
                Call Ghazipur Desk: 9711310319
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Two Verified Hubs from Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Hub 1: Operational Base (Ghazipur MCD) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#082D20] via-[#062319] to-[#041A12] border-2 border-[#E5A93C]/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5A93C]/20">
                <div className="flex items-center gap-2 text-[#E5A93C]">
                  <Building className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold">Operational Facility Office</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] text-[10px] font-bold uppercase">
                  Allana Supply Gate
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white">
                Ghazipur MCD Complex
              </h3>
              <p className="text-sm text-[#cadbd3] leading-relaxed">
                <strong>Opposite Masjid Allana</strong>, Ghazipur MCD Slaughter House, Delhi
              </p>
              <div className="text-xs text-[#E5A93C] font-medium pt-1">
                Direct on-site intake & coordination for Allana Pvt. Ltd. consignments.
              </div>
            </div>

            {/* Hub 2: Corporate Head Office (Quresh Nagar, Sadar Bazar) */}
            <div className="p-8 rounded-3xl bg-[#062319] border border-[#164E39] shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#164E39]">
                <div className="flex items-center gap-2 text-[#E5A93C]">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold">Corporate Head Office</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0A3124] text-[#cadbd3] text-[10px] font-bold uppercase">
                  Registered H.O.
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white">
                Quresh Nagar, Sadar Bazar
              </h3>
              <p className="text-sm text-[#cadbd3] leading-relaxed">
                <strong>7524 Quresh Nagar</strong>, Sadar Bazar, Delhi – 110006
              </p>
              <div className="text-xs text-[#cadbd3]/80">
                General administration, pastoral contracts, and institutional billing.
              </div>
            </div>

            {/* Direct Contacts Grid */}
            <div className="p-6 rounded-2xl bg-[#041A12] border border-[#164E39] space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Direct Corporate Communication
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-[#cadbd3]/70">Landline:</div>
                  <a href="tel:01123529355" className="text-white font-semibold hover:text-[#E5A93C] transition-colors">
                    011-23529355
                  </a>
                </div>

                <div>
                  <div className="text-[#cadbd3]/70">Primary Mobile & WhatsApp:</div>
                  <a href="tel:+919711310319" className="text-[#E5A93C] font-bold hover:underline">
                    +91 9711310319
                  </a>
                </div>

                <div>
                  <div className="text-[#cadbd3]/70">Dispatch Desk:</div>
                  <div className="text-white font-medium">
                    +91 9891381340 / +91 986857868
                  </div>
                </div>

                <div>
                  <div className="text-[#cadbd3]/70">Official Inquiries:</div>
                  <a href="mailto:msq.alif.tc78@gmail.com" className="text-white hover:text-[#E5A93C] transition-colors break-all">
                    msq.alif.tc78@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct B2B Supply Quotation Desk */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#082D20] via-[#062319] to-[#03140E] border-2 border-[#E5A93C]/40 shadow-2xl">
            <div className="space-y-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Procurement & Supply Desk
              </span>
              <h3 className="font-serif text-3xl text-white">
                Request Livestock Allocation
              </h3>
              <p className="text-xs text-[#cadbd3]">
                Submit your batch requirements. Our dispatch director will reach out within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#0A3124] border border-[#E5A93C] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#E5A93C] mx-auto" />
                <h4 className="font-serif text-2xl text-white">Inquiry Forwarded</h4>
                <p className="text-xs text-[#cadbd3] leading-relaxed">
                  Thank you. Your request has been initiated directly via our WhatsApp and dispatch system.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-[#E5A93C] text-[#03140E] font-bold text-xs uppercase"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-medium">
                      Your Name / Representative
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohd. Tariq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#041A12] border border-[#164E39] focus:border-[#E5A93C] text-white text-xs outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-medium">
                      Company / Institutional Buyer
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Export Entity / Meat Plant"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#041A12] border border-[#164E39] focus:border-[#E5A93C] text-white text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-medium">
                      Direct Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#041A12] border border-[#164E39] focus:border-[#E5A93C] text-white text-xs outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-medium">
                      Required Head Count
                    </label>
                    <select
                      value={formData.headCount}
                      onChange={(e) => setFormData({ ...formData, headCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#041A12] border border-[#164E39] focus:border-[#E5A93C] text-white text-xs outline-none transition-colors"
                    >
                      <option value="50 heads (Test Batch)">50 Heads (Initial Batch)</option>
                      <option value="100 heads (Standard)">100 Heads (Standard Consignment)</option>
                      <option value="250 heads (Export Volume)">250 Heads (Export Volume)</option>
                      <option value="500+ heads (Institutional Contract)">500+ Heads (Contract)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-medium">
                    Delivery Intake Facility
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#041A12] border border-[#164E39] focus:border-[#E5A93C] text-white text-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#cadbd3] mb-1 font-medium">
                    Specific Procurement Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify target weight parameters or schedule preferences (Adult buffaloes only)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#041A12] border border-[#164E39] focus:border-[#E5A93C] text-white text-xs outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4932B] via-[#E5A93C] to-[#F8D48D] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_8px_30px_rgba(229,169,60,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit Supply Inquiry via WhatsApp & Desk</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
