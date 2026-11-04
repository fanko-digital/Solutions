import React, { useEffect } from 'react';
import { PageRoute, BlogPost } from '../../types';
import { BLOG_POSTS } from '../../data/content';

interface GenericBlogArticleProps {
  slug: string;
  onNavigate: (page: PageRoute, slug?: string) => void;
}

export const GenericBlogArticle: React.FC<GenericBlogArticleProps> = ({ slug, onNavigate }) => {
  const post: BlogPost | undefined = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      const originalTitle = document.title;
      document.title = `${post.title} | FanKO AI Digital Solutions`;

      const metaDesc = document.querySelector('meta[name="description"]');
      const originalDesc = metaDesc?.getAttribute('content') || '';
      if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
      }

      return () => {
        document.title = originalTitle;
        if (metaDesc && originalDesc) {
          metaDesc.setAttribute('content', originalDesc);
        }
      };
    }
  }, [post]);

  if (!post) {
    return (
      <main className="article-wrap" style={{ textAlign: 'center', padding: '160px 20px 80px' }}>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '32px', marginBottom: '16px' }}>
          Article Not Found
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>
          The requested article could not be located or may have moved.
        </p>
        <button onClick={() => onNavigate('blog')} className="btn1">
          ← Return to Blog Directory
        </button>
      </main>
    );
  }

  // Topic-specific customized content
  const renderTopicContent = () => {
    switch (post.slug) {
      case '10-seo-strategies-2025':
        return (
          <>
            <p>
              Search Engine Optimization in 2025 and 2026 demands more than just keyword stuffing and generic backlinks. 
              Search engines now prioritize real helpfulness, local intent, topical authority, and technical user experience.
            </p>
            <h2>1. Master Search Intent Over Keyword Density</h2>
            <p>
              Modern algorithms evaluate whether your page actually solves the searcher's query. Ensure your content directly 
              answers key questions within the first two paragraphs, followed by structured depth.
            </p>
            <h2>2. Optimize for AI Overviews and Zero-Click Searches</h2>
            <p>
              With Google's AI Overviews, concise bulleted summaries, definition callouts, and clean Schema markup 
              are critical to winning featured snippets and AI citations.
            </p>
            <h2>3. Local Topical Clustering</h2>
            <p>
              Create dedicated local landing pages and helpful guides tailored to specific regions like Kanyakumari, Nagercoil, 
              and Marthandam to signal authoritative geographic expertise.
            </p>
            <div className="art-box">
              <h4>Proven Strategy Tip</h4>
              <p>
                Pair your high-performing blog content with optimized Google Business Profile posts to establish strong local relevance signals.
              </p>
            </div>
            <h2>4. Core Web Vitals &amp; Mobile-First Architecture</h2>
            <p>
              Ensure your site achieves an LCP (Largest Contentful Paint) under 1.8 seconds. Slow load times directly trigger 
              high bounce rates and drop your rankings.
            </p>
          </>
        );

      case 'rank-1-google-maps-kanyakumari':
        return (
          <>
            <p>
              Dominating the Google Local 3-Pack on Google Maps is one of the highest ROI marketing strategies for local businesses 
              across Kanyakumari, Nagercoil, and Marthandam.
            </p>
            <h2>1. Perfect Your Primary Category</h2>
            <p>
              Your primary GBP category carries the highest ranking weight. Select the most accurate primary category, followed 
              by relevant secondary categories that describe your full service spectrum.
            </p>
            <h2>2. Consistent Local NAP Citations</h2>
            <p>
              Your Name, Address, and Phone number (NAP) must be 100% consistent across your website, Google Business Profile, 
              social media handles, and business directories.
            </p>
            <h2>3. Review Velocity and Keyword-Rich Responses</h2>
            <p>
              Encourage satisfied customers to mention the specific service or product they received in their reviews. Respond 
              thoughtfully to every review within 24 to 48 hours.
            </p>
            <h2>4. High-Resolution Geo-Tagged Photos &amp; Weekly Updates</h2>
            <p>
              Profiles that regularly upload authentic photos of their work, team, and premises receive significantly more direction 
              requests and phone calls.
            </p>
          </>
        );

      case 'ai-transforming-digital-marketing-2025':
        return (
          <>
            <p>
              Artificial Intelligence is no longer just a futuristic concept—it is actively transforming how modern brands create 
              video content, optimize paid ad spend, and scale customer conversions.
            </p>
            <h2>1. Hyper-Realistic AI Video Ads</h2>
            <p>
              Brands can now generate compelling product commercials and dynamic social media reels at a fraction of traditional 
              production costs, enabling continuous creative testing.
            </p>
            <h2>2. Predictive Audience Targeting</h2>
            <p>
              AI-driven predictive analytics analyze customer behavior patterns to target ad spend where it produces the highest return, 
              dramatically reducing cost per acquisition.
            </p>
            <h2>3. Dynamic Personalization at Scale</h2>
            <p>
              From personalized email sequences to tailored website experiences, AI helps businesses deliver the right message to 
              the right audience at the exact right moment.
            </p>
          </>
        );

      case 'meta-ads-vs-google-ads-roi':
        return (
          <>
            <p>
              Businesses often ask: Should I invest in Meta Ads (Facebook &amp; Instagram) or Google Ads? The short answer is: 
              it depends on your customer intent and sales cycle.
            </p>
            <h2>Google Ads: Capturing Existing Intent</h2>
            <p>
              Google Ads is ideal for high-intent searches—when someone is actively searching for "used bike showroom near me" or 
              "digital marketing agency in Nagercoil". The user is already in buying mode.
            </p>
            <h2>Meta Ads: Generating New Demand</h2>
            <p>
              Meta Ads excels at visual storytelling, lifestyle branding, and disruptive awareness. It allows you to showcase 
              video reels, special festive offers, and creative portfolios directly into users' social feeds.
            </p>
            <div className="art-box">
              <h4>The Hybrid Winner</h4>
              <p>
                The top-performing local businesses combine both: Google Ads capture high-intent searchers, while Meta Ads retarget 
                and nurture them into paying clients.
              </p>
            </div>
          </>
        );

      case 'why-website-speed-kills-conversions':
        return (
          <>
            <p>
              Did you know that a 1-second delay in page load time can reduce conversions by up to 20%? In regional mobile networks, 
              website performance is the difference between winning a customer and losing them to a competitor.
            </p>
            <h2>1. Modern Next-Gen Image Formats</h2>
            <p>
              Convert heavy PNGs and uncompressed JPEGs to modern WebP formats and implement responsive image sizing.
            </p>
            <h2>2. Eliminating Render-Blocking Scripts</h2>
            <p>
              Defer non-essential JavaScript and streamline CSS so users can interact with your page within milliseconds of clicking.
            </p>
            <h2>3. Clean Server &amp; Mobile Optimization</h2>
            <p>
              Over 80% of regional search traffic originates from mobile devices. Your mobile experience must be fluid, responsive, 
              and touch-optimized.
            </p>
          </>
        );

      case 'google-business-profile-optimization-guide':
        return (
          <>
            <p>
              Your Google Business Profile (GBP) is often the digital front door to your business. A fully optimized profile 
              drives calls, website clicks, and footfall every single day.
            </p>
            <h2>1. Complete Every Single Section</h2>
            <p>
              Fill out 100% of your profile: business hours, holiday schedules, service menus, attributes (e.g. wheelchair accessible, 
              online appointments), and detailed descriptions.
            </p>
            <h2>2. Utilize the Services &amp; Products Feature</h2>
            <p>
              Add individual product cards with photos, prices, and direct WhatsApp enquiry links to turn casual searchers into 
              immediate leads.
            </p>
            <h2>3. Weekly Google Updates &amp; Offers</h2>
            <p>
              Treat Google Business Profile like a mini social channel. Post weekly updates, case studies, and seasonal promotions.
            </p>
          </>
        );

      default:
        return (
          <>
            <p>{post.excerpt}</p>
            <h2>Key Strategic Takeaways</h2>
            <p>
              Staying ahead in modern digital marketing requires consistent execution across search engine optimization, 
              targeted social media, high-converting website design, and AI-driven content automation.
            </p>
            <p>
              At FanKO AI Digital Solutions, we help brands in Kanyakumari, Nagercoil, Marthandam, and beyond implement 
              practical, data-driven systems designed for sustainable business growth.
            </p>
          </>
        );
    }
  };

  return (
    <main className="article-wrap">
      {/* Breadcrumbs */}
      <div className="art-crumbs">
        <button onClick={() => onNavigate('home')}>Home</button>
        <span>›</span>
        <button onClick={() => onNavigate('blog')}>Blog</button>
        <span>›</span>
        <span>{post.title}</span>
      </div>

      {/* Header */}
      <header className="art-hdr">
        <div className="stag">{post.categoryLabel.toUpperCase()}</div>
        <h1>{post.title}</h1>
        <div className="art-meta">
          <div className="art-meta-item">
            <span className="bctag">{post.categoryLabel}</span>
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
            {post.date}
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
            {post.readTime} read
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
            {post.author}
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
          src={post.image}
          alt={post.title}
          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '540px', objectFit: 'cover' }}
        />
      </div>

      {/* Article Body */}
      <article className="art-body">
        {renderTopicContent()}

        {/* CTA Box */}
        <div className="art-cta-box">
          <div className="stag" style={{ justifyContent: 'center' }}>
            READY TO GROW?
          </div>
          <h3>Ready to implement this strategy for your brand?</h3>
          <p>
            Contact FanKO AI Digital Solutions and discuss a tailored growth plan for your business today.
          </p>
          <div className="art-cta-btns">
            <button onClick={() => onNavigate('contact')} className="btn1">
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
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
              Get Free Consultation
            </button>
            <a
              href={`https://wa.me/918825996702?text=${encodeURIComponent(`Hello FanKO, I read your blog "${post.title}" and want to discuss services.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn2"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="btn-ic"
                fill="currentColor"
              >
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
            Explore All Services →
          </button>
        </div>
      </article>
    </main>
  );
};
