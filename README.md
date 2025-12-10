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

Environment-Aware Builds & Secrets Management — Multi-Environment Setup
Overview

This section explains how the project handles multi-environment builds (development, staging, production) and manages secrets securely.
The goal is to create reliable, isolated, and safe deployments across environments.

Multi-Environment Configuration

The project uses separate environment files:

.env.development

.env.staging

.env.production

Each file contains only the variables required for that specific environment. Example:

NEXT_PUBLIC_API_URL=https://staging.api.example.com
DATABASE_URL=postgres://user:pass@db:5432/appdb

Build Selection

The correct environment file is loaded via build commands:

npm run build:dev
npm run build:staging
npm run build:production

This ensures each environment uses the proper API endpoints, database connections, and feature flags.

Important

No real secrets are committed to the repository.
Only .env.example is included to show required variable names.

Secure Secrets Management

Actual secrets (database credentials, API keys, tokens) are stored using cloud secret managers:

GitHub Secrets (via GitHub Actions)

AWS Parameter Store / Secrets Manager

Azure Key Vault

CI/CD Integration

Secrets are injected during the build or deployment process:

env:
DATABASE_URL: ${{ secrets.DATABASE_URL_PROD }}
NEXT_PUBLIC_API_URL: ${{ secrets.API_URL_STAGING }}

This ensures no secrets appear in the codebase or logs.

Testing Environment-Specific Builds

Run each build to verify:

npm run build:staging
npm run build:production

Check that:

Staging build uses staging APIs and databases

Production build uses production services

No environment variables are mixed or leaked

Builds behave consistently when deployed to the cloud

Summary

Development: local debugging, hot reload

Staging: stable QA environment, uses staging services

Production: optimized and secure, uses live production services

Secrets are stored only in cloud secret managers and accessed through the pipeline.
.env\* files are ignored in .gitignore and .env.example contains only placeholders.

Multi-environment setups prevent accidental production changes, ensure predictable deployments, and support safe CI/CD workflows consistent with real-world DevOps practices.

## How to run locally

```bash
npm install
npm run dev


npm run build
npm start
```
