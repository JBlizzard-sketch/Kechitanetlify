test('copilot scoring template outputs string', () => {
  const { scoringPromptTemplate } = require('../services/copilotService')
  const out = scoringPromptTemplate({id:'u1', name:'Test'}, 50000, {note:'demo'})
  expect(typeof out).toBe('string')
})
