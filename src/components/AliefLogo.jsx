import React from 'react';

export default function AliefLogo({ variant = 'full', className = '' }) {
  if (variant === 'mark-only') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D3D2C] via-[#062319] to-[#03140E] border border-[#E5A93C]/40 p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center justify-center">
          {/* Stylized Arabic Alif with Accent flourish */}
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#E5A93C" />
                <stop offset="100%" stopColor="#A86C14" />
              </linearGradient>
            </defs>
            {/* Arabic Alif (الف) with the classical upper curved head and straight vertical stroke */}
            <path
              d="M62 18 C58 20, 55 26, 55 35 L55 78 C55 82, 51 85, 47 85 C43 85, 41 82, 41 78 L41 33 C41 24, 46 17, 56 15 C62 13, 67 15, 62 18 Z"
              fill="url(#goldGrad)"
            />
            {/* Elegant upper flourish dot */}
            <circle cx="58" cy="18" r="4" fill="#FFF2B2" />
            {/* Base swoosh underline */}
            <path
              d="M20 82 Q45 88 80 82"
              stroke="url(#goldGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Emblem Crest */}
      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4733] via-[#08291E] to-[#03140E] border border-[#E5A93C]/50 p-1.5 shadow-[0_0_20px_rgba(229,169,60,0.15)] flex items-center justify-center transition-all duration-300 group-hover:border-[#E5A93C] group-hover:shadow-[0_0_25px_rgba(229,169,60,0.3)]">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="goldGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#E5A93C" />
              <stop offset="100%" stopColor="#B37517" />
            </linearGradient>
          </defs>
          <path
            d="M65 16 C60 19, 56 26, 56 36 L56 78 C56 82, 52 85, 48 85 C44 85, 42 82, 42 78 L42 33 C42 23, 48 16, 58 14 C65 12, 70 14, 65 16 Z"
            fill="url(#goldGradFull)"
          />
          <circle cx="62" cy="17" r="4.5" fill="#FFF2B2" />
          <path
            d="M18 83 Q45 89 82 83"
            stroke="url(#goldGradFull)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography from Business Card */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-wide font-normal gold-gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            ALIEF
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-[#E5A93C]/75 font-semibold font-sans">
            TRADING
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] tracking-wider text-[#cadbd3] font-medium uppercase font-sans">
            JAMSEE TRADING CO.
          </span>
          <span className="w-1 h-1 rounded-full bg-[#E5A93C]/60"></span>
          <span className="text-[9px] tracking-wider text-[#E5A93C] font-semibold uppercase">
            EST. DELHI
          </span>
        </div>
      </div>
    </div>
  );
}
