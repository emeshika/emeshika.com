import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_SECTIONS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Research', id: 'research' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(v => !v);

  const scrollTo = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-2 px-4 md:px-12 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-background/90 md:bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-gradient" aria-label="Home">
          emeshika
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {NAV_SECTIONS.map(s => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="web3-link">
              {s.label}
            </button>
          ))}
          <Link to="/blog" className="web3-link">Blog</Link>
          <a
            href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
            className="web3-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes
          </a>
          <button onClick={() => scrollTo('contact')} className="web3-link">
            Contact
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-foreground text-3xl focus:outline-none focus:ring-2 focus:ring-web3-primary"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col items-center gap-8 p-8 w-full">
            {NAV_SECTIONS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="text-2xl font-semibold">
                {s.label}
              </button>
            ))}
            <Link to="/blog" className="text-2xl font-semibold" onClick={toggleMenu}>Blog</Link>
            <a
              href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
              className="text-2xl font-semibold"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Notes ↗
            </a>
            <button onClick={() => { scrollTo('contact'); }} className="text-2xl font-semibold">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
