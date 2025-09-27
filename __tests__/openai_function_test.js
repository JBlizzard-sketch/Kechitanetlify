jest.mock('openai', () => require('./mocks/openaiMock'))
const { callOpenAIFunction } = require('../lib/openaiClient')
test('openai function calling returns structure', async () => {
  const res = await callOpenAIFunction({ prompt: 'score this loan', functions: [] })
  expect(res.choices).toBeDefined()
})
