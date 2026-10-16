import React, { useState } from 'react';
import { Truck, CheckCircle2, Clock, MapPin, Search, ShieldCheck } from 'lucide-react';

export default function ConsignmentTracker() {
  const [trackingId, setTrackingId] = useState('ALF-8821');
  const [activeConsignment, setActiveConsignment] = useState({
    id: 'ALF-8821',
    heads: '80 Heads',
    breed: 'Adult Murrah Buffalo (Bubalus bubalis)',
    origin: 'Karnal Pastoral Mandi, Haryana',
    destination: 'MCD Ghazipur Slaughterhouse (Opp. Masjid Allana)',
    client: 'Allana Pvt. Ltd. Export Line #2',
    currentStage: 3, // 1 to 4
    stages: [
      {
        title: 'Farm-Gate Procurement',
        detail: 'Mature dentition verified, individual RFID tagged',
        date: 'Today, 04:30 AM',
        completed: true,
      },
      {
        title: 'Veterinary Ante-Mortem Check',
        detail: 'FMD free clearance & government transit health pass issued',
        date: 'Today, 07:15 AM',
        completed: true,
      },
      {
        title: 'Biomonitored Transit on NH-44',
        detail: 'En route to Delhi border, climate-monitored fleet',
        date: 'In Transit (Current)',
        completed: true,
        current: true,
      },
      {
        title: 'Ghazipur MCD Allana Gate Handover',
        detail: 'Ad-libitum water rest at lairage prior to plant intake',
        date: 'Est. Today 06:00 PM',
        completed: false,
      },
    ],
  });

  const handleTrack = (id) => {
    setTrackingId(id);
    if (id === 'ALF-9044') {
      setActiveConsignment({
        id: 'ALF-9044',
        heads: '120 Heads',
        breed: 'Prime Murrah Graded Bulls',
        origin: 'Rohtak Livestock Cluster, Haryana',
        destination: 'Ghazipur MCD Complex Gate 3',
        client: 'Allana Pvt. Ltd. Consignment',
        currentStage: 4,
        stages: [
          { title: 'Farm-Gate Procurement', detail: 'Verified adult dentition passed', date: 'Yesterday, 10:00 PM', completed: true },
          { title: 'Veterinary Inspection', detail: 'Government vet clearance issued', date: 'Today, 02:00 AM', completed: true },
          { title: 'Transit to Ghazipur', detail: 'Highway transit completed', date: 'Today, 06:30 AM', completed: true },
          { title: 'MCD Ghazipur Handover', detail: 'Checked in opposite Masjid Allana', date: 'Arrived & Verified', completed: true, current: true },
        ],
      });
    } else {
      setActiveConsignment({
        id: 'ALF-8821',
        heads: '80 Heads',
        breed: 'Adult Murrah Buffalo (Bubalus bubalis)',
        origin: 'Karnal Pastoral Mandi, Haryana',
        destination: 'MCD Ghazipur Slaughterhouse (Opp. Masjid Allana)',
        client: 'Allana Pvt. Ltd. Export Line #2',
        currentStage: 3,
        stages: [
          { title: 'Farm-Gate Procurement', detail: 'Mature dentition verified, individual RFID tagged', date: 'Today, 04:30 AM', completed: true },
          { title: 'Veterinary Ante-Mortem Check', detail: 'FMD free clearance & government transit health pass issued', date: 'Today, 07:15 AM', completed: true },
          { title: 'Biomonitored Transit on NH-44', detail: 'En route to Delhi border, climate-monitored fleet', date: 'In Transit (Current)', completed: true, current: true },
          { title: 'Ghazipur MCD Allana Gate Handover', detail: 'Ad-libitum water rest at lairage prior to plant intake', date: 'Est. Today 06:00 PM', completed: false },
        ],
      });
    }
  };

  return (
    <section id="track-dispatch" className="py-16 bg-[#041A12] border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-8">
        
        {/* Section Header (DLiciousMEAT track order style) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-3 border-b border-[#144936]">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Real-Time Supply Chain Visibility
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Track Livestock Consignment
            </h2>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#cadbd3]/60 hidden xs:inline">Sample Consignments:</span>
            <button
              onClick={() => handleTrack('ALF-8821')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                trackingId === 'ALF-8821'
                  ? 'bg-[#E5A93C] text-[#03140E]'
                  : 'bg-[#062319] text-[#cadbd3] border border-[#164E39]'
              }`}
            >
              #ALF-8821 (Transit)
            </button>
            <button
              onClick={() => handleTrack('ALF-9044')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                trackingId === 'ALF-9044'
                  ? 'bg-[#E5A93C] text-[#03140E]'
                  : 'bg-[#062319] text-[#cadbd3] border border-[#164E39]'
              }`}
            >
              #ALF-9044 (Arrived)
            </button>
          </div>
        </div>

        {/* Live Consignment Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#062319] border border-[#E5A93C]/30 shadow-xl space-y-6">
          
          {/* Top Meta Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs pb-4 border-b border-[#144936]">
            <div>
              <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Consignment ID</span>
              <strong className="text-sm font-mono text-[#E5A93C]">{activeConsignment.id}</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Consignment Volume</span>
              <strong className="text-white">{activeConsignment.heads}</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Sourcing Mandi</span>
              <strong className="text-white truncate block">{activeConsignment.origin}</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#cadbd3]/60 block">Designated Plant</span>
              <strong className="text-emerald-400 truncate block">{activeConsignment.client}</strong>
            </div>
          </div>

          {/* Stepper Timeline (DLiciousMEAT order tracking style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {activeConsignment.stages.map((stage, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all ${
                  stage.current
                    ? 'bg-[#0A3124] border-[#E5A93C] shadow-[0_0_20px_rgba(229,169,60,0.2)]'
                    : stage.completed
                    ? 'bg-[#03140E] border-[#164E39]'
                    : 'bg-[#03140E]/50 border-[#144936]/40 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#E5A93C] text-[#03140E] flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] text-[#cadbd3]/70 font-mono">
                    {stage.date}
                  </span>
                </div>

                <h4 className="font-serif text-base text-white">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-[#cadbd3]/75 mt-1 leading-snug">
                  {stage.detail}
                </p>

                {stage.current && (
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[#E5A93C] font-bold uppercase animate-pulse">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Live GPS Active</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Live Note */}
          <div className="p-3.5 rounded-xl bg-[#03140E] border border-[#164E39] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
            <div className="flex items-center gap-2 text-[#cadbd3]">
              <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0" />
              <span>Direct delivery point: <strong>Opp. Masjid Allana, Ghazipur MCD Slaughter House</strong></span>
            </div>
            <a
              href="tel:+919711310319"
              className="text-[#E5A93C] hover:underline font-semibold text-xs whitespace-nowrap"
            >
              Direct Dispatch Hotline: +91 9711310319 →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
