import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-6 md:px-12 border-t border-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-gradient">
              emeshika
            </Link>
            <p className="mt-0 text-sm text-muted-foreground">
              Hirushi Emeshika
            </p>
          </div>
          <div className="md:col-span-2 flex justify-end items-end text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hirushi Emeshika. All rights reserved.<br />
              <span className="text-xs">
                Undergraduate | Data Scientist | ML & AI | Enthusiast
              </span>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-muted flex flex-col items-center">
          <p className="text-sm text-muted-foreground mt-2 text-center">
            AI is only as smart as your data 📊. <br />
            Last updated : {currentYear}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
