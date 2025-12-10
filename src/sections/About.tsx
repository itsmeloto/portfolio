import React from 'react';
import { motion } from 'framer-motion';
import { profile, quickFacts } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

export const About: React.FC = () => (
  <section id="about" data-section className="section-shell">
    <SectionHeading eyebrow="About" title="Crafting experiences with intention" description="A product-minded engineer who sweats the details." />
    <div className="grid gap-8 md:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-surface p-6 md:col-span-2"
      >
        <div className="space-y-4 text-muted">
          <p>{profile.bio}</p>
          <p>{profile.bioSecondary}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#">View Resume</Button>
          <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let’s work together
          </Button>
        </div>
      </motion.div>
      <div className="card-surface p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Quick facts</h3>
        <div className="grid gap-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-border/70 bg-surface/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{fact.label}</p>
              <p className="text-base font-semibold text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
