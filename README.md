# Odin Schwartz — Portfolio

Personal portfolio of Odin Schwartz, Senior Frontend Engineer.

Built as a single-page experience with smooth scroll, scroll-driven
animations, and a clean, performance-focused architecture.

## Live

🔗 [tu-dominio.vercel.app](https://tu-dominio.vercel.app)

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **GSAP** + ScrollTrigger — scroll-driven animations
- **Lenis** — smooth scroll
- **CSS Modules** — scoped, native CSS (nesting, custom properties, clamp)

## Highlights

- Smooth scroll integrated with GSAP's ticker for synced scroll animations
- Lenis instance exposed via React Context as a single source of truth
  for programmatic navigation
- Reusable `useScrollTo` hook shared across Navbar and Hero
- `mix-blend-mode` navbar that auto-inverts color over light/dark sections
- Text-reveal animations with masked overflow
- Fully responsive (desktop + mobile)

## Getting Started

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
