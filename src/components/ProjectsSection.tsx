import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/profile';

const featured = projects.filter(p => p.visible && p.category === 'featured');
const other = projects.filter(p => p.visible && p.category === 'other');

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30" id="projects">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          <a
            href="https://github.com/emeshika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            More on GitHub <ExternalLink size={13} />
          </a>
        </div>

        {/* Featured — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {featured.map(p => (
            <a
              key={p.id}
              href={p.repoUrl ?? '#'}
              target={p.repoUrl ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group block border border-border rounded-xl p-6 hover:border-primary/40 hover:bg-muted/50 transition-colors ${!p.repoUrl ? 'pointer-events-none' : ''}`}
              aria-label={p.repoUrl ? `View ${p.title} on GitHub` : p.title}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                {p.repoUrl && (
                  <Github size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                )}
              </div>
              {p.role && (
                <p className="text-xs text-primary mb-2">{p.role}</p>
              )}
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.problem}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Other — compact list */}
        {other.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Other Projects</h3>
            <ul className="divide-y divide-border">
              {other.map(p => (
                <li key={p.id} className="py-4 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-foreground">{p.title}</span>
                      <div className="flex flex-wrap gap-1">
                        {p.tags.slice(0, 2).map(t => (
                          <span key={t} className="text-xs px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.problem}</p>
                  </div>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs text-primary hover:underline inline-flex items-center gap-1"
                      aria-label={`GitHub repo for ${p.title}`}
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
  );
};

export default ProjectsSection;
