import React, { useEffect, useState } from 'react';

export const ScrollHUDGraphics: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState<'home' | 'local' | 'process' | 'reviews' | 'faq'>('home');

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);

          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const pct = maxScroll > 0 ? (currentY / maxScroll) * 100 : 0;
          setScrollPercent(pct);

          // Detect active section on home page
          const homeEl = document.getElementById('home');
          const localEl = document.getElementById('local-services');
          const procEl = document.getElementById('process');
          const testEl = document.getElementById('testimonials');
          const faqEl = document.getElementById('faq');

          const offset = window.innerHeight * 0.4;
          if (faqEl && currentY >= faqEl.offsetTop - offset) {
            setActiveSection('faq');
          } else if (testEl && currentY >= testEl.offsetTop - offset) {
            setActiveSection('reviews');
          } else if (procEl && currentY >= procEl.offsetTop - offset) {
            setActiveSection('process');
          } else if (localEl && currentY >= localEl.offsetTop - offset) {
            setActiveSection('local');
          } else {
            setActiveSection('home');
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rotationDeg = (scrollY * 0.15) % 360;
  const counterRotationDeg = (-scrollY * 0.22) % 360;

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {/* 1. Left side cyber circuit line that pulses with scroll */}
      <div className="hidden lg:block absolute left-3 top-24 bottom-24 w-8 opacity-35">
        <svg
          className="w-full h-full"
          viewBox="0 0 32 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 16 0 L 16 200 L 26 230 L 26 420 L 6 460 L 6 620 L 20 660 L 20 800"
            stroke="#00D4FF"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeOpacity="0.4"
          />
          {/* Moving spark along path driven by scroll */}
          <circle
            cx="16"
            cy={(scrollY * 0.6) % 760 + 20}
            r="3.5"
            fill="#4DEEFF"
            filter="drop-shadow(0 0 6px #00D4FF)"
          />
          <circle cx="16" cy="200" r="2.5" fill="#00D4FF" />
          <circle cx="26" cy="420" r="2.5" fill="#00D4FF" />
          <circle cx="6" cy="620" r="2.5" fill="#00D4FF" />
        </svg>
      </div>

      {/* 2. Floating Cyber Gyroscope / Radar HUD (Desktop right side) */}
      <div
        className="hidden xl:flex flex-col items-center gap-2 absolute right-6 top-1/3 -translate-y-1/2 opacity-75 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${-scrollY * 0.08}px)`,
        }}
      >
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer rotating tick ring */}
          <svg
            className="absolute inset-0 w-full h-full transition-transform ease-linear"
            viewBox="0 0 120 120"
            style={{ transform: `rotate(${rotationDeg}deg)` }}
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#00D4FF"
              strokeWidth="1"
              strokeDasharray="3 9"
              strokeOpacity="0.6"
            />
            <circle
              cx="60"
              cy="60"
              r="48"
              stroke="#4DEEFF"
              strokeWidth="0.8"
              strokeDasharray="24 16"
              strokeOpacity="0.3"
            />
            {/* Cardinal tick notches */}
            <line x1="60" y1="2" x2="60" y2="10" stroke="#00D4FF" strokeWidth="2" />
            <line x1="60" y1="110" x2="60" y2="118" stroke="#00D4FF" strokeWidth="2" />
            <line x1="2" y1="60" x2="10" y2="60" stroke="#00D4FF" strokeWidth="2" />
            <line x1="110" y1="60" x2="118" y2="60" stroke="#00D4FF" strokeWidth="2" />
          </svg>

          {/* Inner counter-rotating ring */}
          <svg
            className="absolute inset-0 w-full h-full transition-transform ease-linear"
            viewBox="0 0 120 120"
            style={{ transform: `rotate(${counterRotationDeg}deg)` }}
          >
            <circle
              cx="60"
              cy="60"
              r="36"
              stroke="#00D4FF"
              strokeWidth="1"
              strokeDasharray="6 6"
              strokeOpacity="0.5"
            />
            <polygon
              points="60,28 64,36 56,36"
              fill="#00D4FF"
              filter="drop-shadow(0 0 4px #00D4FF)"
            />
          </svg>

          {/* Center coordinate & radar pulse */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-['Orbitron'] text-[10px] font-bold text-[#00D4FF] tracking-tighter">
              {Math.round(rotationDeg)}°
            </span>
            <span className="text-[7.5px] font-mono text-white/50 tracking-widest uppercase">
              AI•SYS
            </span>
          </div>
        </div>

        {/* Dynamic Coordinates HUD readout */}
        <div className="flex flex-col items-center text-center font-mono text-[9px] text-[#00d4ff]/80 tracking-widest bg-[#050b18]/80 border border-[#00d4ff]/25 px-2.5 py-1 rounded-md backdrop-blur-md shadow-[0_0_12px_rgba(0,212,255,0.15)]">
          <span>LAT 8.188° N</span>
          <span className="text-white/40">LON 77.411° E</span>
          <span className="text-[7.5px] text-[#4deeff] mt-0.5">NAGERCOIL // LIVE</span>
        </div>
      </div>

      {/* 3. Interactive Quick Section Depth Navigator (Desktop right edge) */}
      <div className="hidden lg:flex flex-col items-end gap-3.5 absolute right-4 bottom-28 pointer-events-auto z-30">
        {[
          { id: 'home', label: 'Top', key: 'home' },
          { id: 'local-services', label: 'Local Reach', key: 'local' },
          { id: 'process', label: 'Workflow', key: 'process' },
          { id: 'testimonials', label: 'Reviews', key: 'reviews' },
          { id: 'faq', label: 'FAQ', key: 'faq' },
        ].map((sec) => {
          const isActive = activeSection === sec.key;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group flex items-center gap-2 text-right cursor-pointer bg-transparent border-none p-1 focus:outline-hidden"
              title={`Jump to ${sec.label}`}
            >
              <span
                className={`text-[10px] font-['Orbitron'] tracking-wider uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isActive ? 'text-[#00D4FF] opacity-90' : 'text-white/50'
                }`}
              >
                {sec.label}
              </span>
              <span
                className={`block transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-[#00D4FF] shadow-[0_0_10px_#00D4FF] scale-110'
                    : 'w-2 h-2 bg-white/20 group-hover:bg-[#00D4FF]/60 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
