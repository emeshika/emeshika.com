---
title: "Blog template: every supported feature"
date: "2026-11-05"
category: "Meta"
tags: ["template", "markdown"]
summary: "A draft post demonstrating headings, code blocks, tables, task lists, blockquotes, and images. Use this as a starting point for new posts."
draft: true
---

This post is a template. It has `draft: true`, so it only appears in development (`npm run dev`) and never on the live site. Copy this file, rename it to your slug, and start writing.

## Headings

### Level 3

#### Level 4

## Code blocks

Inline `code` and fenced blocks with syntax highlighting:

```python
def smote_oversample(X, y, k=5):
    from imblearn.over_sampling import SMOTE
    sm = SMOTE(k_neighbors=k)
    return sm.fit_resample(X, y)
```

```sql
SELECT customer_id, COUNT(*) AS churn_count
FROM events
WHERE event_type = 'churn'
GROUP BY customer_id
ORDER BY churn_count DESC;
```

## Tables

| Field    | Type    | Required | Notes                     |
|----------|---------|----------|---------------------------|
| title    | string  | yes      | Shown on card and in tab  |
| date     | string  | yes      | YYYY-MM-DD, used for sort |
| category | string  | yes      | Shown on card             |
| draft    | boolean | no       | Defaults to false         |

## Task list

- [x] Write the post
- [x] Add frontmatter
- [ ] Add cover image
- [ ] Review before publishing

## Blockquote

> Data science is 80% data cleaning and 20% complaining about data cleaning.

## Images

Place images under `public/blog/<slug>/` and reference them as:

```markdown
![Alt text](/blog/my-post-slug/cover.png)
```

The `cover` frontmatter field is used for the OG image and card header:

```yaml
cover: "/blog/my-post-slug/cover.png"
```

## Links

[GitHub](https://github.com/emeshika) — links open in a new tab in the blog post renderer.

## How to publish this post

1. Set `draft: false` (or remove the `draft` line entirely).
2. Run `git add src/content/blog/hello-world.md && git commit -m "publish: hello world post"`.
3. Push to main — Vercel deploys automatically.
