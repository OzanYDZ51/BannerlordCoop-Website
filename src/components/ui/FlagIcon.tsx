"use client";

export function FlagEN({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className}>
      <clipPath id="en"><rect width="60" height="30"/></clipPath>
      <g clipPath="url(#en)">
        <rect width="60" height="30" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#en)"/>
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

export function FlagFR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={className}>
      <rect width="1" height="2" fill="#002395"/>
      <rect x="1" width="1" height="2" fill="#fff"/>
      <rect x="2" width="1" height="2" fill="#ED2939"/>
    </svg>
  );
}

export function FlagTR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className}>
      <rect width="30" height="20" fill="#E30A17"/>
      <circle cx="10.5" cy="10" r="6" fill="#fff"/>
      <circle cx="11.5" cy="10" r="4.8" fill="#E30A17"/>
      <polygon points="16,10 13.2,8.5 13.2,11.5 16,10 13.8,7.5 13.8,12.5" fill="#fff" transform="rotate(18,14.5,10)"/>
    </svg>
  );
}
