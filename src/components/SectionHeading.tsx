import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description }) => (
  <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
    >
      {eyebrow}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold text-foreground md:text-4xl"
    >
      {title}
    </motion.h2>
    {description && <p className="max-w-2xl text-muted">{description}</p>}
  </div>
);
