(function() {
  var toRegExp, unit;

  unit = require('unit.js');

  toRegExp = require('../toRegExp');

  describe('#toRegExp', function() {
    it('should be a function', function() {
      unit.function(toRegExp);
      return null;
    });
    it('should return a RegExp when given a RegExp object', function() {
      unit.regexp(toRegExp(/asd/i)).is(/asd/i).regexp(toRegExp(new RegExp('^hello', 'i'))).is(/^hello/i).regexp(toRegExp(/^\d+$/)).is(/^\d+$/);
      return null;
    });
    it('should return a RegExp object when given a serialized pcre string', function() {
      unit.regexp(toRegExp('/asd/i')).is(/asd/i).regexp(toRegExp('%^hello%i')).is(/^hello/i).regexp(toRegExp('|\\d+|g')).is(/\d+/g);
      return null;
    });
    return it('should throw an error when given a non-serilized pcre string', function() {
      unit.error(function() {
        return toRegExp('hello');
      }).error(function() {
        return toRegExp('/asd|i');
      }).error(function() {
        return toRegExp('/asd/t');
      });
      return null;
    });
  });

}).call(this);
