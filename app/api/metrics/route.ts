import { NextResponse } from 'next/server'
// Simple Prometheus metrics endpoint exposing basic app metrics
export async function GET() {
  const metrics = []

  // Example metrics - in production these should be real counters/gauges
  metrics.push('# TYPE kechita_requests_total counter')
  metrics.push('kechita_requests_total 0')
  metrics.push('# TYPE kechita_loans_total gauge')
  metrics.push('kechita_loans_total 0')

  return new NextResponse(metrics.join('\n'), {
    status: 200,
    headers: { 'Content-Type': 'text/plain; version=0.0.4' }
  })
}
