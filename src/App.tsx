import React, { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { useSectionObserver } from './hooks/useSectionObserver';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleActiveChange = useCallback((id: string) => {
    if (sections.includes(id)) setActiveSection(id);
  }, []);

  useSectionObserver(handleActiveChange);

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="space-y-10">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
