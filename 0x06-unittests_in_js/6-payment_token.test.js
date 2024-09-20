const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('should return a promise resolved with { data: "Successful response from the API" } when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });
});
