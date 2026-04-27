# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # ESLint
npm run start    # serve production build
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** portfolio site for Giulia Pietrobelli (digital designer). It uses TypeScript, Tailwind CSS, and shadcn/ui components.

**Routing:** Each portfolio project is a route under `src/app/<project-slug>/page.tsx`. Assets (images, GIFs) for each project live co-located in the same folder as the page. Shared/public images also exist in `/public`.

**Layout:** `src/app/layout.tsx` wraps all pages with a fixed `Header` and a footer. The header is a client component that manages mobile menu open/closed state and collapses at `lg` breakpoint.

**Shared components in `src/app/`:**
- `header.tsx` — fixed nav with mobile hamburger toggle
- `main-menu.tsx`, `toggle-menu.tsx`, `social-nav.tsx`, `logo.tsx` — header sub-components
- `project-intro.tsx` — reusable project intro section used on case study pages
- `lightbox-gallery.tsx` — image lightbox, uses Radix Dialog
- `pagination-links.tsx` — prev/next project navigation

**UI primitives** live in `src/components/ui/` (shadcn/ui: Button, Carousel, Dialog, ScrollArea). Utility function `cn()` is in `src/lib/utils.ts`.

**Styling:** Tailwind with custom breakpoints defined in `tailwind.screens.ts` (imported into `tailwind.config.ts`). Poppins is the only font (loaded via `next/font/google`).

**New project pages** follow the pattern: create `src/app/<slug>/page.tsx`, add co-located images, and add a `GalleryImage` entry to `src/app/page.tsx` (the homepage grid).
