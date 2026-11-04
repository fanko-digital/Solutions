import React from 'react';
import { PageRoute } from '../types';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  return (
    <>
      <section id="process">
        <div className="shdr reveal-on-scroll">
          <div className="stag">HOW WE WORK</div>
          <h2 className="stitle">Our Proven Process</h2>
          <p className="sdesc">
            From discovery to growth — a clear roadmap designed to maximize your brand's digital potential.
          </p>
        </div>

        <div className="psteps">
          {PROCESS_STEPS.map((step, idx) => (
            <div className={`pstep reveal-on-scroll reveal-delay-${(idx % 4) + 1}`} key={step.num}>
              <div className="pnum">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ctas reveal-on-scroll">
        <h2>
          Ready to <span style={{ color: 'var(--primary)' }}>Dominate</span> Your Local Market?
        </h2>
        <p>Join 150+ businesses in Kanyakumari that trust FanKO to grow their digital presence.</p>
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
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
          Start Your Journey Today
        </button>
      </div>
    </>
  );
};
