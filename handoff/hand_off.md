# Kechita Handoff Package (Single File)
## Purpose
This single-file handoff contains the necessary commands, environment map, and quickstart for ops/marketing/dev teams to launch Kechita on Render.

## Quickstart (Staging)
1. Clone repo and checkout 'develop' branch
2. Create Render services using render_staging.yaml or via dashboard
3. Set staging env vars (see .env.render.example or .env.render.example in repo)
4. Run migrations (staging):
   psql $DATABASE_URL -f migrations/001_create_tables.sql
   psql $DATABASE_URL -f migrations/002_add_unique_constraint_payments.sql
   psql $DATABASE_URL -f migrations/003_inventory_referrals_accounting.sql
   psql $DATABASE_URL -f migrations/004_ai_usage.sql
   psql $DATABASE_URL -f migrations/005_partners.sql
5. Start services (Render will build and deploy)
6. Run smoke scripts (scripts/demo_end_to_end.js) to validate flows

## Environment Variables (minimal)
- DATABASE_URL, REDIS_URL, OPENAI_API_KEY, SENTRY_DSN, MPESA_KEY, MPESA_SECRET, MPESA_SHORTCODE, MPESA_PASSKEY, BASE_URL, PAGERDUTY_WEBHOOK

## Contacts & Roles
- Dev Lead: dev@kechita.example (assign)
- Ops Lead: ops@kechita.example (assign)
- Marketing: marketing@kechita.example (assign)

## Artifacts Included
- render.yaml, render_staging.yaml
- scripts/db_backup.sh, scripts/db_restore.sh
- scripts/check_billing_and_alerts.js
- QA_REPORT.md, LAUNCH_READINESS_FILLED.md
- marketing/ directory with press release and assets

## Next steps to Production
- Replace mock assets, finalize brand kit
- Acquire MPESA production keys and test in closed rollout
- Run penetration test and resolve findings
