
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, Code, Calendar, User, FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
              <div className="w-20 h-1 bg-web3-primary"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-lg bg-web3-gradient opacity-50 blur-lg"></div>
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-muted w-full max-w-md">
                    <img 
                      src="/lovable-uploads/dp.jpg" 
                      alt="Hirushi Emeshika Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
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
                
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <Book className="text-web3-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">BSc in Data Science</h4>
                        <p className="text-muted-foreground">Sri Lanka Institute of Information Technology (SLIIT)</p>
                        <p className="text-sm text-muted-foreground mt-1">2022 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="text-web3-primary" /> Programming
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Python</li>
                    <li>R</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="text-web3-primary" /> Data Analysis
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Statistical Analysis</li>
                    <li>Data Visualization</li>
                    <li>Exploratory Data Analysis</li>
                    <li>Feature Engineering</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <User className="text-web3-primary" /> Machine Learning
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                    <li>Neural Networks</li>
                    <li>Model Evaluation</li>
                  </ul>
                </div>
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
