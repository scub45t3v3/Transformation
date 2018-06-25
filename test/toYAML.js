(function() {
  /*
   * this is a direct passthrough to js-yaml all tests should be preformed
   * on js-yaml this is only included to test the passthrough is setup as expected
   */
  var toYAML, unit;

  unit = require('unit.js');

  toYAML = require('../toYAML');

  describe('#toYAML', function() {
    it('should be a function', function() {
      unit.function(toYAML);
    });
    return it('should return a yaml string for an object', function() {
      var regex, test;
      test = {
        firstName: 'James',
        lastName: 'Bond',
        age: 55
      };
      regex = /^\s*firstName\s*:\s*James\s*\s*lastName\s*:\s*Bond\s*\s*age\s*:\s*55\s*$/m;
      unit.string(toYAML(test)).match(regex);
      return null;
    });
  });

}).call(this);
