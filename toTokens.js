'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toTokens');
const toString = require('./toString');

const toTokens = (value, delimiter = /\s+/u) => {
  debug('call:toTokens(%o, %o)', value, delimiter);

  return toString(value).split(delimiter);
}; // end toTokens

// export as commonjs module
module.exports = toTokens;