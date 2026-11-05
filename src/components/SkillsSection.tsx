import React from 'react';
import { skillGroups } from '@/data/profile';

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="skills">
      <div className="absolute top-20 left-20 w-72 h-72 bg-web3-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills <span className="text-gradient">&amp; Tools</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(group => (
            <div key={group.label} className="neo-blur rounded-xl p-6 gradient-border">
              <h3 className="text-sm font-semibold text-web3-primary uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80 hover:border-web3-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
