import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initial loader effect matching original loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Listen to browser popstate for back/forward navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/services') {
        setCurrentPage('services');
      } else if (path === '/portfolio') {
        setCurrentPage('portfolio');
      } else if (path.startsWith('/blog/top-10-digital-marketing-companies-nagercoil-2026')) {
        setCurrentPage('blog-detail');
        setActiveBlogSlug('top-10-digital-marketing-companies-nagercoil-2026');
      } else if (path.startsWith('/blog/best-digital-marketing-agency-in-kanyakumari-2026')) {
        setCurrentPage('blog-detail');
        setActiveBlogSlug('best-digital-marketing-agency-in-kanyakumari-2026');
      } else if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        setCurrentPage('blog-detail');
        setActiveBlogSlug(slug);
      } else if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (page: PageRoute, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setActiveBlogSlug(slug);
    }
    // Update window path smoothly
    let targetPath = '/';
    if (page === 'about') targetPath = '/about';
    else if (page === 'services') targetPath = '/services';
    else if (page === 'portfolio') targetPath = '/portfolio';
    else if (page === 'blog') targetPath = '/blog';
    else if (page === 'blog-detail') targetPath = `/blog/${slug || 'top-10-digital-marketing-companies-nagercoil-2026'}`;
    else if (page === 'contact') targetPath = '/contact';

    window.history.pushState({}, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Intro Cyber Loader */}
      {isLoading && (
        <div id="loader" style={{ opacity: 1, pointerEvents: 'none' }}>
          <img className="logo" src="/fanko_logo-Bg.png" alt="FanKO AI Digital Solutions" />
          <div className="lbar">
            <div className="lfill"></div>
          </div>
          <p className="ltxt">INITIALIZING AI ENGINE</p>
        </div>
      )}

      {/* Background Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Persistent Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main View Router */}
      <main className="relative z-10">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={navigateTo} />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigateTo} />}
        {currentPage === 'blog-detail' && <BlogPostPage onNavigate={navigateTo} slug={activeBlogSlug} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* WhatsApp Floating Action Button */}
      <WhatsAppFloatingButton />

      {/* Persistent Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
