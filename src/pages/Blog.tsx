import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/blog';

const Blog = () => {
  const allPosts = getAllPosts();
  const categories = ['All', ...Array.from(new Set(allPosts.map(p => p.frontmatter.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? allPosts : allPosts.filter(p => p.frontmatter.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog – Hirushi Emeshika</title>
        <meta name="description" content="Writing on data science, machine learning, NLP, and data engineering by Hirushi Emeshika." />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 bg-grid">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="text-gradient">Blog</span>
              </h1>
              <div className="w-20 h-1 bg-web3-primary" />
              <p className="text-lg text-muted-foreground max-w-2xl">
                Writing on data science, machine learning, NLP, and engineering.
              </p>
            </div>

            {/* Category filter */}
            {allPosts.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                      activeCategory === cat
                        ? 'bg-web3-primary text-white border-web3-primary'
                        : 'border-white/10 text-muted-foreground hover:border-web3-primary/50 hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-xl mb-2">No posts yet.</p>
                <p className="text-sm">Check back soon — writing in progress.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(post => (
                  <Card key={post.slug} className="neo-blur border-none overflow-hidden card-hover gradient-border flex flex-col">
                    {post.frontmatter.cover && (
                      <img
                        src={post.frontmatter.cover}
                        alt={post.frontmatter.title}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {post.frontmatter.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {post.readingTime} min read
                        </span>
                      </div>
                      <Badge className="w-fit mb-1 bg-web3-primary/20 text-web3-primary border-web3-primary/30 hover:bg-web3-primary/20 text-xs">
                        {post.frontmatter.category}
                      </Badge>
                      <CardTitle className="text-lg leading-snug hover:text-web3-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 flex-1">
                      <p className="text-muted-foreground text-sm leading-relaxed">{post.frontmatter.summary}</p>
                      {post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.frontmatter.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
