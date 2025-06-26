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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full py-2 px-6 md:px-12 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gradient">
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
        <div className="md:hidden fixed inset-0 bg-background z-[60] pt-20">
          <div className="flex flex-col items-center gap-8 p-8">
            <button onClick={() => scrollToSection('about')} className="text-xl">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-xl">Projects</button>
            <a
              href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
              className="text-xl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Notes
            </a>
            <a
              href="https://app.gitbook.com/o/pUnQytAcy3IqtzDnPUnC/s/0FndmxzFFmyCwRJGQ8zO/getting-started/quickstart"
              className="text-xl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xl"
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
