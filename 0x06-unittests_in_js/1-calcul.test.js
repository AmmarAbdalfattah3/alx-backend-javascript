const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when a is 1.4 and b is 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    
    it('should return 0 when a is -1.4 and b is 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when a is 1.4 and b is 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    
    it('should return 0 when a is 1.5 and b is 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when a is 1.4 and b is 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    
    it('should return Error when b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    
    it('should return 1 when a is 5.5 and b is 5.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 5.5), 1);
    });
  });
});
