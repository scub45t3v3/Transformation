'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toWords');
const toTokens = require('./toTokens');

const toWords = (value) => {
  debug('call:toWords(%o)', value);

  return toTokens(value, /[!?.:;]*[\s,]+/);
}; // end toWords

// export as commonjs module
module.exports = toWords;