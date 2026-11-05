import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Research', id: 'research' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { isDark, toggle } = useTheme();

  const scrollTo = (id: string) => {
    if (!isHome) { window.location.href = `/#${id}`; return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const linkClass = 'text-sm text-muted-foreground hover:text-foreground transition-colors link-underline pb-0.5';

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled || isOpen
          ? 'bg-background/95 backdrop-blur border-b border-border'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-foreground"
          aria-label="Home"
        >
          emeshika
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className={linkClass}>
              {l.label}
            </button>
          ))}
          <Link to="/blog" className={linkClass}>Blog</Link>
          <a
            href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes
          </a>
          <button onClick={() => scrollTo('contact')} className={linkClass}>Contact</button>
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-2 w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(v => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-[9999] flex flex-col">
          <div className="h-14 flex items-center justify-between px-6">
            <Link to="/" className="text-base font-semibold" onClick={() => setIsOpen(false)}>
              emeshika
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
          <div className="flex flex-col px-6 pt-6 gap-5">
            {NAV_LINKS.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-lg font-medium text-foreground">
                {l.label}
              </button>
            ))}
            <Link to="/blog" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
            <a
              href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
              className="text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Notes ↗
            </a>
            <button onClick={() => { scrollTo('contact'); }} className="text-left text-lg font-medium">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
