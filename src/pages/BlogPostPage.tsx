import React from 'react';
import { PageRoute } from '../types';
import { NagercoilBlogArticle } from '../components/blog/NagercoilBlogArticle';
import { KanyakumariBlogArticle } from '../components/blog/KanyakumariBlogArticle';
import { GenericBlogArticle } from '../components/blog/GenericBlogArticle';

interface BlogPostPageProps {
  onNavigate: (page: PageRoute, slug?: string) => void;
  slug?: string | null;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onNavigate, slug }) => {
  if (slug === 'top-10-digital-marketing-companies-nagercoil-2026') {
    return <NagercoilBlogArticle onNavigate={onNavigate} />;
  }

  if (slug === 'best-digital-marketing-agency-in-kanyakumari-2026') {
    return <KanyakumariBlogArticle onNavigate={onNavigate} />;
  }

  if (slug) {
    return <GenericBlogArticle slug={slug} onNavigate={onNavigate} />;
  }

  // Fallback default
  return <KanyakumariBlogArticle onNavigate={onNavigate} />;
};
