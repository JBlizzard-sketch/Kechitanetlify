# Phase 14 Runbooks: Staging deploys and AI Billing

## Staging deploy
- Use `render_staging.yaml` to create staging services bound to `develop` branch.
- Set staging environment variables (use sandbox MPesa keys, test OpenAI keys on dev limits).

## AI Billing & Quotas
- Quota enforced via Redis by `services/quotaService.ts`.
- Estimated cost in cents is recorded via `recordEstimatedCost` and can be viewed at `/usage`.
- Set reasonable per-user quotas in production and alerts if daily spend exceeds threshold.
