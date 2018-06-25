(function() {
  var toWrap, unit;

  unit = require('unit.js');

  toWrap = require('../toWrap');

  describe('#toWrap', function() {
    it('should be a function', function() {
      unit.function(toWrap);
      return null;
    });
    it('should return a string of value when no options are provided', function() {
      unit.string(toWrap('hello')).is('hello').string(toWrap(/asd/i)).is('/asd/i').string(toWrap(Symbol('no'))).is('Symbol(no)');
      return null;
    });
    it('should return a string enclosing value with provided options', function() {
      unit.string(toWrap('hello', {
        start: '"',
        end: '?"'
      })).is('"hello?"').string(toWrap('tag', {
        start: '<',
        end: '>'
      })).is('<tag>').string(toWrap('find me', {
        start: '/',
        end: '/i'
      })).is('/find me/i').string(toWrap([1, 2, 3], {
        start: '[',
        end: ']'
      })).is('[1,2,3]').string(toWrap([1, 2, 3], {
        start: '(',
        end: ')'
      })).is('(1,2,3)');
      return null;
    });
    return it('should return a string enclosing value with option provided when only 1 is set', function() {
      unit.string(toWrap('hello', {
        start: '"'
      })).is('"hello"').string(toWrap('hello', {
        end: '/'
      })).is('/hello/').string(toWrap(true, {
        start: '-'
      })).is('-true-').string(toWrap('italics', {
        end: '*'
      })).is('*italics*');
      return null;
    });
  });

}).call(this);
