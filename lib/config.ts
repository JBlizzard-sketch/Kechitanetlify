export const config = {
  databaseUrl: process.env.DATABASE_URL || '',
  redisUrl: process.env.REDIS_URL || process.env.REDIS || '',
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_SERVICE_ROLE || process.env.SUPABASE_ANON_KEY || '',
  openaiKey: process.env.OPENAI_API_KEY || '',
  hfKey: process.env.HF_API_KEY || '',
  localLlmUrl: process.env.LOCAL_LLM_URL || '',
  mpesa: {
    key: process.env.MPESA_KEY || '',
    secret: process.env.MPESA_SECRET || '',
    shortcode: process.env.MPESA_SHORTCODE || '',
    passkey: process.env.MPESA_PASSKEY || '',
    env: process.env.MPESA_ENV || 'sandbox'
  },
  baseUrl: process.env.BASE_URL || 'http://localhost:3000'
}
