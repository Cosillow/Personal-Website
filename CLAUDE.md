# CLAUDE.md

Connor Silloway's personal portfolio site. React + Vite SPA, deployed to Netlify.

## Where the app lives

**All code and commands live in `vite-personal-website/`**, not the repo root. `cd vite-personal-website` first.

```bash
npm run dev      # vite dev server
npm run build    # tsc && vite build
npm run preview
```

## Stack

React 18 · TypeScript (strict) · Vite (SWC) · Redux Toolkit · react-router-dom v6 · SCSS + styled-components · react-icons. No test runner, no linter configured.

## Layout

- `src/pages/` — route-level pages. `src/App.tsx` wires routes.
- `src/components/` — reused UI. `components/controllers/` hold stateful logic that feeds presentational pages (e.g. `ProjectsController` owns the `projects` array and renders `FirstProjects`).
- `src/redux/` — store + `slices/`. Only theme state today.
- `src/util/color.ts` — `Color` class (RGB/HSL/hex, contrast). Adapted from Ionic (Apache-2.0, see header).
- `src/hooks/` — custom hooks.
- `src/connors-library/` — the author's own SCSS utility framework (see below).
- `public/` — project images/gifs, served by filename.

## Styling conventions

- **`connors-library/` is a homegrown utility-class + design-token system** — treat it like Tailwind-lite. Prefer its classes over ad-hoc CSS.
  - Utilities: `row`, `justify-center`, `m-t-xl`, `m-b-m`, `p-*`, `font-l`, `bg-primary`, `text-accent`, `w-100`, `clear`. Spacing/size tokens follow the `$sizes` scale (`xxl…xxs`).
  - It's auto-imported into every SCSS file via `vite.config.ts` `additionalData` — don't manually `@import` it.
  - Breakpoint mixins are min-width: `@include m { }`, `@include breakpoint(720px) { }`.
- **Theme = CSS custom properties, driven by Redux.** `themeSlice`'s `setColor` reducer writes `--color-{name}`, `--color-{name}-contrast`, `--color-{name}-rgb` onto `document.documentElement`. The three theme colors are `primary`/`secondary`/`accent`. To read/set theme in components use the `useTheme()` / `setThemeColor()` / `setThemeColors()` helpers, not raw dispatch.
- Use `styled-components` for component-local dynamic styles (values that change per-prop); use library utility classes for everything static.

## Conventions

- Redux stores theme as serializable strings; the app works in `Color` objects. The slice's `setThemeColor`/`setThemeColors` wrappers convert Color→string on the way in so components keep passing `Color`. Keep that boundary — don't put `Color` instances in the store (non-serializable).
- SPA routing needs Netlify's `public/_redirects` (`/* /index.html 200`). Keep it.
- Data (projects list, theme vars) lives inline in the controller/slice as typed arrays — no CMS or fetch.

## Netlify

Live at https://connor-silloway-portfolio.netlify.app/ · Build `npm run build`, publish `dist/`.
