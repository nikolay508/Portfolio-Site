### Personal Site by Nikolay Todorov

## ℹ️ About the project
This is my personal portfolio, built with Next.js 14 and TypeScript. It showcases my work, skills, and ways to get in touch. The site focuses on performance, accessibility, and a clean developer experience using React Server Components and minimal client-side code where needed.

- **Core**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **UI**: shadcn/ui, tailwindcss-animate, Lucide Icons
- **State/UX**: React Query, next-themes, Framer Motion
- **Web3 (prepared)**: Wagmi + RainbowKit (configured, optional)
- **Data (prepared)**: Drizzle ORM + libSQL (schema disabled in this version)

### 🖼️ Preview
<img width="1469" height="753" alt="Screenshot 2025-08-11 at 13 46 27" src="https://github.com/user-attachments/assets/7e9a965b-ddfd-4993-a9b7-785f56f94538" />

## 👨🏼‍💻 Project Setup & Start Guide

### ✅ Prerequisites
- Node.js 18+ (recommended LTS)
- Yarn (repo is pinned to Yarn 1)

### 🚀 Install & run (development)
```bash
git clone https://github.com/nikolay508/Portfolio-Site.git
cd Portfolio-Site
yarn install
yarn dev
```

Open `http://localhost:3000` in your browser.

### 🏗️ Build & start (production)
```bash
yarn build
yarn start
```

### 📦 Useful scripts
- `yarn dev`: start Next.js in development
- `yarn build`: production build
- `yarn start`: run the production server
- `yarn lint`: run Next.js ESLint
- `yarn scn:add`: add shadcn/ui components (via bunx)
- `yarn ace:add`: add Aceternity UI components (via bunx)


## ⚙️ Environment variables
These are optional for local development.

- `NEXT_PUBLIC_BASE_URL` (optional): base URL for metadata and Open Graph. Defaults to `http://localhost:3000`.
- `NODE_ENV`: set to `production` in deployments to enable indexing-friendly robots settings.

Create a `.env.local` in the project root if you need to override defaults:
```bash
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```


## 🧩 Features
- **Hero section** with CTAs to booking and GitHub
- **Logo cloud** of technologies
- **YouTube-style testimonials** section
- **About me** section
- **Featured projects** with tags and images
- **Dark theme** by default with system preference support


## 📁 Project structure
- `app/`: Next.js App Router pages, metadata, and layout
- `components/`: UI building blocks (Hero, Projects, YouTube grid, etc.)
- `public/`: static assets (fonts, images, icons)
- `drizzle/`: data layer setup (currently disabled schemas)


## ☁️ Deployment
This project is optimized for deployment on Vercel.

1) Set `NEXT_PUBLIC_BASE_URL` to your domain.
2) Build command: `yarn build`
3) Start command: `yarn start` (Vercel handles this automatically)


## 📜 Notes
- Wallet tooling (RainbowKit/Wagmi) is configured but not required for the core portfolio experience.
- Drizzle ORM setup is present; tables are commented out in `drizzle/schema.ts` for this version.
