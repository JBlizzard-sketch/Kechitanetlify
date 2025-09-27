# API Docs (Phase 5)

Key endpoints:

- POST /api/auth/send-otp { phone }
- POST /api/auth/verify { phone, token }
- POST /api/loans/create { userId|userPhone, amount, term }
- GET  /api/loans/list
- POST /api/payments/mpesa/stk { phone, amount, loanId }
- POST /api/payments/mpesa/callback (Daraja callback)
- POST /api/ai/wrapper { prompt }
