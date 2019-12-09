'use strict';

// include dependencies
const debug = require('debug')('@scuba-squad:transformation:toMD5');
const crypto = require('crypto');

const toMD5 = (value) => {
  debug('call:toMD5(%o)', value);

  if (!(value instanceof String || typeof value === 'string')) {
    value = JSON.stringify(value);
  }

  return crypto
    .createHash('md5')
    .update(value)
    .digest('hex');
};

// export as commonjs module
module.exports = toMD5;