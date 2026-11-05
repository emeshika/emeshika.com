import React from 'react';
import { FlaskConical, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { research } from '@/data/profile';

const ResearchSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/20 relative overflow-hidden" id="research">
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-web3-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Research <span className="text-gradient">/ FYP</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="glass-morphism rounded-xl p-8 md:p-10 max-w-4xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <FlaskConical className="text-web3-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold leading-snug">{research.title}</h3>
                <p className="text-web3-primary text-sm font-medium mt-1">{research.myRole}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{research.team}</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/20">
                {research.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{research.institution}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{research.description}</p>

          <ul className="space-y-3 mb-6">
            {research.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-web3-primary mt-0.5 shrink-0">▸</span>
                {b}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {research.tech.map(t => (
              <Badge key={t} variant="outline" className="bg-web3-secondary/10 text-web3-secondary border-web3-secondary/30">
                {t}
              </Badge>
            ))}
          </div>

          {research.github && (
            <Button asChild variant="outline" className="border-web3-primary/50 text-web3-primary hover:bg-web3-primary/10">
              <a href={research.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} /> View on GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
