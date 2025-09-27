# Runbooks

## Running migrations
- Apply SQL migrations in order using psql:
  psql $DATABASE_URL -f migrations/001_create_tables.sql
  psql $DATABASE_URL -f migrations/002_add_unique_constraint_payments.sql
  psql $DATABASE_URL -f migrations/003_inventory_referrals_accounting.sql
  psql $DATABASE_URL -f migrations/004_ai_usage.sql

## Rolling back
- Use pg_dump to snapshot and restore as needed.
- For schema rollbacks, create reverse migrations carefully.
