'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toCamelCase');
const toString = require('./toString');

const toCamelCase = (value) => {
  debug('call:toCamelCase(%o)', value);

  return toString(value)
    .trim()
    .replace(/(?:\W|_)+/gmu, '_')
    .replace(/^_+/u, '')
    .replace(/_+$/u, '')
    .replace(/_(?<char>.)/gmu, (match, char) => {
      return char && char.toUpperCase();
    })
    .replace(/^[A-Z]/u, (match) => {
      return match && match.toLowerCase();
    });
}; // end toCamelCase

// export as commonjs module
module.exports = toCamelCase;