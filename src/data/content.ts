import { ServiceItem, PortfolioItem, BlogPost, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'FanKO AI Digital Solutions',
  tagline: 'AI-Powered Digital Marketing Agency in Kanyakumari',
  description:
    'AI-Powered Marketing for Modern Brands. Helping Kanyakumari businesses grow with intelligent digital strategies since 2020.',
  phone: '+91 88259 96702',
  phoneClean: '+918825996702',
  whatsappUrl: 'https://wa.me/918825996702',
  email: 'fankodigitalsolutions@gmail.com',
  instagram: '@fanko_digital_solutions',
  instagramUrl: 'https://www.instagram.com/fanko_digital_solutions/',
  facebookUrl: 'https://www.facebook.com',
  location: 'Kanyakumari, Tamil Nadu, India',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.729342630462!2d77.26232886314395!3d8.184379500814554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fd0bbd74c87b%3A0xd9b279976dd99ef0!2sFanko%20Ai%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1782129018854!5m2!1sen!2sin',
};

export const STATS = [
  { value: 150, label: 'CLIENTS SERVED', suffix: '+' },
  { value: 98, label: 'SATISFACTION %', suffix: '%' },
  { value: 500, label: 'CAMPAIGNS RUN', suffix: '+' },
  { value: 5, label: 'YEARS EXPERIENCE', suffix: '+' },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We study your brand, competitors and market to craft a winning strategy.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Data-driven digital roadmap aligned with your business goals.',
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'Our AI-powered team launches campaigns with precision targeting.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Continuous monitoring, A/B testing and performance refinement.',
  },
  {
    num: '05',
    title: 'Scale',
    desc: 'Proven results? We amplify to drive exponential business growth.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    slug: 'seo-services',
    title: 'SEO Services',
    image: '/src/assets/images/service_seo_1787905118620.jpg',
    description:
      'Dominate search rankings with advanced SEO strategies — on-page, off-page, technical SEO, and AI-driven keyword research that drives organic traffic.',
    tags: ['Technical SEO', 'Keyword Research', 'On-Page', 'Backlinks'],
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    title: 'Google Ads',
    image: '/src/assets/images/service_google_ads_1787905441219.jpg',
    description:
      'Maximize your ROI with high-intent Google Search, Display, and Performance Max PPC campaigns powered by AI bid automation and keyword targeting.',
    tags: ['Search PPC', 'Performance Max', 'AI Bidding', 'Retargeting'],
  },
  {
    id: 'web-dev',
    slug: 'website-development',
    title: 'Website Development',
    image: '/src/assets/images/service_web_dev_1787905151259.jpg',
    description:
      'Stunning, fast-loading websites built with modern tech — responsive, SEO-optimized, and designed to convert visitors into paying customers.',
    tags: ['Custom Design', 'Speed Optimization', 'SEO Architecture', 'Mobile-First'],
  },
  {
    id: 'app-dev',
    slug: 'app-development',
    title: 'App Development',
    image: '/src/assets/images/service_app_dev_1787906259688.jpg',
    description:
      'High-performance native and cross-platform mobile apps for iOS and Android — feature-packed, intuitive UI/UX, and engineered for seamless scalability.',
    tags: ['iOS & Android', 'Cross-Platform', 'Intuitive UX', 'Scalable Backend'],
  },
  {
    id: 'email-marketing',
    slug: 'email-marketing',
    title: 'Email Marketing',
    image: '/src/assets/images/service_email_marketing_1787906274006.jpg',
    description:
      'Automated high-converting email sequences, personalized newsletters, and intelligent customer segmentation that boost customer retention and repeat sales.',
    tags: ['Automated Drip', 'Segmentation', 'Newsletter Funnels', 'High Open-Rates'],
  },
  {
    id: 'gbp',
    slug: 'google-business-profile',
    title: 'Google Business Profile',
    image: '/src/assets/images/service_gbp_1787905188273.jpg',
    description:
      'Optimize your Google Business Profile to rank in the local 3-pack, attract foot traffic, and generate consistent calls and direction requests.',
    tags: ['Local 3-Pack', 'Reviews Strategy', 'Map Citations', 'Call Lead Gen'],
  },
  {
    id: 'social-media',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    image: '/src/assets/images/service_social_media_1787905202796.jpg',
    description:
      'Build a magnetic brand presence across Instagram, Facebook and more with creative content strategies, reels, and engagement campaigns that grow your audience.',
    tags: ['Instagram Growth', 'Viral Reels', 'Community Building', 'Brand Voice'],
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    title: 'Meta Ads',
    image: '/src/assets/images/service_meta_ads_1787905218236.jpg',
    description:
      'Precision-targeted Facebook and Instagram ad campaigns that reach your ideal customers with compelling creatives and ROAS-focused bidding strategies.',
    tags: ['Hyper-Targeting', 'Ad Creatives', 'ROAS Optimization', 'Lead Generation'],
  },
  {
    id: 'ai-video',
    slug: 'ai-video-creation',
    title: 'AI Video Creation',
    image: '/src/assets/images/service_ai_video_1787905233095.jpg',
    description:
      'Engage your audience with AI-generated video content — product showcases, brand stories, and social media reels that captivate and convert.',
    tags: ['AI Commercials', 'Product Visuals', 'Vertical Reels', 'High Engagement'],
  },
  {
    id: 'branding',
    slug: 'branding-graphic-design',
    title: 'Branding & Graphic Design',
    image: '/src/assets/images/service_branding_1787905250105.jpg',
    description:
      'Build a brand identity that stands out — from logo design and brand guidelines to marketing collateral that communicates your unique value proposition.',
    tags: ['Identity Systems', 'Logo Design', 'Marketing Collateral', 'Typography & Palette'],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'wheelwarriors',
    client: 'WheelWarriors Used Bikes',
    title: 'WheelWarriors Used Bikes — Kanyakumari',
    location: 'Kanyakumari, Tamil Nadu',
    category: 'websites',
    categoryLabel: 'Local SEO & Web',
    tags: ['Social Media + Local SEO'],
    logo: '/wheel-logo.png',
    image: '/wheel-logo.png',
    mockupType: 'website',
    description:
      'Delivered end-to-end local SEO and social media marketing for WheelWarriors, establishing them as the #1 destination for used bikes in Kanyakumari. We optimized their search visibility for second hand two wheelers in Nagercoil and certified pre-owned bikes in Tamil Nadu, driving continuous showroom walk-ins and high-intent buyer inquiries.',
    results: [
      { label: 'Leads Increase', value: '3.5x' },
      { label: 'Followers', value: '15K+' },
      { label: 'Local Rank', value: '#1' },
    ],
  },
  {
    id: 'sana-hindi',
    client: 'Sana Hindi Academy',
    title: 'Sana Hindi Academy — Erode',
    location: 'Erode, Tamil Nadu',
    category: 'ai-video',
    categoryLabel: 'AI Video & Meta Ads',
    tags: ['AI Video Creation', 'Meta Ads'],
    logo: '/sana-logo.png',
    image: '/sana-logo.png',
    mockupType: 'ai-video',
    description:
      'Executed high-impact AI video creation and hyper-targeted Meta ads for Sana Hindi Tuition Centre in Erode. By launching targeted video ads and social media campaigns for spoken Hindi and academic coaching classes across Erode and Tamil Nadu, we established them as the premier Hindi academy in Erode, driving over 320% surge in student enrollments and qualified parent inquiries.',
    results: [
      { label: 'Admission Growth', value: '320%' },
      { label: 'Video Impressions', value: '48K+' },
      { label: 'Meta Ads ROAS', value: '4.2x' },
    ],
  },
  {
    id: 'don-crackers',
    client: 'Don Crackers & Traders',
    title: 'Don Crackers & Traders — Sivakasi',
    location: 'Sivakasi, Tamil Nadu',
    category: 'meta-ads',
    categoryLabel: 'Meta Ads & E-commerce',
    tags: ['AI Video Creation', 'Meta Ads'],
    logo: '/don-logo.png',
    image: '/don-logo.png',
    mockupType: 'meta-ad',
    description:
      'Engineered high-converting festive AI video commercials and precision Meta ads for Don Crackers & Traders in Sivakasi. We promoted online fireworks and Sivakasi crackers wholesale deals across Tamil Nadu and South India, positioning them as the best cracker traders in Sivakasi with viral product reels and seasonal Diwali ad funnels.',
    results: [
      { label: 'Direct Orders', value: '550+' },
      { label: 'Video Reach', value: '85K+' },
      { label: 'Campaign ROAS', value: '5.4x' },
    ],
  },
  {
    id: 'grand-festive-cafe',
    client: 'Grand Festive Cafe (GFC)',
    title: 'Grand Festive Cafe (GFC) — Kanyakumari',
    location: 'Kanyakumari, Tamil Nadu',
    category: 'ai-video',
    categoryLabel: 'Viral AI Reels',
    tags: ['AI Video Creation', 'Viral Social Media'],
    logo: '/gfc-logo.png',
    image: '/gfc-logo.png',
    mockupType: 'ai-video',
    description:
      'Crafted viral AI food video reels and restaurant social media marketing for Grand Festive Cafe (GFC) in Kanyakumari. Showcasing gourmet burgers, pizzas, and artisan desserts, our dynamic food videography positioned GFC as the best cafe and top dining spot in Kanyakumari, drawing thousands of food lovers across Nagercoil and South Tamil Nadu.',
    results: [
      { label: 'Footfall Surge', value: '260%' },
      { label: 'Reel Views', value: '65K+' },
      { label: 'Customer Rating', value: '4.9', isRating: true },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'WheelWarriors Used Bikes',
    company: 'WheelWarriors',
    role: 'Automotive Dealer, Kanyakumari',
    logo: '/wheel-logo.png',
    rating: 5,
    quote:
      'FanKO completely transformed our online presence. Our Google Business Profile now gets 10x more calls and we are ranking #1 for used bikes Kanyakumari. Absolutely incredible results!',
  },
  {
    id: '2',
    name: 'Sana Hindi Academy',
    company: 'Sana Hindi Academy',
    role: 'Language Academy, Erode',
    logo: '/sana-logo.png',
    rating: 5,
    quote:
      "FanKO's AI video ads and Meta Ads campaign drove over 320% increase in student admission inquiries for our Erode centre. The ROI and creative quality are simply top-tier!",
  },
  {
    id: '3',
    name: 'Don Crackers & Traders',
    company: 'Don Crackers',
    role: 'Fireworks Brand, Sivakasi',
    logo: '/don-logo.png',
    rating: 5,
    quote:
      'Their festive AI video commercials and targeted Meta Ads reached over 85,000 customers across Tamil Nadu. Direct wholesale and retail cracker orders flooded our WhatsApp!',
  },
  {
    id: '4',
    name: 'Grand Festive Cafe (GFC)',
    company: 'Grand Festive Cafe',
    role: 'Cafe & Dining, Kanyakumari',
    logo: '/gfc-logo.png',
    rating: 5,
    quote:
      'The AI food videos and viral reels FanKO produced for GFC went viral across Kanyakumari. Our cafe footfall on weekends spiked by over 260%. Highly recommended!',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is the best digital marketing agency in Kanyakumari?',
    answer:
      'Fanko AI Digital Solutions provides digital marketing solutions including SEO, Local SEO, social media marketing, Meta Ads, website development and AI video marketing to help businesses grow online.',
  },
  {
    question: 'Which digital marketing services does Fanko AI Digital Solutions provide?',
    answer:
      'Fanko AI Digital Solutions provides SEO, Local SEO, social media marketing, Meta Ads, website development, AI video creation, branding and other digital marketing solutions.',
  },
  {
    question: 'Does Fanko AI Digital Solutions provide SEO services in Kanyakumari?',
    answer:
      'Yes. FanKO provides SEO and Local SEO services designed to improve search visibility, attract relevant customers and generate organic leads for businesses.',
  },
  {
    question: 'Does FanKO provide digital marketing services in Nagercoil?',
    answer:
      'Yes. FanKO works with businesses in Nagercoil and surrounding areas, providing SEO, social media marketing, Meta Ads, website development and digital content solutions.',
  },
  {
    question: 'Do you provide Meta Ads management?',
    answer:
      'Yes. We create and manage Facebook and Instagram advertising campaigns based on your target audience and business objectives.',
  },
  {
    question: 'Do you create AI promotional videos?',
    answer:
      'Yes. We create AI-powered promotional videos, reels and marketing content designed for social media and advertising campaigns.',
  },
  {
    question: 'Do you provide SEO services?',
    answer:
      'Yes. Our SEO services include technical SEO, on-page optimisation, content strategy, Local SEO and performance monitoring.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'nagercoil-2026',
    slug: 'top-10-digital-marketing-companies-nagercoil-2026',
    title: 'Top 10 Digital Marketing Companies in Nagercoil 2026',
    category: 'digital',
    categoryLabel: 'Digital Marketing',
    date: 'July 15, 2026',
    readTime: '7 min',
    author: 'FanKO Editorial Team',
    image: '/assets/aistudio/FANKO_Nagercoil_Digital_Marketing_2026_dcd281e6.png',
    excerpt:
      'Discover the top 10 digital marketing companies in Nagercoil in 2026. Explore SEO, Google Ads, social media marketing and website development.',
    featured: true,
  },
  {
    id: '1',
    slug: 'best-digital-marketing-agency-in-kanyakumari-2026',
    title: 'Best Digital Marketing Agency in Kanyakumari 2026',
    category: 'digital',
    categoryLabel: 'Digital Marketing',
    date: 'June 23, 2026',
    readTime: '8 min',
    author: 'FanKO Editorial Team',
    image: '/assets/aistudio/FANKO_AI_Digital_Marketing_Banner_d34b4893.png',
    excerpt:
      'Complete guide to choosing the right digital marketing partner in Kanyakumari — and why FanKO AI Digital Solutions leads the pack in 2026.',
    featured: true,
  },
  {
    id: '2',
    slug: '10-seo-strategies-2025',
    title: '10 SEO Strategies That Actually Work in 2025',
    category: 'seo',
    categoryLabel: 'SEO Tips',
    date: 'June 10, 2025',
    readTime: '5 min',
    author: 'FanKO Editorial Team',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Data-backed SEO approaches delivering real results for local businesses right now.',
  },
  {
    id: '3',
    slug: 'rank-1-google-maps-kanyakumari',
    title: 'How to Rank #1 on Google Maps in Kanyakumari',
    category: 'local',
    categoryLabel: 'Local SEO',
    date: 'May 28, 2025',
    readTime: '4 min',
    author: 'FanKO Editorial Team',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Step-by-step guide to dominating the Google local 3-pack without spending on ads.',
  },
  {
    id: '4',
    slug: 'ai-transforming-digital-marketing-2025',
    title: 'How AI is Transforming Digital Marketing in 2025',
    category: 'ai',
    categoryLabel: 'AI Marketing',
    date: 'May 15, 2025',
    readTime: '6 min',
    author: 'FanKO Editorial Team',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How artificial intelligence is reshaping content creation, ad targeting and campaign optimization.',
  },
  {
    id: '5',
    slug: 'meta-ads-vs-google-ads-roi',
    title: 'Meta Ads vs Google Ads: Which Delivers Better ROI?',
    category: 'digital',
    categoryLabel: 'Digital Marketing',
    date: 'May 5, 2025',
    readTime: '5 min',
    author: 'FanKO Editorial Team',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A comprehensive breakdown with real data from our campaigns in Tamil Nadu.',
  },
  {
    id: '6',
    slug: 'why-website-speed-kills-conversions',
    title: 'Why Website Speed Is Killing Your Conversions',
    category: 'web',
    categoryLabel: 'Website Dev',
    date: 'April 22, 2025',
    readTime: '7 min',
    author: 'FanKO Editorial Team',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Page speed directly impacts how many visitors become customers. Here is our checklist.',
  },
  {
    id: '7',
    slug: 'google-business-profile-optimization-guide',
    title: 'Google Business Profile 2025: Ultimate Optimization Guide',
    category: 'local',
    categoryLabel: 'Local SEO',
    date: 'April 10, 2025',
    readTime: '4 min',
    author: 'FanKO Editorial Team',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Everything about optimizing your GBP — categories, attributes, reviews and weekly posting.',
  },
];
