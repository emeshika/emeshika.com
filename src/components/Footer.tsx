import React from 'react';
import { identity } from '@/data/profile';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-6 px-6 md:px-12 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© 2026 {identity.fullName}</p>
        <div className="flex items-center gap-5">
          <span>Last updated: Nov 2026</span>
          <button
            onClick={scrollTop}
            className="hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
