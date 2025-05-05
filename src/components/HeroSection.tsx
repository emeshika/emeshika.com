
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle settings
    const particleCount = 80;
    const particles: { x: number; y: number; radius: number; color: string; speedX: number; speedY: number }[] = [];
    
    // Colors for particles
    const colors = ['#8B5CF6', '#33C3F0', '#ffffff'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      });
    }
    
    // Function to draw particles and connections
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw connections between particles
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 100})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-web3-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-web3-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl animate-fade-in">
          <div className="md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-web3-gradient opacity-50 blur-lg"></div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-1">
                <Avatar className="w-56 h-56 border-4 border-background">
                  <AvatarImage 
                    src="/lovable-uploads/a943d65f-9f53-4099-b8ad-c7bada0fc95b.png"
                    alt="Hirushi Emeshika"
                    className="object-cover"
                  />
                  <AvatarFallback>HE</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 md:order-1">
            <div className="backdrop-blur-lg bg-black/40 border border-white/10 rounded-xl p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]">
              <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
                Hi, I'm <span className="text-gradient">Hirushi Emeshika</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center md:text-left mt-4">
                Data Science Undergraduate at SLIIT University, creating impactful projects and exploring the frontiers of AI and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                <Button className="backdrop-blur-md bg-web3-primary/80 hover:bg-web3-primary text-white px-6 py-6 border border-white/10">
                  <Link to="/projects" className="flex items-center gap-2">
                    View My Projects <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" className="backdrop-blur-md border-web3-secondary text-web3-secondary hover:bg-web3-secondary/20 hover:text-web3-secondary px-6 py-6">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn About Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
