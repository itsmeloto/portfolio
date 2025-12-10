/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        card: 'var(--color-card)',
        border: 'var(--color-border)',
      },
      boxShadow: {
        soft: '0 10px 50px rgba(15, 23, 42, 0.08)',
        glass: '0 8px 32px rgba(15, 23, 42, 0.2)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(236,72,153,0.12), transparent 35%)',
        'grid-pattern': 'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
