import React from 'react';
import { Award, Factory, Snowflake, ShieldCheck, CheckCircle2, Building, ArrowRight, Send } from 'lucide-react';

export default function AllanaMeatExportSection({ onOpenInquiry }) {
  return (
    <section id="allana-meat-export" className="py-16 bg-[#03140E] border-t border-[#144936]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#082D20] border border-[#E5A93C]/40 text-xs font-semibold uppercase tracking-wider text-[#E5A93C]">
              <Award className="w-4 h-4" />
              Strategic Institutional Supply Relationship
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
              Approved Meat Vendor & Supplier to{' '}
              <span className="gold-gradient-text block mt-1">
                Allana Pvt. Ltd. (Ghazipur Complex)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#cadbd3] leading-relaxed">
              <strong>Allana Group (Allanasons)</strong> is the world's premier producer and exporter of frozen boneless halal buffalo meat (carabeef). <strong>Jamsee Trading Company (ALIEF)</strong> functions as a core processing and procurement vendor directly feeding high-specification adult buffalo meat into their flagship Ghazipur MCD facility.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-6 rounded-2xl bg-[#082D20] border-2 border-[#E5A93C]/40 shadow-xl space-y-2 text-center w-full sm:w-auto">
              <span className="text-[10px] uppercase tracking-widest text-[#E5A93C] font-semibold block">
                Primary Processing Base
              </span>
              <div className="font-serif text-xl text-white font-bold">
                MCD Ghazipur Slaughterhouse
              </div>
              <div className="text-xs text-[#cadbd3]">
                Directly Opposite Masjid Allana, Delhi
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#03140E] text-[10px] text-[#E5A93C] font-bold border border-[#E5A93C]/30">
                  APEDA Export Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Allana Export Supply */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#062319] border border-[#164E39] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] border border-[#E5A93C]/30">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-white">
              Blast Freezing (-40°C)
            </h3>
            <p className="text-xs text-[#cadbd3] leading-relaxed">
              Carabeef cuts undergo rapid blast freezing at sub-zero temperatures to preserve natural cellular juices and inhibit microbial growth, complying with global veterinary phytosanitary rules.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#062319] border border-[#164E39] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] border border-[#E5A93C]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-white">
              Chemical Lean (CL 93 - 95%)
            </h3>
            <p className="text-xs text-[#cadbd3] leading-relaxed">
              Standardized boneless blocks graded to tight industrial tolerances. Zero gristle, precision fat caps, and uniform deboned quarters engineered for automated slicing lines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#062319] border border-[#164E39] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0A3124] flex items-center justify-center text-[#E5A93C] border border-[#E5A93C]/30">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-white">
              20kg Export Master Cartons
            </h3>
            <p className="text-xs text-[#cadbd3] leading-relaxed">
              Heavy-duty corrugated master cartons (4 x 5kg vacuum-sealed blocks) shrink-wrapped on sanitized export pallets for direct container loading and international sea transit.
            </p>
          </div>

        </div>

        {/* B2B Institutional Allocation Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#07241A] via-[#093525] to-[#041A12] border border-[#E5A93C]/35 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1 max-w-xl">
            <span className="text-[10px] uppercase tracking-wider text-[#E5A93C] font-semibold">
              Commercial Export Procurement
            </span>
            <h4 className="font-serif text-xl text-white font-bold">
              Require Bulk Carabeef Tonnage for Export or Central Kitchens?
            </h4>
            <p className="text-xs text-[#cadbd3]">
              We supply palletized frozen boneless buffalo blocks with certified ante-mortem dossiers and complete APEDA documentation.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_4px_20px_rgba(229,169,60,0.4)] transition-all whitespace-nowrap"
          >
            Inquire Institutional Export Tonnage →
          </button>
        </div>

      </div>
    </section>
  );
}
