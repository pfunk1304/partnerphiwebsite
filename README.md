# PartnerPhi.com

Marketing website for PartnerPhi, fractional partner marketing for B2B SaaS. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on Vercel.

## Common changes

| What | Where |
| --- | --- |
| Email address, booking link, LinkedIn, patrickdiab.com link | `src/config.ts` |
| Logo (put your file in `public/`, then set `logoSrc`) | `src/config.ts` |
| Colors, font, type sizes, spacing | `src/styles/global.css` (the `@theme` block) |
| Home page copy | `src/pages/index.astro` |
| Favicon | `public/favicon.svg` |

The project brief lives in `CLAUDE.md`.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```
