
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Project data
const projects = [
  {
    id: 1,
    title: "Predictive Analysis System",
    description: "A machine learning model that predicts student performance based on various factors and historical data.",
    tags: ["Python", "Scikit-Learn", "Data Analysis"],
    link: "/projects/predictive-analysis"
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    tags: ["React", "D3.js", "Tableau"],
    link: "/projects/dashboard"
  },
  {
    id: 3,
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool that analyzes sentiment from social media data to extract insights on public opinion.",
    tags: ["NLP", "Python", "NLTK"],
    link: "/projects/sentiment-analysis"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30 relative overflow-hidden" id="projects">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-web3-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-web3-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.id} className="neo-blur border-none overflow-hidden card-hover gradient-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-web3-primary hover:text-web3-primary hover:bg-web3-primary/10 p-0">
                  <Link to={project.link} className="flex items-center gap-2">
                    View Project <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="glass-morphism border-web3-primary text-web3-primary hover:bg-web3-primary/20 hover:text-web3-primary">
            <Link to="/projects" className="flex items-center gap-2">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
