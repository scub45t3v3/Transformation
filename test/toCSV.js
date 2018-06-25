(function() {
  /*
   * this is a direct passthrough to json2csv all tests should be preformed on
   * json2csv this is only included to test the passthrough is setup as expected
   */
  var toCSV, unit;

  unit = require('unit.js');

  toCSV = require('../toCSV');

  describe('#toCSV', function() {
    it('should be a function', function() {
      unit.function(toCSV);
      return null;
    });
    return it('should return a csv string for an object', function() {
      var regex, test;
      test = {
        firstName: 'James',
        lastName: 'Bond',
        age: 55
      };
      regex = /^\s*"firstName"\s*,\s*"lastName"\s*,\s*"age"\s*"James"\s*,\s*"Bond"\s*,\s*55\s*$/m;
      unit.string(toCSV(test)).match(regex);
      return null;
    });
  });

}).call(this);
