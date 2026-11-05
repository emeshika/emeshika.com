import React from 'react';
import { Book, Briefcase, Code, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="absolute top-20 left-40 w-64 h-64 bg-web3-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-web3-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="flex justify-center">
          <div className="glass-morphism rounded-xl p-8 md:p-12 w-full max-w-7xl space-y-5">
            <p className="text-lg leading-relaxed">
              Final-year Information Technology student at SLIIT, specializing in Data Science, affiliated with the{' '}
              <span className="text-web3-primary font-medium">CoEAI research cluster</span>. My final-year research builds a
              disaster-risk road routing system for Sabaragamuwa Province — I construct the road network graph from OSM data,
              attach per-segment flood and landslide risk scores, and implement Customizable Contraction Hierarchies so hazard
              weights can be updated in real time as conditions change.
            </p>
            <p className="text-lg leading-relaxed">
              During a 7-month internship at{' '}
              <span className="text-web3-primary font-medium">Gamage Recruiters (Pvt) Ltd</span>, I led a team of interns
              building data pipelines and ML models: duplicate-detection systems, SMOTE-based handling of imbalanced datasets,
              and time-series forecasting for demand planning. I'm looking for roles in data science, machine learning, or
              data engineering — places where I can work on production data systems, not just notebooks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <User className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Background</h3>
              <p className="text-muted-foreground text-sm">
                IT (Data Science) undergrad at SLIIT, Malabe, Sri Lanka. Part of the CoEAI research cluster.
              </p>
            </CardContent>
          </Card>

          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Book className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground text-sm">
                BSc (Hons) in IT, specialization Data Science — SLIIT, Jul 2023 – Present (final year)
              </p>
            </CardContent>
          </Card>

          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Code className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Core Skills</h3>
              <p className="text-muted-foreground text-sm">
                Python · SQL · scikit-learn · TensorFlow · NLP · Kafka · Spark · Airflow · Power BI · Azure
              </p>
            </CardContent>
          </Card>

          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm">
                Data Science Intern — Gamage Recruiters (Pvt) Ltd, Dec 2025 – Jun 2026. Led intern team, built data pipelines and forecasting models.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
