'use strict';

(() => {
  // include dependencies
  const _ = require('underscore');
  const currencies = require('./util/currencies');
  const diacritics = require('./util/diacritics');
  const symbols = require('./util/symbols');
  const toString = require('./toString');
  const charMap = _.extend({}, currencies, diacritics, symbols);

  const toSlug = (value) => {
    if (Array.isArray(value)) {
      value = value.join(' ');
    }

    return toString(value)
      .split('')
      .map((char) => {
        return charMap[char] || char;
      })
      .join('')
      .trim()
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/([a-z])([A-Z])/gm, '$1-$2')
      .replace(/[^\w.\-~!$&'()*+,;=':@%]+/, '');
  };

  // export toSlug as commonjs module
  module.exports = toSlug;
})(); // end IIFE