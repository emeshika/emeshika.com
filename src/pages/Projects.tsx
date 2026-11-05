import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import { projects } from '@/data/profile';

const roleBadgeClass = (role?: string) => {
  if (!role) return '';
  if (role === 'Project Lead') return 'bg-web3-primary/20 text-web3-primary border-web3-primary/30';
  return 'bg-web3-secondary/20 text-web3-secondary border-web3-secondary/30';
};

const Projects = () => {
  const featured = projects.filter(p => p.visible && p.category === 'featured');
  const other = projects.filter(p => p.visible && p.category === 'other');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 bg-grid">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Projects</span>
              </h1>
              <div className="w-20 h-1 bg-web3-primary" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                Data science, ML, and software projects from internship, research, and university work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {featured.map(p => (
                <div key={p.id} className="neo-blur rounded-xl p-6 gradient-border card-hover flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {p.role && (
                      <Badge variant="outline" className={`text-xs ${roleBadgeClass(p.role)}`}>
                        {p.role}
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-lg font-bold leading-snug">{p.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.problem}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <Badge key={t} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-web3-primary hover:underline"
                    >
                      <Github size={14} /> View on GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 text-muted-foreground">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {other.map(p => (
                <div key={p.id} className="neo-blur rounded-lg p-5 gradient-border card-hover flex flex-col gap-3">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.problem}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map(t => (
                      <Badge key={t} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-web3-primary hover:underline"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
