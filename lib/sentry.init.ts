import * as Sentry from '@sentry/node'

export function initSentry() {
  const dsn = process.env.SENTRY_DSN
  if(dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate: 0.1,
      environment: process.env.NODE_ENV || 'development'
    })
    console.log('Sentry initialized')
  } else {
    console.log('Sentry DSN not set; skipping Sentry init')
  }
}
export default Sentry
