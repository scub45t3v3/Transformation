'use strict';

(() => {
  // include dependencies
  const toTokens = require('./toTokens');

  const toLines = (value) => {
    return toTokens(value, /\r\n?|\n/gm);
  };

  // export toLines as commonjs module
  module.exports = toLines;
})(); // end IIFE