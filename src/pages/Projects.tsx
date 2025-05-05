
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "Predictive Analysis System",
    description: "A machine learning model that predicts student performance based on various factors and historical data.",
    longDescription: "This project implements a comprehensive predictive analytics system that leverages machine learning algorithms to forecast student academic performance. By analyzing historical data points such as previous grades, attendance records, and demographic information, the model provides actionable insights for educators to identify at-risk students and implement timely interventions.",
    tags: ["Python", "Scikit-Learn", "Data Analysis", "Pandas"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    longDescription: "This dashboard application provides an intuitive interface for exploring and visualizing complex datasets. Built with modern web technologies, it features interactive charts, customizable filters, and real-time data updates. The system allows users to derive insights quickly through visual representation of data patterns and trends.",
    tags: ["React", "D3.js", "Tableau", "Data Visualization"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool that analyzes sentiment from social media data to extract insights on public opinion.",
    longDescription: "This natural language processing application analyzes text data from social media platforms to determine sentiment and extract meaningful insights. Using advanced NLP techniques, the tool categorizes content as positive, negative, or neutral, and identifies key topics and trends in public discourse. It's particularly useful for brand monitoring and market research.",
    tags: ["NLP", "Python", "NLTK", "Machine Learning"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 4,
    title: "Time Series Forecasting Model",
    description: "Advanced forecasting model that predicts future trends based on historical time series data.",
    longDescription: "This project implements sophisticated time series forecasting models to predict future values based on historical patterns. The system incorporates techniques such as ARIMA, Prophet, and LSTM neural networks to handle seasonality, trends, and irregularities in the data. Applications include financial forecasting, demand prediction, and resource planning.",
    tags: ["Time Series Analysis", "Python", "Forecasting", "Statistical Models"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "Recommendation System",
    description: "Personalized recommendation system using collaborative filtering and content-based approaches.",
    longDescription: "This recommendation engine combines collaborative filtering and content-based techniques to deliver highly personalized suggestions to users. By analyzing user behavior patterns and item characteristics, the system provides relevant recommendations that improve user engagement and satisfaction. The project demonstrates the practical application of recommendation algorithms in real-world scenarios.",
    tags: ["Collaborative Filtering", "Python", "Machine Learning", "Analytics"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 6,
    title: "Data Cleaning Toolkit",
    description: "A comprehensive toolkit for automated data cleaning, normalization, and preparation.",
    longDescription: "This toolkit addresses the often time-consuming process of data preparation by providing automated tools for cleaning, normalizing, and transforming raw datasets. Features include handling missing values, detecting outliers, standardizing formats, and resolving inconsistencies. The project significantly reduces the time required for data preprocessing in analytical workflows.",
    tags: ["Data Cleaning", "Python", "Data Preparation", "ETL"],
    link: "#",
    github: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 bg-grid">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Projects</span>
              </h1>
              <div className="w-20 h-1 bg-web3-primary"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore my data science projects from university coursework and personal research. 
                Each project demonstrates various aspects of data analysis, visualization, and machine learning.
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-8">
                {projects.filter(project => project.featured).map(project => (
                  <Card key={project.id} className="border-none bg-muted overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      <div className="md:col-span-2 bg-gradient-to-br from-web3-primary/20 to-web3-secondary/20 p-6 flex items-center justify-center">
                        <div className="text-4xl font-bold text-web3-primary opacity-30">{project.id}</div>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <CardHeader className="px-0 pt-0">
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                          <CardDescription className="text-base">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 py-4">
                          <p className="text-muted-foreground mb-4">
                            {project.longDescription}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="px-0 pb-0 flex gap-4">
                          <Button className="bg-web3-primary hover:bg-web3-primary/80 text-white">
                            <a href={project.link} className="flex items-center gap-2">
                              View Project <ArrowRight size={16} />
                            </a>
                          </Button>
                          <Button variant="outline" className="border-muted-foreground">
                            <a href={project.github} className="flex items-center gap-2">
                              <Github size={16} /> GitHub
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(project => !project.featured).map(project => (
                  <Card key={project.id} className="bg-card border-none overflow-hidden card-hover">
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" className="text-web3-primary hover:text-web3-primary hover:bg-web3-primary/10 p-0">
                        <a href={project.link} className="flex items-center gap-2">
                          <ExternalLink size={14} /> Demo
                        </a>
                      </Button>
                      <Button variant="ghost" className="text-web3-primary hover:text-web3-primary hover:bg-web3-primary/10 p-0">
                        <a href={project.github} className="flex items-center gap-2">
                          <Github size={14} /> Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
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

export default Projects;
