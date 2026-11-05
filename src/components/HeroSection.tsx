import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { identity } from '@/data/profile';

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden mt-16 md:mt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-web3-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-web3-secondary/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full mx-auto animate-fade-in">

          {/* Text block */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-7 md:p-10 shadow-xl w-full max-w-2xl">
            <Badge className="mb-5 bg-web3-primary/15 text-web3-primary border border-web3-primary/25 hover:bg-web3-primary/15 text-xs font-medium px-3 py-1">
              {identity.openToRoles}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">{identity.name}</span>
            </h1>

            <p className="text-sm md:text-base text-web3-primary font-medium mt-3">
              {identity.heroSubtitle}
            </p>

            <p className="text-sm text-muted-foreground mt-1 tracking-wide">
              {identity.heroTagline}
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              {identity.heroValue}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                onClick={() => scrollTo('projects')}
                className="bg-web3-primary hover:bg-web3-primary/80 text-slate-900 font-semibold"
              >
                <ArrowDown size={16} className="mr-2" />
                View Projects
              </Button>

              <Button
                variant="outline"
                className="border-slate-600 text-foreground hover:bg-slate-700/50 hover:border-slate-500"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={16} className="mr-2" />
                Contact Me
              </Button>

              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-web3-primary/10 hover:border-web3-primary/50 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>

              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-web3-primary/10 hover:border-web3-primary/50 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end w-full md:w-auto shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-web3-gradient opacity-20 blur-xl" aria-hidden="true" />
              <div className="relative border-2 border-web3-primary/30 rounded-full p-1 bg-slate-900/50">
                <Avatar className="w-56 h-56 md:w-72 md:h-72">
                  <AvatarImage
                    src="/lovable-uploads/dp.jpg"
                    alt={identity.name}
                    className="object-cover"
                    loading="eager"
                  />
                  <AvatarFallback className="text-2xl bg-web3-primary/20 text-web3-primary">HE</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
