CREATE TABLE partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  website text,
  created_at timestamptz DEFAULT now()
);
