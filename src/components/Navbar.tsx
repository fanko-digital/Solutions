import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <button
        onClick={() => handleNavClick('home')}
        className="nbrand"
        aria-label="FanKO AI Digital Solutions home"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <img src="/fanko_logo-Bg.png" alt="FanKO AI Digital Solutions" />
      </button>

      <div
        className={`nlinks-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <ul className={`nlinks ${menuOpen ? 'open' : ''}`} id="nl">
        <li>
          <button
            onClick={() => handleNavClick('home')}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('about')}
            className={currentPage === 'about' ? 'active' : ''}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('services')}
            className={currentPage === 'services' ? 'active' : ''}
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('portfolio')}
            className={currentPage === 'portfolio' ? 'active' : ''}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('blog')}
            className={currentPage === 'blog' || currentPage === 'blog-detail' ? 'active' : ''}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('contact')}
            className={`ncta ${currentPage === 'contact' ? 'active' : ''}`}
          >
            Get Started
          </button>
        </li>
      </ul>

      <div
        className={`hbg ${menuOpen ? 'open' : ''}`}
        id="hbg"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
