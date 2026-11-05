import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { identity, skillGroups, experiences, educationHistory } from '@/data/profile';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-14">
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-12">About Me</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="rounded-xl overflow-hidden aspect-square bg-muted w-full max-w-sm">
                  <img
                    src="/lovable-uploads/dp.jpg"
                    alt={`${identity.name} profile photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Final-year Information Technology student at SLIIT, specializing in Data Science. My research group
                  is building a multi-hazard-aware emergency logistics routing system for Sabaragamuwa Province — I construct
                  the road network graph from OpenStreetMap data, attach per-segment flood and landslide risk scores, and
                  implement Customizable Contraction Hierarchies so hazard weights update in real time.
                </p>
                <p>
                  I completed a 6-month internship at{' '}
                  <span className="text-foreground font-medium">Gamage Recruiters (Pvt) Ltd</span> (Dec 2025 – Jun 2026),
                  where I led a team of interns building data pipelines and ML models: duplicate-detection systems,
                  SMOTE-based handling of imbalanced datasets, and time-series forecasting for demand planning.
                </p>

                <div className="pt-4">
                  <h3 className="text-base font-semibold mb-4 text-foreground">Education</h3>
                  <ol className="relative border-l border-border pl-5 space-y-5">
                    {educationHistory.map((entry, i) => (
                      <li key={i} className="relative">
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                        <p className="font-medium text-sm text-foreground">{entry.degree}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{entry.institution}</p>
                        <p className="text-xs font-mono text-primary mt-0.5">{entry.period}</p>
                        {entry.subjects && (
                          <p className="text-xs text-muted-foreground mt-1">{entry.subjects}</p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-4">
                  <h3 className="text-base font-semibold mb-4 text-foreground">Experience</h3>
                  {experiences.map(exp => (
                    <div key={exp.id} className="border border-border rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">{exp.role}</p>
                      <p className="text-xs text-primary mt-0.5">{exp.companyFull}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 font-mono">{exp.period} · {exp.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold mb-8">Skills</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {skillGroups.map(group => (
                  <div key={group.label} className="flex gap-4">
                    <dt className="shrink-0 w-40 pt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {group.label}
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {group.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs font-normal">{skill}</Badge>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
