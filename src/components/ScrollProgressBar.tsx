import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
            setProgress(currentProgress);
            setIsVisible(window.scrollY > 40);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[1001] pointer-events-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Background track */}
      <div className="h-[3px] w-full bg-cyan-950/40 backdrop-blur-xs">
        {/* Glowing progress fill */}
        <div
          className="h-full bg-gradient-to-r from-[#00D4FF] via-[#4DEEFF] to-[#ffffff] relative transition-transform duration-75 ease-out"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 12px rgba(0, 212, 255, 0.9), 0 0 24px rgba(77, 238, 255, 0.6)',
          }}
        >
          {/* Head Flare / Glowing laser node */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#00D4FF,0_0_24px_#4DEEFF] animate-pulse" />
        </div>
      </div>

      {/* Floating HUD Scroll Telemetry (visible on desktop) */}
      <div className="hidden md:flex items-center gap-2 absolute top-4 right-8 px-2.5 py-1 rounded-full bg-[#050b18]/85 border border-[#00d4ff]/30 text-[10px] font-mono tracking-widest text-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.2)] backdrop-blur-md">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-ping" />
        <span>SCROLL // {Math.round(progress).toString().padStart(3, '0')}%</span>
      </div>
    </div>
  );
};
