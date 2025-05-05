
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introduction to Data Science: A Beginner's Guide",
    excerpt: "Exploring the fundamentals of data science and how beginners can start their journey into this exciting field.",
    date: "May 2, 2025",
    category: "Data Science",
    link: "/blog/intro-to-data-science"
  },
  {
    id: 2,
    title: "Machine Learning Models Every Data Scientist Should Know",
    excerpt: "A comprehensive overview of essential machine learning models that form the backbone of modern data science applications.",
    date: "April 28, 2025",
    category: "Machine Learning",
    link: "/blog/essential-ml-models"
  },
  {
    id: 3,
    title: "The Role of Ethics in Data Science Projects",
    excerpt: "Discussing the ethical considerations that should guide data collection, analysis, and application in the field of data science.",
    date: "April 20, 2025",
    category: "Ethics",
    link: "/blog/ethics-in-data-science"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 px-6 md:px-12" id="blog">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="bg-card border-none overflow-hidden card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <span className="text-web3-primary">{post.category}</span>
                </div>
                <CardTitle className="text-xl hover:text-web3-primary transition-colors">
                  <Link to={post.link}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-web3-primary hover:text-web3-primary hover:bg-web3-primary/10 p-0">
                  <Link to={post.link} className="flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white">
            <Link to="/blog" className="flex items-center gap-2">
              View All Posts <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
