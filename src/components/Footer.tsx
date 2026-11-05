import React from 'react';
import { identity } from '@/data/profile';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© 2026 {identity.fullName}</p>
        <div className="flex items-center gap-4">
          <a href={identity.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${identity.email}`} className="hover:text-foreground transition-colors">
            {identity.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
