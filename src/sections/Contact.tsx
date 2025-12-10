import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name) nextErrors.name = 'Name is required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required';
    if (!form.subject) nextErrors.subject = 'Subject is required';
    if (!form.message) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm(initialState);
  };

  return (
    <section id="contact" data-section className="section-shell">
      <SectionHeading eyebrow="Contact" title="Let’s build something exceptional" description="Drop a note about your project or collaboration idea." />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 text-muted">
          <p>
            I’d love to hear about what you’re building. Tell me about your goals and timelines, and we’ll design a path forward
            together.
          </p>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Email</p>
            <a className="text-foreground underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Location</p>
            <p className="text-foreground">{contact.location}</p>
          </div>
          <div className="flex gap-3">
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          onSubmit={handleSubmit}
          className="card-surface md:col-span-2"
        >
          <div className="grid gap-4 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="mt-1 text-xs text-pink-500">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-pink-500">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && <p id="subject-error" className="mt-1 text-xs text-pink-500">{errors.subject}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="mt-1 text-xs text-pink-500">{errors.message}</p>}
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit">Send message</Button>
              {submitted && <p className="text-sm text-primary">Message sent. I’ll reply within 1-2 business days.</p>}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
