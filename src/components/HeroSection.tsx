import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { identity } from '@/data/profile';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setDimensions();
    window.addEventListener('resize', setDimensions);

    const colors = ['#8B5CF6', '#33C3F0', '#ffffff'];
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));

    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        particles.forEach(other => {
          const d = Math.hypot(p.x - other.x, p.y - other.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,92,246,${1 - d / 100})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden mt-16 md:mt-0">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />

      <div className="absolute top-20 right-20 w-64 h-64 bg-web3-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-web3-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mx-auto animate-fade-in">

          {/* Text block */}
          <div className="backdrop-blur-lg bg-black/40 border border-white/10 rounded-xl p-6 md:p-10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] w-full max-w-2xl">
            {/* Open-to-roles badge */}
            <Badge className="mb-4 bg-web3-primary/20 text-web3-primary border border-web3-primary/30 hover:bg-web3-primary/20 text-xs font-medium px-3 py-1">
              {identity.openToRoles}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold">
              Hi, I'm{' '}
              <span className="text-gradient">{identity.name}</span>
            </h1>

            <p className="text-sm md:text-base text-web3-primary font-medium mt-3">
              {identity.heroSubtitle}
            </p>

            <p className="text-sm md:text-sm text-muted-foreground mt-1 tracking-wide">
              {identity.heroTagline}
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
              {identity.heroValue}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                onClick={() => scrollTo('projects')}
                className="bg-web3-primary hover:bg-web3-primary/80 text-white"
              >
                <ArrowDown size={16} className="mr-2" />
                View Projects
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-web3-primary/50 text-foreground hover:bg-web3-primary/10"
              >
                <a href={identity.cvPath} download>
                  <Download size={16} className="mr-2" />
                  Download CV
                </a>
              </Button>

              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 bg-white/5 hover:bg-web3-primary/10 hover:border-web3-primary/50 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>

              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 bg-white/5 hover:bg-web3-primary/10 hover:border-web3-primary/50 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end w-full md:w-auto mt-6 md:mt-0 shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-web3-gradient opacity-50 blur-lg" aria-hidden="true" />
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-1">
                <Avatar className="w-56 h-56 md:w-80 md:h-80 border-4 border-background">
                  <AvatarImage
                    src="/lovable-uploads/dp.jpg"
                    alt="Hirushi Emeshika"
                    className="object-cover"
                    loading="eager"
                  />
                  <AvatarFallback>HE</AvatarFallback>
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
