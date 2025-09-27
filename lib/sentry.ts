export function initSentry() {
  if(process.env.SENTRY_DSN) {
    // Note: Install @sentry/node in production to enable. This is a placeholder.
    console.log('Sentry enabled (placeholder)')
  }
}
