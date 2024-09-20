const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when a is 1.4 and b is 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    
    it('should return 0 when a is -1.4 and b is 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when a is 1.4 and b is 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    
    it('should return 0 when a is 1.5 and b is 1.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when a is 1.4 and b is 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    
    it('should return Error when b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    
    it('should return 1 when a is 5.5 and b is 5.5', () => {
      expect(calculateNumber('DIVIDE', 5.5, 5.5)).to.equal(1);
    });
  });
});
