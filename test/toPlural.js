(function() {
  /*
   * this is a direct passthrough to pluralize all tests should be preformed on
   * pluralize this is only included to test the passthrough is setup as expected
   */
  var toPlural, unit;

  unit = require('unit.js');

  toPlural = require('../toPlural');

  describe('#toPlural', function() {
    it('should be a function', function() {
      unit.function(toPlural);
      return null;
    });
    return it('should return a plural version of a word', function() {
      unit.string(toPlural('table')).is('tables').string(toPlural('chair')).is('chairs').string(toPlural('car')).is('cars').string(toPlural('key')).is('keys');
      return null;
    });
  });

}).call(this);
