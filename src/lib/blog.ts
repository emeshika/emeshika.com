// Blog post loader — uses Vite's import.meta.glob to load markdown files at build time.
// Posts live in src/content/blog/*.md. Add a new .md file to publish a new post.

export interface PostFrontmatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  cover?: string;
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number; // minutes, estimated at 200 wpm
}

// ---------------------------------------------------------------------------
// Minimal frontmatter parser (no Node.js deps — runs in the browser)
// Handles: string values (quoted or bare), boolean, string arrays ["a","b"]
// ---------------------------------------------------------------------------
function parseFrontmatter(raw: string): { data: PostFrontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error('Missing or malformed frontmatter');
  }

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of yamlBlock.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const rawVal = line.slice(colonIdx + 1).trim();

    if (key === 'draft') {
      data[key] = rawVal === 'true';
    } else if (rawVal.startsWith('[') && rawVal.endsWith(']')) {
      // e.g. ["python", "smote"] or [python, smote]
      data[key] = rawVal
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      data[key] = rawVal.replace(/^["']|["']$/g, '');
    }
  }

  return { data: data as PostFrontmatter, content };
}

function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const rawModules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function loadAllPosts(includeDrafts: boolean): Post[] {
  return Object.entries(rawModules)
    .map(([path, raw]) => {
      const slug = path.split('/').pop()!.replace(/\.md$/, '');
      const { data, content } = parseFrontmatter(raw as string);
      return { slug, frontmatter: data, content, readingTime: calcReadingTime(content) };
    })
    .filter(p => includeDrafts || !p.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getAllPosts(): Post[] {
  return loadAllPosts(import.meta.env.DEV);
}

export function getPost(slug: string): Post | undefined {
  return loadAllPosts(import.meta.env.DEV).find(p => p.slug === slug);
}
