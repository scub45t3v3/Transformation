(function() {
  var toTokens, unit;

  unit = require('unit.js');

  toTokens = require('../toTokens');

  describe('#toTokens', function() {
    return it('should be a function', function() {
      unit.function(toTokens);
      return null;
    });
  });

}).call(this);
