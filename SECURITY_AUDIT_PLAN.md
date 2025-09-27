# SECURITY_AUDIT_PLAN

Scope:
- Web application (Next.js), APIs, background workers, database, Redis, S3

Goals:
- Identify vulnerabilities (OWASP Top 10), secret leaks, misconfigurations
- Verify webhook and payment callback security (Daraja HMAC)
- Verify authentication and session management (Supabase/JWT)

Steps:
1. Static code analysis (Snyk / Semgrep)
2. Dependency vulnerability scan (npm audit, Snyk)
3. Dynamic application security testing (DAST)
4. Manual pentest focusing on payments, auth flows, file uploads
5. Report findings and remediate
