'use strict';

(() => {
  // include dependencies
  const {singular} = require('pluralize');

  const toSingular = (value) => {
    return singular(value);
  }; // end toSingular

  // export toSingular as commonjs module
  module.exports = toSingular;
})(); // end IIFE