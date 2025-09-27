const { scoreLoan } = require('../services/scoringService')
test('score small loan', async ()=>{ const r = await scoreLoan({ user:{id:'u1'}, amount:50000 }); expect(r.recommendation).toBe('approve') })
