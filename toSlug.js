'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toSlug');
const currencies = require('./util/currencies');
const diacritics = require('./util/diacritics');
const symbols = require('./util/symbols');
const toString = require('./toString');
const charMap = Object.assign({}, currencies, diacritics, symbols);

const toSlug = (value) => {
  debug('call:toSlug(%o)', value);

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
    .replace(/[\s_-]+/gu, '-')
    .replace(/^-+|-+$/gu, '')
    .replace(/(?<lower>[a-z])(?<upper>[A-Z])/gmu, '$1-$2')
    .replace(/[^\w.\-~!$&'()*+,;=':@%]+/u, '');
};

// export as commonjs module
module.exports = toSlug;