'use strict';

(() => {
  // include dependencies
  const crypto = require('crypto');

  const toMD5 = (value) => {
    if (!(value instanceof String || typeof value === 'string')) {
      value = JSON.stringify(value);
    }

    return crypto
      .createHash('md5')
      .update(value)
      .digest('hex');
  };

  // export toMD5 as commonjs module
  module.exports = toMD5;
})(); // end IIFE