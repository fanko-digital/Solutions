import React from 'react';
import { PageRoute } from '../types';
import { Hero } from '../components/Hero';
import { LocalServicesOverview } from '../components/LocalServicesOverview';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { FAQSection } from '../components/FAQSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Activate scroll-triggered reveal animations
  useScrollReveal();

  return (
    <div id="p-home">
      <Hero onNavigate={onNavigate} />

      <LocalServicesOverview onNavigate={onNavigate} />

      <ProcessSection onNavigate={onNavigate} />

      <TestimonialsSlider />
      <FAQSection onNavigate={onNavigate} />
    </div>
  );
};
