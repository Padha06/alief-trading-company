import React from 'react';
import { Stethoscope, ShieldCheck, FileCheck, CheckCircle2, HeartPulse } from 'lucide-react';

export default function BiosecuritySection() {
  const protocols = [
    {
      icon: Stethoscope,
      title: 'Farm-Gate Ante-Mortem Screening',
      desc: 'Individual inspection of dentition, body condition, temperature, and mobility conducted by licensed veterinary practitioners before purchase.',
    },
    {
      icon: ShieldCheck,
      title: 'Quarantine & Biosecurity Isolation',
      desc: 'Selected batches are held in dedicated transit-holding facilities with access to fresh feed and potable water for compulsory observation.',
    },
    {
      icon: FileCheck,
      title: 'Statutory Health Dossier Issuance',
      desc: 'Official veterinary fitness certificates, transit passes, and state border crossing clearances accompanying every single consignment.',
    },
    {
      icon: HeartPulse,
      title: 'Anti-Stress Lairage Rest at Ghazipur',
      desc: 'Animals are allotted mandatory resting periods with ad-libitum water at MCD Ghazipur holding pens to eliminate transit exhaustion before processing.',
    },
  ];

  return (
    <section id="biosecurity" className="py-24 bg-[#041912] relative border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Veterinary Rigor & Welfare
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            End-to-End Biosecurity &{' '}
            <span className="gold-gradient-text block mt-1">
              Ethical Welfare Framework
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#cadbd3] leading-relaxed">
            Institutional buyers demand verified biosecurity. We uphold rigorous protocols designed to safeguard livestock health from rural pastoral collection to modern facility intake.
          </p>
        </div>

        {/* Dual Photography Showcase: On-Site Veterinarian & Anti-Stress Holding Lairage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A93C]/35 shadow-xl group h-80">
            <img
              src="/images/vet-scanner.jpg"
              alt="On-Site Veterinarian with Digital Health Scanner"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041912] via-[#041912]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase tracking-wider">
                Digital Health Dossier
              </span>
              <h3 className="font-serif text-2xl text-white mt-1 drop-shadow-md">
                Veterinary Biometric Tagging
              </h3>
              <p className="text-xs text-[#cadbd3] mt-1 drop-shadow">
                Real-time scanning and disease-free certification ensuring FMD-free, prime adult water buffalo status.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A93C]/35 shadow-xl group h-80">
            <img
              src="/images/holding-lairage.jpg"
              alt="Anti-Stress Holding Lairage with Fresh Water and Shaded Canopy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041912] via-[#041912]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase tracking-wider">
                Animal Welfare Standard
              </span>
              <h3 className="font-serif text-2xl text-white mt-1 drop-shadow-md">
                Anti-Stress Resting Lairage
              </h3>
              <p className="text-xs text-[#cadbd3] mt-1 drop-shadow">
                Mandatory shaded recovery periods with clean potable water at the Ghazipur MCD complex prior to facility ingestion.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {protocols.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#062319] border border-[#164E39] hover:border-[#E5A93C]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] mb-5 border border-[#E5A93C]/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#cadbd3] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#144936] flex items-center gap-2 text-[11px] text-[#E5A93C] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Compliant with MCD & APEDA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
