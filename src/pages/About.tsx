import React from 'react';
import { Book, Code, User, Briefcase, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { identity, skillGroups, experiences, educationHistory } from '@/data/profile';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 bg-grid">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Me</span>
              </h1>
              <div className="w-20 h-1 bg-web3-primary" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-lg bg-web3-gradient opacity-50 blur-lg" />
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-muted w-full max-w-md">
                    <img
                      src="/lovable-uploads/dp.jpg"
                      alt={`${identity.name} profile photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a third-year BSc (Hons) IT Data Science student at SLIIT, affiliated with the Center of Excellence in AI (CoEAI).
                  My final-year project focuses on disaster risk routing — specifically constructing the road network graph for Sabaragamuwa Province
                  using OpenStreetMap and graph-based algorithms.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I recently completed a 6-month Data Science internship at Gamage Recruiters (Pvt) Ltd (Dec 2025 – May 2026), where I built
                  predictive models, automated reporting pipelines, and worked with recruitment data at scale.
                  I'm looking for roles in data science, ML engineering, and data analytics.
                </p>

                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="text-web3-primary" size={20} /> Education
                  </h3>
                  <div className="relative pl-5 space-y-0 border-l-2 border-web3-primary/25">
                    {educationHistory.map((entry, i) => (
                      <div key={i} className="relative pb-5 last:pb-0">
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-web3-primary border-2 border-background" />
                        <div className="bg-muted rounded-lg p-4 ml-3">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                            <h4 className="font-medium leading-snug">{entry.degree}</h4>
                            <span className="text-xs text-web3-primary font-medium shrink-0">{entry.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{entry.institution}</p>
                          {entry.subjects && (
                            <p className="text-xs text-muted-foreground mt-1.5">
                              {entry.subjects}
                              {entry.grade && <span className="ml-1.5 text-web3-primary font-medium">· {entry.grade}</span>}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  {experiences.map(exp => (
                    <div key={exp.id} className="bg-muted p-4 rounded-lg flex items-start gap-4">
                      <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <Briefcase className="text-web3-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{exp.role}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period} · {exp.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skillGroups.map(group => (
                  <div key={group.label} className="bg-muted p-6 rounded-lg">
                    <h3 className="text-base font-semibold mb-3 text-foreground">{group.label}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs font-normal">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
