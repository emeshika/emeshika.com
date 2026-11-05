import React from 'react';
import { skillGroups } from '@/data/profile';

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12" id="skills">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Skills</h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          {skillGroups.map(group => (
            <div key={group.label} className="flex gap-4">
              <dt className="shrink-0 w-40 pt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default SkillsSection;
