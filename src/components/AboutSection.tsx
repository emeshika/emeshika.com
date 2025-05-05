
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-web3-gradient opacity-30 blur-lg"></div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-1">
                <Avatar className="w-48 h-48 border-4 border-background">
                  <AvatarImage 
                    src="/lovable-uploads/a943d65f-9f53-4099-b8ad-c7bada0fc95b.png" 
                    alt="Hirushi Emeshika"
                    className="object-cover"
                  />
                  <AvatarFallback>HE</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism rounded-xl p-6 space-y-6">
            <p className="text-lg">
              I'm a passionate Data Science undergraduate at Sri Lanka Institute of Information Technology (SLIIT), 
              dedicated to leveraging data to solve complex problems and create meaningful insights.
            </p>
            <p className="text-lg">
              With a strong foundation in statistical analysis, machine learning, and data visualization, 
              I strive to bridge the gap between raw data and actionable intelligence.
            </p>
            <p className="text-lg">
              My academic journey has equipped me with both theoretical knowledge and practical experience, 
              allowing me to approach data challenges with creativity and analytical rigor.
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
              <p className="text-muted-foreground">SLIIT University, specializing in Data Science</p>
            </CardContent>
          </Card>
          
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Book className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">Undergraduate in Data Science</p>
            </CardContent>
          </Card>
          
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Code className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <p className="text-muted-foreground">Data Analysis, Machine Learning, Visualization</p>
            </CardContent>
          </Card>
          
          <Card className="neo-blur border-none card-hover gradient-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-web3-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">University Projects, Research Work</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
