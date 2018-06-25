(function() {
  var toListSerial, unit;

  unit = require('unit.js');

  toListSerial = require('../toListSerial');

  describe('#toListSerial', function() {
    it('should be a function', function() {
      unit.function(toListSerial);
      return null;
    });
    it('should return a string  of value if only 1 value is provided', function() {
      unit.string(toListSerial([1])).is('1').string(toListSerial('hi')).is('hi');
      return null;
    });
    it('should return a comma seperated list with "and" as the last seperator when called with default options', function() {
      unit.string(toListSerial([1, 2, 3])).is('1, 2, and 3').string(toListSerial(['big', 'tall'])).is('big, and tall');
      return null;
    });
    return it('should return a delimited list using provided options', function() {
      unit.string(toListSerial(['apples', 'oranges', 'bananas'], {
        delimiter: '; '
      })).is('apples; oranges; and bananas').string(toListSerial(['alpha', 'beta', 'rc', 'release'], {
        delimiter: '-',
        last: '>'
      })).is('alpha-beta-rc->release');
      return null;
    });
  });

}).call(this);
