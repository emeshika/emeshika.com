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
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden mt-16 md:mt-0">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-web3-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-web3-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mx-auto animate-fade-in">
          {/* Introduction Box */}
          <div className="backdrop-blur-lg bg-black/40 border border-white/10 rounded-xl p-4 md:p-8 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] w-full max-w-5xl mb-8 md:mb-0">
            <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
              Hi, I'm <span className="text-gradient">Hirushi Emeshika</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left mt-4">
              @emeshika <br/>
              Undergraduate | Data Scientist | ML & AI | Enthusiast
            </p>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed text-center md:text-left mt-4">
              Aspiring Data Scientist at SLIIT, combining coding, statistics, and machine learning to unlock insights from data, with a strong interest in AI, and data visualization.
            </p>
          </div>
          {/* Avatar on the right */}
          <div className="flex justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-web3-gradient opacity-50 blur-lg"></div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-1">
                <Avatar className="w-60 h-60 md:w-96 md:h-96 border-4 border-background">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
