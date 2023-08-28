const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('Testing Calculations',() => {
    it('Calculates', () => {
        assert.strictEqual(calculateNumber(1, 2), 3);
    })
})