# AbdelRahman Bashir — Portfolio

A fully animated personal portfolio built with **Next.js**, **Tailwind CSS**, and **GSAP** (ScrollTrigger + Lenis smooth scroll). Deployed as a static site on **GitHub Pages**, served at **abedbashir.com**.

## ✨ What's inside

- Animated hero with a canvas particle background + floating gradient blobs
- Scroll-driven reveal animations everywhere — including the signature "grab from the side" section-title effect — that **replay in both directions** as you scroll up or down, not just once on load
- Smooth inertia scrolling (Lenis) synced with GSAP ScrollTrigger
- Sections: Hero → About → Studies (timeline) → Skills → Websites → Shopify Apps → Stores Managed → Contact
- Contact form wired to [Formspree](https://formspree.io) (free tier — works great with static hosting, no backend needed)
- Fully responsive, dark glassmorphism theme
- One file (`src/data/content.ts`) drives 100% of the text/images/links on the page

## 🛠 Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 📦 Build (static export)

```bash
npm run build
```

Outputs a fully static site to `./out` (this is what gets deployed).

## ✏️ Editing content

Everything you see on the page — your name, bio, education timeline, skills, projects, Shopify apps, managed stores, and contact info — lives in:

```
src/data/content.ts
```

Just edit the values there. No other file needs to change for content updates.

### Adding real images

Drop your files into `public/images/...` (folders already exist for `work/`, `apps/`, `stores/`) and update the matching `image:` path in `content.ts`. The current images are auto-generated placeholder gradients — swap them for real screenshots/photos whenever you're ready.

### Adding your real CV

Drop your CV PDF into `public/cv/` and update `profile.cvUrl` in `content.ts` to match the filename.

### Wiring up the contact form (Formspree — free)

1. Go to https://formspree.io and create a free account.
2. Create a new form — Formspree gives you an endpoint like `https://formspree.io/f/xxxxabcd`.
3. Paste that URL into `contact.formspreeEndpoint` in `src/data/content.ts`.
4. Done — submissions will land in your Formspree inbox/email. No server code needed.

## 🚀 Deployment (GitHub Pages + Hostinger domain)

This repo auto-deploys on every push to `main` via `.github/workflows/deploy.yml`:

1. Push to `main`.
2. GitHub Actions builds the static site and publishes it to GitHub Pages.
3. In your repo settings → **Pages**, set the source to **GitHub Actions** (one-time setup).

### Connecting your Hostinger domain (abedbashir.com)

The repo already includes a `public/CNAME` file containing `abedbashir.com`, which GitHub Pages needs to serve the custom domain.

In **Hostinger → Domains → DNS / Name Servers** for `abedbashir.com`, add these DNS records (remove any existing conflicting A/CNAME records on the root and `www`):

| Type  | Name | Value                | 
|-------|------|----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | `<your-github-username>.github.io` |

Then in **GitHub repo → Settings → Pages**, add `abedbashir.com` as the custom domain and enable **Enforce HTTPS** once GitHub finishes issuing the certificate (can take up to a few hours after DNS propagates).

That's it — pushes to `main` will go live automatically at https://abedbashir.com.

## 🧱 Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) + ScrollTrigger
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [Formspree](https://formspree.io) for the contact form
- Deployed via GitHub Actions → GitHub Pages
