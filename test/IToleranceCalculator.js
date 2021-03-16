var assert = require('assert')
var expect = require('expect.js')

const calc = require('../utils/IOhmValueCalculator')


describe('IOhmValueCalculator', function() {
  describe('calculateTolerance', function() {
    it('should expect a number', function() {
      expect(calc.calculateTolerance('silver')).to.be.a('number');
    })

    it('should return 1 on brown Uppercase', function() {
        assert.strictEqual(calc.calculateTolerance('brown'), 1);
    });

    it('should return 2 on red Uppercase', function() {
        assert.strictEqual(calc.calculateTolerance('red'), 2);
    });

    it('should return 10 on Silver Uppercase', function() {
        assert.strictEqual(calc.calculateTolerance('SILVER'), 10);
    });

    it('should return 5 on gold Spaces start and end', function() {
        assert.strictEqual(calc.calculateTolerance(' GOLD '), 5);
    });


    it('should throw an error on number band D color', function() {
        expect(calc.calculateTolerance).withArgs(3).to.throwException(function(e) {
            expect(e.message).to.be('The Band D Color (3) is not on the list chart of colors');
        });
    });

    it('shold throw error on undefined on Band D color', function() {
        expect(calc.calculateTolerance).withArgs(undefined).to.throwException(function(e) {
            expect(e.message).to.be('The Band D Color () is not on the list chart of colors');
        });
    });

  });
});