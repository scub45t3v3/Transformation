(function() {
  var toSlug, unit;

  unit = require('unit.js');

  toSlug = require('../toSlug');

  describe('#toSlug', function() {
    it('should be a function', function() {
      unit.function(toSlug);
      return null;
    });
    it('should return a slug when given a string', function() {
      unit.string(toSlug('hello world')).is('hello-world').string(toSlug('helloWorld')).is('hello-World').string(toSlug('＄ vs €')).is('dollar-vs-euro');
      return null;
    });
    return it('should return a slug when given an array', function() {
      unit.string(toSlug(['hello', 'world'])).is('hello-world').string(toSlug(['＄', 'vs', '€'])).is('dollar-vs-euro');
      return null;
    });
  });

}).call(this);
