import React from 'react';
import { PageRoute } from '../types';

interface LocalServicesOverviewProps {
  onNavigate: (page: PageRoute) => void;
}

export const LocalServicesOverview: React.FC<LocalServicesOverviewProps> = ({ onNavigate }) => {
  return (
    <section id="local-services">
      <div className="shdr reveal-on-scroll">
        <div className="stag">LOCAL REACH</div>
        <h2 className="stitle">
          Digital Marketing Services for Businesses in Kanyakumari, Nagercoil &amp; Marthandam
        </h2>
      </div>

      <div className="loc-overview-card reveal-on-scroll reveal-scale">
        <div className="loc-content-body">
          <p>
            FanKO AI Digital Solutions helps businesses across Kanyakumari, Nagercoil, Marthandam, and
            nearby areas build a stronger online presence. From SEO and Local SEO to Meta Ads, social
            media marketing, website development, AI videos and branding, we create practical digital
            strategies designed around your business goals.
          </p>
          <p>
            Whether you are a local shop, showroom, restaurant, educational institution, service
            provider or growing brand, our team helps you reach the right audience, improve online
            visibility and generate more enquiries through digital channels.
          </p>
          <p>
            Our approach combines search engine optimisation, Google Business Profile optimisation,
            social media marketing, paid advertising and conversion-focused websites to help local
            businesses compete and grow in today's digital market.
          </p>

          <div className="loc-highlight-box">
            <p>
              Serving businesses across Kanyakumari, Nagercoil, Marthandam and surrounding areas with
              focused, results-driven digital marketing solutions.
            </p>
          </div>

          <div className="loc-action-wrap">
            <button onClick={() => onNavigate('services')} className="btn1">
              Explore Our Services
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="btn-ic"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
