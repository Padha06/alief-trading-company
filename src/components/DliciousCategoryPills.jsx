import React from 'react';
import { Award, Zap, ShieldCheck, Scale, CheckCircle2, Building2 } from 'lucide-react';

export default function DliciousCategoryPills({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: 'All Batches', count: '6 Lots', icon: Award },
    { id: 'prime-murrah', label: 'Prime Murrah Adult', count: '440-480kg', icon: ShieldCheck },
    { id: 'heavy-weight', label: 'Heavyweight Export', count: '500kg+', icon: Scale },
    { id: 'immediate', label: 'Ghazipur Gate Ready', count: 'Immediate', icon: Zap },
    { id: 'allana-dedicated', label: 'Allana Dedicated', count: 'Export Grade', icon: Building2 },
    { id: 'riverine', label: 'Pastoral Riverine', count: 'Naturally Grazed', icon: CheckCircle2 },
  ];

  return (
    <div className="bg-[#03140E] border-b border-[#144936] py-2.5 px-3 sm:px-8 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 min-w-max">
        <span className="text-[10px] uppercase tracking-wider text-[#cadbd3]/60 font-semibold mr-1 hidden sm:inline">
          Filter Batches:
        </span>

        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 border ${
                isActive
                  ? 'bg-gradient-to-r from-[#D4932B] to-[#E5A93C] text-[#03140E] font-bold border-[#E5A93C] shadow-[0_2px_12px_rgba(229,169,60,0.3)] scale-[1.02]'
                  : 'bg-[#062319] hover:bg-[#0A3124] text-[#cadbd3] hover:text-[#E5A93C] border-[#164E39]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#03140E]' : 'text-[#E5A93C]'}`} />
              <span className="font-medium whitespace-nowrap">{cat.label}</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold whitespace-nowrap ${
                  isActive ? 'bg-[#03140E]/20 text-[#03140E]' : 'bg-[#03140E] text-[#E5A93C]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
