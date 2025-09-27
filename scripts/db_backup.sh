#!/usr/bin/env bash
set -euo pipefail
TIMESTAMP=$(date -u +"%Y%m%dT%H%M%SZ")
OUT_FILE="kechita_db_${TIMESTAMP}.sql.gz"
echo "Backing up DATABASE_URL=${DATABASE_URL} to ${OUT_FILE}"
pg_dump $DATABASE_URL | gzip > /tmp/${OUT_FILE}
echo "Backup created /tmp/${OUT_FILE}"
# Upload to S3 compatible storage if configured
if [ -n "${S3_ENDPOINT:-}" ] && [ -n "${S3_BUCKET:-}" ]; then
  echo "Uploading to S3..."
  # Use aws cli configured with S3-compatible endpoint or s3cmd; placeholder
  echo "aws s3 cp /tmp/${OUT_FILE} s3://${S3_BUCKET}/${OUT_FILE} --endpoint-url ${S3_ENDPOINT}"
fi
echo "Done"
