const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let stub;
  let consoleSpy;

  beforeEach(function () {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20 and log the total', function () {
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;

    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
  });
});
