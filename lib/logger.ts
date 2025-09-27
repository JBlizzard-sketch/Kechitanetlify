export function log(...args: any[]) {
  if (process.env.NODE_ENV !== 'test') {
    console.log('[kechita]', ...args)
  }
}
export function error(...args: any[]) {
  console.error('[kechita]', ...args)
}
