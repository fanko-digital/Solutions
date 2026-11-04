import React, { useState, useMemo } from 'react';
import { PageRoute } from '../types';
import { BLOG_POSTS } from '../data/content';

interface BlogPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'seo', label: 'SEO Tips' },
  { id: 'local', label: 'Local SEO' },
  { id: 'digital', label: 'Digital Marketing' },
  { id: 'ai', label: 'AI Marketing' },
  { id: 'web', label: 'Website Dev' },
];

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = selectedCat === 'all' || post.category === selectedCat;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.categoryLabel.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div id="p-blog">
      <section id="blog" style={{ paddingTop: '140px' }}>
        <div className="shdr">
          <div className="stag">INSIGHTS</div>
          <h2 className="stitle">AI Marketing Blog</h2>
          <p className="sdesc">
            Expert strategies, trends, and guides to power your digital growth journey.
          </p>
        </div>

        <div className="bsrch">
          <input
            type="text"
            id="bsinp"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={() => {}}>
            Search
          </button>
        </div>

        <div className="bcats">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`bcat ${selectedCat === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.label}
            </div>
          ))}
        </div>

        <div className="bgrid" id="bgrid">
          {filteredPosts.map((post) => {
            const isFeatured = post.featured;
            return (
              <div
                key={post.id}
                className="bcard"
                onClick={() => onNavigate('blog-detail', post.slug)}
                style={
                  isFeatured
                    ? {
                        borderColor: 'rgba(0,212,255,0.4)',
                        position: 'relative',
                        overflow: 'hidden',
                      }
                    : undefined
                }
              >
                {isFeatured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      zIndex: 2,
                      background: 'linear-gradient(135deg,var(--primary),var(--accent))',
                      color: '#050B18',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '50px',
                      letterSpacing: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    FEATURED
                  </div>
                )}

                <div className="bthumb">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>

                <div className="bcon">
                  <div className="bmeta">
                    <span className="bctag">{post.categoryLabel}</span>
                    {post.date} · {post.readTime}
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div
                    className="bread"
                    style={
                      isFeatured
                        ? {
                            color: 'var(--primary)',
                            fontWeight: 700,
                            marginTop: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: 'rgba(0,212,255,0.08)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                          }
                        : undefined
                    }
                  >
                    {isFeatured ? 'Read Full Article →' : 'Read More →'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255,255,255,0.5)' }}>
            <p>No articles found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCat('all');
              }}
              className="btn2"
              style={{ marginTop: '16px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
