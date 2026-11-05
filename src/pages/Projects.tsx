import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/profile';

const Projects = () => {
  const featured = projects.filter(p => p.visible && p.category === 'featured');
  const other = projects.filter(p => p.visible && p.category === 'other');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-14">
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-1">Projects</h1>
                <p className="text-muted-foreground text-sm">
                  Data science, ML, and software engineering — internship, research, and university work.
                </p>
              </div>
              <a
                href="https://github.com/emeshika"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                All repos <ExternalLink size={13} />
              </a>
            </div>

            {/* Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {featured.map(p => (
                <a
                  key={p.id}
                  href={p.repoUrl ?? '#'}
                  target={p.repoUrl ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`group block border border-border rounded-xl p-6 hover:border-primary/40 hover:bg-muted/50 transition-colors ${!p.repoUrl ? 'pointer-events-none' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    {p.repoUrl && (
                      <Github size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                    )}
                  </div>
                  {p.role && <p className="text-xs text-primary mb-2">{p.role}</p>}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.problem}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Other */}
            {other.length > 0 && (
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Other Projects
                </h2>
                <ul className="divide-y divide-border">
                  {other.map(p => (
                    <li key={p.id} className="py-4 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-medium text-foreground">{p.title}</span>
                          {p.tags.slice(0, 2).map(t => (
                            <span key={t} className="text-xs px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{p.problem}</p>
                      </div>
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-xs text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
