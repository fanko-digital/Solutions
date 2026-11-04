import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { STATS } from '../data/content';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
}

const StatCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutQuad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(eased * target);

      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="snum">
      {count}
      {suffix}
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home">
      <div className="hi">
        <div className="hbadge">
          <span className="dot"></span>
          AI-POWERED MARKETING AGENCY
        </div>

        <h1 className="htitle">AI-Powered Digital Marketing Agency in Kanyakumari</h1>

        <p className="hsub">
          We help businesses grow faster with SEO, Website Development, Social Media Marketing,
          Google Ads, AI Videos, Branding, and Meta Ads — all powered by intelligent AI systems.
        </p>

        <div className="hbtns">
          <button onClick={() => onNavigate('contact')} className="btn1">
            <svg
              className="btn-ic"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Get Free Consultation
          </button>

          <button onClick={() => onNavigate('portfolio')} className="btn2">
            <svg className="btn-ic" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
            </svg>
            View Portfolio
          </button>
        </div>

        <div className="hstats">
          {STATS.map((stat, idx) => (
            <div key={idx} className="hstat-item">
              <StatCounter target={stat.value} suffix={stat.suffix} />
              <div className="slbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
