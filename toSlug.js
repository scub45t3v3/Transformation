(function() {
  var _, charMap, currencies, diacritics, symbols, toSlug, toString;

  _ = require('underscore');

  currencies = require('./util/currencies');

  diacritics = require('./util/diacritics');

  symbols = require('./util/symbols');

  toString = require('./toString');

  charMap = _.extend({}, currencies, diacritics, symbols);

  toSlug = function(value) {
    var ref;
    if (Array.isArray(value)) {
      value = value.join(' ');
    }
    return (ref = toString(value)) != null ? ref.split('').map(function(char) {
      return charMap[char] || char;
    }).join('').trim().replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '').replace(/([a-z])([A-Z])/gm, '$1-$2').replace(/[^\w.\-~!$&'()*+,;=':@%]+/, '') : void 0;
  };

  module.exports = toSlug;

}).call(this);
