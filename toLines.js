'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toLines');
const toTokens = require('./toTokens');

const toLines = (value) => {
  debug('call:toLines(%o)', value);

  return toTokens(value, /\r\n?|\n/gm);
};

// export as commonjs module
module.exports = toLines;