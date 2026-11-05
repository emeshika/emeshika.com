import React from 'react';
import { skillGroups } from '@/data/profile';

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12" id="skills">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Skills</h2>
        <p className="text-sm text-muted-foreground mb-10">Tools I use to build data and ML systems</p>

        <dl className="divide-y divide-border max-w-3xl">
          {skillGroups.map(group => (
            <div key={group.label} className="py-4 flex flex-col sm:flex-row sm:gap-10">
              <dt className="shrink-0 w-48 text-sm font-medium text-muted-foreground mb-2 sm:mb-0 sm:pt-0.5">
                {group.label}
              </dt>
              <dd className="text-sm text-foreground leading-relaxed">
                {group.skills.join(' · ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default SkillsSection;
