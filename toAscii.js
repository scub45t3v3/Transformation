(function() {
  var _, charMap, currencies, diacritics, symbols, toAscii, toString;

  _ = require('underscore');

  currencies = require('./util/currencies');

  diacritics = require('./util/diacritics');

  symbols = require('./util/symbols');

  toString = require('./toString');

  charMap = _.extend({}, currencies, diacritics, symbols);

  toAscii = function(value) {
    var ref;
    if (Array.isArray(value)) {
      value = value.join(' ');
    }
    return (ref = toString(value)) != null ? ref.split('').map(function(char) {
      if (char.codePointAt(0) > 128) {
        char = charMap[char] || '';
      }
      return char;
    }).join('') : void 0;
  };

  module.exports = toAscii;

}).call(this);
