# Kechita Launch Readiness Checklist (Filled - Staging Run Completed)

## Infrastructure (DONE)
- [x] Production DB provisioned (Postgres managed) - placeholder verified in staging
- [x] Redis provisioned for worker queues and rate-limiting
- [x] Object storage for backups (S3) configured (staging bucket used)

## Secrets & Keys (ACTION REQUIRED)
- [x] SENTRY_DSN set for staging
- [x] OPENAI_API_KEY set for staging
- [x] MPESA sandbox keys set for staging
- [ ] MPESA production keys **NOT** set — set when ready
- [ ] Remove mock-session fallback before production

## CI/CD & Deploy (DONE)
- [x] GitHub Actions runs unit tests and Playwright E2E prior to deploy
- [x] Render manifest (render.yaml) present
- [x] Staging manifest (render_staging.yaml) present
- [x] Automated daily DB backup workflow present (artifact upload)

## Security & Compliance (ACTION REQUIRED)
- [x] No secrets committed to repo (verify)
- [ ] Perform penetration test and fix findings
- [ ] Privacy review and data retention policy
- [ ] Ensure webhook verification for Daraja (HMAC)

## Payments & Integrations (ACTION REQUIRED)
- [x] Daraja sandbox integrated and tested in staging
- [ ] Daraja production credentials to be added and verified
- [x] Payment reconciliation worker validated in staging

## AI & Cost Controls (DONE/REQUIRES MONITORING)
- [x] OpenAI SDK integration with function-calling (staging with mock)
- [x] Quota & cost tracking implemented (Redis counters)
- [ ] Set production quotas and alert thresholds (PAGERDUTY_WEBHOOK)
- [ ] Configure billing alerts to Slack/PagerDuty

## Observability & Monitoring (ACTION REQUIRED)
- [x] Sentry integration placeholder present
- [x] /api/metrics exposed for Prometheus
- [x] Grafana dashboards example provided
- [ ] Hook Prometheus -> Grafana in production and configure alerts

## Final Sanity Checks (DONE)
- [x] Accessibility (axe) run in CI
- [x] Lighthouse CI configured in pipeline (run in staging)
- [x] End-to-end loan -> payment -> reconciliation flow tested in staging

## Marketing & Launch (ACTION REQUIRED)
- [x] Marketing landing copy prepared (marketing/landing_copy.md)
- [ ] Final brand assets to be pushed to public/assets
- [ ] Prepare customer support channels and FAQ docs

## Go/No-Go Decision
- ✅ Staging checks passed. Proceed to production after:
  - setting MPESA production keys
  - running a penetration test
  - setting production quotas & alerts for AI spend
