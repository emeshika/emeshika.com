
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-gradient">
              emeshika
            </Link>
            <p className="mt-4 text-muted-foreground">
              Data Science Undergraduate at SLIIT University. Passionate about leveraging data 
              to create impactful solutions and sharing knowledge through my blog.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-web3-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-web3-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-web3-primary transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-web3-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-web3-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">------</li>
              <li className="text-muted-foreground">Colombo, Sri Lanka</li>
              <li className="text-web3-primary">hello@emeshika.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hirushi Emeshika. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
