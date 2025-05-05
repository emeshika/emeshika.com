
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search } from 'lucide-react';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Introduction to Data Science: A Beginner's Guide",
    excerpt: "Exploring the fundamentals of data science and how beginners can start their journey into this exciting field.",
    content: "Data science combines mathematics, statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific domain expertise to uncover actionable insights hidden in an organization's data...",
    date: "May 2, 2025",
    category: "Data Science",
    timeToRead: "5 min read",
    slug: "intro-to-data-science"
  },
  {
    id: 2,
    title: "Machine Learning Models Every Data Scientist Should Know",
    excerpt: "A comprehensive overview of essential machine learning models that form the backbone of modern data science applications.",
    content: "Machine learning models are the heart of predictive analytics in data science. This article explores key models like linear regression, decision trees, random forests, support vector machines, and neural networks...",
    date: "April 28, 2025",
    category: "Machine Learning",
    timeToRead: "8 min read",
    slug: "essential-ml-models"
  },
  {
    id: 3,
    title: "The Role of Ethics in Data Science Projects",
    excerpt: "Discussing the ethical considerations that should guide data collection, analysis, and application in the field of data science.",
    content: "Ethics in data science involves considerations around privacy, consent, transparency, bias, and fairness. This article examines how ethical principles should inform every stage of the data science workflow...",
    date: "April 20, 2025",
    category: "Ethics",
    timeToRead: "6 min read",
    slug: "ethics-in-data-science"
  },
  {
    id: 4,
    title: "Data Visualization Techniques for Effective Communication",
    excerpt: "Learn how to create impactful visualizations that effectively communicate your data insights to stakeholders.",
    content: "Effective data visualization transforms complex datasets into clear, actionable insights. This article covers principles of good visualization design, common plot types, and tools for creating compelling visual stories...",
    date: "April 15, 2025",
    category: "Data Visualization",
    timeToRead: "7 min read",
    slug: "data-visualization-techniques"
  },
  {
    id: 5,
    title: "Big Data Processing: Tools and Techniques",
    excerpt: "An overview of the tools and techniques used to process and analyze large-scale datasets in modern data science.",
    content: "Processing big data requires specialized tools and approaches. This article explores frameworks like Hadoop and Spark, distributed computing concepts, and methods for handling data at scale...",
    date: "April 8, 2025",
    category: "Big Data",
    timeToRead: "9 min read",
    slug: "big-data-processing"
  },
  {
    id: 6,
    title: "Feature Engineering: The Art of Creating Better Model Inputs",
    excerpt: "Discover techniques to transform raw data into features that improve the performance of machine learning models.",
    content: "Feature engineering is often the key differentiator in successful machine learning projects. This article covers techniques for creating, transforming, and selecting features that enhance model performance...",
    date: "April 1, 2025",
    category: "Machine Learning",
    timeToRead: "6 min read",
    slug: "feature-engineering"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 bg-grid">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Blog</span>
              </h1>
              <div className="w-20 h-1 bg-web3-primary"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Thoughts, insights, and tutorials on data science, machine learning, and related fields.
              </p>
            </div>
            
            <div className="mb-12">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search blog posts..."
                  className="pl-10 bg-muted border-none focus-visible:ring-web3-primary"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <Card key={post.id} className="bg-card border-none overflow-hidden card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.timeToRead}</span>
                    </div>
                    <CardTitle className="text-xl">
                      <Link to={`/blog/${post.slug}`} className="hover:text-web3-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="inline-block mb-3 bg-web3-primary/20 text-web3-primary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-web3-primary hover:text-web3-primary hover:bg-web3-primary/10 p-0">
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
