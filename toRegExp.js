(function() {
  var REGEX, toRegExp, toString;

  toString = require('./toString');

  REGEX = /^([`~!@#$%^&*+=|\\?\/])(.+)\1([gimuy]*)$/;

  toRegExp = function(value) {
    var match;
    if (value instanceof RegExp) {
      return value;
    }
    match = toString(value).match(REGEX);
    if (!(match != null ? match[2] : void 0)) {
      throw new TypeError(`${value} can not be transformed to a RegExp`);
    }
    return new RegExp(match[2], match[3]);
  };

  module.exports = toRegExp;

}).call(this);
