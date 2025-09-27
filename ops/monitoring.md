# Monitoring & Alerts

This document describes monitoring and alerting for Kechita Capital.

## Metrics
- /api/metrics exposes Prometheus-compatible metrics.
- Track request rate, error rate, payment failures, queue lengths.

## Alerts (examples)
- High error rate -> PagerDuty trigger
- STK callback failures -> Alert
- Worker queue backlog > 1000 -> Alert

## Integrations
- Sentry for error capture (SENTRY_DSN)
- Prometheus + Grafana for metrics
- PagerDuty (PAGERDUTY_KEY) for on-call
