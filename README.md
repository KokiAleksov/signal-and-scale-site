# Signal and Scale

The website for **Signal and Scale: The B2B SaaS Sales Playbook** by Boshko Kitanov.
One landing page: the book, who it's for, the ten chapters, the three editions with prices, the author, and contact.

## Change prices, links and text

Everything a visitor reads is in one file: [`src/content/site.ts`](src/content/site.ts).

- **Prices:** `priceUsd`, `priceEur` and `regularPriceUsd` (the crossed-out price) on each edition.
- **Edition descriptions:** `description` (what the edition gives the reader) and `bestFor` (shown after "Best for") on each edition.
- **Buy buttons:** set `buyUrl` on each edition to your checkout link (Gumroad, Lemon Squeezy, a Stripe Payment Link…). While it is `null` the button reads "Available soon".
- **Contact:** set `contact.email` and `contact.linkedinUrl`. While both are `null` the section says contact details are coming soon.
- **Covers:** replace the images in `src/assets/` and keep the same file names.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20.9 or newer (22 is what the project is tested with).

**On Windows:** double-click `start-site.bat`. It installs the packages the first time, starts the site and opens your browser. Close its window to stop the site.

**Or from a terminal:**

```bash
npm install
npm run dev
```

Open http://localhost:3000. The page reloads as you edit.

Before publishing, run all checks (lint, types and a production build):

```bash
npm run check
```

## Put it online

The page is prerendered at build time, so it loads as fast as a plain HTML file while still being a full Node.js app.

**Netlify (recommended, free plan allows selling):**
1. Push this folder to a GitHub repository.
2. In Netlify, choose *Add new site → Import an existing project* and pick the repository. Netlify detects Next.js and needs no settings.
3. Under *Site configuration → Environment variables*, add `SITE_URL` with your final address, for example `https://www.example.com`.
4. Add your domain under *Domain management*.

**Vercel:** import the repository the same way. Note that Vercel's free Hobby plan is for non-commercial use, so a site that sells needs the Pro plan.

**Any Node.js server (Render, Railway, a VPS):**

```bash
npm ci
SITE_URL=https://www.example.com npm run build
npm start          # serves on port 3000, or set PORT
```

**Docker:**

```bash
docker build --build-arg SITE_URL=https://www.example.com -t signal-and-scale .
docker run -p 3000:3000 signal-and-scale
```

### Environment variables

| Name       | Required | What it does                                                                                     |
| ---------- | -------- | ------------------------------------------------------------------------------------------------ |
| `SITE_URL` | Yes, once you have a domain | Your public address, read when the site is built. Used for the canonical link, sitemap and social previews. On Netlify and Vercel the platform address is used until you set it. |

## How it's built

- **Next.js 16.4** with the App Router, Turbopack, Cache Components and Partial Prerendering. The page exports `ensureStatic = "navigation"`, so the build fails if anything would stop it being served as static HTML.
- **React 19.3 Server Components only.** The page ships no components of its own to the browser.
- **TypeScript** in strict mode. All content is typed in `src/content/site.ts`.
- **CSS Modules** with design tokens in `src/app/globals.css`. Uses CSS subgrid (so prices line up across the edition cards), 3D transforms for the books (their thickness follows the page count), and a scroll-driven animation for the header rule.
- **next/font** self-hosts Archivo and Caveat from Google Fonts, so there are no third-party requests and no layout shift.
- **next/image** serves the covers as AVIF or WebP at the right size for each screen.
- **SEO:** page metadata, Open Graph and Twitter cards with a preview image, `sitemap.xml`, `robots.txt`, icons, and schema.org `Book` data with each edition's price.

```
src/
  app/          layout, page, global styles, icons, social image, sitemap, robots
  assets/       cover images and the hand-drawn illustration
  components/   one component (and CSS module) per section
  content/      site.ts: every word, price and link
  lib/          price formatting and the site URL
```

## Notes

- `npm install` reports a "high severity" advisory in `braces`. It comes from the ESLint plugin used only for linting during development and never reaches the website. There is no fix yet that keeps the current Next.js lint rules.
- The crossed-out "regular" prices: if you sell to buyers in the EU, price-reduction rules may require the crossed-out price to be one you actually charged in the 30 days before the discount. Check this before launch.
