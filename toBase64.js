'use strict';

(() => {
  // include dependencies
  const debug = require('debug')('@scuba-squad:transformation:toBase64');

  const toBase64 = (value) => {
    debug('call:toBase64(%o)', value);

    if (!(value instanceof String || typeof value === 'string')) {
      value = JSON.stringify(value);
    }

    return Buffer
      .from(value)
      .toString('base64');
  };

  // export as commonjs module
  module.exports = toBase64;
})(); // end IIFE