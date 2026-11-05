import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getAllPosts } from '@/lib/blog';

const BlogSection = () => {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-muted/20 relative overflow-hidden" id="blog">
      <div className="absolute top-20 right-10 w-72 h-72 bg-web3-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest <span className="text-gradient">Posts</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Card key={post.slug} className="neo-blur border-none overflow-hidden card-hover gradient-border flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.frontmatter.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readingTime} min read
                  </span>
                </div>
                <Badge className="w-fit mb-2 bg-web3-primary/20 text-web3-primary border-web3-primary/30 hover:bg-web3-primary/20 text-xs">
                  {post.frontmatter.category}
                </Badge>
                <CardTitle className="text-lg leading-snug hover:text-web3-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">{post.frontmatter.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-web3-primary hover:bg-web3-primary/10 p-0 h-auto">
                  <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-sm">
                    Read More <ArrowRight size={14} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="border-web3-primary text-web3-primary hover:bg-web3-primary/20">
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
