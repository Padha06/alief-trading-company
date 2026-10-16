import React from 'react';
import { Award, Factory, Truck, Building, ShieldCheck } from 'lucide-react';

export default function AllanaPartnership({ onOpenInquiry }) {
  const steps = [
    {
      num: '01',
      title: 'Pastoral Procurement',
      desc: 'Selective farm-gate sourcing across vetted breeding tracts in Haryana, Western UP, and Punjab.',
      icon: Building,
    },
    {
      num: '02',
      title: 'Veterinary Quarantine',
      desc: 'Rigorous health check, ear-tagging, FMD screening, and official fitness certification.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Humane Monitored Transit',
      desc: 'Equipped transport fleet complying strictly with animal welfare transit guidelines.',
      icon: Truck,
    },
    {
      num: '04',
      title: 'Allana Ghazipur Ingestion',
      desc: 'Seamless handover at MCD Ghazipur complex (Opp. Masjid Allana) for automated export processing.',
      icon: Factory,
    },
  ];

  return (
    <section id="allana-partner" className="py-24 bg-[#041912] relative overflow-hidden border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Partnership Highlight Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
              <Award className="w-4 h-4" />
              Strategic Institutional Alliance
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
              Approved Tier-1 Livestock Vendor to{' '}
              <span className="gold-gradient-text block mt-1">
                Allana Pvt. Ltd.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#cadbd3] leading-relaxed">
              <strong>Allana Group (Allanasons)</strong> is universally recognized as India's foremost processor and exporter of frozen halal boneless buffalo meat to over 85 countries worldwide. <strong>Jamsee Trading Company (Alief)</strong> operates as an indispensable upstream supply backbone feeding prime adult livestock directly into their key processing hubs.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082D20] to-[#041A12] border-2 border-[#E5A93C]/40 text-center space-y-2 shadow-2xl w-full sm:w-auto">
              <span className="text-[11px] uppercase tracking-widest text-[#E5A93C] font-semibold block">
                Primary Facility Base
              </span>
              <div className="font-serif text-xl text-white font-bold">
                MCD Ghazipur Slaughterhouse
              </div>
              <div className="text-xs text-[#cadbd3] font-medium">
                Directly Opposite Masjid Allana, Delhi
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0A3124] text-[10px] text-[#E5A93C] font-bold border border-[#E5A93C]/30">
                  Daily Livestock Ingestion
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Visual Feature: Processing Complex & Transport Fleet with Real Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A93C]/35 shadow-xl group h-80">
            <img
              src="/images/processing-complex.jpg"
              alt="Modern Export-Grade Processing Complex"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase tracking-wider">
                Industrial Export Infrastructure
              </span>
              <h3 className="font-serif text-2xl text-white mt-1 drop-shadow-md">
                Modern Export Processing Complex
              </h3>
              <p className="text-xs text-[#cadbd3] mt-1 drop-shadow">
                APEDA and MCD compliant processing bays aligned with Allana Pvt. Ltd.'s high-volume international throughput.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A93C]/35 shadow-xl group h-80">
            <img
              src="/images/transport-fleet.jpg"
              alt="Specialized Humane Livestock Transport Fleet"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03140E] via-[#03140E]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="px-3 py-1 rounded-full bg-[#E5A93C] text-[#03140E] text-[10px] font-bold uppercase tracking-wider">
                Humane Bio-Monitored Transit
              </span>
              <h3 className="font-serif text-2xl text-white mt-1 drop-shadow-md">
                Dedicated Transport Logistics Fleet
              </h3>
              <p className="text-xs text-[#cadbd3] mt-1 drop-shadow">
                Climate-monitored, ventilated transit vehicles operating between rural collection centers and the Ghazipur MCD complex.
              </p>
            </div>
          </div>

        </div>

        {/* 4-Step Sourcing-to-Allana Supply Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-[#062319] border border-[#164E39] hover:border-[#E5A93C]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] group-hover:bg-[#E5A93C] group-hover:text-[#03140E] transition-colors border border-[#E5A93C]/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl text-[#E5A93C]/30 font-bold group-hover:text-[#E5A93C]/70 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h4 className="font-serif text-xl text-white mb-2 group-hover:text-[#E5A93C] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-[#cadbd3] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Capabilities Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#07251A] via-[#093525] to-[#051C14] border border-[#E5A93C]/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Supply Resilience
              </span>
              <h4 className="font-serif text-2xl text-white">
                Uninterrupted Daily Consignments
              </h4>
              <p className="text-xs text-[#cadbd3] leading-relaxed">
                Equipped to scale dispatch quotas up to 500+ heads per single consignment to match peak export schedules.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Regulatory Rigor
              </span>
              <h4 className="font-serif text-2xl text-white">
                Pre-Cleared Health Dossiers
              </h4>
              <p className="text-xs text-[#cadbd3] leading-relaxed">
                Complete documentation, veterinary transit passes, and APEDA traceability records delivered with every truck.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:shadow-[0_8px_25px_rgba(229,169,60,0.35)] transition-all"
              >
                Inquire For Institutional Contracts →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
