import React from 'react';
import { PageRoute } from '../types';
import { SERVICES } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  return (
    <div id="p-services">
      <section id="services" style={{ paddingTop: '140px' }}>
        <div className="shdr reveal-on-scroll" style={{ textAlign: 'center' }}>
          <div className="svc-hero-badge">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5" />
              <circle
                cx="24"
                cy="24"
                r="14"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="anim-gear-cw"
              />
              <circle cx="24" cy="24" r="7" fill="url(#coreGlow)" />
              <path
                d="M24 10V4M24 44V38M10 24H4M44 24H38"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="24" cy="24" r="3" fill="#fff" className="anim-bolt" />
              <defs>
                <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#4DEEFF" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="stag" style={{ justifyContent: 'center' }}>
            WHAT WE DO
          </div>
          <h2 className="stitle">Our AI-Powered Services</h2>
          <p className="sdesc">
            Comprehensive digital marketing solutions designed to help your business scale and
            outperform the competition.
          </p>
        </div>

        <div className="sgrid">
          {SERVICES.map((s, idx) => (
            <div className={`sc reveal-on-scroll reveal-scale reveal-delay-${(idx % 3) + 1}`} key={s.id}>
              <div className="si" title={s.title}>
                <img src={s.image} alt={s.title} className="s-img" loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <button
                onClick={() => onNavigate('contact')}
                className="sl"
                aria-label={`Get started with ${s.title}`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
