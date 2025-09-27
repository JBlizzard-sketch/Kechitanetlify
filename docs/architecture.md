Kechita Architecture (ASCII)

                +--------+        +-------------+        +----------+
                | Client | <----> | Next.js App | <---->  | Postgres |
                +--------+        +-------------+        +----------+
                                      |   \
                                      |    \----> Redis (workers)
                                      |
                                      +----> External APIs (OpenAI, Daraja, HF)

Notes:
- Worker processes handle MPesa reconciliation and background jobs.
- AI requests pass through aiService which includes caching and provider fallback.
- All secrets must be stored in Render/GitHub secrets and never committed.
