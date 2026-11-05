import React from 'react';
import { experiences } from '@/data/profile';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30" id="experience">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map(exp => (
            <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              {/* Date column */}
              <div className="shrink-0">
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{exp.period}</p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">{exp.type}</p>
              </div>

              {/* Details column */}
              <div>
                <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary mb-3">{exp.companyFull}</p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1 shrink-0 leading-none">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
