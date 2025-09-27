-- 002_add_unique_constraint_payments.sql
-- Adds unique constraint on payments.checkout_request_id to enforce idempotency
ALTER TABLE IF EXISTS payments
  ADD CONSTRAINT IF NOT EXISTS unique_checkout_request UNIQUE (checkout_request_id);
