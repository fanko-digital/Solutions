import React from 'react';
import { PageRoute } from '../types';
import { PORTFOLIO_ITEMS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  useScrollReveal();

  return (
    <div id="p-portfolio">
      <section id="portfolio" style={{ paddingTop: '140px' }}>
        <div className="shdr reveal-on-scroll">
          <div className="stag">OUR WORK</div>
          <h2 className="stitle">Featured Projects</h2>
          <p className="sdesc">
            Real results for real businesses — see how FanKO has transformed local brands
            across Kanyakumari and beyond.
          </p>
        </div>

        <div className="pgrid">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div className={`pc reveal-on-scroll reveal-scale reveal-delay-${(idx % 2) + 1}`} key={item.id}>
              <div className="pi">
                <div className="pi-logo-wrap">
                  <img
                    src={item.logo || item.image}
                    alt={item.title}
                    className="pi-img"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="pcon">
                <div className="ptags-wrap">
                  {item.tags.map((tag) => (
                    <span className="ptag" key={tag}>
                      {tag}
                    </span>
                  ))}
                  <span className="ploc">
                    <svg
                      viewBox="0 0 24 24"
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="loc-ic"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {item.location}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="pres">
                  {item.results.map((res, rIdx) => (
                    <div className="ri" key={rIdx}>
                      <div className="rn">
                        {res.value}
                        {res.isRating && (
                          <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            fill="currentColor"
                            style={{
                              display: 'inline-block',
                              verticalAlign: 'baseline',
                              color: 'var(--primary)',
                              marginLeft: '3px',
                            }}
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        )}
                      </div>
                      <div className="rl">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
