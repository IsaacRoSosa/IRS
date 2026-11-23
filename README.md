# Isaac Rojas — Portfolio

Personal portfolio: https://isaacrs-portafolio.vercel.app/

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) with React 19
- [Tailwind CSS 4](https://tailwindcss.com) — configured in CSS, no `tailwind.config.js`
- Self-hosted fonts via Fontsource (Sora + Audiowide)
- Vercel Analytics

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (flat config)
```

Requires Node.js 20.9 or newer.

## Editing content

All text lives in `src/data/`, so you rarely need to touch components:

| File | What it controls |
| --- | --- |
| `src/data/site.js` | Name, tagline, email, links, About text and skills |
| `src/data/experience.json` | Jobs shown in the Experience tabs |
| `src/data/projects.json` | Project cards and their detail modals (`gallery` = screenshots) |
| `src/data/hackathons.json` | Hackathon cards and details |

Technologies without a `logo` show their name with a small dot. Logos are rendered as white silhouettes, so any transparent PNG works.

## Styling

Design tokens (colors, fonts, animations) are defined with `@theme` in `src/app/globals.css`. Tailwind generates utilities from them, e.g. `bg-space`, `text-lavender`, `font-display`.

## Structure

```
src/
  app/            layout, page and global styles
  components/     one file per section, plus cards
  components/ui/  shared pieces: Section, Modal, Gallery, TechChip, icons
  data/           all site content
```
