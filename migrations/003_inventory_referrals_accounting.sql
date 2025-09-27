-- 003_inventory_referrals_accounting.sql
CREATE TABLE inventories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  name text NOT NULL,
  sku text,
  quantity int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id uuid REFERENCES users(id),
  referee_phone varchar(20),
  code text,
  reward_amount bigint DEFAULT 0,
  status varchar(20) DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE accounting_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  type varchar(20), -- income/expense
  amount bigint,
  description text,
  created_at timestamptz DEFAULT now()
);
