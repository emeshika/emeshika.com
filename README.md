# emeshika.com

Personal portfolio of S.A. Hirushi Emeshika — Data Science undergraduate at SLIIT, member of the Center of Excellence in AI (CoEAI), and Data Science Intern at Gamage Recruiters (Pvt) Ltd.

## Tech stack

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Blog:** react-markdown, remark-gfm, rehype-highlight, @tailwindcss/typography
- **SEO:** react-helmet-async
- **Contact:** Formspree
- **Deployment:** Vercel

## Project structure

```
src/
├── content/blog/      # Markdown blog posts
├── data/profile.ts    # Single source of truth for all content
├── components/        # Section and UI components
├── lib/blog.ts        # Blog loader (import.meta.glob + frontmatter parser)
├── pages/             # Route pages
└── App.tsx
```

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ID` | Form ID from [formspree.io](https://formspree.io) (contact form) |

## Writing blog posts

1. Create `src/content/blog/my-post-slug.md`
2. Add frontmatter at the top:

```markdown
---
title: "My Post Title"
date: "2026-01-01"
summary: "One-sentence description shown on the blog list page."
category: "Data Science"
tags: ["python", "ml"]
draft: false
---

Your content here…
```

3. Set `draft: true` to keep the post out of production. It will only appear in dev mode.
4. The blog section on the home page auto-hides when there are no published posts.

## Deployment

The project deploys to Vercel. `vercel.json` includes a catch-all SPA rewrite so `/blog/:slug` works on direct access.

## Content updates

All portfolio content lives in [`src/data/profile.ts`](src/data/profile.ts). Edit that file to update experience, projects, skills, and certifications without touching any component.

Projects with `visible: false` are loaded but not rendered — use this for in-progress work.

## License

MIT
