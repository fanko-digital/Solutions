import React from 'react';
import { PageRoute } from '../types';
import { SERVICES } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
}

const ServiceCardIcon: React.FC<{ service: typeof SERVICES[0] }> = ({ service }) => {
  const [hasError, setHasError] = React.useState(false);

  const getFallbackIcon = () => {
    switch (service.id) {
      case 'seo':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <polyline points="11 8 11 12 14 12" />
          </svg>
        );
      case 'google-ads':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24" />
          </svg>
        );
      case 'web-dev':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
        );
      case 'app-dev':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
          </svg>
        );
      case 'custom-software':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <circle cx="6" cy="7" r="1" fill="#00D4FF" />
            <circle cx="9" cy="7" r="1" fill="#00D4FF" />
            <polyline points="7 12 10 14 7 16" />
            <line x1="12" y1="16" x2="16" y2="16" />
          </svg>
        );
      case 'ai-automation':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="15" x2="8.01" y2="15" strokeWidth="3" />
            <line x1="16" y1="15" x2="16.01" y2="15" strokeWidth="3" />
            <path d="M9 18h6" />
            <path d="M2 15h1M21 15h1" />
          </svg>
        );
      case 'email-marketing':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'gbp':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
      case 'social-media':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        );
      case 'meta-ads':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      case 'ai-video':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        );
      case 'branding':
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19 7-7 3 3-7 7-3-3z" />
            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="m2 2 7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-cyan-950/40 rounded-2xl">
        {getFallbackIcon()}
      </div>
    );
  }

  return (
    <img
      src={service.image}
      alt={service.title}
      className="s-img"
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        const publicFallback = `/assets/images/${service.image.split('/').pop()?.split('?')[0]}`;
        if (!target.src.includes(publicFallback)) {
          target.src = publicFallback;
        } else {
          setHasError(true);
        }
      }}
    />
  );
};

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
                <ServiceCardIcon service={s} />
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
