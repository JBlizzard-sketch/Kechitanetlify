-- Phase5 initial schema
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone varchar(20) UNIQUE,
  email varchar(255),
  name varchar(255),
  role varchar(50) DEFAULT 'customer',
  kyc_status varchar(50) DEFAULT 'none',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE loans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  amount bigint NOT NULL,
  interest_rate float NOT NULL,
  term_months int NOT NULL,
  monthly_payment bigint NOT NULL,
  status varchar(50) DEFAULT 'draft',
  score jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE repayments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_id uuid REFERENCES loans(id) ON DELETE CASCADE,
  amount bigint NOT NULL,
  paid_at timestamptz,
  method varchar(50),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE audits (
  id bigserial PRIMARY KEY,
  entity_type text,
  entity_id uuid,
  action text,
  details jsonb,
  created_at timestamptz DEFAULT now()
);

-- payments table for STK pushes and others
CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  checkout_request_id text,
  loan_id uuid REFERENCES loans(id) NULL,
  phone varchar(20),
  amount bigint,
  status varchar(50) DEFAULT 'pending',
  raw jsonb,
  created_at timestamptz DEFAULT now()
);

-- sample user and loan for demo
INSERT INTO users (phone, email, name) VALUES ('+254700000000','demo@kechita.test','Demo User') ON CONFLICT (phone) DO NOTHING;

-- NOTE: Consider adding a unique constraint on payments.checkout_request_id to enforce idempotency in the DB.
-- ALTER TABLE payments ADD CONSTRAINT unique_checkout_request UNIQUE (checkout_request_id);
