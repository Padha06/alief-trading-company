import React, { useState } from 'react';
import { Scale, Users, Utensils, Send, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export default function PartyBulkMeatCalculator() {
  const [guestCount, setGuestCount] = useState(50);
  const [selectedDish, setSelectedDish] = useState('biryani');

  const dishProfiles = {
    biryani: {
      title: 'Dum Biryani Cut (Bone-In Marrow)',
      gramsPerPerson: 250,
      pricePerKg: 360,
      description: 'Generous succulent chunks with marrow bone that slowly render during dum cooking.',
    },
    nihari: {
      title: 'Nalli Nihari Cut (Cross-Cut Shank)',
      gramsPerPerson: 300,
      pricePerKg: 420,
      description: 'Velvety slow-cooked osso buco shank pieces with intact buttery bone marrow.',
    },
    kebabs: {
      title: 'Fresh Ground Buffalo Keema (Mince)',
      gramsPerPerson: 200,
      pricePerKg: 400,
      description: '85:15 double-minced lean meat that binds effortlessly for Seekh & Shami kebabs.',
    },
    curry: {
      title: 'Prime Boneless Buffalo Cubes (Boti)',
      gramsPerPerson: 220,
      pricePerKg: 380,
      description: '100% lean boneless cubes hand-trimmed for traditional rich gravies and stews.',
    },
  };

  const currentProfile = dishProfiles[selectedDish];
  const totalKg = ((guestCount * currentProfile.gramsPerPerson) / 1000).toFixed(1);
  const estimatedCost = Math.round(Number(totalKg) * currentProfile.pricePerKg);

  const handleSendPartyQuote = () => {
    const text = encodeURIComponent(
      `ALIEF (JAMSEE TRADING CO.) - Party & Bulk Meat Calculation:\nOccasion / Recipe: ${currentProfile.title}\nGuest Count: ${guestCount} Guests\nCalculated Meat Required: ${totalKg} KG\nEstimated Total: ₹${estimatedCost}\nDispatch Point: Ghazipur MCD Facility / Sadar Bazar Office\nPlease confirm butcher slot and delivery arrangement.`
    );
    window.open(`https://wa.me/919711310319?text=${text}`, '_blank');
  };

  return (
    <section id="bulk-estimator" className="py-16 bg-[#03140E] border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-8">
        
        {/* Section Header (DLiciousMEAT Party & Bulk Orders header) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-wider text-[#E5A93C]">
            <Users className="w-3.5 h-3.5" />
            Party & Bulk Orders Calculator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Calculate Meat Portions for Your Gathering
          </h2>
          <p className="text-xs sm:text-sm text-[#cadbd3]/80">
            Planning a family daawat, wedding deg, restaurant menu, or catering event? Select your dish and guest count to calculate exact fresh meat requirements.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#062319] border-2 border-[#E5A93C]/35 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Dish Selection & Guest Slider */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Recipe Selector Buttons */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#cadbd3] font-semibold">
                  1. Select Your Dish / Recipe Style:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'biryani', label: 'Dum Biryani', icon: Flame },
                    { id: 'nihari', label: 'Delhi Nihari', icon: Utensils },
                    { id: 'kebabs', label: 'Seekh Kebabs', icon: Scale },
                    { id: 'curry', label: 'Boneless Curry', icon: CheckCircle2 },
                  ].map((d) => {
                    const Icon = d.icon;
                    const isSel = selectedDish === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setSelectedDish(d.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isSel
                            ? 'bg-[#0A3124] border-[#E5A93C] text-white shadow-md'
                            : 'bg-[#03140E] border-[#144936] text-[#cadbd3]/70 hover:border-[#E5A93C]/30'
                        }`}
                      >
                        <Icon className={`w-4 h-4 mx-auto mb-1 ${isSel ? 'text-[#E5A93C]' : 'text-[#cadbd3]/60'}`} />
                        <span className="text-xs font-bold block">{d.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-white">2. Number of Guests / Portions:</span>
                  <span className="text-base font-serif font-bold text-[#E5A93C] bg-[#03140E] px-3 py-1 rounded-lg border border-[#E5A93C]/30">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#E5A93C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#cadbd3]/60">
                  <span>10 Guests (Family)</span>
                  <span>150 Guests (Party)</span>
                  <span>300+ Guests (Wedding)</span>
                </div>
              </div>

              {/* Cut Spec Summary */}
              <div className="p-4 rounded-xl bg-[#03140E] border border-[#144936] text-xs text-[#cadbd3] space-y-1">
                <div className="flex items-center gap-1.5 text-[#E5A93C] font-semibold text-[11px] uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Recommended Cut: {currentProfile.title}</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  {currentProfile.description} Formulated at <strong>{currentProfile.gramsPerPerson}g</strong> portion per person.
                </p>
              </div>

            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-[#03140E] p-6 rounded-2xl border border-[#164E39] space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#E5A93C] font-semibold block">
                Calculated Fresh Meat Requirement
              </span>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#082D20] border border-[#E5A93C]/20 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#cadbd3]/70 block">
                      Total Raw Meat Needed
                    </span>
                    <strong className="font-serif text-3xl gold-gradient-text block mt-0.5">
                      {totalKg} <span className="text-sm text-white font-sans">KG</span>
                    </strong>
                  </div>
                  <span className="text-xs text-[#cadbd3] text-right font-mono">
                    (₹{currentProfile.pricePerKg}/kg)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#082D20] border border-[#E5A93C]/20 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#cadbd3]/70 block">
                      Estimated Cost
                    </span>
                    <strong className="font-serif text-3xl text-white block mt-0.5 font-bold">
                      ₹{estimatedCost.toLocaleString()}
                    </strong>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-[#03140E] px-2 py-1 rounded">
                    Bulk Pricing
                  </span>
                </div>
              </div>

              <div className="text-[10px] text-[#cadbd3]/70 space-y-1 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Cut on sanitized stainless counters on day of dispatch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Delivered in food-grade insulated packs with ice-gel bags</span>
                </div>
              </div>

              <button
                onClick={handleSendPartyQuote}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Book {totalKg} KG Order via WhatsApp</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
