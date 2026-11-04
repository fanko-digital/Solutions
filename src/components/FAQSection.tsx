import React, { useState } from 'react';
import { PageRoute } from '../types';
import { FAQS } from '../data/content';

interface FAQSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  // First item open by default like original HTML
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <section id="faq">
        <div className="shdr reveal-on-scroll">
          <div className="stag">GOT QUESTIONS?</div>
          <h2 className="stitle">Frequently Asked Questions:</h2>
          <p className="sdesc">
            Clear answers about our digital marketing, SEO, Meta Ads, and AI solutions.
          </p>
        </div>

        <div className="faq-list reveal-on-scroll">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-a">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Banner */}
      <div className="final-cta reveal-on-scroll">
        <div className="stag">GROW YOUR BUSINESS</div>
        <h2>Ready to Grow Your Business Online?</h2>
        <p>
          Let's build a digital strategy that turns your online presence into measurable business growth.
        </p>
        <button onClick={() => onNavigate('services')} className="btn1">
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
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z"></path>
            <path d="M9 12l2 2"></path>
          </svg>
          Get Started Today
        </button>
      </div>
    </>
  );
};
