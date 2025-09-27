#!/usr/bin/env bash
echo "Render deploy commands (run locally with Render CLI installed)"
echo "render login"
echo "render services create --name kechita-web --type web --env docker --repo <your-repo>"
echo "render services create --name kechita-worker --type worker --env docker --repo <your-repo>"
echo "render services update kechita-web --branch main --env-vars DATABASE_URL,REDIS_URL,OPENAI_API_KEY,SENTRY_DSN,MPESA_KEY,MPESA_SECRET,BASE_URL"
