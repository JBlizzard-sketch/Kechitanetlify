const { calcMonthly } = require('../utils/finance')
test('monthly calc simple', () => {
  expect(calcMonthly(100000, 12, 12)).toBeGreaterThan(0)
})
