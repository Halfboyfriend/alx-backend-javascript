const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const testSinon = sinon.spy(console);
    const testDum = sinon.stub(Utils, 'calculateNumber')

    testDum.returns(10)
    sendPaymentRequestToApi(100, 20);
    expect(testDum.calledWith('SUM', 100, 20)).to.be.true;
    expect(testDum.callCount).to.be.equal(1);
    expect(testSinon.log.calledWith('The total is: 10')).to.be.true;
    expect(testSinon.log.callCount).to.be.equal(1);
    testDum.restore();
    testSinon.log.restore();
  });
});