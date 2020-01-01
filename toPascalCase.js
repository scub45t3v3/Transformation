'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toPascalCase');
const toString = require('./toString');

const toPascalCase = (value) => {
  debug('call:toPascalCase(%o)', value);

  return toString(value)
    .trim()
    .replace(/(?:\W|_)+/gmu, '_')
    .replace(/^_+/u, '')
    .replace(/_+$/u, '')
    .replace(/_(?<char>.)/gmu, (match, char) => {
      return char && char.toUpperCase();
    })
    .replace(/^[a-z]/u, (match) => {
      return match && match.toUpperCase();
    });
}; // end toPascalCase

// export as commonjs module
module.exports = toPascalCase;