'use strict';

(() => {
  const toBase64 = (value) => {
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