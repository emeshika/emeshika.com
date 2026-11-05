import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { getPost } from '@/lib/blog';
import 'highlight.js/styles/github-dark.css';

// Slug helper for heading anchor links
const toAnchor = (text: string) =>
  String(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-20 px-6">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">
              This post doesn't exist or hasn't been published yet.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { frontmatter, content, readingTime } = post;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{frontmatter.title} – Hirushi Emeshika</title>
        <meta name="description" content={frontmatter.summary} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.summary} />
        <meta property="og:type" content="article" />
        {frontmatter.cover && <meta property="og:image" content={`https://emeshika.com${frontmatter.cover}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.summary} />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Hero / header */}
        <section className="py-16 px-6 md:px-12 bg-grid border-b border-muted">
          <div className="container mx-auto max-w-3xl">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              aria-label="Go back"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              {frontmatter.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {frontmatter.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {readingTime} min read
              </span>
            </div>

            {frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            )}

            {frontmatter.cover && (
              <img
                src={frontmatter.cover}
                alt={frontmatter.title}
                className="w-full rounded-xl mt-8 object-cover max-h-80"
                loading="eager"
              />
            )}
          </div>
        </section>

        {/* Post body */}
        <section className="py-12 px-6 md:px-12">
          <div className="container mx-auto max-w-3xl">
            <div
              className="
                prose dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-4
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-transparent prose-pre:p-0
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
                prose-table:w-full prose-th:text-left prose-th:text-sm
                prose-li:text-muted-foreground prose-li:leading-relaxed
                prose-img:rounded-lg prose-img:mx-auto
              "
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h2: ({ children }) => (
                    <h2 id={toAnchor(String(children))}>{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 id={toAnchor(String(children))}>{children}</h3>
                  ),
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            <div className="mt-16 pt-8 border-t border-muted">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-web3-primary hover:underline"
              >
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
