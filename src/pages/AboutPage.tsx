import React from 'react';
import { PageRoute } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  return (
    <div id="p-about">
      <section id="about" style={{ paddingTop: '140px' }}>
        <div className="reveal-on-scroll">
          <div className="stag">OUR STORY</div>
          <h2 className="stitle">About FanKO AI Digital Solutions</h2>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}
          >
            FanKO AI Digital Solutions helps local businesses and brands establish a powerful online
            presence through innovative digital marketing and AI-powered solutions. Born in
            Kanyakumari, we understand the unique dynamics of regional markets and combine local
            insight with global strategies.
          </p>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}
          >
            Our goal is to generate qualified leads, improve online visibility, and drive sustainable
            business growth using intelligent automation, data analytics, and creative storytelling
            that resonates with your target audience.
          </p>

          <div className="avals">
            <div className="av">
              <div className="av-ic">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="16" x2="8" y2="16"></line>
                  <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              </div>
              <div>
                <h4>AI-Driven</h4>
                <p>Every campaign backed by intelligent data systems</p>
              </div>
            </div>

            <div className="av">
              <div className="av-ic">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <h4>Results First</h4>
                <p>We measure success by your growth metrics</p>
              </div>
            </div>

            <div className="av">
              <div className="av-ic">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div>
                <h4>Local + Global</h4>
                <p>Kanyakumari roots, international-grade execution</p>
              </div>
            </div>

            <div className="av">
              <div className="av-ic">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Transparent</h4>
                <p>Real-time reporting, no hidden surprises</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <button onClick={() => onNavigate('contact')} className="btn1">
              Work With Our Team →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
