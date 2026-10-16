import React from 'react';

export default function AliefLogo({ variant = 'full', className = '' }) {
  if (variant === 'mark-only') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0D3D2C] via-[#062319] to-[#03140E] border border-[#E5A93C]/40 p-1 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center justify-center">
          {/* Stylized Arabic Alif with Accent flourish */}
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#E5A93C" />
                <stop offset="100%" stopColor="#A86C14" />
              </linearGradient>
            </defs>
            <path
              d="M62 18 C58 20, 55 26, 55 35 L55 78 C55 82, 51 85, 47 85 C43 85, 41 82, 41 78 L41 33 C41 24, 46 17, 56 15 C62 13, 67 15, 62 18 Z"
              fill="url(#goldGrad)"
            />
            <circle cx="58" cy="18" r="4" fill="#FFF2B2" />
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
    <div className={`flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer ${className}`}>
      {/* Emblem Crest */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#0F4733] via-[#08291E] to-[#03140E] border border-[#E5A93C]/50 p-1 shadow-[0_0_15px_rgba(229,169,60,0.15)] flex items-center justify-center transition-all duration-300 group-hover:border-[#E5A93C] group-hover:shadow-[0_0_20px_rgba(229,169,60,0.3)]">
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
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span className="font-serif text-lg sm:text-2xl tracking-wide font-normal gold-gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] leading-none">
            ALIEF
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#E5A93C]/75 font-semibold font-sans leading-none">
            TRADING
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
          <span className="text-[8px] sm:text-[10px] tracking-wider text-[#cadbd3] font-medium uppercase font-sans truncate">
            JAMSEE TRADING CO.
          </span>
          <span className="w-1 h-1 rounded-full bg-[#E5A93C]/60 shrink-0"></span>
          <span className="text-[8px] sm:text-[9px] tracking-wider text-[#E5A93C] font-semibold uppercase shrink-0">
            DELHI
          </span>
        </div>
      </div>
    </div>
  );
}
