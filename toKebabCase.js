'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toKebabCase');
const toString = require('./toString');

const toKebabCase = (value) => {
  debug('call:toKebabCase(%o)', value);

  return toString(value)
    .trim()
    .replace(/(?:\W|_)+/gm, '-')
    .replace(/([a-z])([A-Z])/gm, '$1-$2')
    .toLowerCase();
};

// export as commonjs module
module.exports = toKebabCase;