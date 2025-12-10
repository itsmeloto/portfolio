import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const Hero: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="hero" data-section className="section-shell flex flex-col gap-12 pt-24 md:flex-row md:items-center">
      <div className="relative flex-1 space-y-6">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-2 text-sm text-muted">
            <Badge variant="ghost">Product-minded</Badge>
            <Badge variant="ghost">Available for freelance</Badge>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Hi, I’m {profile.name}. <br /> A {profile.role}.
          </h1>
          <p className="max-w-2xl text-lg text-muted">{profile.headline}</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => onNavigate('projects')}>View Projects</Button>
            <Button variant="secondary" onClick={() => onNavigate('contact')}>
              Contact Me
            </Button>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-2 text-sm text-muted">
          {['Full-Stack Developer', 'UI/UX', 'Design Systems', 'Web Performance'].map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="relative flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto h-[320px] w-[320px] max-w-full rounded-[32px] bg-radial-glow shadow-glass"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute inset-6 flex items-center justify-center rounded-[28px] bg-surface/70 backdrop-blur shadow-glass"
          >
            <div className="h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 via-primary to-primary/70 shadow-soft" aria-hidden />
          </motion.div>
        </motion.div>
        <div className="absolute -left-6 top-10 h-20 w-20 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
        <div className="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-pink-400/20 blur-2xl" aria-hidden />
      </div>
    </section>
  );
};
