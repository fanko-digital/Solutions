import React, { useState, useEffect, useRef } from 'react';

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete, duration = 1400 }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background Cyber Constellation Animation for the Loader Screen
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate constellation nodes matching the FanKO cyber network
    const count = Math.min(85, Math.floor((width * height) / 14000) + 35);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.55 + 0.25,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby nodes with delicate glowing cyan lines
      const maxDistance = 135;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.save();
            ctx.globalAlpha = lineAlpha;
            ctx.strokeStyle = '#00D4FF';
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw and update glowing cyan particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Screen edge wrapping
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#00D4FF';
        ctx.shadowColor = '#00D4FF';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // Progress Bar Filling Logic
  useEffect(() => {
    let animFrameId: number;
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        animFrameId = requestAnimationFrame(frame);
      } else {
        // Complete progress then fade out
        setIsFadingOut(true);
        const fadeTimer = setTimeout(() => {
          setIsMounted(false);
          onComplete?.();
        }, 500);

        return () => clearTimeout(fadeTimer);
      }
    };

    animFrameId = requestAnimationFrame(frame);

    return () => {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, [duration, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      id="loader"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030712] transition-all duration-500 ease-out select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        transitionProperty: 'opacity, transform',
      }}
      aria-live="polite"
      aria-label="Loading FanKO AI Digital Solutions"
    >
      {/* Dedicated Cyber Constellation Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Deep Radial Ambient Glow Centerpiece */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(0, 212, 255, 0.12) 0%, rgba(0, 70, 130, 0.08) 32%, rgba(3, 7, 18, 0.85) 65%, #030712 100%)',
        }}
      />

      {/* Cyber Grid Accent Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 75%)',
        }}
      />

      {/* Center Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* FanKO Branding Logo */}
        <div className="relative mb-5 flex flex-col items-center">
          <img
            src="/fanko_logo-Bg.png"
            alt="FanKO AI Digital Solutions"
            className="logo w-20 sm:w-24 md:w-[100px] h-auto object-contain drop-shadow-[0_0_18px_rgba(0,212,255,0.45)] transition-transform duration-300"
          />
        </div>

        {/* Cyber Progress Bar */}
        <div className="lbar w-52 sm:w-56 h-[3px] bg-[#00d4ff]/20 rounded-full overflow-hidden relative shadow-[0_0_12px_rgba(0,212,255,0.3)] mb-4">
          <div
            className="lfill h-full bg-gradient-to-r from-[#00D4FF] via-[#4DEEFF] to-white relative rounded-full shadow-[0_0_14px_#00D4FF,0_0_24px_#4DEEFF] transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          >
            {/* Laser head glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#00D4FF,0_0_18px_#4DEEFF]" />
          </div>
        </div>

        {/* Status Text with Futuristic Cyber Blink */}
        <p className="ltxt font-mono text-[11px] sm:text-[12px] tracking-[0.28em] text-[#00D4FF] font-semibold uppercase drop-shadow-[0_0_10px_rgba(0,212,255,0.7)] animate-pulse">
          INITIALIZING AI ENGINE
        </p>
      </div>
    </div>
  );
};
