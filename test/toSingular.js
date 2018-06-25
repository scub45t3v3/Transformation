(function() {
  /*
   * this is a direct passthrough to pluralize all tests should be preformed on
   * pluralize this is only included to test the passthrough is setup as expected
   */
  var toSingular, unit;

  unit = require('unit.js');

  toSingular = require('../toSingular');

  describe('#toSingular', function() {
    it('should be a function', function() {
      unit.function(toSingular);
      return null;
    });
    return it('should return a singular version of a word', function() {
      unit.string(toSingular('tables')).is('table').string(toSingular('chairs')).is('chair').string(toSingular('cars')).is('car').string(toSingular('keys')).is('key');
      return null;
    });
  });

}).call(this);
