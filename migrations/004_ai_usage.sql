-- ai usage tracking
CREATE TABLE ai_usage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  prompt text,
  provider text,
  cost_cents int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);
