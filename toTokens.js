'use strict';

(() => {
  // include dependencies
  const toString = require('./toString');

  const toTokens = (value, delimiter = /\s+/) => {
    return toString(value).split(delimiter) || [];
  }; // end toTokens

  // expor toTokens as commonjs module
  module.exports = toTokens;
})(); // end IIFE