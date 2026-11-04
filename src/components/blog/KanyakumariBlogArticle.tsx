import React, { useEffect } from 'react';
import { PageRoute } from '../../types';

interface KanyakumariBlogArticleProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const KanyakumariBlogArticle: React.FC<KanyakumariBlogArticleProps> = ({ onNavigate }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Best Digital Marketing Agency in Kanyakumari 2026 | FanKO AI Digital Solutions';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn how to choose the best digital marketing agency in Kanyakumari in 2026. Explore SEO, social media marketing, Meta Ads, and AI content creation.'
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  return (
    <main className="article-wrap">
      {/* Breadcrumbs */}
      <div className="art-crumbs">
        <button onClick={() => onNavigate('home')}>Home</button>
        <span>›</span>
        <button onClick={() => onNavigate('blog')}>Blog</button>
        <span>›</span>
        <span>Best Digital Marketing Agency in Kanyakumari 2026</span>
      </div>

      {/* Header */}
      <header className="art-hdr">
        <div className="stag">DIGITAL MARKETING GUIDE</div>
        <h1>Best Digital Marketing Agency in Kanyakumari 2026</h1>
        <div className="art-meta">
          <div className="art-meta-item">
            <span className="bctag">Guide &amp; Strategy</span>
          </div>
          <div className="art-meta-item">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--primary)' }}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            June 23, 2026
          </div>
          <div className="art-meta-item">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--primary)' }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            8 min read
          </div>
          <div className="art-meta-item">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--primary)' }}
            >
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              <path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
            </svg>
            FanKO Editorial Team
          </div>
        </div>
      </header>

      {/* Featured Blog Image */}
      <div
        className="art-featured-media"
        style={{
          marginBottom: '36px',
          borderRadius: '18px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          position: 'relative',
          boxShadow: '0 16px 40px rgba(0,212,255,0.08)',
        }}
      >
        <img
          src="/assets/aistudio/FANKO_AI_Digital_Marketing_Banner_d34b4893.png"
          alt="Best Digital Marketing Agency in Kanyakumari 2026"
          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '540px', objectFit: 'cover' }}
        />
      </div>

      {/* Article Body */}
      <article className="art-body">
        <p>
          Finding the right digital marketing agency can make a big difference to your business. Today,
          customers do not depend only on newspaper advertisements, banners or word-of-mouth
          recommendations. They search on Google, check Instagram pages, read reviews and compare
          businesses before making a decision.
        </p>

        <p>
          This is especially important for businesses in Kanyakumari, Nagercoil and Marthandam, where local
          businesses are increasingly using digital platforms to reach customers.
        </p>

        <p>
          If you are searching for the <strong>best digital marketing agency in Kanyakumari</strong>, don't
          choose an agency only because it says it is the best. Look at its{' '}
          <button onClick={() => onNavigate('services')} className="art-link">
            digital marketing services
          </button>
          , experience, work, communication and, most importantly, the results it can help your business
          achieve.
        </p>

        <h2>Why Digital Marketing Is Important for Local Businesses</h2>
        <p>A customer looking for a product or service today may first search online.</p>
        <p>For example, someone may search for:</p>
        <ul>
          <li>SEO company in Kanyakumari</li>
          <li>Digital marketing agency in Nagercoil</li>
          <li>Website developer in Marthandam</li>
          <li>Social media marketing near me</li>
          <li>Best advertising agency in Kanyakumari</li>
        </ul>
        <p>
          If your business does not have a strong online presence, your competitors may get those
          customers instead.
        </p>
        <p>
          Digital marketing helps businesses become easier to find and gives them more opportunities to
          communicate with potential customers.
        </p>

        <h2>What Should You Look for in a Digital Marketing Agency?</h2>
        <p>
          Choosing an agency is not only about price. A good agency should understand your business and
          create a strategy based on your goals.
        </p>

        <div className="art-grid-check">
          <div className="art-check-card">
            <div className="art-check-num">01</div>
            <h4>SEO Knowledge</h4>
            <p>
              Technical SEO, keyword research, local ranking, and content strategy designed for real
              rankings.
            </p>
          </div>
          <div className="art-check-card">
            <div className="art-check-num">02</div>
            <h4>Social Media Marketing</h4>
            <p>Creative reels, purposeful storytelling, and community engagement on Instagram and Facebook.</p>
          </div>
          <div className="art-check-card">
            <div className="art-check-num">03</div>
            <h4>Meta &amp; Google Ads</h4>
            <p>High-converting paid funnels targeting qualified buyers across South Tamil Nadu.</p>
          </div>
          <div className="art-check-card">
            <div className="art-check-num">04</div>
            <h4>Conversion Websites</h4>
            <p>Mobile-optimized, ultra-fast websites designed to turn visitors into paying enquiries.</p>
          </div>
        </div>

        <h2>FanKO AI Digital Solutions – Built for Regional Growth</h2>
        <p>
          Born in Kanyakumari, FanKO AI Digital Solutions combines deep regional insight with cutting-edge
          AI automation. We help shops, schools, healthcare providers, and brands dominate search results
          and social media feeds.
        </p>

        {/* CTA Box */}
        <div className="art-cta-box">
          <div className="stag" style={{ justifyContent: 'center' }}>
            READY TO SCALE?
          </div>
          <h3>Ready to grow your business online?</h3>
          <p>
            Contact FanKO AI Digital Solutions and discuss a tailored digital marketing strategy for
            your business today.
          </p>
          <div className="art-cta-btns">
            <button onClick={() => onNavigate('contact')} className="btn1">
              <svg viewBox="0 0 24 24" width="18" height="18" className="btn-ic" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
              Discuss Strategy
            </button>
            <a
              href="https://wa.me/918825996702?text=Hello%20FanKO,%20I%20read%20your%20blog%20and%20want%20to%20discuss%20a%20digital%20marketing%20strategy."
              target="_blank"
              rel="noopener noreferrer"
              className="btn2"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" className="btn-ic" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Navigation / Back to Blog */}
        <div className="art-nav-back">
          <button onClick={() => onNavigate('blog')} className="btn2">
            ← Back to All Articles
          </button>
          <button onClick={() => onNavigate('services')} className="sl">
            Explore Services →
          </button>
        </div>
      </article>
    </main>
  );
};
