import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" data-section className="section-shell">
      <SectionHeading eyebrow="Testimonials" title="Trusted partners" description="Words from collaborators and teammates." />
      <div className="card-surface relative overflow-hidden p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg text-foreground">“{testimonial.quote}”</p>
            <div className="flex flex-wrap items-center gap-3 text-muted">
              <div className="h-12 w-12 rounded-full bg-primary/20" aria-hidden />
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full transition-all ${i === index ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border border-border px-3 py-2 text-muted transition-colors hover:text-foreground"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((index + 1) % testimonials.length)}
              className="rounded-full border border-border px-3 py-2 text-muted transition-colors hover:text-foreground"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
