(function() {
  /*
   * this is a direct passthrough to xml-js all tests should be preformed
   * on xml-js this is only included to test the passthrough is setup as expected
   */
  var toXML, unit;

  unit = require('unit.js');

  toXML = require('../toXML');

  describe('#toXML', function() {
    it('should be a function', function() {
      unit.function(toXML);
      return null;
    });
    return it('should return an xml string for an object', function() {
      var regex, test;
      test = {
        firstName: 'James',
        lastName: 'Bond',
        age: 55
      };
      regex = /^\s*<(firstName)>James<\/\1>\s*<(lastName)>Bond<\/\2>\s*<(age)>55<\/\3>\s*$/m;
      unit.string(toXML(test)).match(regex);
      return null;
    });
  });

}).call(this);
