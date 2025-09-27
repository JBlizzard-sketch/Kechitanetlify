const { basicFraudCheck } = require('../services/fraudService')
test('detect suspicious phone', ()=>{ expect(basicFraudCheck({phone:'+254700000000', amount:100}).flagged).toBe(true) })
