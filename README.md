# SWI_C


# Advanced Data Fetching: SSG, SSR, ISR — Demo App

## Overview
This demo shows three rendering strategies using Next.js App Router:
- **SSG (Static)**: `/about` — pre-rendered at build time.
- **SSR (Dynamic)**: `/dashboard` — generated on every request.
- **ISR (Hybrid)**: `/news` — static but revalidates every 60 seconds.
- **Homepage**: mostly static with a dynamic `BreakingNewsServer` segment for always-fresh headlines.

## Why each choice
- **About (SSG)**: rarely-changed content → fastest TTFB and low cost.
- **Dashboard (SSR)**: per-request fresh, user-specific metrics; uses `cache: 'no-store'`.
- **News (ISR)**: news should be fresh but not need per-request regeneration; `revalidate = 60` balances freshness & cost.
- **Homepage with dynamic slice**: keep shell static for speed; breakouts (breaking news) fetch real-time.

## How caching/revalidation improves UX & perf
- Static pages served from CDN → minimal latency.
- ISR reduces server load while keeping pages reasonably fresh.
- SSR ensures correctness for user-specific or highly-dynamic content.

## How to run locally
```bash
npm install
npm run dev


npm run build
npm start
