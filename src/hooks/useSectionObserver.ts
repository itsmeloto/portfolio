import { useEffect } from 'react';

export const useSectionObserver = (onChange: (id: string) => void) => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]')) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) onChange(id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onChange]);
};
