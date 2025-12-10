import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { projects, Project } from '../data/portfolio';
import { Modal } from '../components/Modal';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" data-section className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work"
        description="A selection of recent builds that blend strategy, polish, and performance."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="card-surface group flex flex-col overflow-hidden border border-border/70 bg-surface/60 p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <Badge variant="ghost">Case Study</Badge>
            </div>
            <p className="mt-3 text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" onClick={() => setSelected(project)}>
                Details
              </Button>
              <Button variant="secondary" href={project.liveUrl}>
                Live Demo
              </Button>
              <Button variant="ghost" href={project.repoUrl}>
                GitHub
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title ?? ''}>
        <p>{selected?.details}</p>
        <ul className="list-disc space-y-2 pl-5 text-foreground">
          {selected?.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {selected?.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Button href={selected?.liveUrl}>Live Demo</Button>
          <Button variant="secondary" href={selected?.repoUrl}>
            GitHub
          </Button>
        </div>
      </Modal>
    </section>
  );
};
