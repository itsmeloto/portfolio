import React from 'react';

export const Footer: React.FC = () => (
  <footer className="section-shell pb-10 pt-10 text-sm text-muted">
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#hero" className="hover:text-foreground">
          Back to top
        </a>
        <a href="#" className="hover:text-foreground">
          Privacy
        </a>
      </div>
    </div>
  </footer>
);
