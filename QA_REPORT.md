# QA Report - Render Ready

## Automated tests
- Unit tests: finance, fraud, scoring present.
- Playwright E2E: basic home, loan apply, accessibility scans (axe) included.

## Manual smoke checks
1. Create demo user via /api/auth/verify (mock) and record user ID.
2. Create loan via /api/loans/create with userId and verify in /api/loans/list.
3. Initiate STK push via /api/payments/mpesa/stk and note checkout_request_id.
4. Simulate /api/payments/mpesa/callback with checkout id to reconcile payment.
5. Verify repayment present in /api/repayments/list?loanId=<id> and loan status updated.
6. Check /api/health returns db and redis true.

## Load & performance
- Lighthouse CI configured to run in CI; remediate items with score < 0.9 for accessibility.

## Security
- Ensure all secrets set in Render dashboard: DATABASE_URL, REDIS_URL, MPESA keys, SUPABASE keys, OPENAI key, SENTRY_DSN.
- Remove mock-session fallback before production.

## Known limitations
- Some APIs are mocked for sandbox. Replace with live credentials for production.

