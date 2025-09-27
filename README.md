# Kechita Capital — Phase 1 Scaffold

**What this is**
- Next.js 14 App Router scaffold for *Kechita Capital* (Kenya-branded).
- TailwindCSS + Framer Motion + Inter font included in package.json.
- SEO defaults, home page, /health route, favicon, logo placeholders.

**How to run locally**
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

**Render deploy steps**
1. Create a new Web Service on Render.
2. Connect your repo.
3. Build command: `npm install && npm run build`
4. Start command: `npm start`
5. Add environment variables from `.env.example` as needed.

Files of interest:
- `app/layout.tsx`, `app/page.tsx` — main layout and home.
- `app/health/route.ts` — uptime check.
- `render.yaml`, `Dockerfile`, `.env.example`

This zip is a Phase 1 deliverable. Next phase will add core pages and components.


---

## Phase 2 (Regenerated)
Added industries, faq, services (with modals), about, and contact (form). Strengthened Kenyan branding and interactive UI.


---

## Phase 3
Added calculators, dashboard, blog (dynamic), partners, events, careers, resources, JSON-LD schema, accessibility improvements, and testing scaffold.


---

## Phase 5
Phase 5 adds a fintech foundation: DB migrations, API routes, worker scaffold, MPESA mock endpoints, AI wrapper with fallbacks, multi-step loan application UI, and testing scaffolds.

Run locally:
1. Create .env from .env.example
2. Run Postgres & Redis
3. npm install
4. Run migrations: psql $DATABASE_URL -f migrations/001_create_tables.sql
5. npm run dev

Notes: many API routes are mocked for sandboxing. Replace sandbox keys and implement secure production flows before going live.


---

## Phase 5 Impl: Supabase Auth, MPesa Integration, Workers & CI

### Render deploy notes
1. Add the following environment variables in Render (or your provider):

- DATABASE_URL
- REDIS_HOST, REDIS_PORT
- SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE
- OPENAI_API_KEY, HF_API_KEY
- MPESA_KEY, MPESA_SECRET, MPESA_SHORTCODE, MPESA_PASSKEY, MPESA_ENV (sandbox|production)
- BASE_URL (public URL of your service)

2. Ensure your MPesa callback URL is reachable by Safaricom (Render services have public URLs).

### GitHub Actions
- CI workflow is provided in `.github/workflows/ci.yml`.

### Running locally
- Start Postgres & Redis (docker-compose recommended).
- Populate .env from .env.example.
- Run migrations: `psql $DATABASE_URL -f migrations/001_create_tables.sql`
- `npm install` and `npm run dev`



---

## Phase5 Impl2 Updates
- Added payments table and sample data.
- MPesa STK route now inserts payment records; callback inserts repayments and updates loan status.
- Auth verify now creates/returns user from DB.
- Dashboard fetches loans via API.

Run migrations to apply new schema and sample data.


---

## Phase 5 Overhaul
This overhaul provides:
- Modular services (auth, ai, loan, payment)
- End-to-end demo script (`npm run demo`)
- Worker for MPesa reconciliation (`npm run worker`)
- Docker Compose for local dev
- More assets and docs

Run demo: `npm run demo` (after starting the app)


## Overhaul Patches Applied
- Idempotency checks added to MPesa callback and worker to avoid duplicate repayments.
- Rate limiting applied to OTP and STK endpoints using utils/rateLimiter.
- Sentry init placeholder added; set SENTRY_DSN to enable.


## Phase 6 Additions
- DB unique constraint migration created: `migrations/002_add_unique_constraint_payments.sql`.
- Sentry integrated via `@sentry/node` and init script `lib/sentry.init.ts`.
- Playwright E2E tests added; CI updated to run them.

Run migrations:
psql $DATABASE_URL -f migrations/001_create_tables.sql
psql $DATABASE_URL -f migrations/002_add_unique_constraint_payments.sql



## Phase 7 — Scale & Community
- Inventory management, referrals, simple accounting modules.
- Onboarding flows and multilingual support (EN, SW).
- Kechita Assistant (AI chat UI) wired to ai wrapper with provider fallbacks.

Run migrations:
psql $DATABASE_URL -f migrations/001_create_tables.sql
psql $DATABASE_URL -f migrations/002_add_unique_constraint_payments.sql
psql $DATABASE_URL -f migrations/003_inventory_referrals_accounting.sql



## Phase 8 — Intelligence & AI
- Loan scoring service (rule-based + AI fallback)
- Fraud detection (basic heuristics) and worker support
- AI usage tracking and per-user rate limiting
- Referral redemption flow and reward issuance upon verified loan status
- Predictive insights endpoint and dashboard

Run migrations to include ai_usage and new tables:
psql $DATABASE_URL -f migrations/004_ai_usage.sql
psql $DATABASE_URL -f migrations/003_inventory_referrals_accounting.sql



## Phase 9 — Polish & Launch Readiness
- Added robots.txt, sitemap generator, web manifest, and sitemap generation post-build.
- Accessibility improvements: skip link, aria roles, accessibility Playwright test (axe).
- Lighthouse CI config and CI steps to run accessibility and Lighthouse.
- Render deployment manifest `render.yaml` and launch checklist.

Run:
- npm run sitemap
- npm run build
- npm run e2e



## Phase 10 — Launch & Monitoring
- Added metrics endpoint, backup scripts, scheduled DB backups workflow, monitoring docs, Grafana/Prometheus examples, and on-call runbooks.
- Ensure secrets: DATABASE_URL, S3 configs, PAGERDUTY_KEY, SENTRY_DSN, etc. are set in production.


---
## Operations & Marketing

- Terraform infra in `ops/terraform/`
- Simulated deploy logs in `ops/deploy_logs/`
- Marketing kit in `marketing/`


## Phase 13 — AI Copilot & Credit Scoring
- Copilot service with provider fallbacks (OpenAI, Groq, HuggingFace, local)
- Copilot endpoints and UI at `/copilot`
- AI-based scoring endpoint `/api/score/ai` and enqueueing `/api/score/enqueue`
- Scoring worker `workers/scoringWorker.js` and scoring history UI
- Tests added for copilot and scoring


## Phase 14 — Production Hardening & Copilot Improvements
- Robust parsing via `services/copilotParser.ts`.
- Quota and cost tracking in `services/quotaService.ts` with usage UI.
- Staging manifests in `render_staging.yaml` and runbooks in `ops/runbooks_phase14.md`.



## Phase 15 — Growth & Partnerships
- OpenAI SDK integration and function-calling parsing
- CI test mocks for OpenAI
- Render CLI deploy commands prepared
- Partner portal scaffolding and migrations



## Phase 16 — Scale, Observability & Handoff
- Added staging deploy simulation, filled launch checklist, single-file handoff in /handoff
- Added autoscaling hints for Render and AWS, Grafana dashboard, AI cost optimization docs and batching helper



## Phase 17 — Performance & Cost Optimization
- Response caching via Redis and cacheService
- Token accounting and recording with tokenAccounting service
- Model selection routing (pickModelForTask)
- AI Cost Dashboard and ops UI
- Investor materials: one-pager, slides, demo script



## Phase 18 — Production Rollout Checklist
- Finalize brand assets
- Set production secrets and rotate keys
- Run penetration testing and remediate findings
- Set production quotas and monitor AI spend
- Perform staged rollout (canary) with monitoring and rollback plan

