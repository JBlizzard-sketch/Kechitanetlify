# Caching Strategy
1. Response caching for Copilot outputs (Redis) with 30-minute TTL.
2. Token-level cache: store prompt -> token count mappings.
3. Edge caching for static content via CDN.
4. Consider using Next.js ISR for blog and marketing content.
