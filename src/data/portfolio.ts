export interface SkillCategory {
  name: string;
  skills: { label: string; level: 'Beginner' | 'Intermediate' | 'Advanced' }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  details: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  timeframe: string;
  achievements: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const profile = {
  name: 'Your Name',
  role: 'Product-Minded Frontend Engineer',
  location: 'Remote · GMT+1',
  headline: "I build thoughtful digital experiences with craft, clarity, and code.",
  bio: `I’m a senior front-end engineer with a passion for designing elegant user interfaces and crafting delightful interactions.
  Over the last 8+ years, I've partnered with product teams and founders to ship impactful web products across SaaS, fintech, and e-commerce.
  I obsess over accessibility, performance, and creating systems that scale.`,
  bioSecondary: `Beyond the UI, I care deeply about strategy, collaboration, and bringing clarity to complex problems. I love design systems, inclusive design, and pairing closely with designers and stakeholders to translate ideas into experiences users love.`,
};

export const quickFacts = [
  { label: 'Experience', value: '8+ years' },
  { label: 'Core Stack', value: 'React, TypeScript, Node' },
  { label: 'Location', value: 'Remote · GMT+1' },
  { label: 'Availability', value: 'Open to select freelance engagements' },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Front-end',
    skills: [
      { label: 'React / Next.js', level: 'Advanced' },
      { label: 'TypeScript', level: 'Advanced' },
      { label: 'Tailwind CSS', level: 'Advanced' },
      { label: 'Accessibility (a11y)', level: 'Advanced' },
      { label: 'Framer Motion', level: 'Intermediate' },
    ],
  },
  {
    name: 'Back-end',
    skills: [
      { label: 'Node.js', level: 'Intermediate' },
      { label: 'GraphQL / REST', level: 'Intermediate' },
      { label: 'PostgreSQL', level: 'Intermediate' },
      { label: 'Auth & Security', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools & Ops',
    skills: [
      { label: 'Git & CI/CD', level: 'Advanced' },
      { label: 'Design Systems', level: 'Advanced' },
      { label: 'Storybook', level: 'Intermediate' },
      { label: 'Vite / Webpack', level: 'Intermediate' },
      { label: 'Cloudflare / Vercel', level: 'Intermediate' },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { label: 'Product Thinking', level: 'Advanced' },
      { label: 'Leadership', level: 'Intermediate' },
      { label: 'Mentorship', level: 'Advanced' },
      { label: 'Workshops & Demos', level: 'Advanced' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'atlas',
    title: 'Atlas Design System',
    description: 'A cohesive component library powering multiple SaaS products with consistent experiences.',
    tech: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
    details:
      'Built a modular design system with accessibility baked in, supporting rapid product delivery and brand consistency across teams.',
    highlights: [
      'Created 40+ composable components with documentation and usage guidelines',
      'Established theming tokens and automated visual regression testing',
      'Partnered with designers to align UX patterns across 3 product lines',
    ],
  },
  {
    id: 'pulse',
    title: 'Pulse Analytics',
    description: 'Realtime dashboard for operations teams to monitor key business metrics.',
    tech: ['React', 'D3', 'Node', 'WebSockets'],
    liveUrl: '#',
    repoUrl: '#',
    details:
      'Designed and engineered a realtime analytics experience with collaborative annotations, alerts, and responsive data visualizations.',
    highlights: [
      'Implemented websocket-driven updates with optimistic UI',
      'Built interactive charts with keyboard and screen reader support',
      'Reduced load times by 30% through bundle optimizations and code-splitting',
    ],
  },
  {
    id: 'market',
    title: 'Market Launchpad',
    description: 'Landing page builder for marketing teams with flexible templates and A/B testing.',
    tech: ['Next.js', 'Tailwind', 'Supabase'],
    liveUrl: '#',
    repoUrl: '#',
    details:
      'Crafted a polished marketing toolkit with visual editor, reusable sections, and performance-optimized pages.',
    highlights: [
      'Developed drag-and-drop section builder with template presets',
      'Instrumented analytics and experiments directly into the platform',
      'Achieved 95+ Lighthouse scores across pages',
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Lead Front-end Engineer',
    company: 'Northwind Labs',
    timeframe: '2021 — Present',
    achievements: [
      'Leading the front-end chapter and establishing coding standards and review practices',
      'Shipped a multi-tenant platform redesign that increased activation by 22%',
      'Mentoring a distributed team of engineers through pairing and architecture reviews',
    ],
  },
  {
    role: 'Senior Product Engineer',
    company: 'Acme Inc.',
    timeframe: '2018 — 2021',
    achievements: [
      'Delivered end-to-end features from discovery through launch in close partnership with PM & Design',
      'Introduced a design system that cut new feature delivery time by 30%',
      'Led accessibility initiatives to meet WCAG AA across core flows',
    ],
  },
  {
    role: 'Front-end Engineer',
    company: 'Pixel Foundry',
    timeframe: '2015 — 2018',
    achievements: [
      'Built performant marketing sites and dashboards for startups and agencies',
      'Collaborated with designers to ship consistent, on-brand experiences',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Brings a rare mix of design intuition and engineering rigor. Our product quality leapt forward with their leadership.',
    name: 'Ava Martins',
    role: 'VP Product',
    company: 'Northwind Labs',
  },
  {
    quote: 'Communicates clearly, delivers predictably, and sweats the details. A go-to partner for critical launches.',
    name: 'Jordan Lee',
    role: 'Director of Engineering',
    company: 'Acme Inc.',
  },
  {
    quote: 'Elevated our design system and shipped complex features with empathy for users and teammates alike.',
    name: 'Priya Shah',
    role: 'Design Lead',
    company: 'Pixel Foundry',
  },
];

export const contact = {
  email: 'hello@example.com',
  location: 'Remote · GMT+1',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
};
