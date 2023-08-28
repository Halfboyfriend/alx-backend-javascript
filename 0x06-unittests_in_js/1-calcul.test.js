const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('Testing Calculations',() => {
    it('Calculates', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
})