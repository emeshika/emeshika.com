import React from 'react';
import { Book, Code, User, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-40 w-64 h-64 bg-web3-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-web3-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary"></div>
        </div>
        
        <div className="flex justify-center">
          <div className="glass-morphism rounded-xl p-8 md:p-12 w-full max-w-7xl space-y-6">
            <p className="text-lg">
              Hello! I'm Hirushi Emeshika, a dedicated and enthusiastic Data Science undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). 
              I am deeply passionate about uncovering patterns in data, extracting actionable insights, and developing intelligent solutions that make a real-world impact.
            </p>
            <p className="text-lg">
                  With a strong foundation in statistical analysis, machine learning, data visualization, and programming, I thrive on solving complex, data-driven problems. 
                  I enjoy turning raw, unstructured data into clear, valuable narratives through intuitive visualizations and models that speak to both technical and non-technical audiences.
                </p>

                <p className="text-lg">
                  Throughout my academic journey, I have engaged in a variety of hands-on projects — from developing full-stack applications to implementing machine 
                  learning pipelines — which have strengthened my practical skills and reinforced my commitment to real-world problem solving.
                </p>

                <p className="text-lg">
                  I'm always eager to explore emerging technologies in AI, big data, and analytics, and I believe in lifelong learning to stay ahead in this fast-evolving field. 
                  Whether working independently or collaborating within a team, I bring creativity, curiosity, and a problem-solving mindset to every challenge I tackle
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
              <p className="text-muted-foreground">Data Science undergraduate at the Sri Lanka Institute of Information Technology (SLIIT).</p>
            </CardContent>
          </Card>
          
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Book className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">BSc (Hons) specializing in Data Science.</p>
            </CardContent>
          </Card>
          
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Code className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <p className="text-muted-foreground">Data Analysis, Machine Learning Algorithms, Predictive Modeling, Data Visualization, Mobile App Development, UI/UX Design</p>
            </CardContent>
          </Card>
          
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Collaborated on academic projects using Git and Agile practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
