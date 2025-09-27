# AI Cost Optimization Strategies
1. Batching prompts: Combine multiple short prompts into a single call when possible.
2. Summarization cache: Store summaries of user history to reduce context tokens.
3. Response caching: Cache Copilot outputs for identical prompts for 30 minutes.
4. Use cheaper models for non-critical tasks (e.g., gpt-4o-mini vs gpt-4o).
5. Rate-limit and enforce quotas per user/IP.

# Helper: batch_copilot.js - example batching script
