import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const Experience: React.FC = () => (
  <section id="experience" data-section className="section-shell">
    <SectionHeading eyebrow="Experience" title="Timeline" description="A snapshot of the journey so far." />
    <div className="relative space-y-8 border-l border-border/60 pl-6">
      {experience.map((item, index) => (
        <motion.div
          key={item.company}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="card-surface relative p-6"
        >
          <span className="absolute -left-[38px] top-6 h-3 w-3 rounded-full bg-primary shadow-soft" aria-hidden />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">{item.timeframe}</p>
              <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
              <p className="text-muted">{item.company}</p>
            </div>
            <Badge variant="ghost">Impact</Badge>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-muted">
            {item.achievements.map((ach) => (
              <li key={ach}>{ach}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
