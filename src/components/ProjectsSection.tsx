import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { projects } from '@/data/profile';

const featuredProjects = projects.filter(p => p.visible && p.category === 'featured');
const otherProjects = projects.filter(p => p.visible && p.category === 'other');

const roleBadgeClass = (role?: string) => {
  if (!role) return '';
  if (role === 'Project Lead') return 'bg-web3-primary/20 text-web3-primary border-web3-primary/30';
  return 'bg-web3-secondary/20 text-web3-secondary border-web3-secondary/30';
};

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="projects">
      <div className="absolute top-40 right-10 w-80 h-80 bg-web3-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-web3-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        {/* Featured / data-first projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map(project => (
            <Card key={project.id} className="neo-blur border-none overflow-hidden card-hover gradient-border flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.role && (
                    <Badge variant="outline" className={`text-xs ${roleBadgeClass(project.role)}`}>
                      {project.role}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.problem}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.github && (
                <CardFooter className="pt-0">
                  <Button asChild variant="ghost" className="text-web3-primary hover:bg-web3-primary/10 p-0 h-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm">
                      <Github size={14} /> View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {/* Other projects — compact row */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {otherProjects.map(project => (
                <div
                  key={project.id}
                  className="neo-blur rounded-lg p-4 gradient-border flex flex-col gap-3 card-hover"
                >
                  <h4 className="font-semibold text-sm">{project.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1">{project.problem}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(t => (
                      <Badge key={t} variant="outline" className="bg-web3-primary/10 text-web3-primary border-none text-xs px-1.5 py-0">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-web3-primary hover:underline"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex justify-center">
          <Button asChild variant="outline" className="border-web3-primary text-web3-primary hover:bg-web3-primary/20">
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
