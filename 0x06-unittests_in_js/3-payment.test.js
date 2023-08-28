const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const testSinon = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(testSinon.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(testSinon.calculateNumber.callCount).to.be.equal(1);
    testSinon.calculateNumber.restore();
  });
});