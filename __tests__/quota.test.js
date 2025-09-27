test('quota check simple', async () => { const { checkAndIncrementUserQuota } = require('../services/quotaService'); expect(typeof checkAndIncrementUserQuota).toBe('function'); })
