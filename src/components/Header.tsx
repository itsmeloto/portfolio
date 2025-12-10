import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { useTheme } from './ThemeProvider';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const links = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'testimonials',
  'contact',
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 backdrop-blur-xl transition-all duration-300 ${
        isTop ? 'bg-transparent' : 'bg-surface/80 shadow-soft'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-primary/20 text-primary shadow-inner" aria-hidden />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Portfolio</p>
            <p className="text-lg font-semibold text-foreground">Your Name</p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 md:flex" aria-label="In-page navigation">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className={`nav-link ${activeSection === link ? 'active' : ''}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Button variant="secondary" className="hidden md:inline-flex" href="#">
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
};
