#!/usr/bin/env bash
set -euo pipefail
if [ -z "${1:-}" ]; then
  echo "Usage: $0 path/to/backup.sql.gz"
  exit 1
fi
FILE=$1
echo "Restoring ${FILE} to DATABASE_URL=${DATABASE_URL}"
gunzip -c ${FILE} | psql $DATABASE_URL
echo "Restore complete"
