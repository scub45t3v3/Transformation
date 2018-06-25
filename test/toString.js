(function() {
  var toString, unit;

  unit = require('unit.js');

  toString = require('../toString');

  describe('#toString', function() {
    return it('should be a function', function() {
      unit.function(toString);
      return null;
    });
  });

}).call(this);
