# Fil a l’Agulla

Static business website for **Fil a l’Agulla**, a tailoring and clothing alterations workshop in Reus.

Built with [Astro](https://astro.build/) as a lightweight, fast-loading one-page website with reusable components, editable business data, and static deployment support.

## Overview

This project presents the workshop, its services, process, gallery, review placeholder, and contact information.

The main business content is stored in a central data file, making it easy to update the website without editing each section manually.

## Tech Stack

- Astro
- TypeScript
- CSS
- GitHub Actions
- Static hosting compatible output

## Project Structure

```text
public/
  assets/
    img/              Static images
  scripts/
    main.js           Small client-side interactions

src/
  components/         Reusable page sections
  data/
    site.ts           Business content and links
  layouts/
    BaseLayout.astro  Main document layout
  pages/
    index.astro       Homepage
  styles/
    global.css        Global design system and responsive styles
  utils/
    paths.ts          GitHub Pages-safe asset path helper

.github/
  workflows/
    deploy.yml        GitHub Pages deployment workflow
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content Management

Most business information is stored in:

```text
src/data/site.ts
```

Use this file to update:

- Business name and tagline
- Address and location
- Phone and WhatsApp number
- Instagram and Google Maps links
- Services
- Gallery images
- Process steps
- Review placeholder
- Contact details

Static images are stored in:

```text
public/assets/img/
```

Image paths in `site.ts` should be written without a leading slash:

```ts
image: "assets/img/facade.jpg"
```

## Deployment

### GitHub Pages

This project includes a GitHub Actions workflow for deploying the Astro build output to GitHub Pages.

Required repository setting:

```text
Settings > Pages > Source: GitHub Actions
```

The current Astro config is set for:

```text
https://anubis7star.github.io/fil_a_lagulla_preview/
```

If the repository name changes, update the `base` value in:

```text
astro.config.mjs
```

### Static Hosting / Hostinger

Generate the production build:

```bash
npm run build
```

Upload the contents of:

```text
dist/
```

to the hosting provider’s public web directory, such as:

```text
public_html/
```

Do not upload the full Astro source project to shared hosting unless the provider specifically supports Node-based builds.

## Notes

This project is designed as a static website. There is no backend, database, CMS, authentication, or server-side form handling.
