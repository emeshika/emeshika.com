
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full py-4 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gradient">
          emeshika
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="web3-link">Home</Link>
          <Link to="/about" className="web3-link">About</Link>
          <Link to="/projects" className="web3-link">Projects</Link>
          <Link to="/blog" className="web3-link">Blog</Link>
          <Button variant="outline" className="border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white transition-colors duration-300">
            <Link to="/contact">Get in Touch</Link>
          </Button>
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
        <div className="md:hidden fixed inset-0 bg-background z-50 pt-20">
          <div className="flex flex-col items-center gap-8 p-8">
            <Link to="/" className="text-xl" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-xl" onClick={toggleMenu}>About</Link>
            <Link to="/projects" className="text-xl" onClick={toggleMenu}>Projects</Link>
            <Link to="/blog" className="text-xl" onClick={toggleMenu}>Blog</Link>
            <Button variant="outline" className="w-full border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white">
              <Link to="/contact" onClick={toggleMenu}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
