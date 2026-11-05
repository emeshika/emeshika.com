import React from 'react';
import { Github } from 'lucide-react';
import { research } from '@/data/profile';

const ResearchSection = () => {
  return (
    <section className="py-20 px-6 md:px-12" id="research">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Research</h2>

        <div className="border border-border rounded-xl p-7 md:p-10 max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug max-w-2xl">
                {research.title}
              </h3>
              <p className="text-sm text-primary mt-1">{research.myRole}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{research.team} · {research.institution}</p>
            </div>
            <span className="shrink-0 text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1 h-fit">
              {research.status}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{research.description}</p>

          <ul className="space-y-2 mb-6">
            {research.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1 shrink-0 leading-none">▸</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {research.tech.map(t => (
              <span key={t} className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          {research.repoUrl && (
            <a
              href={research.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Github size={15} /> View on GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
