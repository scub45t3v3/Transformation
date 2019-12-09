'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toSnakeCase');
const toString = require('./toString');

const toSnakeCase = (value) => {
  debug('call:toSnakeCase(%o)', value);

  return toString(value)
    .trim()
    .replace(/(?:\W|_)+/gm, '_')
    .replace(/([a-z])([A-Z])/gm, '$1_$2')
    .toLowerCase();
}; // end toSnakeCase

// export as commonjs module
module.exports = toSnakeCase;