# Incident Playbook

## Payment failure (MPesa)
1. Check worker logs and Sentry errors.
2. Check /api/metrics for queue backlog.
3. Manually reconcile payments via DB (payments table).
4. If Daraja sandbox/prod issues, verify credentials and callback endpoint.

## Database degraded
1. Promote read replica or failover if configured.
2. Restore from latest backup if needed.
3. Notify stakeholders and put site into maintenance mode.
