import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full py-2 px-4 md:px-12 transition-all duration-300 ${
      isScrolled || isMenuOpen
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
        : 'bg-background/90 md:bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-gradient">
          emeshika
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="web3-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="web3-link">Projects</button>
          <a
            href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
            className="web3-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes
          </a>
          <a
            href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
            className="web3-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="web3-link"
          >
            Contact
          </button>
        </div>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] pt-20 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="flex flex-col items-center gap-8 p-8 w-full">
            <button onClick={() => scrollToSection('about')} className="text-2xl font-semibold text-white">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-2xl font-semibold text-white">Projects</button>
            <a
              href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
              className="text-2xl font-semibold text-white"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Notes
            </a>
            <a
              href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
              className="text-2xl font-semibold text-white"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-2xl font-semibold text-white"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
