import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '@/lib/blog';

const BlogSection = () => {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12" id="blog">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Writing</h2>
          <Link to="/blog" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All posts <ArrowRight size={13} />
          </Link>
        </div>

        <ul className="divide-y divide-border max-w-2xl">
          {posts.map(post => (
            <li key={post.slug} className="py-5">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{post.frontmatter.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {post.frontmatter.title}
                </Link>
              </div>
              {post.frontmatter.summary && (
                <p className="text-xs text-muted-foreground leading-relaxed ml-[calc(theme(spacing.0)+88px)] pl-3">
                  {post.frontmatter.summary}
                </p>
              )}
              <Link
                to={`/blog/${post.slug}`}
                className="ml-[calc(theme(spacing.0)+88px)] pl-3 inline-block text-xs text-primary hover:underline mt-1"
              >
                Read →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
