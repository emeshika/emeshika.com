import React from 'react';
import { Book, Briefcase, Code, User, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { educationHistory } from '@/data/profile';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="absolute top-20 left-40 w-64 h-64 bg-web3-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-web3-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="flex justify-center">
          <div className="glass-morphism rounded-xl p-8 md:p-12 w-full max-w-7xl space-y-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Final-year Information Technology student at SLIIT, specializing in Data Science. My final-year research builds a
              multi-hazard-aware emergency logistics routing system for Sabaragamuwa Province — I construct the road network graph
              from OSM data, attach per-segment flood and landslide risk scores, and implement Customizable Contraction Hierarchies
              so hazard weights can be updated in real time as conditions change.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              During a 6-month internship at{' '}
              <span className="text-web3-primary font-medium">Gamage Recruiters (Pvt) Ltd</span>, I led a team of interns
              building data pipelines and ML models: duplicate-detection systems, SMOTE-based handling of imbalanced datasets,
              and time-series forecasting for demand planning. I'm looking for roles in data science, machine learning, or
              data engineering.
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/15 rounded-xl flex items-center justify-center mb-4">
                <User className="text-web3-primary" size={22} />
              </div>
              <h3 className="text-base font-semibold mb-2">Background</h3>
              <p className="text-muted-foreground text-sm">
                IT (Data Science) undergrad at SLIIT, Malabe, Sri Lanka.
              </p>
            </CardContent>
          </Card>

          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/15 rounded-xl flex items-center justify-center mb-4">
                <Book className="text-web3-primary" size={22} />
              </div>
              <h3 className="text-base font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground text-sm">
                BSc (Hons) IT — Data Science, SLIIT · A/L Physical Science, 2021
              </p>
            </CardContent>
          </Card>

          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/15 rounded-xl flex items-center justify-center mb-4">
                <Code className="text-web3-primary" size={22} />
              </div>
              <h3 className="text-base font-semibold mb-2">Core Skills</h3>
              <p className="text-muted-foreground text-sm">
                Python · SQL · scikit-learn · TensorFlow · NLP · Kafka · Spark · Airflow · Power BI · Azure
              </p>
            </CardContent>
          </Card>

          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/15 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="text-web3-primary" size={22} />
              </div>
              <h3 className="text-base font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm">
                Data Science Intern — Gamage Recruiters (Pvt) Ltd, Dec 2025 – May 2026. Led data pipelines and forecasting models.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education timeline */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-web3-primary" size={24} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="relative pl-6 space-y-0 border-l-2 border-web3-primary/25 ml-3">
            {educationHistory.map((entry, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-web3-primary border-2 border-background" />

                <div className="glass-morphism rounded-xl p-5 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground leading-snug">{entry.degree}</h4>
                    <span className="text-xs text-web3-primary font-medium shrink-0 mt-0.5">{entry.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.institution}</p>
                  {entry.subjects && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {entry.subjects}
                      {entry.grade && <span className="ml-2 text-web3-primary font-medium">· {entry.grade}</span>}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
