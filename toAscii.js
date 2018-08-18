'use strict';

(() => {
  // include dependencies
  const currencies = require('./util/currencies');
  const diacritics = require('./util/diacritics');
  const symbols = require('./util/symbols');
  const toString = require('./toString');
  const charMap = Object.assign({}, currencies, diacritics, symbols);

  const toAscii = (value) => {
    if (Array.isArray(value)) {
      value = value.join(' ');
    }

    return toString(value)
      .split('')
      .map((char) => {
        if (char.codePointAt(0) > 128) {
          char = charMap[char] || '';
        }

        return char;
      })
      .join('');
  }; // end toAscii

  // export toAscii as commonjs module
  module.exports = toAscii;
})(); // end IIFE