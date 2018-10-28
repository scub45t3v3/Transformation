'use strict';

(() => {
  // include dependencies
  const toTokens = require('./toTokens');

  const toWords = (value) => {
    return toTokens(value, /[!?.:;]*[\s,]+/);
  }; // end toWords

  // export toWords as commonjs module
  module.exports = toWords;
})(); // end IIFE