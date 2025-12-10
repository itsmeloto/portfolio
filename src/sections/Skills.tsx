import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';

export const Skills: React.FC = () => {
  const [active, setActive] = useState(skillCategories[0].name);
  const category = skillCategories.find((cat) => cat.name === active)!;

  return (
    <section id="skills" data-section className="section-shell">
      <SectionHeading eyebrow="Skills" title="Multi-disciplinary toolkit" description="A balanced mix of craft, code, and collaboration." />
      <div className="flex flex-wrap gap-3">
        {skillCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === cat.name ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted hover:text-foreground'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          {category.skills.map((skill) => (
            <div key={skill.label} className="card-surface flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Badge variant="ghost">{skill.level}</Badge>
                <span className="text-foreground font-semibold">{skill.label}</span>
              </div>
              <div className="h-2 w-28 rounded-full bg-border">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r from-primary to-pink-500 ${
                    skill.level === 'Advanced'
                      ? 'w-full'
                      : skill.level === 'Intermediate'
                        ? 'w-2/3'
                        : 'w-1/3'
                  }`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
