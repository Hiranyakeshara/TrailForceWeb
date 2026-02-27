# Trailforce — Next.js + MUI Landing Site (static)

This is a static marketing/landing site starter for **Trailforce** (adventure services: camping, hikes, cycle rides).

## 1) Setup
```bash
npm install
npm run dev
```

## 2) Notes
- Uses **Next.js App Router** + **Material UI** + **Framer Motion** animations.
- Remote images come from Unsplash (`images.unsplash.com`). You can replace them with your own photos in `/public` later.

## 3) MUI + Next integration
This project uses `AppRouterCacheProvider` as recommended by MUI.  
If your Next.js major version is not 15, change the import from:
`@mui/material-nextjs/v15-appRouter` → `@mui/material-nextjs/v1X-appRouter`.
