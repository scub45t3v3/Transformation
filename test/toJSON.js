(function() {
  /*
   * this is a direct passthrough to JSON.stringify all tests should be preformed
   * on JSON.stringify this is only included to test the passthrough is setup as
   * expected
   */
  var toJSON, unit;

  unit = require('unit.js');

  toJSON = require('../toJSON');

  describe('#toJSON', function() {
    it('should be a function', function() {
      unit.function(toJSON);
      return null;
    });
    return it('should return a json string for an object', function() {
      var regex, test;
      test = {
        firstName: 'James',
        lastName: 'Bond',
        age: 55
      };
      regex = /^\s*{\s*"firstName"\s*:\s*"James"\s*,\s*"lastName"\s*:\s*"Bond"\s*,\s*"age"\s*:\s*55\s*}\s*$/m;
      unit.string(toJSON(test)).match(regex);
      return null;
    });
  });

}).call(this);
