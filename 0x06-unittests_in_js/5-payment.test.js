const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let testSimon;

    beforeEach(() => {
        if (!testSimon){
            testSimon = sinon.spy(console);
        }
    });

    afterEach(() => {
        testSimon.log.resetHistory()
    })


    it('Calls sendPaymentRequestToAPI with 100, 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(testSimon.log.calledWith('The total is: 120')).to.be.true;
        expect(testSimon.log.calledOnce).to.be.true
    });

    it('Calls sendPaymentRequestToAPI with 10, 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(testSimon.log.calledWith('The total is: 20')).to.be.true;
        expect(testSimon.log.calledOnce).to.be.true
    })
})
