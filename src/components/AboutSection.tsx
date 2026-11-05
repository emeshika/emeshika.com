import React from 'react';
import { educationHistory } from '@/data/profile';

const AboutSection = () => {
  const bsc = educationHistory.find(e => e.degree.startsWith('BSc'));

  return (
    <section className="py-20 px-6 md:px-12" id="about">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Bio */}
          <div className="lg:col-span-3 text-muted-foreground leading-relaxed">
            <p>
              Final-year Data Science undergraduate at SLIIT and part of the CoEAI research cluster.
              I'm most interested in building practical ML systems: cleaning messy real-world data, engineering
              features that hold up outside a notebook, and taking models from experiments to reproducible
              pipelines. I'm looking for data science, machine learning and data engineering roles.
            </p>
          </div>

          {/* Education — BSc only */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-5 text-foreground">Education</h3>
            {bsc && (
              <ol className="relative border-l border-border pl-5">
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                  <p className="font-medium text-sm text-foreground leading-snug">{bsc.degree}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{bsc.institution}</p>
                  <p className="text-xs font-mono text-primary mt-0.5">{bsc.period}</p>
                </li>
              </ol>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
