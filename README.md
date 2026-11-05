# emeshika.com

My personal portfolio site. Built with Vite + React + TypeScript and deployed on Vercel.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- react-markdown for blog posts
- Vercel for hosting

## Running locally

```bash
npm install
npm run dev
```

## Content

Everything is in `src/data/profile.ts` — projects, skills, experience, certifications. Edit that file and the site updates automatically.

## Blog

Add a `.md` file to `src/content/blog/`. Set `draft: true` in the frontmatter to keep it out of production. Posts only show up in dev mode while they're drafts.

## Environment variables

`VITE_FORMSPREE_ID` — optional, enables the contact form (from formspree.io).
