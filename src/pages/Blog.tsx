import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

      <main className="flex-1 pt-14">
        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Writing</h1>
              <p className="text-muted-foreground">Data science, machine learning, NLP, and engineering.</p>
            </div>

            {/* Category filter */}
            {allPosts.length > 0 && categories.length > 2 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                      activeCategory === cat
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg mb-2">No posts yet.</p>
                <p className="text-sm">Check back soon — writing in progress.</p>
              </div>
            ) : (
              <ul className="divide-y divide-border max-w-2xl">
                {filtered.map(post => (
                  <li key={post.slug} className="py-5">
                    <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {post.frontmatter.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readingTime} min read
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {post.frontmatter.title}
                    </Link>
                    {post.frontmatter.summary && (
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                        {post.frontmatter.summary}
                      </p>
                    )}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1.5"
                    >
                      Read <ArrowRight size={11} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
