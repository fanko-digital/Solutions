export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  tags?: string[];
  features?: string[];
}

export type PortfolioCategory = 'all' | 'websites' | 'meta-ads' | 'ai-video' | 'poster';

export interface PortfolioItem {
  id: string;
  client: string;
  title: string;
  location: string;
  category: 'websites' | 'meta-ads' | 'ai-video' | 'poster';
  categoryLabel: string;
  tags: string[];
  description: string;
  logo?: string;
  image: string;
  mockupType: 'website' | 'meta-ad' | 'ai-video' | 'poster';
  deliverables?: string[];
  challenge?: string;
  solution?: string;
  adDetails?: {
    platform: string;
    objective: string;
    ctaText: string;
  };
  videoDetails?: {
    duration: string;
    resolution: string;
    toolsUsed: string;
  };
  posterDetails?: {
    dimensions: string;
    format: string;
    theme: string;
  };
  websiteDetails?: {
    platform: string;
    techStack: string;
    lighthouseScore?: string;
  };
  results: {
    label: string;
    value: string;
    isRating?: boolean;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'seo' | 'local' | 'digital' | 'ai' | 'web';
  categoryLabel: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  logo: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'blog'
  | 'blog-detail'
  | 'contact';
