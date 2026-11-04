import React from 'react';

interface ScrollTickerProps {
  variant?: 'cyan' | 'gradient';
  speed?: 'normal' | 'fast';
  direction?: 'left' | 'right';
}

const TICKER_ITEMS = [
  { icon: '⚡', label: 'AI Video Ads Engine', tag: '2026 Ready' },
  { icon: '🚀', label: '5.4x Average ROAS', tag: 'Proven' },
  { icon: '📍', label: 'Nagercoil & Kanyakumari Local SEO', tag: '#1 Rank' },
  { icon: '🎯', label: 'Precision Meta & Google Ads', tag: 'High-Intent' },
  { icon: '🌐', label: 'Ultra-Fast Web Development', tag: 'Next-Gen' },
  { icon: '📈', label: '+320% Admission Surge Case Study', tag: 'Verified' },
  { icon: '🎨', label: 'High-Converting Creative Posters', tag: 'Viral' },
  { icon: '🔍', label: 'Google Business Profile Domination', tag: '5-Star' },
  { icon: '🤖', label: 'Neural Automation Workflows', tag: '24/7' },
];

export const ScrollTicker: React.FC<ScrollTickerProps> = ({
  variant = 'cyan',
  speed = 'normal',
  direction = 'left',
}) => {
  // Duplicate items twice to ensure endless seamless looping
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  const durationClass = speed === 'fast' ? 'duration-[25s]' : 'duration-[45s]';

  return (
    <div
      className="relative w-full overflow-hidden py-4 border-y border-[#00d4ff]/20 bg-[#050b18]/70 backdrop-blur-md select-none my-8"
      aria-label="FanKO digital marketing features ticker"
    >
      {/* Background cyber grid & glow accents */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-16 bg-[#00d4ff]/15 blur-2xl pointer-events-none" />
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-16 bg-[#4deeff]/15 blur-2xl pointer-events-none" />

      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050B18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050B18] to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex w-max items-center gap-6 will-change-transform">
        <div
          className={`flex items-center gap-6 ${animationClass} ${durationClass} hover:[animation-play-state:paused]`}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[rgba(0,212,255,0.04)] border border-[rgba(0,212,255,0.18)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.12)] transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.05)] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] cursor-default"
            >
              <span className="text-base filter drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]">
                {item.icon}
              </span>
              <span className="font-['Space_Grotesk'] text-xs md:text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">
                {item.label}
              </span>
              <span className="font-['Orbitron'] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/40">
                {item.tag}
              </span>
              <span className="text-[#00d4ff]/40 text-xs pl-2 font-mono">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
