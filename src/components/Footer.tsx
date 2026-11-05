import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { identity } from '@/data/profile';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-muted">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <Link to="/" className="text-xl font-bold text-gradient">
              emeshika
            </Link>
            <p className="text-sm text-muted-foreground mt-1">{identity.fullName}</p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">
              Data Science Undergraduate · ML & AI
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-web3-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-web3-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="text-muted-foreground hover:text-web3-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-muted flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>© 2026 Hirushi Emeshika. All rights reserved.</p>
          <p className="text-xs italic">AI is only as smart as your data.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
