import React from 'react';
import AliefLogo from './AliefLogo';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Snowflake, Utensils } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020B07] text-[#cadbd3] border-t border-[#E5A93C]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-5">
            <AliefLogo />
            <p className="text-xs text-[#cadbd3]/80 leading-relaxed max-w-md pt-2">
              <strong>Jamsee Trading Company (Brand: ALIEF)</strong> is an institutional processor and purveyor of 100% halal fresh chilled and frozen adult buffalo meat (carabeef). Supplying export-grade boneless blocks to <strong>Allana Pvt. Ltd.</strong> and sanitized cuts to order as <strong>A Unit of DLiciousMEAT</strong>.
            </p>
            <div className="p-3.5 rounded-xl bg-[#062319] border border-[#164E39] text-xs space-y-1">
              <div className="text-[#E5A93C] font-semibold uppercase tracking-wider text-[11px]">
                Corporate Retail Affiliation
              </div>
              <div className="text-white">
                A Unit of <strong className="text-[#E5A93C]">DLiciousMEAT</strong> (<a href="https://www.dliciousmeat.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.dliciousmeat.in</a>)
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-white">
              Cuts & Fresh Meat Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cuts-catalog" className="hover:text-[#E5A93C] transition-colors">
                  Fresh Boneless Buffalo Cubes (Boti)
                </a>
              </li>
              <li>
                <a href="#cuts-catalog" className="hover:text-[#E5A93C] transition-colors">
                  Special Biryani Cuts (Bone-In Marrow)
                </a>
              </li>
              <li>
                <a href="#cuts-catalog" className="hover:text-[#E5A93C] transition-colors">
                  Freshly Ground Buffalo Keema (Mince)
                </a>
              </li>
              <li>
                <a href="#cuts-catalog" className="hover:text-[#E5A93C] transition-colors">
                  Nalli Nihari Shank Cuts
                </a>
              </li>
              <li>
                <a href="#bulk-estimator" className="hover:text-[#E5A93C] transition-colors">
                  Party & Bulk Meat Calculator
                </a>
              </li>
              <li>
                <a href="#storage-guide" className="hover:text-[#E5A93C] transition-colors">
                  Storage & Freshness Guide (0-4°C)
                </a>
              </li>
              <li>
                <a href="#allana-meat-export" className="hover:text-[#E5A93C] transition-colors">
                  Allana Pvt. Ltd. Export Carabeef Supply
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Card Contacts */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-white">
              Verified Hubs & Contact Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>
                  <strong>Facility:</strong> Opp. Masjid Allana, Ghazipur MCD Slaughter House, Delhi
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>
                  <strong>Head Office:</strong> 7524 Quresh Nagar, Sadar Bazar, Delhi – 110006
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span>
                  011-23529355 | +91 9711310319 | 9891381340 | 986857868
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a href="mailto:msq.alif.tc78@gmail.com" className="text-[#E5A93C] hover:underline">
                  msq.alif.tc78@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Legal Statutory Statement */}
        <div className="p-4 rounded-xl bg-[#041A12] border border-[#164E39] text-[11px] text-[#cadbd3]/75 space-y-1">
          <div className="flex items-center gap-2 text-[#E5A93C] font-semibold uppercase tracking-wider text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Halal Authenticity & Legal Compliance Notice
          </div>
          <p>
            Jamsee Trading Company (ALIEF) processes exclusively adult water buffalo meat (*Bubalus bubalis*). We operate in strict conformity with MCD (Municipal Corporation of Delhi) regulations, APEDA export standards, and Indian animal preservation laws. We maintain an absolute zero-tolerance policy against the slaughter, processing, or trade of buffalo calves/kids (no veal) and cow cattle.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#144936] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#cadbd3]/60">
          <div>
            © {new Date().getFullYear()} <strong>Jamsee Trading Company</strong> (Brand <strong>ALIEF</strong>). A Unit of <strong>DLiciousMEAT</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Halal Zabiha</span>
            <span>•</span>
            <span>Allana Pvt. Ltd. Vendor</span>
            <span>•</span>
            <span>Vacuum Cold-Chain Insulated</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
