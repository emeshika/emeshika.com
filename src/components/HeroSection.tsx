import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { identity } from '@/data/profile';

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-center pt-14 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center gap-8 md:gap-10 py-16 animate-fade-in">

          {/* Left — text */}
          <div>
            {/* Availability indicator */}
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {identity.availability}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-3">
              {identity.name}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-medium mb-1">
              {identity.heroRole}
            </p>

            <p className="text-sm text-muted-foreground font-mono mb-5 tracking-wide">
              {identity.heroTagline}
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {identity.heroValue}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ArrowDown size={15} />
                View Projects
              </button>

              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={17} />
              </a>

              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="w-48 md:w-72 overflow-hidden rounded-2xl border border-border" style={{ aspectRatio: '4/5' }}>
              <img
                src="/lovable-uploads/dp.jpg"
                alt="Hirushi Emeshika, Data Science undergraduate at SLIIT"
                width={288}
                height={360}
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
