import React from 'react';
import { identity, educationHistory } from '@/data/profile';

const AboutSection = () => {
  const facts: [string, string][] = [
    ['Full name', identity.fullName],
    ['Degree', 'BSc (Hons) IT – Data Science'],
    ['University', 'SLIIT, Malabe'],
    ['Location', identity.location],
    ['Email', identity.email],
    ['Status', identity.availability],
  ];

  return (
    <section className="py-20 px-6 md:px-12" id="about">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Final-year Information Technology student at SLIIT, specializing in Data Science. My research group is building
              a multi-hazard-aware emergency logistics routing system for Sabaragamuwa Province. I construct the road network
              graph from OpenStreetMap data, attach per-segment flood and landslide risk scores, and implement Customizable
              Contraction Hierarchies so hazard weights update in real time as conditions change.
            </p>
            <p>
              I completed a 6-month internship at{' '}
              <span className="text-foreground font-medium">Gamage Recruiters (Pvt) Ltd</span> (Dec 2025 – Jun 2026), where I
              led a team of interns building data pipelines and ML models: duplicate-detection systems, SMOTE-based handling
              of imbalanced datasets, and time-series forecasting for demand planning. I'm looking for roles in data science,
              machine learning, or data engineering.
            </p>

            {/* Quick facts */}
            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm border-t border-border pt-6">
              {facts.map(([dt, dd]) => (
                <div key={dt} className="flex gap-2">
                  <dt className="shrink-0 w-24 font-medium text-foreground">{dt}</dt>
                  <dd className="text-muted-foreground break-all">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-5 text-foreground">Education</h3>
            <ol className="relative border-l border-border pl-5 space-y-6">
              {educationHistory.map((entry, i) => (
                <li key={i} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                  <p className="font-medium text-sm text-foreground leading-snug">{entry.degree}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{entry.institution}</p>
                  <p className="text-xs font-mono text-primary mt-0.5">{entry.period}</p>
                  {entry.subjects && (
                    <p className="text-xs text-muted-foreground mt-1">{entry.subjects}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
