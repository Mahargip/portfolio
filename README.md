# Mahargi's Portfolio Website

A modern, minimal dark-mode portfolio built with **Next.js 15 + TypeScript + Custom CSS**.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        ← Design tokens, reset, global styles
│   │   ├── layout.tsx         ← Root layout + SEO metadata
│   │   └── page.tsx           ← Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar/            ← Sticky navbar with blur + mobile menu
│   │   ├── Hero/              ← Landing hero with animated text
│   │   ├── About/             ← Bio, stats, avatar placeholder
│   │   ├── Experience/        ← Timeline of work history
│   │   ├── Projects/          ← Project cards with tech badges
│   │   ├── Research/          ← Thesis / publication feature card
│   │   ├── Skills/            ← Grouped skill cards
│   │   ├── Contact/           ← CTA + contact info cards
│   │   └── Footer/            ← Footer with socials
│   └── data/
│       └── portfolio.ts       ← ⭐ ALL YOUR CONTENT IS HERE — edit this file!
└── public/
    └── images/
        └── projects/          ← Drop your project screenshots here
```

---

## ✏️ Personalising Your Portfolio

**All content is in one file**: [`src/data/portfolio.ts`](./src/data/portfolio.ts)

### Things to update:
- `personal.github` — your real GitHub URL (currently a placeholder)
- `research.doi` — add your JOIV paper DOI once published
- `projects[].github` / `projects[].demo` — add links when available
- Profile photo → place at `public/images/profile.jpg` and update `About.tsx`
- Project screenshots → place at `public/images/projects/<name>.png` and update `projects[].image`

---

## 🖥️ Running Locally

```bash
# Install dependencies (already done)
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

### Option A — Vercel (Recommended — Easiest & Fastest)

Vercel is made by the creators of Next.js. Zero config needed.

#### Step 1: Push to GitHub
```bash
cd "c:\Users\mapam\Documents\portfolio"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
> Replace `YOUR_USERNAME` with your GitHub username.

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"**
3. Import your `portfolio` repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy** 🎉

Your site will be live at `https://portfolio-your-username.vercel.app`

#### Automatic Deploys
Every time you `git push` to `main`, Vercel redeploys automatically.

#### Custom Domain (Optional)
In Vercel dashboard → Project → Settings → Domains → add your domain.

---

### Option B — GitHub Pages

GitHub Pages hosts static files. Next.js needs to be exported first.

> **Note:** The `next.config.ts` is already set up with `output: "export"` for this.

#### Step 1: Build the static export
```bash
npm run build
```
This generates an `out/` folder with all static files.

#### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages
1. Go to your GitHub repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Create `.github/workflows/deploy.yml` with the content below

#### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

Your site will be live at `https://YOUR_USERNAME.github.io`

---

## 🔄 Making Updates

1. Edit content in `src/data/portfolio.ts`
2. Add photos to `public/images/`
3. Run `npm run dev` to preview locally
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
5. Vercel redeploys automatically. For GitHub Pages, the workflow runs automatically.

---

## 🖼️ Adding Your Profile Photo

1. Add your photo as `public/images/profile.jpg`
2. In `src/components/About/About.tsx`, replace the placeholder `<div>` with:
   ```tsx
   import Image from 'next/image';
   // Inside avatarFrame:
   <Image
     src="/images/profile.jpg"
     alt="Mahargi Anugerahwan Pamungkas"
     fill
     style={{ objectFit: 'cover' }}
     priority
   />
   ```

## 🖼️ Adding Project Screenshots

1. Add screenshots to `public/images/projects/` (e.g., `aitoma.png`)
2. In `src/data/portfolio.ts`, update the `image` field:
   ```ts
   image: '/images/projects/aitoma.png',
   ```
3. In `src/components/Projects/Projects.tsx`, replace the placeholder with:
   ```tsx
   import Image from 'next/image';
   // Inside imageWrap:
   <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
   ```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | React framework (App Router) |
| TypeScript | Type safety |
| CSS Modules | Scoped component styles |
| React Icons | Icon library |
| Vercel | Hosting (recommended) |
