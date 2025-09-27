test('parser fallback', () => {
  const { parseAiScoringResponse } = require('../services/copilotParser')
  const r = parseAiScoringResponse('{"recommendation":"approve","score":90,"reasons":["fast"]}', 50000)
  expect(r.recommendation).toBe('approve')
})
