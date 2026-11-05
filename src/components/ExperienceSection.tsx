import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/profile';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="experience">
      <div className="absolute top-20 right-20 w-72 h-72 bg-web3-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-web3-primary to-web3-secondary/30" />
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1 w-6 h-6 rounded-full bg-background border-2 border-web3-primary flex items-center justify-center">
                <Briefcase size={12} className="text-web3-primary" />
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-web3-primary font-medium">{exp.companyFull}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <br />
                    <span className="text-xs text-muted-foreground/70">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="text-web3-primary mt-1 shrink-0">▸</span>
                      {bullet}
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
