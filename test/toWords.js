(function() {
  var toWords, unit;

  unit = require('unit.js');

  toWords = require('../toWords');

  describe('#toWords', function() {
    it('should be a function', function() {
      unit.function(toWords);
      return null;
    });
    return it('should return an array of words in a string', function() {
      unit.array(toWords('hello world!')).is(['hello', 'world!']).array(toWords('123 Main St.')).is(['123', 'Main', 'St.']).array(toWords('this is $1.00')).is(['this', 'is', '$1.00']).array(toWords('a,b,c')).is(['a', 'b', 'c']).array(toWords('fruit: apples, oranges, bananas')).is(['fruit:', 'apples', 'oranges', 'bananas']).array(toWords('one')).is(['one']).array(toWords('')).is(['']);
      return null;
    });
  });

}).call(this);
