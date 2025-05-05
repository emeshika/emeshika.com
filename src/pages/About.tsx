
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
                      src="/lovable-uploads/a943d65f-9f53-4099-b8ad-c7bada0fc95b.png" 
                      alt="Hirushi Emeshika Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg">
                  Hello! I'm Hirushi Emeshika, a dedicated Data Science undergraduate at Sri Lanka Institute 
                  of Information Technology (SLIIT). My passion lies in extracting meaningful insights from 
                  data and developing solutions that make a real-world impact.
                </p>
                
                <p className="text-lg">
                  As a student specializing in data science, I've developed skills in statistical analysis, 
                  machine learning algorithms, data visualization, and programming. I enjoy tackling complex 
                  problems through data-driven approaches and creating intuitive visualizations that communicate 
                  insights effectively.
                </p>
                
                <p className="text-lg">
                  My academic journey at SLIIT has provided me with both theoretical knowledge and hands-on 
                  experience through various projects. I believe in continuous learning and staying updated 
                  with the latest developments in this rapidly evolving field.
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
